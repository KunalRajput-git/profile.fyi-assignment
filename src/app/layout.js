import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/";
import { CartProvider } from "../context/CartContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Profile - Store",
  description: "Explore our range of fresh grocery items at great prices.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.svg" />
      <body className={inter.className}>
        <CartProvider>
          {/* Wraps the application in CartProvider to manage cart state globally */}
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
