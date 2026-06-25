import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mary Idowu — Executive Assistant & Customer Support Specialist",
  description:
    "Mary Idowu is an executive administrative assistant and customer support specialist who turns busy operations into seamless, well-run experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
