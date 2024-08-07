import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '../src/css/agency.css';
import '../src/css/bootstrap.css';
import '../src/css/font-awesome/css/font-awesome.min.css';
import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/footer";
// import Navbar from "../components/Navbar"; // Adjust the import path as necessary

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OOSC Website",
  description: "Website for Opportunity Open Source Conference",
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
        {children}
        <Footer/>
      </body>
    </html>
  );
}
