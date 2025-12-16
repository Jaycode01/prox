import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prox",
  description:
    "Sending notes, messages, or contents to your future self is something to be considered.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
