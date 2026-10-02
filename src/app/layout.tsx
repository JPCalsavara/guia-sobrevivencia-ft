import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Navbar } from '@/components/Navbar/Navbar';
import { Footer } from '@/components/Footer/Footer';
import { AccessibilityWidget } from '@/components/AccessibilityWidget/AccessibilityWidget';
import { IdeTabsBar } from '@/components/organisms/IdeTabsBar/IdeTabsBar';
import { IdeStatusBar } from '@/components/organisms/IdeStatusBar/IdeStatusBar';
import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: 'Guia da Faculdade de Tecnologia Unicamp | FT Limeira',
  description: 'Guia completo de orientação acadêmica, carreira e vida no campus para estudantes da Faculdade de Tecnologia da Unicamp em Limeira.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" data-theme="light" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <a href="#main-content" className="skipLink">
          Pular para o conteúdo principal
        </a>
        <Navbar />
        <IdeTabsBar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <AccessibilityWidget />
        <IdeStatusBar />
        <Analytics />
      </body>
    </html>
  );
}
