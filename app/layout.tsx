import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Island Traffic Defense | Nassau & Suffolk County Traffic Lawyers",
  description:
    "Experienced Long Island traffic defense representation for speeding tickets, reckless driving, suspended licenses, CDL matters, and all moving violations in Nassau and Suffolk County. 20+ years of local court experience. Spanish language support available.",
  keywords:
    "traffic ticket lawyer Long Island, Nassau County traffic defense, Suffolk County speeding ticket attorney, CDL traffic violation, suspended license defense, moving violation lawyer Huntington NY",
  openGraph: {
    title: "Island Traffic Defense | Nassau & Suffolk County Traffic Lawyers",
    description:
      "Strategic traffic defense for Nassau and Suffolk County drivers. Protect your license and reduce insurance premiums.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
