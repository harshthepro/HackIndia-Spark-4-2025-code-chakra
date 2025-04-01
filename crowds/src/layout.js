import "./globals.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { CrowdFundingProvider } from "../../context/CrowdFunding"; // Use named import

export const metadata = {
  title: "My App",
  description: "Description of my app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CrowdFundingProvider>
          <NavBar />
          {children}
          <Footer />
        </CrowdFundingProvider>
      </body>
    </html>
  );
}
