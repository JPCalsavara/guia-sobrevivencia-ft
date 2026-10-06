import { describe, it, expect } from 'vitest';
import { careerVideosData } from '@/data/careerExpanded';
import { linksData } from '@/data/links';

describe('Career Expanded Data Integration', () => {
  it('should map all careerVideosData to linksData correctly', () => {
    careerVideosData.forEach((video) => {
      const linkId = `video-${video.id}`;
      const foundLink = linksData.find((l) => l.id === linkId);
      if (!foundLink) console.log('MISSING:', linkId);
      expect(foundLink).toBeDefined();
      expect(foundLink?.url).toBe(video.url);
    });
  });
});
