import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/common/Navbar";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap'
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The Spark Social | Creative Digital Agency & Talent Management",
    template: "%s | The Spark Social"
  },
  description: "We are a full-service creative agency specializing in advertisement, film production, and talent management. Shaping digital culture through bold storytelling.",
  keywords: [
    "thesparksocial",
    "thespark",
    "spark",
    "The Spark Social",
    "The Spark",
    "creative agency",
    "digital agency",
    "film production",
    "talent management",
    "social media marketing",
    "content creation",
    "Imediaff",
    "production community"
  ],
  authors: [{ name: "The Spark Social" }],
  metadataBase: new URL("https://thesparksocial.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The Spark Social | Creative Digital Agency & Talent Management",
    description: "Shaping digital culture through bold storytelling. Specializing in advertisement, film production, and talent management.",
    url: "https://thesparksocial.com",
    siteName: "The Spark Social",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/brands/amazon.svg", // İlk etapta sosyal medyada link paylaşıldığında boş görünmesin diye mevcut bir asset verdik, ileride og-image ile değiştirilebilir
        width: 1200,
        height: 630,
        alt: "The Spark Social Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Spark Social | Creative Digital Agency",
    description: "Shaping digital culture through bold storytelling.",
    images: ["/brands/amazon.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
};

import { LanguageProvider } from "@/src/context/LanguageContext";
import ScrollToTop from "@/src/components/common/ScrollToTop";
import SmoothScroll from "@/src/components/common/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className={poppins.className} suppressHydrationWarning>
        <SmoothScroll>
          <LanguageProvider>
            <Navbar />
            {children}
            <ScrollToTop />
          </LanguageProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
