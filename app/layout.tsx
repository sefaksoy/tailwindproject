import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@awesome.me/kit-d594b55eb6/icons/classic/solid';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dark Knight",
  description: "DarkKnight TAILWIND Test Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
