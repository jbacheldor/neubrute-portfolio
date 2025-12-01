import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "Portfolio",
  description: "bark bark bark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{fontFamily: "Baloo_Bold"}}>
        {children}
      </body>
    </html>
  );
}
