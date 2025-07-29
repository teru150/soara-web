import { Geist, Geist_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import { LanguageProvider } from "../contexts/LanguageContext";
import PageFooter from "@/components/PageFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
})

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
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} antialiased flex flex-col w-full justify-center items-center`}
        style={{backgroundColor: '#0a0a0a'}}
      >
        <LanguageProvider>
          <NavBar />
          {children}
          <PageFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
