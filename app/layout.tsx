import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./component/Navbar";
import { Footer } from "./component/Footer";


export const metadata : Metadata = {
  title: "Vyom Portfolio", 
  description: "Portfolio of Vyom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
