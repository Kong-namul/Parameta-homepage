import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["400", "500", "600", "700"] });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "PARAMETA",
  description: "기업을 위한 디지털 자산 금융 인프라",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://parametacorp.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isProd = process.env.NODE_ENV === "production";
  return (
    <html className={`${inter.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        {isProd && (
          <script
            defer
            data-domain="parametacorp.com"
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}
