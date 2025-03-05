import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SynthML | Synthetic Data for Machine Learning",
  description: "Generate high-quality synthetic data to train your ML models faster and more effectively. Protect privacy, reduce bias, and overcome data scarcity challenges.",
  keywords: "synthetic data, machine learning, AI, data generation, privacy preservation, bias reduction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${robotoMono.variable} font-mono antialiased`}>
        {children}
      </body>
    </html>
  );
}
