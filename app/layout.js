import "../app/globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { Playfair_Display, Poppins } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";





// Heading Font
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
});

// Body Text Font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Atlas Entry Solution",
  description: "Legal relocation support to Portugal.",
   icons: {
    icon: "/favicon.ico",       
    shortcut: "/favicon.ico",   
    apple: "/apple-touch-icon.png", 
  },
   other: {
    google: "notranslate",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${poppins.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
