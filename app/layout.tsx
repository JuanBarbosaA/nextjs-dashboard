import "@/app/ui/global.css"
import { playfair_Display } from "./ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dashboard"
  },
  description: "Dashboard clients and invoices",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh")
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair_Display.className} antialiased`}>
        {children}
        </body>
    </html>
  );
}
