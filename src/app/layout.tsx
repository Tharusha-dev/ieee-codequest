import type { Metadata } from "next";
import { VT323 } from 'next/font/google';
import "./globals.css";
import Footer from "@/components/Footer";
import TerminalNavbar from "@/components/TerminalNavbar";

export const metadata: Metadata = {
  title: "CodeQuest: Vault Edition",
  description: "A Capture the Flag (CTF) hackathon aimed at enhancing cybersecurity skills among undergraduates.",
};

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${vt323.className} bg-gray-900`}>
        <TerminalNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
