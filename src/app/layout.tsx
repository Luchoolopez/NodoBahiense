import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Nodo Bahiense — Estudio Digital",
  description:
    "Transformamos ideas en experiencias digitales. Desarrollo web, e-commerce, sistemas a medida y automatizaciones en Bahía Blanca.",
  keywords: "desarrollo web, landing page, e-commerce, sistemas a medida, Bahía Blanca",
  openGraph: {
    title: "Nodo Bahiense — Estudio Digital",
    description: "Transformamos ideas en experiencias digitales.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${jakarta.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
