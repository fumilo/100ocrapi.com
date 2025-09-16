import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function OnboardingSolutionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto space-y-12">
          {/* Hero */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Automated User Onboarding</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              A long and tedious registration process is a major reason for user drop-off. Our AI-powered OCR transforms
              onboarding by allowing users to simply snap a photo of their ID to auto-fill registration forms, creating
              a seamless experience that boosts conversion rates.
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">How Our AI Helps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Frictionless Registration</h3>
                <p className="text-muted-foreground">
                  Replace lengthy forms with a simple photo capture. Users can complete registration in under 30 seconds
                  by taking a picture of their ID, dramatically reducing abandonment rates.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Increase Conversion Rates</h3>
                <p className="text-muted-foreground">
                  Studies show that simplified onboarding can increase conversion rates by up to 40%. Our AI eliminates
                  the biggest friction point in user acquisition.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Enhance Data Accuracy</h3>
                <p className="text-muted-foreground">
                  Eliminate typos and data entry errors. Our AI extracts information directly from official documents,
                  ensuring your user database is accurate and up-to-date from day one.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Improve User Experience</h3>
                <p className="text-muted-foreground">
                  Create a modern, mobile-first onboarding experience that users expect. The convenience of photo-based
                  registration sets a positive first impression of your brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="bg-muted/30 rounded-2xl border-2 border-dashed border-muted-foreground/20 p-12 text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Automate Your Workflows?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Talk to our experts to design and integrate a custom workflow that fits your specific needs. We'll help
              you streamline your document processing and identity verification processes.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Contact an Expert</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
