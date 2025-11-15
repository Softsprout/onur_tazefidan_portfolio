import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Onur TAZEFİDAN | Portfolio",
  description: "Onur TAZEFİDAN | Portfolio",
  keywords: "Onur TAZEFİDAN, Onur, Tazefidan, portfolio, web developer, software developer, cyber security, programmer",
  authors: [{ name: "Onur TAZEFİDAN" }],
  creator: "Onur TAZEFİDAN",
  publisher: "Onur TAZEFİDAN",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-zinc-100 font-mono transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
