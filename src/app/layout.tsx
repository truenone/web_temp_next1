import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import CursorRing from "@/components/CursorRing";

const theme = createTheme({

});
const font = Roboto({ subsets: ['cyrillic'], weight: '400' });

export const metadata: Metadata = {
  title: "19 İnşaat | En iyi inşaat hizmetleri",
  description: "19 İnşaat, yaptığı ayrıcalıklı yapılar ile Adana'da popüler olan bir inşaat şirketidir. Yeni projemize başladık! Çok yakında sizlerle...",
  icons: ['/favicon.ico']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={font.className}>
        <MantineProvider theme={theme}>
          <Navbar />
          <CursorRing />
          {children}
        </MantineProvider>
      </body>

    </html>
  );
}
