import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar/Navbar';
import { Footer } from '@/components/Footer/Footer';
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
    <html lang="pt-BR" data-theme="light">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
