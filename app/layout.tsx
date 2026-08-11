import type React from "react"
import type { Metadata } from "next"
import { Syne, Inter } from "next/font/google"
import { Toaster } from "sonner"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  metadataBase: new URL("https://jeevananthan.dev"),
  title: {
    default: "Jeevananthan V | Full Stack Developer Salem, Tamil Nadu",
    template: "%s | Jeevananthan V",
  },
  description:
    "Full Stack Developer based in Salem, Tamil Nadu — specializing in React.js, Node.js, Express, MySQL, and Salesforce Apex. Building scalable web applications at Ethiroli Pvt Ltd.",
  keywords: [
    "Full Stack Developer Salem",
    "React Developer Salem Tamil Nadu",
    "Node.js Developer Salem",
    "Web Developer Salem India",
    "MERN Stack Developer Tamil Nadu",
    "Next.js Developer Salem",
    "Salesforce Developer Salem",
    "Full Stack Engineer Ethiroli",
    "Freelance Web Developer Salem",
    "Jeevananthan V Portfolio",
  ],
  authors: [{ name: "Jeevananthan V" }],
  creator: "Jeevananthan V",
  publisher: "Ethiroli Private Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://jeevananthan.dev",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jeevananthan.dev",
    siteName: "Jeevananthan V | Full Stack Developer Salem",
    title: "Jeevananthan V | Full Stack Developer Salem, Tamil Nadu",
    description:
      "Full Stack Developer based in Salem, Tamil Nadu — specializing in React.js, Node.js, Express, MySQL, and Salesforce Apex.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jeevananthan V - Full Stack Developer Salem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeevananthan V | Full Stack Developer Salem",
    description:
      "Full Stack Developer in Salem, Tamil Nadu — React, Node.js, MySQL, Salesforce Apex.",
    images: ["/og-image.png"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://jeevananthan.dev/#person",
      name: "Jeevananthan V",
      jobTitle: "Full Stack Developer",
      description:
        "Full Stack Developer based in Salem, Tamil Nadu, specializing in React.js, Node.js, Express, MySQL, and Salesforce Apex.",
      url: "https://jeevananthan.dev",
      sameAs: [
        "https://in.linkedin.com/in/jeevananthan-vediyappan",
        "https://github.com/JeevananthanV",
      ],
      knowsAbout: [
        "React.js",
        "Node.js",
        "Express.js",
        "MySQL",
        "Salesforce Apex",
        "Next.js",
        "TypeScript",
        "MERN Stack",
        "Full Stack Development",
      ],
      worksFor: {
        "@type": "Organization",
        "@id": "https://ethiroli.in/#organization",
        name: "Ethiroli Private Limited",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Salem",
          addressRegion: "Tamil Nadu",
          addressCountry: "IN",
        },
      },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://jeevananthan.dev/#webpage",
      url: "https://jeevananthan.dev",
      name: "Jeevananthan V - Full Stack Developer Portfolio",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://jeevananthan.dev/#website",
        name: "Jeevananthan V Portfolio",
        url: "https://jeevananthan.dev",
      },
      mainEntity: {
        "@id": "https://jeevananthan.dev/#person",
      },
    },
  ],
}

function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <JsonLd />
      <body className={`${syne.variable} ${inter.variable}`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <Toaster position="bottom-right" theme="dark" richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
