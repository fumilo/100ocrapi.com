import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import {
  Play,
  FileText,
  CreditCard,
  Shield,
  Zap,
  CheckCircle,
  UserCheck,
  Clock,
  Globe,
  Database,
  Languages,
  Target,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-balance leading-tight">
            Instantly Verify Identities with <span className="text-primary">AI</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From user onboarding to KYC compliance, our OCR platform automates identity verification for your apps,
            websites, and offline operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/developers">
                <Play className="mr-2 h-4 w-4" />
                View Docs
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto text-center space-y-12">
          <h2 className="text-2xl font-semibold text-muted-foreground">
            Trusted by innovative platforms and industry leaders worldwide
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-60">
            {/* VeriScan Logo */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-muted-foreground">
                  {/* Magnifying glass with checkmark */}
                  <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="m30 30 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path
                    d="m15 20 3 3 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium text-muted-foreground">VeriScan</span>
            </div>

            {/* ConnectID Logo */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-muted-foreground">
                  {/* Two interconnected circles */}
                  <circle cx="18" cy="24" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="30" cy="24" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M24 18v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-sm font-medium text-muted-foreground">ConnectID</span>
            </div>

            {/* Secure Ledger Logo */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-muted-foreground">
                  {/* Shield with stacked blocks */}
                  <path
                    d="M24 4L36 10v14c0 8-5.4 15.4-12 18-6.6-2.6-12-10-12-18V10L24 4z"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <rect x="18" y="16" width="12" height="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <rect x="18" y="21" width="12" height="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <rect x="18" y="26" width="12" height="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
              <span className="text-sm font-medium text-muted-foreground">Secure Ledger</span>
            </div>

            {/* Global Pass Logo */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-muted-foreground">
                  {/* Globe with arrow */}
                  <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M8 24h32" stroke="currentColor" strokeWidth="2" />
                  <path d="M24 8c4 4 4 12 0 16s-4 12 0 16" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path
                    d="m28 20 4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium text-muted-foreground">Global Pass</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-primary">AI-Powered</span> OCR for Global ID Documents
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-xl">Passport OCR</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Intelligently extract all Machine-Readable Zone (MRZ) data, including name, nationality, and document
                  number.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CreditCard className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-xl">Driver's License OCR</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our AI accurately parses addresses, expiration dates, and class types from driver's licenses across
                  multiple countries.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-xl">National ID Card OCR</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Reliable data extraction for national identity cards across Southeast Asia, Latin America, and more.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-xl">Custom Document AI</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Don't see what you need? Our AI platform can be trained to understand any ID document type.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Powering <span className="text-primary">Global</span> Identity Verification
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <Globe className="h-7 w-7 text-primary mx-auto mb-4" />
              <div className="text-2xl md:text-3xl font-bold text-primary">200+</div>
              <h3 className="text-base font-semibold">Countries Supported</h3>
            </div>

            <div className="text-center space-y-2">
              <Database className="h-7 w-7 text-primary mx-auto mb-4" />
              <div className="text-2xl md:text-3xl font-bold text-primary">95%</div>
              <h3 className="text-base font-semibold">ID Documents Covered</h3>
            </div>

            <div className="text-center space-y-2">
              <Languages className="h-7 w-7 text-primary mx-auto mb-4" />
              <div className="text-2xl md:text-3xl font-bold text-primary">100+</div>
              <h3 className="text-base font-semibold">Languages Recognized</h3>
            </div>

            <div className="text-center space-y-2">
              <Target className="h-7 w-7 text-primary mx-auto mb-4" />
              <div className="text-2xl md:text-3xl font-bold text-primary">99%+</div>
              <h3 className="text-base font-semibold">Accuracy Rate</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-primary">Intelligent Automation</span> for Your Business
            </h2>
          </div>

          <div className="space-y-20">
            {/* Row 1: KYC - Text left, Image right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold">AI-Powered KYC Verification</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Automate identity verification for finance, crypto, and other regulated industries to reduce manual
                  costs and meet compliance requirements with enterprise-grade accuracy.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/a-dark--abstract--futuristic-image-representing-di.jpg"
                  alt="AI-Powered KYC Verification"
                  className="w-full h-[320px] object-cover"
                />
              </div>
            </div>

            {/* Row 2: Onboarding - Image left, Text right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden shadow-lg lg:order-1">
                <img
                  src="/a-dark--minimalist--abstract-image-symbolizing-a-s.jpg"
                  alt="Automated User Onboarding"
                  className="w-full h-[320px] object-cover"
                />
              </div>
              <div className="space-y-6 lg:order-2">
                <div className="flex items-center space-x-4 mb-4">
                  <UserCheck className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold">Automated User Onboarding</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Allow users to automatically fill forms by snapping a picture of their ID, boosting conversion with a
                  frictionless AI experience that reduces drop-off rates.
                </p>
              </div>
            </div>

            {/* Row 3: Age Verification - Text left, Image right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold">Age Verification</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Use our AI to provide fast, reliable age verification for gaming, online retail, and other restricted
                  services with instant results and regulatory compliance.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/a-dark--abstract--tech-themed-image-for-age-verifi.jpg"
                  alt="Age Verification"
                  className="w-full h-[320px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              What <span className="text-primary">Our Customers</span> Say
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {/* Slide 1 - Existing testimonial with avatar */}
                <CarouselItem>
                  <Card className="border-2 border-primary/20 shadow-xl">
                    <CardContent className="p-12 text-center space-y-8">
                      <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed text-balance">
                        "The accuracy and sub-second processing speed are game-changing for our user onboarding flow.
                        100ocrAPI handles documents our previous provider couldn't."
                      </blockquote>
                      <div className="space-y-4">
                        <div className="w-16 h-16 rounded-full bg-muted mx-auto flex items-center justify-center overflow-hidden">
                          <img
                            src="/professional-woman-avatar-brenda-garcia.jpg"
                            alt="Brenda Garcia"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="text-xl font-semibold">Brenda Garcia</div>
                          <div className="text-muted-foreground">Lead Developer at RegiTech Corp</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>

                {/* Slide 2 - New testimonial focusing on accuracy */}
                <CarouselItem>
                  <Card className="border-2 border-primary/20 shadow-xl">
                    <CardContent className="p-12 text-center space-y-8">
                      <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed text-balance">
                        "We've tried various OCR solutions, but 100ocrAPI's precision on complex documents is unmatched.
                        It significantly reduced our error rates and manual review time, boosting our operational
                        efficiency."
                      </blockquote>
                      <div className="space-y-4">
                        <div className="w-16 h-16 rounded-full bg-muted mx-auto flex items-center justify-center overflow-hidden">
                          <img
                            src="/professional-man-avatar-dr-alex-chen.jpg"
                            alt="Dr. Alex Chen"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="text-xl font-semibold">Dr. Alex Chen</div>
                          <div className="text-muted-foreground">Head of Compliance at Quantum Financial</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>

                {/* Slide 3 - New testimonial focusing on cost-effectiveness */}
                <CarouselItem>
                  <Card className="border-2 border-primary/20 shadow-xl">
                    <CardContent className="p-12 text-center space-y-8">
                      <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed text-balance">
                        "Implementing 100ocrAPI was a smart investment. The competitive pricing, combined with its high
                        performance, allowed us to scale our identity verification without breaking the bank. Excellent
                        value!"
                      </blockquote>
                      <div className="space-y-4">
                        <div className="w-16 h-16 rounded-full bg-muted mx-auto flex items-center justify-center overflow-hidden">
                          <img
                            src="/professional-woman-avatar-sarah-miller.jpg"
                            alt="Sarah Miller"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="text-xl font-semibold">Sarah Miller</div>
                          <div className="text-muted-foreground">Operations Director at SwiftLogistics</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>

              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Discuss Your Project with an <span className="text-primary">AI Expert</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Unsure which API is right for you? Talk to our experts to design the perfect workflow. We provide generous
            free credits and flexible, long-term trial periods to ensure our solution fits your needs perfectly.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Contact an Expert</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
