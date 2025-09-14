import Link from "next/link"
import { CreditCard } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container max-w-6xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-1">
              <CreditCard className="h-7 w-7 text-primary" />
              <div className="flex items-baseline">
                <span className="text-2xl font-semibold text-white tracking-tight">100</span>
                <span className="text-base font-light text-white tracking-tight">OCRAPI</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Powering business automation with an AI-driven API for simple, fast, and reliable global ID verification.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/product-passport" className="text-muted-foreground hover:text-foreground">
                  Passport OCR
                </Link>
              </li>
              <li>
                <Link href="/product-drivers-license" className="text-muted-foreground hover:text-foreground">
                  Driver's License OCR
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-foreground">
                  National ID OCR
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/solution-kyc" className="text-muted-foreground hover:text-foreground">
                  KYC Verification
                </Link>
              </li>
              <li>
                <Link href="/solution-onboarding" className="text-muted-foreground hover:text-foreground">
                  User Onboarding
                </Link>
              </li>
              <li>
                <Link href="/solution-custom" className="text-muted-foreground hover:text-foreground">
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Developers</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/developers" className="text-muted-foreground hover:text-foreground">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2025{" "}
          <span className="inline-flex items-baseline">
            <span className="text-lg font-semibold text-white">100</span>
            <span className="text-sm font-light text-white">OCRAPI</span>
          </span>
          . All rights reserved.
        </div>
      </div>
    </footer>
  )
}
