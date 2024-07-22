import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TryOn Fit",
  description: "Generated by create next app"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><section style={{ marginTop: "0px" }}>

{/* Include shared UI here e.g. a header or sidebar */}
<NavBar />

<div style={{ position: "relative", zIndex: -1 }}> {children}</div>

<Footer />
</section></body>
    </html>
  );
}
