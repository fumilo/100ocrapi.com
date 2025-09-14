"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { CreditCard } from "lucide-react"

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-6xl mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-1">
          <CreditCard className="h-7 w-7 text-primary" />
          <div className="flex items-baseline">
            <span className="text-2xl font-semibold text-white tracking-tight">100</span>
            <span className="text-base font-light text-white tracking-tight">OCRAPI</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors">
            Products
          </Link>
          <Link href="/solutions" className="text-sm font-medium hover:text-primary transition-colors">
            Solutions
          </Link>
          <Link
            href="/developers"
            className={`text-sm font-medium transition-colors ${
              pathname.startsWith("/developers") ? "text-primary font-semibold" : "hover:text-primary"
            }`}
          >
            Developers
          </Link>
          <Link href="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact Us
          </Link>
        </nav>

        <Button asChild>
          <Link href="/contact">Get Free API Key</Link>
        </Button>
      </div>
    </header>
  )
}
