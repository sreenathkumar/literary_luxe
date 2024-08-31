import Header from "@/components/Header";
import Playfair from "@/lib/fontLoader";
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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
