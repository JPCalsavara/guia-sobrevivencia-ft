'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { muralCategories } from '@/data/mural';
import { validateQuestionInput } from '@/lib/mural';
import styles from './mural.module.scss';

const categoriasSelecionaveis = muralCategories.filter((cat) => cat.id !== 'todas');

export function NewQuestionForm() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [autor, setAutor] = useState('');
  const [category, setCategory] = useState<string>(categoriasSelecionaveis[0].id);
  const [errors, setErrors] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const validationErrors = validateQuestionInput({ titulo, descricao, autor, category });

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setErrors([]);
    setSubmitted(true);
    setTitulo('');
    setDescricao('');
    setAutor('');
    setCategory(categoriasSelecionaveis[0].id);
  };

  return (
    <section className={styles.formSection} aria-labelledby="mural-form-title">
      <h3 id="mural-form-title" className={styles.formTitle}>
        Nao achou sua duvida? Publique no mural
      </h3>
      <p className={styles.formSubtitle}>
        Compartilhe sua pergunta com a comunidade da FT. A gestao acompanha o mural e responde oficialmente as duvidas mais apoiadas.
      </p>

      <form onSubmit={handleSubmit} className={styles.form} noValidate>
        {errors.length > 0 && (
          <div className={styles.errorAlert} role="alert">
            <span>Corrija os campos abaixo para publicar sua duvida.</span>
            <ul className={styles.errorList}>
              {errors.map((message) => (
                <li key={message}>{message}</li>
              ))}
            </ul>
          </div>
        )}

        {submitted && errors.length === 0 && (
          <div className={styles.successAlert} role="status">
            <CheckCircle2
              size={16}
              aria-hidden="true"
              style={{ marginRight: '0.4rem', verticalAlign: 'middle' }}
            />
            <span>Duvida validada e pronta para ser enviada ao mural.</span>
          </div>
        )}

        <div className={styles.formGrid}>
          <div className={styles.fieldGroup}>
            <label htmlFor="mural-titulo" className={styles.label}>
              Titulo da duvida
              <span className={styles.requiredBadge}>Obrigatorio</span>
            </label>
            <input
              id="mural-titulo"
              type="text"
              className={styles.input}
              placeholder="Resuma sua duvida em uma frase"
              value={titulo}
              onChange={(event) => setTitulo(event.target.value)}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="mural-autor" className={styles.label}>
              Seu nome ou apelido
              <span className={styles.optionalBadge}>Opcional</span>
            </label>
            <input
              id="mural-autor"
              type="text"
              className={styles.input}
              placeholder="Como quer ser identificado"
              value={autor}
              onChange={(event) => setAutor(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="mural-categoria" className={styles.label}>
            Categoria
          </label>
          <select
            id="mural-categoria"
            className={styles.formSelect}
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            {categoriasSelecionaveis.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="mural-descricao" className={styles.label}>
            Descreva sua duvida
            <span className={styles.requiredBadge}>Obrigatorio</span>
          </label>
          <textarea
            id="mural-descricao"
            rows={4}
            className={styles.textarea}
            placeholder="Detalhe o contexto da sua duvida para a comunidade"
            value={descricao}
            onChange={(event) => setDescricao(event.target.value)}
          />
        </div>

        <button type="submit" className={styles.submitBtn}>
          <Send size={16} aria-hidden="true" />
          <span>Publicar no mural</span>
        </button>
      </form>
    </section>
  );
}
