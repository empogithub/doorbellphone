import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Digital Doorbell",
  description: "WebRTC Doorbell",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
