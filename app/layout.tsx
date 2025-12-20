import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fruto Aromea | Ritual · Bienestar · Conexión",
  description:
    "Productos naturales desde Antioquia — café, infusiones y accesorios diseñados para tu ritual diario.",
  openGraph: {
    title: "Fruto Aromea | Ritual · Bienestar · Conexión",
    description:
      "Disfruta productos naturales que conectan cuerpo y mente. Café, infusiones, accesorios.",
    url: "https://frutoaromeacol.vercel.app",
    siteName: "Fruto Aromea",
    images: [
      {
        url: "https://frutoaromeacol.vercel.app/og/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fruto Aromea – Productos naturales",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
