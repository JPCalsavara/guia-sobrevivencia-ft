import Link from 'next/link';
import { Home, Compass } from 'lucide-react';
import styles from './page.module.scss';

export default function NotFound() {
  return (
    <div className={styles.container} style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
      <div style={{ display: 'inline-flex', padding: '1rem', borderRadius: '50%', backgroundColor: 'var(--ft-blue-soft)', color: 'var(--ft-blue)', marginBottom: '1.5rem' }}>
        <Compass size={48} aria-hidden="true" />
      </div>

      <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
        Página Não Encontrada
      </h1>

      <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '480px', marginBottom: '2rem', lineHeight: 1.6 }}>
        O conteúdo procurado não foi localizado ou o endereço digitado está incorreto. Navegue pelo menu superior ou retorne à página inicial.
      </p>

      <Link
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: 'var(--ft-blue)',
          color: '#ffffff',
          borderRadius: '0.5rem',
          fontWeight: 600,
          textDecoration: 'none',
        }}
      >
        <Home size={18} aria-hidden="true" />
        <span>Voltar ao Início</span>
      </Link>
    </div>
  );
}
