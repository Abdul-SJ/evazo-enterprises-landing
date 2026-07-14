import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://evozaenterprises.com"),
  title: "EVOZA ENTERPRISES | Premium Custom Apparel Manufacturer",
  description: "Premium OEM & ODM apparel manufacturing for clothing brands worldwide. Custom private label streetwear with low MOQ and worldwide shipping.",
  keywords: "custom apparel manufacturer, OEM apparel, ODM clothing, private label streetwear, streetwear manufacturing, clothing factory",
  openGraph: {
    title: "EVOZA ENTERPRISES | Premium Custom Apparel Manufacturer",
    description: "Premium OEM & ODM apparel manufacturing for clothing brands worldwide. Custom private label streetwear with low MOQ.",
    url: "https://evozaenterprises.com",
    siteName: "EVOZA ENTERPRISES",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/evoza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "EVOZA ENTERPRISES logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EVOZA ENTERPRISES | Premium Custom Apparel Manufacturer",
    description: "Premium OEM & ODM apparel manufacturing for clothing brands worldwide. Custom private label streetwear with low MOQ.",
    images: ["/evoza-logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
