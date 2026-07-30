import { Montserrat, Inter } from "next/font/google";
import "@/styles/globals.css";
import { rootMetadata } from "@/utils/seo";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import CookieConsent from "@/components/layout/CookieConsent";
import GoogleAnalytics from "@/components/layout/GoogleAnalytics";
import PageTransition from "@/components/layout/PageTransition";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${inter.variable} font-body antialiased`}
        suppressHydrationWarning
      >
        <GoogleAnalytics />
        <Navbar />
        <main className="bg-page">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}
