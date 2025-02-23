import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "../components/footer";
import "@/styles/global.scss";
import "@/styles/components/card/card.scss";

const BodyFont = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={BodyFont.className + " theme-light"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
