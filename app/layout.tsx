import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akvapura | Distillə Su & MasterCleaner | İnnovasiya və Keyfiyyətli Şüşə Təmizliyi",

  description: "Akvapura olaraq MasterCleaner ilə Azərbaycanda yüksək keyfiyyətli distillə su və peşəkar şüşə təmizliyi xidmətləri təklif edirik. Təmizliyə innovativ yanaşma və zəmanətli keyfiyyət.",

  keywords: [
    "Akvapura",
    "MasterCleaner",
    "ŞüşəTəmizliyi",
    "Şüşə Təmizliyi",
    "İnnovasiya",
    "Keyfiyyət",
    "aqvapura",
    "su",
    "distillə su",
    "distile su", 
    "təmiz su",
    "temiz su",
    "içməli su",
    "su çatdırılması",
    "peşəkar təmizlik",
    "Azərbaycanda distillə su",
    "şüşə silinməsi"
  ],

  openGraph: {
    title: "Akvapura | Distillə Su & MasterCleaner | İnnovasiya və Keyfiyyətli Şüşə Təmizliyi",
    description: "Akvapura olaraq MasterCleaner ilə Azərbaycanda yüksək keyfiyyətli distillə su və peşəkar şüşə təmizliyi xidmətləri təklif edirik. Təmizliyə innovativ yanaşma və zəmanətli keyfiyyət.",
    // url: "https://www.sizin-saytiniz.com", 
    siteName: "Akvapura",
    images: [
      {
        url: "/Akvapura.png", 
        width: 1200,
        height: 630,
        alt: "Akvapura MasterCleaner Distillə Su Şüşə Təmizliyi",
      },
    ],
    locale: 'az_AZ',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: "Akvapura | Distillə Su & MasterCleaner | İnnovasiya və Keyfiyyətli Şüşə Təmizliyi",
    description: "Akvapura olaraq MasterCleaner ilə Azərbaycanda yüksək keyfiyyətli distillə su və peşəkar şüşə təmizliyi xidmətləri təklif edirik. Təmizliyə innovativ yanaşma və zəmanətli keyfiyyət.",
    creator: '@SizinTwitterHesabiniz',
    images: ["https://www.sizin-saytiniz.com/images/akvapura-logo.jpg"], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Akvapura",
              "url": "https://www.akvapura.com", 
              "logo": "https://www.akvapura.az/images/akvapura-logo.jpg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+994 70 300 22 89", 
                "contactType": "Distile su"
              },
              "sameAs": [
                "https://www.instagram.com/akvapura.az/", 
                "https://www.facebook.com/profile.php?id=61559868737226",
                "https://www.tiktok.com/@akvapura"
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
