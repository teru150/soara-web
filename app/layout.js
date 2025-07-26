import { Geist, Geist_Mono } from "next/font/google";
import Footer from "../components/Footer";
import "./globals.css";
import NavBar from "../components/NavBar";
import { LanguageProvider } from "../contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Soara-Official",
  description: "史上初の高校生有志鳥人間チーム, SOARAの公式ウェブサイトです。",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/favicon-light.ico',
        href: '/favicon-light.ico',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicon-dark.ico',
        href: '/favicon-dark.ico',
      },
    ],
    shortcut: [
      {
        url: '/favicon-light.ico',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon-dark.ico',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col w-full justify-center items-center`}
        style={{backgroundColor: '#0a0a0a'}}
      >
        <LanguageProvider>
          <NavBar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
