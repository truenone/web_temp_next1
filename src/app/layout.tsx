import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const font = Roboto({ subsets: ['cyrillic'], weight: '400' });

export const metadata: Metadata = {
  title: "19 İnşaat | En iyi inşaat hizmetleri",
  description: "19 İnşaat, yaptığı ayrıcalıklı yapılar ile Adana'da popüler olan bir inşaat şirketidir. Yeni projemize başladık! Çok yakında sizlerle...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
