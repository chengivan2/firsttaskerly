import { GeistSans } from "geist/font/sans";
import "./globals.css";

const defaultUrl = "https://firsttaskerly.vercel.app"

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "First Taskerly",
  description: "The fastest way to manage your tasks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
