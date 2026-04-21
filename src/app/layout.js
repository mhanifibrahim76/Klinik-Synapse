import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Klinik Synapse",
    template: "%s | Klinik Synapse",
  },

  description:
    "Klinik tumbuh kembang anak profesional dengan layanan terapi wicara, terapi okupasi, sensori integrasi, psikologi, dan konsultasi tumbuh kembang.",

  verification: {
    google: "7hvkr2WfhiEMys2znkHLABcSlSqLkqUn3KPte0_d-lE",
  },

  keywords: [
    "klinik tumbuh kembang anak",
    "klinik synapse cipete",
    "terapi wicara",
    "terapi okupasi",
    "psikologi anak",
    "sensori integrasi",
    "fisioterapi anak",
    "klinik synapse",
    "synapse clinic",
    "asesmen tumbuh kembang",
    "konsultasi tumbuh kembang anak",
    "synapse child development",
  ],

  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },

  openGraph: {
    title: "Klinik Synapse – Terapi & Tumbuh Kembang Anak",
    description:
      "Klinik profesional yang menangani tumbuh kembang anak melalui terapi wicara, terapi okupasi, fisioterapi, psikologi, dan asesmen anak.",
    url: "https://www.synapschild.com",
    siteName: "Klinik Synapse",
    type: "website",
    locale: "id_ID",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.synapschild.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager */}
        <GoogleTagManager gtmId="GTM-MNHXM869" />

        {/* Google Ads (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18107751278"
          strategy="afterInteractive"
        />
        <Script id="google-ads">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18107751278');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}