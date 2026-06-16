import type { Metadata } from "next";
import { Header } from "@components";
import "@/styles/global.css";
import { LanguageProvider } from "@/utils/LanguageContext";
import StyledComponentsRegistry from "@/utils/registry";
import { ScrollProvider } from "@/utils/ScrollContext";

export const metadata: Metadata = {
  title: "Gabriel Gevert - Portfolio",
  description:
    "Portfolio - Gabriel Gevert. Fullstack & Cloud Developer. AWS Amplify, Next.js, Flutter e Unity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <LanguageProvider>
            <ScrollProvider>
              <Header />
              <main>{children}</main>
            </ScrollProvider>
          </LanguageProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
