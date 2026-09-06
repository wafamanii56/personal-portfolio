import type { Metadata } from "next";
import {
  Anton,
  Baloo_2,
  Caveat,
  Press_Start_2P,
  Quicksand,
  VT323,
} from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const baloo2 = Baloo_2({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-baloo",
});

const caveat = Caveat({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-caveat",
});

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

const quicksand = Quicksand({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

export const metadata: Metadata = {
  title: "Portfolio '26",
  description: "CS student portfolio — Burn Book edition",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${baloo2.variable} ${caveat.variable} ${pressStart2P.variable} ${quicksand.variable} ${vt323.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
