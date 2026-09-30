import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { linksData } from '../data/links';

describe('Guia do Calouro da Faculdade de Tecnologia', () => {
  const calourosFilePath = path.resolve(process.cwd(), 'src/app/calouros/page.tsx');
  const calourosFileContent = fs.readFileSync(calourosFilePath, 'utf8');

  const forbiddenPunctuation = /[—–]/;
  const parenthesesPattern = /[()]/;
  const emojiPattern = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

  it('o arquivo da pagina de calouros deve existir e ter conteudo', () => {
    expect(fs.existsSync(calourosFilePath)).toBe(true);
    expect(calourosFileContent.length).toBeGreaterThan(1000);
  });

  it('a pagina de calouros nao deve conter travessoes nem emojis', () => {
    expect(calourosFileContent).not.toMatch(forbiddenPunctuation);
    expect(calourosFileContent).not.toMatch(emojiPattern);
  });

  it('os textos visiveis e rotulos da pagina de calouros devem respeitar estritamente o ADR 0001 sem parenteses', () => {
    const textNodes = calourosFileContent.match(/>([^<{}]+)</g) || [];
    textNodes.forEach((node) => {
      const text = node.slice(1, -1).trim();
      if (text) {
        expect(text).not.toMatch(forbiddenPunctuation);
        expect(text).not.toMatch(parenthesesPattern);
        expect(text).not.toMatch(emojiPattern);
      }
    });

    const attrMatches = calourosFileContent.match(/(?:title|aria-label)=["']([^"']+)["']/g) || [];
    attrMatches.forEach((attr) => {
      expect(attr).not.toMatch(forbiddenPunctuation);
      expect(attr).not.toMatch(parenthesesPattern);
      expect(attr).not.toMatch(emojiPattern);
    });
  });

  it('deve conter as secoes e ancoras essenciais do onboarding', () => {
    const essentialSections = [
      'acabei-de-passar',
      'unicamp-limeira-ft',
      'calourada-recepcao',
      'salas-aulas-ft',
      'ambientes-estudo',
      'bandejao-recarga',
      'transporte-circular',
      'apoio-monitorias-pmu',
      'bolsas-sociais-deape',
      'organizacoes-e-ic',
      'beneficios-tecnologia'
    ];

    essentialSections.forEach((sectionId) => {
      expect(calourosFileContent).toContain(`id="${sectionId}"`);
    });
  });

  it('deve especificar com clareza as siglas de locais de aulas PAs, SAs e LPs', () => {
    expect(calourosFileContent).toContain('PAs');
    expect(calourosFileContent).toContain('SAs');
    expect(calourosFileContent).toContain('LPs');
    expect(calourosFileContent).toContain('Prédios Anfiteatros');
    expect(calourosFileContent).toContain('Salas Menores de Aula Teórica');
    expect(calourosFileContent).toContain('Laboratórios de Programação');
  });

  it('deve conter referencias cruzadas ricas entre paginas e secoes do guia', () => {
    // Referencia cruzada para Iniciacao Cientifica no modulo academico
    expect(calourosFileContent).toContain('/academico#iniciacao-cientifica');

    // Referencia cruzada para Monitorias PAD no modulo academico
    expect(calourosFileContent).toContain('/academico#monitoria-pad');

    // Referencia cruzada para Bolsas Sociais no modulo academico
    expect(calourosFileContent).toContain('/academico#bolsas-permanencia-deape');

    // Referencia cruzada para Entidades Estudantis na pagina campus
    expect(calourosFileContent).toContain('/campus#entidades-estudantis');

    // Referencia cruzada para Nuvem e AWS na pagina carreira
    expect(calourosFileContent).toContain('/carreira#computacao-nuvem');

    // Referencias cruzadas para categorias dos Links Uteis
    expect(calourosFileContent).toContain('/links#categoria-matricula');
    expect(calourosFileContent).toContain('/links#categoria-aulas');
    expect(calourosFileContent).toContain('/links#categoria-alimentacao');
    expect(calourosFileContent).toContain('/links#categoria-transporte');
    expect(calourosFileContent).toContain('/links#categoria-permanencia');
  });

  it('deve referenciar canonicamente servicos oficiais e parceiros no Guia do Calouro e Academico', () => {
    expect(calourosFileContent).toContain('deape.unicamp.br');
    expect(calourosFileContent).toContain('sistemas.ft.unicamp.br');
    expect(calourosFileContent).toContain('bit.ly/4w1pxMi');

    const campusFileContent = fs.readFileSync(path.resolve(process.cwd(), 'src/app/campus/page.tsx'), 'utf8');
    expect(campusFileContent).toContain('prefeituralimeira.unicamp.br');

    const academicoFileContent = fs.readFileSync(path.resolve(process.cwd(), 'src/app/academico/page.tsx'), 'utf8');
    expect(academicoFileContent).toContain('internationaloffice.unicamp.br');
  });

  it('deve incluir o mapa ilustrado do campus da FT e o PDF dos horarios do circular', () => {
    expect(calourosFileContent).toContain('/images/mapa-campus-ft.png');
    expect(calourosFileContent).toContain('/images/horarios-circular.pdf');
  });

  it('deve orientar sobre a Carteirinha Digital com tutorial do Cotil e validacao no totem', () => {
    expect(calourosFileContent).toContain('cotil.unicamp.br/servicos_digitais/carteirinha-digital-unicamp');
    expect(calourosFileContent).toContain('totem validador');
  });

  it('deve conter links cadastrados no linksData para novas fontes oficiais', () => {
    const expectedLinkIds = [
      'pmu-deape',
      'deape-bas-social',
      'deape-editais-bolsas',
      'deri-projeto-ingresso',
      'deri-dicas-orientacoes',
      'aws-builder-center',
      'app-servicos-unicamp',
      'carteirinha-digital-cotil',
      'recarga-ru-funcamp',
      'sou-limeira-transporte',
      'google-classroom-unicamp',
      'semeia-code-site',
      'marsha-pelo-orgulho-link',
      'robocamp-ft-link'
    ];

    expectedLinkIds.forEach((id) => {
      const found = linksData.find((l) => l.id === id);
      expect(found).toBeDefined();
      expect(found?.url).toBeTruthy();
    });
  });

  it('nao deve violar o ADR 0004 com horarios fixos ou cardapios hardcoded', () => {
    expect(calourosFileContent).not.toMatch(/onze às catorze/i);
    expect(calourosFileContent).not.toMatch(/dezessete e trinta/i);
  });
});
