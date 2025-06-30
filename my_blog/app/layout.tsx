import type React from "react"
import { Nav } from "@/components/nav"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/components/auth-provider"

import { Toaster } from "@/components/ui/toaster"
import "@/app/globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "博客系统",
  description: "一个使用 Next.js 和 Tailwind CSS 构建的现代博客系统",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <div className="flex flex-col min-h-screen">
              <Nav />
              <main className="flex-1 min-h-screen transition-all duration-300 ease-in-out">{children}</main>
              <footer className="border-t py-6">
                <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
                  © {new Date().getFullYear()} 博客系统. 保留所有权利.
                </div>
              </footer>
              <Toaster/>
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
