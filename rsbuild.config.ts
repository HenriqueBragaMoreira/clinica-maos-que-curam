import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  output: {
    assetPrefix: './',
    distPath: {
      root: './dist',
    },
    minify: true,
  },
  html: {
    title: 'Quiropraxia Mãos que Curam',
    favicon: './src/assets/favicon.ico',
    appIcon: {
      name: 'Quiropraxia Mãos que Curam',
      icons: [
        {
          src: './src/assets/icon-192.png',
          size: 192,
          target: 'web-app-manifest',
        },
        {
          src: './src/assets/icon-512.png',
          size: 512,
          target: 'web-app-manifest',
        },
        {
          src: './src/assets/apple-touch-icon.png',
          size: 180,
          target: 'apple-touch-icon',
        },
      ],
    },
    meta: {
      charset: {
        charset: 'UTF-8',
      },
      viewport: 'width=device-width, initial-scale=1',
      description:
        'Descubra o poder transformador da quiropraxia na Quiropraxia Maos que Curam. Nossos especialistas dedicam-se a proporcionar cuidados quiropráticos excepcionais, aliviando dores e promovendo o equilíbrio do corpo. Sinta a diferença em sua saúde geral ao explorar nossa landing page. Agende hoje mesmo sua consulta e inicie sua jornada para uma vida sem dores e plenamente saudável. Conheça a excelência em quiropraxia - Quiropraxia Maos que Curam, onde o bem-estar é a prioridade.',
      keywords:
        'quiropraxia, coluna, dores nas costas, saúde, bem-estar, mãos que curam, alívio',
      'og:type': 'website',
      'og:title': 'Quiropraxia Mãos que Curam',
      'og:description':
        'Especialistas em quiropraxia para melhorar sua saúde e qualidade de vida. Marque sua consulta.',
      'og:image': './src/assets/apple-touch-icon.png',
      'og:url': 'https://www.quiropraxiamaosquecuram.com.br/',
    },
  },
  performance: {
    removeConsole: true,
  },
});
