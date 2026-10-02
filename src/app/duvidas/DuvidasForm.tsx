'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, MessageSquare, ExternalLink, HelpCircle } from 'lucide-react';
import styles from './duvidas.module.scss';

export function DuvidasForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [categoria, setCategoria] = useState('Geral');
  const [pergunta, setPergunta] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [erro, setErro] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !pergunta.trim()) {
      setErro('Por favor preencha seu e-mail de contato e detalhe sua dúvida com clareza.');
      return;
    }
    if (pergunta.trim().length < 10) {
      setErro('A descrição da sua dúvida deve conter ao menos dez caracteres.');
      return;
    }

    setErro('');
    setSubmitted(true);
  };

  const emailDestino = 'j197837@dac.unicamp.br';
  const assuntoMailto = encodeURIComponent(`Duvida Guia FT: [${categoria}] de ${nome || 'Estudante'}`);
  const corpoMailto = encodeURIComponent(
    `Ola mantenedores do Guia FT,\n\nNome: ${nome || 'Estudante da Unicamp'}\nEmail para resposta: ${email}\nCategoria: ${categoria}\n\nMinha duvida:\n${pergunta}\n\nEnviado a partir do Portal de Duvidas do Guia FT.`
  );
  const mailtoUrl = `mailto:${emailDestino}?subject=${assuntoMailto}&body=${corpoMailto}`;

  const mensagemWhatsApp = encodeURIComponent(
    `Ola, equipe do Guia FT. Gostaria de tirar uma duvida sobre ${categoria}:\n\n"${pergunta}"\n\nNome: ${nome || 'Estudante'}\nEmail: ${email}`
  );
  const whatsappUrl = `https://wa.me/?text=${mensagemWhatsApp}`;

  const handleReset = () => {
    setNome('');
    setEmail('');
    setCategoria('Geral');
    setPergunta('');
    setSubmitted(false);
    setErro('');
  };

  return (
    <section id="mandar-duvida" className={styles.formSection} aria-labelledby="form-duvidas-title">
      <div className={styles.formHeader}>
        <div className={styles.formIconWrapper}>
          <HelpCircle size={24} className={styles.formIcon} aria-hidden="true" />
        </div>
        <div>
          <h2 id="form-duvidas-title" className={styles.formTitle}>
            Não Encontrou Sua Resposta? Mande Sua Dúvida
          </h2>
          <p className={styles.formSubtitle}>
            Preencha os campos abaixo para registrar sua pergunta. O time de mantenedores analisa as dúvidas, responde diretamente ao seu e-mail e incorpora as respostas mais frequentes neste portal para ajudar toda a comunidade da FT.
          </p>
        </div>
      </div>

      {submitted ? (
        <div className={styles.successCard} role="status">
          <CheckCircle2 size={36} className={styles.successIcon} aria-hidden="true" />
          <h3 className={styles.successTitle}>Dúvida Registrada com Sucesso</h3>
          <p className={styles.successDesc}>
            Obrigado pelo envio. Para garantir agilidade no atendimento, você também pode disparar sua pergunta agora mesmo diretamente para o canal dos mantenedores discentes:
          </p>
          <div className={styles.successActions}>
            <a
              href={mailtoUrl}
              className={styles.primaryActionBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={16} aria-hidden="true" />
              <span>Disparar por E-mail Institucional</span>
            </a>
            <a
              href={whatsappUrl}
              className={styles.secondaryActionBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare size={16} aria-hidden="true" />
              <span>Enviar via WhatsApp</span>
            </a>
          </div>
          <button
            type="button"
            onClick={handleReset}
            className={styles.resetBtn}
          >
            Enviar outra pergunta
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form} noValidate>
          {erro && (
            <div className={styles.errorAlert} role="alert">
              <span>{erro}</span>
            </div>
          )}

          <div className={styles.formGrid}>
            <div className={styles.fieldGroup}>
              <label htmlFor="duvida-nome" className={styles.label}>
                Seu Nome ou Apelido
                <span className={styles.optionalBadge}>Opcional</span>
              </label>
              <input
                id="duvida-nome"
                type="text"
                className={styles.input}
                placeholder="Exemplo: Maria Silva"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="duvida-email" className={styles.label}>
                Seu E-mail para Resposta
                <span className={styles.requiredBadge}>Obrigatório</span>
              </label>
              <input
                id="duvida-email"
                type="email"
                required
                className={styles.input}
                placeholder="Exemplo: seu.email@dac.unicamp.br"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="duvida-categoria" className={styles.label}>
              Categoria do Assunto
            </label>
            <select
              id="duvida-categoria"
              className={styles.select}
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="Matrícula e DAC">Matrícula e Sistemas DAC</option>
              <option value="Acadêmico e Disciplinas">Acadêmico, BSI e TADS</option>
              <option value="Campus e Bandejão">Campus, RU e Circulares</option>
              <option value="Estágio e Carreira">Estágio, Emprego e Formatura</option>
              <option value="Moradia e Repúblicas">Moradia Estudantil e Limeira</option>
              <option value="Outro Assunto">Outro Assunto Geral</option>
            </select>
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="duvida-pergunta" className={styles.label}>
              Descreva Sua Dúvida em Detalhes
              <span className={styles.requiredBadge}>Obrigatório</span>
            </label>
            <textarea
              id="duvida-pergunta"
              required
              rows={4}
              className={styles.textarea}
              placeholder="Explique sua dúvida, o semestre em que você se encontra ou a situação específica..."
              value={pergunta}
              onChange={(e) => setPergunta(e.target.value)}
            />
          </div>

          <div className={styles.formFooter}>
            <p className={styles.privacyNotice}>
              Seus dados de contato são utilizados exclusivamente para responder a esta solicitação. Nenhuma informação pessoal é compartilhada com terceiros.
            </p>
            <button type="submit" className={styles.submitBtn}>
              <Send size={16} aria-hidden="true" />
              <span>Enviar Dúvida para a Equipe</span>
            </button>
          </div>
        </form>
      )}

      <div className={styles.directSupportBox}>
        <h3 className={styles.directSupportTitle}>Canais Diretos de Atendimento</h3>
        <p className={styles.directSupportDesc}>
          Se você prefere contato imediato em tempo real, utilize um dos canais oficiais dos mantenedores e coordenadorias da Faculdade de Tecnologia:
        </p>
        <div className={styles.directSupportGrid}>
          <div className={styles.channelCard}>
            <Mail size={18} className={styles.channelIcon} aria-hidden="true" />
            <div>
              <strong className={styles.channelTitle}>Google Chat Institucional</strong>
              <p className={styles.channelInfo}>
                Mensagem direta para <code>j197837@dac.unicamp.br</code>
              </p>
            </div>
          </div>
          <div className={styles.channelCard}>
            <ExternalLink size={18} className={styles.channelIcon} aria-hidden="true" />
            <div>
              <strong className={styles.channelTitle}>Secretaria de Graduação da FT</strong>
              <p className={styles.channelInfo}>
                Atendimento presencial no Bloco PA e e-mail oficial de graduação
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
