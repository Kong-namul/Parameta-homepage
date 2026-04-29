import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/components/layout/TopNav";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/scroll/SmoothScroll";
import { CookieBanner } from "@/components/layout/CookieBanner";

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
    <html lang="ko" className={`${inter.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        {isProd && (
          <script
            defer
            data-domain="parametacorp.com"
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body>
        <SmoothScroll>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-[var(--accent-primary)] focus:text-[var(--cta-primary-text)] focus:px-3 focus:py-1 focus:rounded focus:z-50"
          >
            Skip to content
          </a>
          <TopNav />
          <main id="main">{children}</main>
          <Footer />
          <CookieBanner />
        </SmoothScroll>
      </body>
    </html>
  );
}
