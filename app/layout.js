import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/Header/MainHeader";
import ReactQueryProvider from "./ReactQueryProvider.jsx";
import { StoreProvider } from "@/lib/storeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Purchase Zone",
  description: "Purchase best quality products with affordable price",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <ReactQueryProvider>
        <html lang="en">
          <body className={inter.className}>
            <MainHeader />
            {children}
          </body>
        </html>
      </ReactQueryProvider>
    </StoreProvider>
  );
}
