import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from '../components/LanguageProvider';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saleh buamud | Web Developer & Software Engineer",
  description: "Personal portfolio of Saleh buamud - Web Developer specializing in PHP, JavaScript, HTML, CSS, and modern web technologies.",
  keywords: ["Web Developer", "Software Engineer", "PHP", "JavaScript", "HTML", "CSS", "Saleh buamud"],
  authors: [{ name: "Saleh buamud" }],
  openGraph: {
    title: "Saleh buamud | Web Developer & Software Engineer",
    description: "Personal portfolio of Saleh buamud - Web Developer specializing in PHP, JavaScript, HTML, CSS, and modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
