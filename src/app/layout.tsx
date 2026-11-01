import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "GENESIS | Student Research Initiative",
  description: "GENESIS is the Research Club of H.B.T. Medical College & Dr. R.N. Cooper Hospital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased text-genesis-light bg-genesis-darker`}>
        {children}
      </body>
    </html>
  );
}
