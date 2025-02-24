import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
const inter = Inter({ subsets: ['latin'] })
import Providers from "./Providers";

export const metadata = {
  title: "IMDb clone",
  description: "this is movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}>
      <Providers>
      <Header />
      {children}
      </Providers>
      </body>
    </html>
  );
}
