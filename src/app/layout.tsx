import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: '%s | Byte by Byte - Belajar Coding',
    default: 'Byte by Byte - Belajar Coding Online',
  },
  description: "Platform belajar coding online untuk HTML, CSS, dan JavaScript dengan pendekatan yang mudah dan menyenangkan.",
  keywords: ["coding", "belajar coding", "html", "css", "javascript", "tutorial", "pemrograman web"],
  authors: [
    {
      name: "Byte by Byte Team",
    },
  ],
  creator: "Byte by Byte Team",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://bytebybyte.com",
    title: "Byte by Byte - Belajar Coding Online",
    description: "Platform belajar coding online untuk HTML, CSS, dan JavaScript dengan pendekatan yang mudah dan menyenangkan.",
    siteName: "Byte by Byte",
  },
  twitter: {
    card: "summary_large_image",
    title: "Byte by Byte - Belajar Coding Online",
    description: "Platform belajar coding online untuk HTML, CSS, dan JavaScript dengan pendekatan yang mudah dan menyenangkan.",
    creator: "@bytebybyte",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50`}
      >
        {children}
      </body>
    </html>
  );
}
