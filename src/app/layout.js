import { Inter } from "next/font/google";
import "./globals.css";
import "../../cyberpunk-css-main/cyberpunk.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cyberstudio",
  description: "The best photography studio",
}; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}