import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Fustat } from "next/font/google";

const fustat = Fustat({
  variable: "--font-fustat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quiropraxia Mãos que Curam",
  description:
    "Descubra o poder transformador da quiropraxia na Quiropraxia Maos que Curam. Nossos especialistas dedicam-se a proporcionar cuidados quiropráticos excepcionais, aliviando dores e promovendo o equilíbrio do corpo. Sinta a diferença em sua saúde geral ao explorar nossa landing page. Agende hoje mesmo sua consulta e inicie sua jornada para uma vida sem dores e plenamente saudável. Conheça a excelência em quiropraxia - Quiropraxia Maos que Curam, onde o bem-estar é a prioridade.",
  keywords: [
    "quiropraxia, coluna, dores nas costas, saúde, bem-estar, mãos que curam, alívio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${fustat.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
