import "@/app/ui/global.css"
import { playfair_Display } from "./ui/fonts";

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
