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

export const metadata = {
  title: "Klinik Synapse",
  description:
    "Klinik tumbuh kembang anak profesional yang menyediakan layanan terapi, psikologi, dan konsultasi anak berkebutuhan khusus dengan pendekatan penuh kasih.",
   icons: {
    icon: "/logo.png", 
    apple: "/logo.png", 
    shortcut: "/logo.png", 
  },
};

export default function RootLayout({ children }) {
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
