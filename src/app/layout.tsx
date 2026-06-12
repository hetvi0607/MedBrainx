import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MedBrain X | AI Healthcare Platform",
    template: "%s | MedBrain X"
  },
  description: "A futuristic AI-powered healthcare ecosystem with digital twins, report intelligence, doctor booking, wellness coaching, and emergency care mode.",
  keywords: ["AI healthcare", "medical assistant", "digital twin", "health dashboard", "doctor marketplace"],
  openGraph: {
    title: "MedBrain X",
    description: "The healthcare platform people expect to see in 2035.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
