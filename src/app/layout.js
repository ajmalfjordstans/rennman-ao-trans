import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ['400', '600', '700'], // Choose the required weights
  subsets: ['latin'], // Specify the subset if needed
});
export const metadata = {
  title: "Rennman AO Trans",
  description: "Generated by Fjordstans",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Layout>
          <Navbar />
          {children}
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
