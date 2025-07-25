import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Akvapura | Distillə Su & MasterCleaner | İnnovasiya və Keyfiyyətli Şüşə Təmizliyi",
  icons: {
    icon: "/favicon.png",
  },
  description:
    "Akvapura olaraq MasterCleaner ilə Azərbaycanda yüksək keyfiyyətli distillə su və peşəkar şüşə təmizliyi xidmətləri təklif edirik. Təmizliyə innovativ yanaşma və zəmanətli keyfiyyət.",

  keywords: [
  "Akvapura",
   "Aqvapura",
  "MasterCleaner",
  "ŞüşəTəmizliyi",
  "Şüşə Təmizliyi",
  "Suse Temizliyi",
  "İnnovasiya",
  "Keyfiyyət",
  "Etibar",
  "Distillə su",
  "Distile su",
  "Distilə su",
  "Distille su",
  "Orijinal Məhsul",
  "Lazer Texnologiyası",
  "aqvapura",
  "su",
  "təmiz su",
  "temiz su",
  "içməli su",
  "su çatdırılması",
  "peşəkar təmizlik",
  "Azərbaycanda distillə su",
  "Azərbaycanda distille su",
  "Azərbaycanda distile su",
  "şüşə silinməsi",
  "Azərbaycanda təmiz su",
  "Azerbaycanda temiz su",
  "Bayramov Emin akvapura",
  "Bayramov Emin Akvapura",
  "Emin Bayramov Akvapura",
  "Akvapura Emin Bayramov",
],

  openGraph: {
    title:
      "Akvapura | Distillə Su & MasterCleaner | İnnovasiya və Keyfiyyətli Şüşə Təmizliyi",
    description:
      "Akvapura olaraq MasterCleaner ilə Azərbaycanda yüksək keyfiyyətli distillə su və peşəkar şüşə təmizliyi xidmətləri təklif edirik. Təmizliyə innovativ yanaşma və zəmanətli keyfiyyət.",
    siteName: "Akvapura",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Akvapura MasterCleaner Distillə Su Şüşə Təmizliyi",
      },
    ],
    locale: "az_AZ",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Akvapura | Distillə Su & MasterCleaner | İnnovasiya və Keyfiyyətli Şüşə Təmizliyi",
    description:
      "Akvapura olaraq MasterCleaner ilə Azərbaycanda yüksək keyfiyyətli distillə su və peşəkar şüşə təmizliyi xidmətləri təklif edirik. Təmizliyə innovativ yanaşma və zəmanətli keyfiyyət.",
    creator: "@akvapura.az",
    images: ["https://akvapura.az/favicon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
      <Analytics />
    </>
  );
}
