import Navbar from "@/components/ui/Navbar";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "My Portfolio",
  description: "Created with Next.js, Tailwind, and ShadCN",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
