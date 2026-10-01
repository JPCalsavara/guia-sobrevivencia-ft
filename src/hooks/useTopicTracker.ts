'use client';

import { useEffect, useRef, useCallback } from 'react';

export interface UseTopicTrackerOptions {
  topicId: string;
  topicTitle: string;
  minDwellSeconds?: number;
}

export function useTopicTracker({
  topicId,
  topicTitle,
  minDwellSeconds = 2,
}: UseTopicTrackerOptions) {
  const elementRef = useRef<HTMLElement | null>(null);
  const visibleStartTimeRef = useRef<number | null>(null);
  const totalDwellSecondsRef = useRef<number>(0);
  const interactedRef = useRef<boolean>(false);
  const interactionTypeRef = useRef<string | undefined>(undefined);
  const hasSentRef = useRef<boolean>(false);

  const calculateScrollDepth = useCallback(() => {
    if (typeof window === 'undefined') return 0;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const docHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight
    );
    if (docHeight <= windowHeight) return 100;
    return Math.min(100, Math.round(((scrollTop + windowHeight) / docHeight) * 100));
  }, []);

  const sendTelemetry = useCallback(
    (forcedInteracted?: boolean, forcedType?: string) => {
      if (typeof window === 'undefined') return;

      const isMobile = window.innerWidth <= 768 || /Android|iPhone|iPad/i.test(navigator.userAgent);
      const scrollDepth = calculateScrollDepth();
      const dwellSeconds = Math.round(totalDwellSecondsRef.current);
      const didInteract = forcedInteracted ?? interactedRef.current;
      const type = forcedType ?? interactionTypeRef.current;

      if (dwellSeconds < minDwellSeconds && !didInteract) {
        return;
      }

      const payload = {
        topicId,
        topicTitle,
        dwellTimeSeconds: dwellSeconds,
        isMobile,
        scrollDepthPct: scrollDepth,
        interacted: didInteract,
        interactionType: type,
        timestamp: new Date().toISOString(),
      };

      const payloadBlob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
      if (navigator.sendBeacon) {
        navigator.sendBeacon('/api/telemetry', payloadBlob);
      } else {
        fetch('/api/telemetry', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true,
        }).catch(() => {});
      }

      hasSentRef.current = true;
    },
    [topicId, topicTitle, minDwellSeconds, calculateScrollDepth]
  );

  const recordInteraction = useCallback(
    (interactionType = 'click') => {
      interactedRef.current = true;
      interactionTypeRef.current = interactionType;
      sendTelemetry(true, interactionType);
    },
    [sendTelemetry]
  );

  useEffect(() => {
    const targetElement = elementRef.current;
    if (!targetElement || typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleStartTimeRef.current = Date.now();
          } else if (visibleStartTimeRef.current) {
            const duration = (Date.now() - visibleStartTimeRef.current) / 1000;
            totalDwellSecondsRef.current += duration;
            visibleStartTimeRef.current = null;
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(targetElement);

    const handleBeforeUnload = () => {
      if (visibleStartTimeRef.current) {
        const duration = (Date.now() - visibleStartTimeRef.current) / 1000;
        totalDwellSecondsRef.current += duration;
        visibleStartTimeRef.current = null;
      }
      if (!hasSentRef.current) {
        sendTelemetry();
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      observer.disconnect();
      window.removeEventListener('beforeunload', handleBeforeUnload);
      if (visibleStartTimeRef.current) {
        const duration = (Date.now() - visibleStartTimeRef.current) / 1000;
        totalDwellSecondsRef.current += duration;
        visibleStartTimeRef.current = null;
      }
      if (!hasSentRef.current && totalDwellSecondsRef.current >= minDwellSeconds) {
        sendTelemetry();
      }
    };
  }, [minDwellSeconds, sendTelemetry]);

  return {
    ref: elementRef,
    recordInteraction,
  };
}
