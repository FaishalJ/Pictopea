import type { Metadata } from "next";
import { IBM_Plex_Sans as IBMPlex } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import { cn } from "@/lib/utils";

const Implex = IBMPlex({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "Pictopea",
  description: "Ai-powered edit and image generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider afterSignOutUrl="/" appearance={{
      variables: {colorPrimary: '#624cf5'}
    }}>
      <html lang="en">
        <body className={cn("font-Implex antialiased", Implex.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
