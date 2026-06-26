import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const siteUrl = "https://fullhouse.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FULLHOUSE | 解体工事・庭撤去・遺品整理",
    template: "%s | FULLHOUSE",
  },
  description:
    "FULLHOUSEは解体工事・庭撤去・遺品整理を手がける施工会社です。明朗会計と地域密着のスピード対応で、解体から新しい未来への一歩をサポートします。",
  keywords: ["解体工事", "庭撤去", "遺品整理", "FULLHOUSE", "解体業者"],
  openGraph: {
    title: "FULLHOUSE | 解体工事・庭撤去・遺品整理",
    description:
      "解体から、新しい未来を。FULLHOUSEは解体工事・庭撤去・遺品整理を手がける施工会社です。",
    url: siteUrl,
    siteName: "FULLHOUSE",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FULLHOUSE | 解体工事・庭撤去・遺品整理",
    description:
      "解体から、新しい未来を。FULLHOUSEは解体工事・庭撤去・遺品整理を手がける施工会社です。",
  },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-fh-white text-fh-black">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
