import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import { Providers } from "./providers";
import './index.css'

export const metadata = {
  title: "F1 Roster",
  description: "Find the latest infos about the Formula 1 season.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body>
          <main>
            <NavBar />
            {" "}
            {children}
          </main>
        </body>
      </Providers>
    </html>
  );
}
