import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fruto Aromea | Ritual · Bienestar · Conexión",
  description:
    "Productos naturales para iniciar el día y crear momentos de conexión. Café, infusiones y rituales artesanales desde Antioquia.",

  openGraph: {
    title: "Fruto Aromea",
    description:
      "Ritual · Bienestar · Conexión. Productos naturales para cada momento del día.",
    images: [
      {
        url: "/og-fruto-aromea.jpg",
        width: 1200,
        height: 630,
        alt: "Fruto Aromea – Productos naturales",
      },
    ],
    type: "website",
    locale: "es_CO",
  },

  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
  images: ["/og/og-image.jpg"],
}
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  )
}

