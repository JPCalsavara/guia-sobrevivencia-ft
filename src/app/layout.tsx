import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar/Navbar';
import { Footer } from '@/components/Footer/Footer';
import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: 'Guia do Calouro FT Unicamp',
  description: 'Guia completo de orientacao academica, carreira e vida no campus para estudantes da Faculdade de Tecnologia da Unicamp em Limeira.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" data-theme="dark">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
