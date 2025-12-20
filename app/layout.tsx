import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fruto Aromea | Ritual · Bienestar · Conexión",
  description:
    "Productos naturales para iniciar el día y crear momentos de conexión. Café, infusiones y rituales artesanales desde Antioquia.",

 openGraph: {
    title: "Fruto Aromea | Ritual · Bienestar · Conexión",
    description:
      "Café, infusiones y rituales naturales desde Antioquia.",
    url: "https://frutoaromeacol.vercel.app",
    siteName: "Fruto Aromea",
    images: [
      {
        url: "https://frutoaromeacol.vercel.app/og/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fruto Aromea – Productos Naturales",
      },
    ],
    locale: "es_CO",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
  images: ["https://frutoaromeacol.vercel.app/og/og-image.jpg"]

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

