import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Portfolio | Gung De",
  description: "My personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="pt-20">
        <Navbar />
        {children}
      </body>
    </html>
  );
}


