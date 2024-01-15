import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Metadata } from 'next'

const metadata: Metadata = {
  title: "Quiropraxia Mãos que Curam",
  description: 'Descubra o poder transformador da quiropraxia na "Quiropraxia Maos que Curam". Nossos especialistas dedicam-se a proporcionar cuidados quiropráticos excepcionais, aliviando dores e promovendo o equilíbrio do corpo. Sinta a diferença em sua saúde geral ao explorar nossa landing page. Agende hoje mesmo sua consulta e inicie sua jornada para uma vida sem dores e plenamente saudável. Conheça a excelência em quiropraxia - Quiropraxia Maos que Curam, onde o bem-estar é a prioridade.'
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
