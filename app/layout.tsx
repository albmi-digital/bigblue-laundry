import type { Metadata } from "next";
import { Manrope, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: {
    default: "Lavandaria Bigblue | Cascais",
    template: "%s | Lavandaria Bigblue",
  },

  description:
    "Lavandaria Bigblue em Cascais. Lavandaria, limpeza a seco, engomadoria, recolhas e entregas e serviços de costura.",

  keywords: [
    "Lavandaria Cascais",
    "Lavandaria Bigblue",
    "limpeza a seco Cascais",
    "engomadoria Cascais",
    "lavandaria Vila Bicuda",
    "recolha roupa Cascais",
    "entrega roupa Cascais",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={cn("font-sans", geist.variable)}>
      <body className={`${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}