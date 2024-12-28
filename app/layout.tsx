import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Truth or Dare",
  description: "Created by Yurii Kulakovskyi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
