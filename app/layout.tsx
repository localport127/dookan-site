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
  title: "DOOKAN INC | Food Importer in Canada | From Source to Global Markets",
  description:
    "DOOKAN INC is a Canada-based food import company supplying fresh vegetables, fruits, fish & seafood, spices, and processed foods to grocery stores, restaurants, and wholesalers across Canada.",

  metadataBase: new URL("https://dookan.ca"),

  alternates: {
    canonical: "https://dookan.ca/",
  },

  keywords: [
    "DOOKAN INC",
    "food importer Canada",
    "Toronto food importer",
    "fresh vegetable importer Canada",
    "fish and seafood importer Canada",
    "Bangladeshi food importer Canada",
    "grocery wholesale supplier Toronto",
    "restaurant food supplier Canada",
    "CFIA food importer",
    "SFCR compliant food importer",
  ],

  openGraph: {
    title: "DOOKAN INC | Food Importer in Canada",
    description:
      "Supplying fresh produce, fish & seafood, spices, and processed foods to grocery stores, restaurants, and wholesalers across Canada.",
    url: "https://dookan.ca",
    siteName: "DOOKAN INC",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "DOOKAN INC - Food Importer in Canada",
      },
    ],
    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DOOKAN INC | Food Importer in Canada",
    description:
      "Canada-based food importer supplying fresh vegetables, fish & seafood, spices, and processed foods for grocery, restaurant, and wholesale buyers.",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
        {children}
      </body>
    </html>
  );
}
