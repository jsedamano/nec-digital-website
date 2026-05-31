import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEC Digital | Consultoría IT",
  description:
    "Consultoría tecnológica para impulsar la transformación digital de empresas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
