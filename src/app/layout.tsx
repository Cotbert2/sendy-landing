import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sendy – Instant File Sharing",
  description:
    "Share files instantly between devices on the same network. No cloud, no accounts, no limits.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
