import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import { Providers } from "./providers";

export const metadata = {
  title: "F1 Roster",
  description: "Find the latest infos about the Formula 1 season.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
      <body style={{backgroundImage: "linear-gradient(to right, #606060, #353535, #606060)"}}>
        <NavBar />
        {children}
      </body>
      </Providers>
    </html>
  );
}
