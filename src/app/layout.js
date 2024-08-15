import { Inter } from "next/font/google"; // Import Inter font from Google Fonts.
import Navbar from "@/components/layout/Navbar"; // Import Navbar component for the layout.
import "./globals.css"; // Import global CSS styles.

const inter = Inter({ subsets: ["latin"] }); // Configure Inter font with Latin subsets.

export const metadata = {
  title: "Profile - Store", // Page title.
  description: "Assignment", // Page description.
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {" "}
      {/* Set document language to English. */}
      <link rel="icon" href="/favicon.svg" /> {/* Set favicon for the site. */}
      <body className={inter.className}>
        {" "}
        {/* Apply Inter font to body. */}
        <Navbar /> {/* Include Navbar component. */}
        {children} {/* Render child content. */}
      </body>
    </html>
  );
}
