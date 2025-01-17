import Footer from "./components/footer";
import "./globals.css";
import BackToTopButton from "./components/BacktoTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
                <BackToTopButton/>
      </body>
    </html>
  );
}
