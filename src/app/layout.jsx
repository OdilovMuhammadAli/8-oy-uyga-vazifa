import "./globals.css";

export const metadata = {
  title: "Akademnashr",
  description: "Akademnashr promo sayt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}
