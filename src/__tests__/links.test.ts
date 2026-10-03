import { describe, it, expect } from 'vitest';
import { linksData, LinkCategory } from '../data/links';

describe('Catalogo de Links e Recursos', () => {
  it('deve conter links cadastrados com campos obrigatorios preenchidos', () => {
    expect(linksData.length).toBeGreaterThan(15);
    linksData.forEach((link) => {
      expect(link.id).toBeTruthy();
      expect(link.title).toBeTruthy();
      expect(link.description).toBeTruthy();
      expect(link.url).toMatch(/^https?:\/\//);
      expect(link.category).toBeTruthy();
    });
  });

  it('deve contemplar todas as nove categorias tematicas', () => {
    const expectedCategories: LinkCategory[] = [
      'alimentacao',
      'transporte',
      'matricula',
      'aulas',
      'intercambio',
      'iniciacao-cientifica',
      'permanencia',
      'organizacoes',
      'carreira-tecnologia'
    ];

    const presentCategories = new Set(linksData.map((l) => l.category));
    expectedCategories.forEach((cat) => {
      expect(presentCategories.has(cat)).toBe(true);
    });
  });

  it('deve conter links essenciais de alimentacao, carteirinha e transporte', () => {
    const intercamp = linksData.find((l) => l.id === 'intercamp-info');
    const circular = linksData.find((l) => l.id === 'circular-info');
    const ru = linksData.find((l) => l.id === 'ru-cardapio');
    const appServicos = linksData.find((l) => l.id === 'app-servicos-unicamp');
    const recargaPix = linksData.find((l) => l.id === 'recarga-ru-funcamp');
    const souLimeira = linksData.find((l) => l.id === 'sou-limeira-transporte');

    expect(intercamp).toBeDefined();
    expect(circular).toBeDefined();
    expect(ru).toBeDefined();
    expect(appServicos).toBeDefined();
    expect(recargaPix).toBeDefined();
    expect(souLimeira).toBeDefined();
  });

  it('deve conter links de matricula, caderno de horarios, moodle e classroom', () => {
    const duvidasLink = linksData.find((l) => l.id === 'duvidas-frequentes-ft');
    const cadernoLink = linksData.find((l) => l.id === 'dac-caderno-horarios');
    const moodleLink = linksData.find((l) => l.id === 'moodle-unicamp');
    const classroomLink = linksData.find((l) => l.id === 'google-classroom-unicamp');

    expect(duvidasLink).toBeDefined();
    expect(cadernoLink).toBeDefined();
    expect(moodleLink).toBeDefined();
    expect(classroomLink).toBeDefined();
  });

  it('deve conter links de intercambio DERI e iniciacao cientifica PIBIC e FAPESP', () => {
    const deri = linksData.find((l) => l.id === 'deri-intercambio');
    const pibic = linksData.find((l) => l.id === 'prp-pibic');
    const fapesp = linksData.find((l) => l.id === 'fapesp-sage');

    expect(deri).toBeDefined();
    expect(pibic).toBeDefined();
    expect(fapesp).toBeDefined();
  });

  it('deve conter link da carteirinha digital COTIL e link da AUPE Unicamp', () => {
    const carteirinhaCotil = linksData.find((l) => l.id === 'carteirinha-digital-cotil');
    const aupeLink = linksData.find((l) => l.id === 'aupe-unicamp-link');

    expect(carteirinhaCotil).toBeDefined();
    expect(carteirinhaCotil?.category).toBe('alimentacao');
    expect(carteirinhaCotil?.url).toBe('https://www.cotil.unicamp.br/servicos_digitais/carteirinha-digital-unicamp/');

    expect(aupeLink).toBeDefined();
    expect(aupeLink?.category).toBe('organizacoes');
    expect(aupeLink?.url).toBe('https://www.instagram.com/aupe.unicamp/');

    const nexusLink = linksData.find((l) => l.id === 'nexus-girls-unicamp-link');
    expect(nexusLink).toBeDefined();
    expect(nexusLink?.category).toBe('organizacoes');
    expect(nexusLink?.url).toBe('https://www.instagram.com/nexus.girls_unicamp/');

    const kipperGitLink = linksData.find((l) => l.id === 'video-kipper-git-github');
    expect(kipperGitLink).toBeDefined();
    expect(kipperGitLink?.category).toBe('carreira-tecnologia');
    expect(kipperGitLink?.url).toContain('pyM5QLS2h6M');
  });

  it('deve conter programas de estagio estruturados Agibank, Nubank, CI e T, Itau e BTG', () => {
    const agibank = linksData.find((l) => l.id === 'estagio-agibank');
    const nubank = linksData.find((l) => l.id === 'estagio-nubank');
    const ciandt = linksData.find((l) => l.id === 'estagio-ciandt');
    const itau = linksData.find((l) => l.id === 'estagio-itau');
    const btg = linksData.find((l) => l.id === 'estagio-verao-btg');

    expect(agibank).toBeDefined();
    expect(agibank?.url).toBe('https://carreiras.agibank.com.br/estagio');

    expect(nubank).toBeDefined();
    expect(nubank?.url).toBe('https://estagio.nubank.com.br/');

    expect(ciandt).toBeDefined();
    expect(ciandt?.url).toBe('https://ciandt.com/br/pt-br/carreiras/programa-de-estagio');

    expect(itau).toBeDefined();
    expect(itau?.url).toContain('itau.com.br');

    expect(btg).toBeDefined();
    expect(btg?.url).toBe('https://conteudo.btgpactual.com/estagio-de-ferias');
  });

  it('deve conter recursos oficiais de ciberseguranca e curadoria de Brenno M', () => {
    const desec = linksData.find((l) => l.id === 'desec-security');
    const portswigger = linksData.find((l) => l.id === 'portswigger-academy');
    const brenno = linksData.find((l) => l.id === 'brenno-artigos-hacking');

    expect(desec).toBeDefined();
    expect(desec?.category).toBe('carreira-tecnologia');
    expect(portswigger).toBeDefined();
    expect(brenno).toBeDefined();
    expect(brenno?.url).toContain('brennocm.github.io');
  });
});

