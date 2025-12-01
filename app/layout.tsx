import type { Metadata } from "next";

import "./globals.css";
import HydrationWrapper from "./hydrationWrapper";

export const metadata: Metadata = {
  title: "Jess Bacheldor",
  description: "Web Dev Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{fontFamily: "Baloo-2-300"}}>
      <HydrationWrapper>
        {children}
      </HydrationWrapper>
       </body>
    </html>
  );
}
