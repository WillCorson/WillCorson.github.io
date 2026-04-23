import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/navbar";
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Will Corson | Portfolio",
  description: "Personal portfolio of Will Corson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          {children}
        </main>
      </body>
    </html>
  );
}
