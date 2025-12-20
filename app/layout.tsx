import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fruto Aromea | Ritual · Bienestar · Conexión",
  description:
    "Productos naturales para iniciar el día y crear momentos de conexión. Café, infusiones y rituales desde Antioquia.",

  openGraph: {
    title: "Fruto Aromea | Ritual · Bienestar · Conexión",
    description:
      "Café, infusiones y productos naturales para tus rituales diarios.",
    url: "https://frutoaromeacol.vercel.app/",
    siteName: "Fruto Aromea",
    images: [
      {
        url: "https://frutoaromeacol.vercel.app/og/og-fruto-aromea.jpg",
        width: 1200,
        height: 630,
        alt: "Fruto Aromea – Ritual · Bienestar · Conexión",
      },
    ],
    locale: "es_CO",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fruto Aromea | Ritual · Bienestar · Conexión",
    description:
      "Productos naturales para rituales de bienestar y conexión.",
    images: ["https://frutoaromeacol.vercel.app/og/og-fruto-aromea.jpg"],
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
