import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import "@/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Fustat } from "next/font/google";

const fustat = Fustat({
  variable: "--font-fustat",
  subsets: ["latin"],
});

const description =
  "Quiropraxia Mãos que Curam: tratamentos quiropráticos para aliviar dores, melhorar a postura e restaurar o equilíbrio do corpo. Agende sua avaliação.";

export const metadata: Metadata = {
  title: "Quiropraxia Mãos que Curam",
  description,
  keywords: [
    "quiropraxia",
    "coluna",
    "dores nas costas",
    "saúde",
    "bem-estar",
    "mãos que curam",
    "alívio de dores",
    "postura",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Quiropraxia Mãos que Curam",
    title: "Quiropraxia Mãos que Curam",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiropraxia Mãos que Curam",
    description,
  },
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
          href="https://fonts.googleapis.com/css2?family=Playwrite+AT:ital,wght@0,100..400;1,100..400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${fustat.variable} antialiased`}>
        <Navbar />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
