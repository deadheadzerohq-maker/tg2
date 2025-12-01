import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "TenderGuard",
  description: "Unlimited carrier vetting for freight brokers."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
