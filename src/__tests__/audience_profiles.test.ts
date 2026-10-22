import { describe, it, expect } from 'vitest';
import { audienceProfiles, audienceToJourneyStage, type AudienceProfileId } from '../data/audienceProfiles';
import { headerNavSections } from '../data/headerTopics';

describe('Camada de Perfis de Publico', () => {
  const allHrefs = new Set(
    headerNavSections.flatMap((section) => section.topics.map((topic) => topic.href))
  );

  it('deve conter os quatro perfis com ids corretos', () => {
    const ids = audienceProfiles.map((profile) => profile.id);
    const expected: AudienceProfileId[] = ['futuro-ingressante', 'calouro', 'aluno-regular', 'formando'];
    expected.forEach((id) => {
      expect(ids).toContain(id);
    });
    expect(audienceProfiles.length).toBe(4);
  });

  it('cada perfil deve ter ao menos uma ancora cujo href casa com headerNavSections', () => {
    audienceProfiles.forEach((profile) => {
      expect(profile.anchors.length).toBeGreaterThanOrEqual(1);
      const hasMatch = profile.anchors.some((anchor) => allHrefs.has(anchor.href));
      expect(hasMatch).toBe(true);
    });
  });

  it('audienceToJourneyStage deve retornar null para futuro-ingressante e estagios corretos para os demais', () => {
    expect(audienceToJourneyStage('futuro-ingressante')).toBeNull();
    expect(audienceToJourneyStage('calouro')).toBe('calouro');
    expect(audienceToJourneyStage('aluno-regular')).toBe('meio');
    expect(audienceToJourneyStage('formando')).toBe('formando');
  });
});

describe('Conformidade com ADR 0001 nos perfis de publico', () => {
  const forbiddenPunctuation = /[—–]/;
  const parenthesesPattern = /[()]/;
  const emojiPattern = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

  it('labels e summaries nao devem conter travessao, parenteses ou emoji', () => {
    audienceProfiles.forEach((profile) => {
      expect(profile.label).not.toMatch(forbiddenPunctuation);
      expect(profile.label).not.toMatch(parenthesesPattern);
      expect(profile.label).not.toMatch(emojiPattern);

      expect(profile.summary).not.toMatch(forbiddenPunctuation);
      expect(profile.summary).not.toMatch(parenthesesPattern);
      expect(profile.summary).not.toMatch(emojiPattern);

      expect(profile.themeAxis).not.toMatch(forbiddenPunctuation);
      expect(profile.themeAxis).not.toMatch(parenthesesPattern);
      expect(profile.themeAxis).not.toMatch(emojiPattern);
    });
  });
});
