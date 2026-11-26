import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Labub — Time completo de tecnologia",
  description: "Frontend, Backend, UX Design e DevOps em um único time integrado. Da ideia ao deploy.",
};

// Mesmos valores de --color-bg no tokens.css (claro e escuro).
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#080808" },
  ],
};

// Aplica o tema antes do primeiro quadro (sem piscar claro → escuro).
// Vale a escolha guardada da pessoa; sem escolha, o tema do sistema.
const themeScript = `(function(){try{var t=localStorage.getItem('labub-theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-bg text-text antialiased">{children}</body>
    </html>
  );
}
