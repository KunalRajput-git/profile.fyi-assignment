import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Profile - Store",
  description: "Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.svg" />
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
