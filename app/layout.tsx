import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://felipeostettiferri.com"),
  title: "Felipe Ostetti Ferri | Desenvolvimento, Automação e Tecnologia",
  description: "Desenvolvimento Python, automação de processos, aplicações web e soluções de infraestrutura. Conheça os projetos de Felipe Ostetti Ferri.",
  openGraph: {
    title: "Felipe Ostetti Ferri — Tecnologia que resolve.",
    description: "Software que entrega. Desenvolvimento, automação e soluções digitais.",
    type: "website",
    locale: "pt_BR"
  }
};
export const viewport: Viewport = { themeColor: "#080b11", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
