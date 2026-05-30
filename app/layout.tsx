import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paulo Augusto | Portfolio",
  description: "Portfolio de Paulo Augusto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WMM92XVSRK"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-WMM92XVSRK');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}