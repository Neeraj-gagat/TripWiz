import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TamboProvider } from "@tambo-ai/react";
import { components, tamboTools } from "@/lib/tambo";
import { Plus_Jakarta_Sans } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});


export const metadata: Metadata = {
  title: "TripWiz",
  description: "TripWiz AI - Your Ultimate Travel Companion",
  icons: {
    icon: "logo.png"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${plusJakartaSans.variable} ${geistMono.variable} antialiased`}
      >
        <TamboProvider  apiKey={process.env.TAMBO_CLIENT_KEY ?? ""}
        components={components}
        tools={tamboTools}
        >
          {/* <AutoRedirectToHotels /> */}
          {children}
          {/* <MessageThreadFull /> */}
          {/* <MessageThreadPanel /> */}
        </TamboProvider>       
      </body>
    </html>
  );
}
