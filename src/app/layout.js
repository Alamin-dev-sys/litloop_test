import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Component/Navbar";
import FooterDarkTheme from "./Component/Footer";
import connectDB from "@/lib/database/database";
import { AuthProvider } from "./Provider/auth";
import QueryProvider from "./Component/QueryProvider";




const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  await connectDB()
  return (
    <html lang="en" className="scrollbar-hide">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased  `}>
      <AuthProvider>
      <QueryProvider>
      <Navbar/>
       <main className="w-full min-h-screen pt-[20vh] container mx-auto">
       {children}
       </main>
       <FooterDarkTheme/>
       </QueryProvider>
      </AuthProvider>
      </body>
    </html>
  );
}
