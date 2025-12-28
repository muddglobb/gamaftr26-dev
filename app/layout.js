import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plusjakarta',
  weight: ['200','300','400','500','600','700','800']
});

const mochesa = localFont({
  src: "./fonts/mochesa-regular.ttf",
  variable: "--font-mochesa",
  weight: "400",
});

export const metadata = {
  title: "GAMAFTR 2026",
  description: "Gadjah Mada FLies to Riau 2026",
  icons: {
    icon: "/LOGO.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${mochesa.variable} ${plusJakarta.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
