import type { Metadata } from "next";
import { Header } from "@components";
import "@/styles/global.css";
import { LanguageProvider } from "@/utils/LanguageContext";
import StyledComponentsRegistry from "@/utils/registry";

export const metadata: Metadata = {
  title: "Gabriel Gevert - Portfolio",
  description: "Portfolio - Gabriel Gevert. Web Developer.",
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
            <Header />
            <main>{children}</main>
          </LanguageProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
