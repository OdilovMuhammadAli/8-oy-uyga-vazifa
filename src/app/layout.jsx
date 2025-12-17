import { Roboto, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--text-font",
  display: "swap",
});

const robotoCondensed = Roboto_Condensed({
  weight: ["700"],
  subsets: ["latin", "cyrillic"],
  variable: "--heading-font",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body className={`${roboto.variable} ${robotoCondensed.variable}`}>
        {children}
      </body>
    </html>
  );
}
