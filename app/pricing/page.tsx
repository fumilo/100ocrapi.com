import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose a plan that scales with your needs. Start for free, and only pay for what you use.
          </p>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-12 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Developer Tier */}
            <Card>
              <CardHeader>
                <CardTitle>Developer</CardTitle>
                <CardDescription>Perfect for testing and small projects</CardDescription>
                <div className="text-3xl font-bold">Free</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">500 API Calls / Month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">All Document Types</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Email Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">API Documentation</span>
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Business Tier - Highlighted */}
            <Card className="border-primary shadow-lg scale-105">
              <CardHeader>
                <CardTitle>Business</CardTitle>
                <CardDescription>For growing businesses and production use</CardDescription>
                <div className="space-y-1">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-bold">$0.005</span>
                    <span className="text-xl font-bold">-</span>
                    <span className="text-2xl font-bold">$0.01</span>
                    <span className="text-sm font-medium text-muted-foreground ml-1">USD / call</span>
                  </div>
                  <p className="text-xs text-muted-foreground text-center">Based on monthly volume</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Pay-as-you-go Volume</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">All Document Types</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Priority Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">99.9% Uptime SLA</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Advanced Analytics</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/contact">Start Business Plan</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Tier */}
            <Card>
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For large-scale operations</CardDescription>
                <div className="text-3xl font-bold">Custom</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">High-Volume Discounts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Custom Document Training</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Dedicated Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">On-Premise Deployment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Custom SLA</span>
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
