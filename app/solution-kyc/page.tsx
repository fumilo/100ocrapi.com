import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function KYCSolutionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto space-y-12">
          {/* Hero */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">AI-Powered KYC & Identity Verification</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              In regulated industries like finance and crypto, fast and accurate Know Your Customer (KYC) processes are
              critical for compliance and user experience. Our AI-powered OCR eliminates manual document review, reduces
              fraud, and accelerates customer onboarding while maintaining the highest security standards.
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">How Our AI Helps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Instant Data Extraction</h3>
                <p className="text-muted-foreground">
                  Extract customer information from ID documents in seconds, not minutes. Our AI processes multiple
                  document types with 99%+ accuracy, eliminating manual data entry errors.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Reduce Fraud</h3>
                <p className="text-muted-foreground">
                  Advanced AI algorithms detect document tampering, forgeries, and inconsistencies that human reviewers
                  might miss, protecting your business from fraudulent applications.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Improve Compliance</h3>
                <p className="text-muted-foreground">
                  Meet regulatory requirements with automated audit trails, consistent verification processes, and
                  detailed confidence scores for every document processed.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Scale Your Operations</h3>
                <p className="text-muted-foreground">
                  Handle thousands of verifications per hour without adding staff. Our API scales automatically to meet
                  demand spikes during marketing campaigns or product launches.
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
