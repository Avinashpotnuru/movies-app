"use client";

import { Provider } from "react-redux";

// import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

import { store } from "@/store/store";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={inter.className}>
          <Navbar />
          <div className="pt-[180px] sm:pt-[110px] "> {children}</div>
        </body>
      </Provider>
    </html>
  );
}
