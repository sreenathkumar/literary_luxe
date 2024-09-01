import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Playfair from "@/lib/fontLoader";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";


export default function RootLayout({
  children,
  params: { lang }
}: Readonly<{
  children: React.ReactNode,
  params: { lang: string }
}>) {
  return (
    <html lang={lang} className={Playfair.variable}>
      <body className={cn("flex flex-col min-h-screen")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
