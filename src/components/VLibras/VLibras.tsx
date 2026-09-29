'use client';

import React, { useEffect } from 'react';

interface VLibrasProps {
  enabled: boolean;
}

export function VLibras({ enabled }: VLibrasProps) {
  useEffect(() => {
    if (!enabled) return;

    const existingScript = document.getElementById('vlibras-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'vlibras-script';
      script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
      script.async = true;
      script.onload = () => {
        const win = window as unknown as { VLibras?: { Widget: new (url: string) => void } };
        if (win.VLibras) {
          new win.VLibras.Widget('https://vlibras.gov.br/app');
        }
      };
      document.body.appendChild(script);
    } else {
      const win = window as unknown as { VLibras?: { Widget: new (url: string) => void } };
      if (win.VLibras) {
        new win.VLibras.Widget('https://vlibras.gov.br/app');
      }
    }
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      dangerouslySetInnerHTML={{
        __html: `
          <div vw="true" class="enabled">
            <div vw-access-button="true" class="active"></div>
            <div vw-plugin-wrapper="true">
              <div class="vw-plugin-top-wrapper"></div>
            </div>
          </div>
        `,
      }}
    />
  );
}
