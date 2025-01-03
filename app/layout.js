import { Geist, Geist_Mono } from "next/font/google";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./globals.css";
import { Toaster } from "./components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hamizza Awards 2024",
  description: "Vote please lol",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
