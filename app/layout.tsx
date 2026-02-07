import type { Metadata, Viewport } from "next";
import { Alumni_Sans, Splash, Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import KonamiCode from "@/components/KonamiCode";

const alumniSans = Alumni_Sans({
  subsets: ["latin"],
  variable: "--font-alumni-sans",
});

const splash = Splash({
  subsets: ["latin"],
  variable: "--font-splash",
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Anshita Rathore | UI/UX Designer",
  description:
    "Portfolio of Anshita Rathore, a UI/UX Designer passionate about creating intuitive digital experiences.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#E8E8E6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${alumniSans.variable} ${splash.variable} ${poppins.variable} antialiased`}
      >
        <SmoothScroll>
          <ScrollProgress />
          {children}
          <KonamiCode />
        </SmoothScroll>
      </body>
    </html>
  );
}