import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FixedMedias from "@/components/FixedMedias";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: `Tauhidul Islam - MERN Stack Developer Portfolio`,
  description:
    "Tauhidul Islam is a talented MERN Stack developer with a proven track record of delivering exceptional web projects. With expertise in MongoDB, Express.js, React.js, and Node.js, I specialize in crafting dynamic and responsive websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "relative h-full antialiased scroll-smooth selection:bg-primary selection:text-primary-foreground "
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="w-full min-h-[90vh] flex flex-col px-5">
            {children}
          </main>
          <Toaster />
          <Footer />
          <FixedMedias className="fixed right-0 top-44 bg-indigo-500" />
        </ThemeProvider>
      </body>
    </html>
  );
}
