import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CookieGuard – Auto-update GDPR Cookie Banners",
  description: "Monitors your website for new tracking scripts and automatically updates GDPR cookie consent banners to keep you compliant."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="411c30b2-e70f-435d-943a-7593c2e1ae8e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
