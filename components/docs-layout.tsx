"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { Book, Key, FileText, CreditCard, Shield, AlertCircle, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface DocsLayoutProps {
  children: React.ReactNode
  codeExample?: React.ReactNode
}

const navigation = [
  {
    title: "GETTING STARTED",
    items: [
      { title: "Introduction", href: "/docs/introduction", icon: Book },
      { title: "Authentication", href: "/docs/authentication", icon: Key },
    ],
  },
  {
    title: "CORE APIS",
    items: [
      { title: "Romanian ID Card OCR", href: "/docs/romanian-id-card", icon: CreditCard },
      { title: "Passport OCR", href: "/docs/passport-ocr", icon: FileText },
      { title: "Driver's License OCR", href: "/docs/drivers-license", icon: Shield },
    ],
  },
  {
    title: "REFERENCE",
    items: [{ title: "Error Codes", href: "/docs/error-codes", icon: AlertCircle }],
  },
]

export function DocsLayout({ children, codeExample }: DocsLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Left Sidebar - Navigation */}
        <aside
          className={cn(
            "fixed top-16 left-0 z-50 h-[calc(100vh-4rem)] w-64 transform border-r bg-card transition-transform lg:relative lg:top-0 lg:translate-x-0",
            sidebarOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between p-4 lg:hidden">
              <span className="text-lg font-semibold">Documentation</span>
              <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <ScrollArea className="flex-1 px-4 py-6">
              <nav className="space-y-8">
                {navigation.map((section) => (
                  <div key={section.title}>
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {section.title}
                    </h3>
                    <ul className="space-y-1">
                      {section.items.map((item) => {
                        const Icon = item.icon
                        const isActive = pathname === item.href
                        return (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className={cn(
                                "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                                isActive && "bg-accent text-accent-foreground font-medium",
                              )}
                              onClick={() => setSidebarOpen(false)}
                            >
                              <Icon className="h-4 w-4" />
                              {item.title}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                ))}
              </nav>
            </ScrollArea>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 lg:ml-64">
          <div className="flex">
            {/* Center Column - Main Content */}
            <main className="flex-1 min-w-0">
              {/* Mobile menu button */}
              <div className="sticky top-16 z-30 flex items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4 lg:hidden">
                <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(true)}>
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Toggle navigation</span>
                </Button>
                <span className="text-sm font-medium">Documentation</span>
              </div>

              <div className="container max-w-4xl mx-auto px-4 py-8 lg:py-12">{children}</div>
            </main>

            {/* Right Sidebar - Code Examples */}
            {codeExample && (
              <aside className="hidden xl:block w-96 border-l bg-card/50">
                <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-auto">
                  <div className="p-6">{codeExample}</div>
                </div>
              </aside>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
