"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { Book, Key, CreditCard, Menu, X, ChevronDown, ChevronRight, Globe, Wrench } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface ApiDocsLayoutProps {
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
    title: "Asia",
    collapsible: true,
    items: [
      {
        title: "PHILIPPINES",
        isCountry: true,
        items: [
          { title: "Philippines TinID OCR", href: "/docs/philippines-tinid-ocr", icon: CreditCard },
          { title: "Philippines UMID OCR", href: "/docs/philippines-umid-ocr", icon: CreditCard },
          {
            title: "Philippines Driver's License OCR",
            href: "/docs/philippines-drivers-license-ocr",
            icon: CreditCard,
          },
          { title: "Philippines Voter's ID OCR", href: "/docs/philippines-voters-id-ocr", icon: CreditCard },
        ],
      },
      {
        title: "INDIA",
        isCountry: true,
        items: [
          { title: "India Pan OCR", href: "/docs/india-pan-ocr", icon: CreditCard },
          { title: "India Aadhaar Back OCR", href: "/docs/india-aadhaar-back-ocr", icon: CreditCard },
          { title: "India Aadhaar Front OCR", href: "/docs/india-aadhaar-front-ocr", icon: CreditCard },
        ],
      },
      {
        title: "THAILAND",
        isCountry: true,
        items: [
          { title: "Thailand Driver's License OCR", href: "/docs/thailand-drivers-license-ocr", icon: CreditCard },
          { title: "Thailand ID Card OCR", href: "/docs/thailand-id-card-ocr", icon: CreditCard },
        ],
      },
      {
        title: "INDONESIA",
        isCountry: true,
        items: [{ title: "Indonesia KTP OCR", href: "/docs/indonesia-ktp-ocr", icon: CreditCard }],
      },
      {
        title: "PAKISTAN",
        isCountry: true,
        items: [{ title: "Pakistan ID Card OCR", href: "/docs/pakistan-id-card-ocr", icon: CreditCard }],
      },
      {
        title: "MALAYSIA",
        isCountry: true,
        items: [{ title: "Malaysia ID Card OCR", href: "/docs/malaysia-id-card-ocr", icon: CreditCard }],
      },
      {
        title: "BENGAL (Bangladesh)",
        isCountry: true,
        items: [{ title: "Bengal ID Card OCR", href: "/docs/bengal-id-card-ocr", icon: CreditCard }],
      },
    ],
  },
  {
    title: "South America",
    collapsible: true,
    items: [
      {
        title: "COLOMBIA",
        isCountry: true,
        items: [{ title: "Colombia ID Card OCR", href: "/docs/colombia-id-card-ocr", icon: CreditCard }],
      },
      {
        title: "PERU",
        isCountry: true,
        items: [{ title: "Peru ID Card OCR", href: "/docs/peru-id-card-ocr", icon: CreditCard }],
      },
      {
        title: "ARGENTINA",
        isCountry: true,
        items: [{ title: "Argentina ID Card OCR", href: "/docs/argentina-id-card-ocr", icon: CreditCard }],
      },
    ],
  },
  {
    title: "North America",
    collapsible: true,
    items: [
      {
        title: "MEXICO",
        isCountry: true,
        items: [{ title: "Mexico ID Card OCR", href: "/docs/mexico-id-card-ocr", icon: CreditCard }],
      },
    ],
  },
  {
    title: "Europe",
    collapsible: true,
    items: [
      {
        title: "ROMANIA",
        isCountry: true,
        items: [{ title: "Romanian ID Card OCR", href: "/docs/romanian-id-card-ocr", icon: CreditCard }],
      },
    ],
  },
  {
    title: "Africa",
    collapsible: true,
    items: [
      {
        title: "GHANA",
        isCountry: true,
        items: [{ title: "Ghana ID Card OCR", href: "/docs/ghana-id-card-ocr", icon: CreditCard }],
      },
    ],
  },
  {
    title: "GLOBAL DOCUMENTS",
    items: [{ title: "Passport OCR", href: "/docs/passport-ocr", icon: Globe }],
  },
  {
    title: "CUSTOM SOLUTIONS",
    items: [{ title: "Custom OCR API", href: "/docs/custom-ocr-api", icon: Wrench }],
  },
]

export function ApiDocsLayout({ children, codeExample }: ApiDocsLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<string[]>([])
  const pathname = usePathname()

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionTitle) ? prev.filter((title) => title !== sectionTitle) : [...prev, sectionTitle],
    )
  }

  const renderNavigationItems = (items: any[], level = 0) => {
    return items.map((item) => {
      if (item.items) {
        // This is a section or country with sub-items
        const isExpanded = expandedSections.includes(item.title)
        const isCountry = item.isCountry

        return (
          <div key={item.title}>
            <button
              onClick={() => toggleSection(item.title)}
              className={cn(
                "flex items-center justify-between w-full text-left px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground rounded-md",
                isCountry ? "font-medium text-muted-foreground" : "font-semibold",
              )}
            >
              <span className={cn(isCountry && "text-xs uppercase tracking-wider")}>{item.title}</span>
              {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </button>
            {isExpanded && (
              <div className={cn("ml-4 space-y-1", isCountry && "ml-6")}>
                {renderNavigationItems(item.items, level + 1)}
              </div>
            )}
          </div>
        )
      } else {
        // This is a regular navigation item
        const Icon = item.icon
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
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
        )
      }
    })
  }

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
            "fixed top-16 left-0 z-50 h-[calc(100vh-4rem)] w-80 transform border-r bg-card transition-transform lg:relative lg:top-0 lg:translate-x-0",
            sidebarOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between p-4 lg:hidden">
              <span className="text-lg font-semibold">API Documentation</span>
              <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <ScrollArea className="flex-1 px-4 py-6">
              <nav className="space-y-6">
                {navigation.map((section) => (
                  <div key={section.title}>
                    {section.collapsible ? (
                      <div>
                        <button
                          onClick={() => toggleSection(section.title)}
                          className="flex items-center justify-between w-full text-left mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {section.title}
                          {expandedSections.includes(section.title) ? (
                            <ChevronDown className="h-3 w-3" />
                          ) : (
                            <ChevronRight className="h-3 w-3" />
                          )}
                        </button>
                        {expandedSections.includes(section.title) && (
                          <div className="space-y-2">{renderNavigationItems(section.items)}</div>
                        )}
                      </div>
                    ) : (
                      <div>
                        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {section.title}
                        </h3>
                        <div className="space-y-1">{renderNavigationItems(section.items)}</div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </ScrollArea>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 lg:ml-80">
          <div className="flex">
            {/* Center Column - Main Content */}
            <main className="flex-1 min-w-0">
              {/* Mobile menu button */}
              <div className="sticky top-16 z-30 flex items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4 lg:hidden">
                <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(true)}>
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Toggle navigation</span>
                </Button>
                <span className="text-sm font-medium">API Documentation</span>
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
