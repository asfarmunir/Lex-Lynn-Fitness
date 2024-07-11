import type { Metadata } from "next";
import { Poppins, Oxanium, Averia_Serif_Libre } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";

const oxanium = Oxanium({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-oxanium",
});
const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-oxanium",
});

const averia = Averia_Serif_Libre({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-averia",
});

export const metadata: Metadata = {
  title: "Fitness Dashboard",
  description: " A fitness dashboard for tracking your workouts and progress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning suppressContentEditableWarning>
      <body className={averia.variable}>
        {/* <NextTopLoader
          color="blue"
          initialPosition={0.08}
          crawlSpeed={200}
          height={2}
          crawl={true}
          // showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 5px #2299DD,0 0 5px #2299DD"
        /> */}
        <div
          className=" sticky
        top-0
        z-50
        w-full
        "
        >
          <Navbar />
        </div>
        <main className="flex pt-16 items-start overflow-hidden  max-h-screen justify-between w-full">
          <Sidebar />
          <section className=" w-full">{children}</section>
        </main>
        {/* <Toaster position="top-center" /> */}
      </body>
    </html>
  );
}
