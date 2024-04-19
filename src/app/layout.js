import NavBar from "@/Components/NavBar";

export const metadata = {
  title: "F1 Roster",
  description: "Find the latest infos about the Formula 1 season.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
