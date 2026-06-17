import type { Metadata } from "next";
import "@/styles/global.css";
import { LanguageProvider } from "@/utils/LanguageContext";
import StyledComponentsRegistry from "@/utils/registry";
import { ScrollProvider } from "@/utils/ScrollContext";
import { ThemeProvider } from "@/utils/ThemeContext";

const siteOrigin = "https://gabrielgevert.github.io";
const siteUrl = `${siteOrigin}/portfolio/`;
const description =
  "Gabriel Gevert, desenvolvedor Full Stack em Curitiba. Constrói aplicações de ponta a ponta com Next.js, React, Node.js, TypeScript e AWS, e também com Flutter e Unity.";

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: "Gabriel Gevert | Desenvolvedor Full Stack",
    template: "%s | Gabriel Gevert",
  },
  description,
  applicationName: "Portfolio Gabriel Gevert",
  authors: [{ name: "Gabriel Gevert", url: "https://github.com/gabrielgevert" }],
  creator: "Gabriel Gevert",
  keywords: [
    "Gabriel Gevert",
    "desenvolvedor full stack",
    "fullstack developer",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "AWS",
    "Google Cloud",
    "Flutter",
    "Unity",
    "portfolio",
    "Curitiba",
  ],
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/portfolio/me.png",
    apple: "/portfolio/me.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Gabriel Gevert",
    title: "Gabriel Gevert | Desenvolvedor Full Stack",
    description,
    images: [
      {
        url: "/portfolio/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gabriel Gevert - Desenvolvedor Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Gevert | Desenvolvedor Full Stack",
    description,
    images: ["/portfolio/og-image.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gabriel Gevert",
  url: siteUrl,
  image: `${siteUrl}me.png`,
  jobTitle: "Desenvolvedor Full Stack",
  worksFor: [
    { "@type": "Organization", name: "SAMPI" },
    { "@type": "Organization", name: "Form&Fun Studio" },
    { "@type": "Organization", name: "L8 Group" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Curitiba",
    addressRegion: "PR",
    addressCountry: "BR",
  },
  sameAs: [
    "https://www.linkedin.com/in/gabrielgevert/",
    "https://github.com/gabrielgevert",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "AWS",
    "Google Cloud",
    "Flutter",
    "Unity",
    "Inteligência Artificial",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/portfolio/fonts/satoshi/Satoshi-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/portfolio/fonts/satoshi/Satoshi-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/portfolio/fonts/satoshi/Satoshi-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/portfolio/fonts/satoshi/Satoshi-Light.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <LanguageProvider>
              <ScrollProvider>{children}</ScrollProvider>
            </LanguageProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
