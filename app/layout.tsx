import type { Metadata } from "next";
import { Source_Code_Pro, Lora } from "next/font/google";
import { Gradient } from "./components/gradient";
import { Navbar } from "./components/nav";
import { Footer } from "./components/footer";
import "./globals.css";

const sourceCodePro = Source_Code_Pro({
  variable: "--font-scp",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"]
});

const lora = Lora({
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Amanda Yap",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sourceCodePro.variable}>
      <body className="max-w-3xl mx-4 mt-8 lg:mx-auto">
       
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Gradient />
          <Navbar />
          {children}
          <Footer />
        </main>
     
      </body>
    </html>
  );
}