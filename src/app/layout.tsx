import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/layout/navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kiran MK - AI Engineer Portfolio",
  description: "AI Engineer specializing in Python, TensorFlow & LLMs. Passionate about NLP, computer vision & deploying scalable ML solutions.",
  keywords: ["AI Engineer", "Machine Learning", "Python", "TensorFlow", "NLP", "Computer Vision", "Portfolio"],
  authors: [{ name: "Kiran MK" }],
  openGraph: {
    title: "Kiran MK - AI Engineer Portfolio",
    description: "AI Engineer specializing in Python, TensorFlow & LLMs. Passionate about NLP, computer vision & deploying scalable ML solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
