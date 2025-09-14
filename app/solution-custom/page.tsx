import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CustomSolutionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto space-y-12">
          {/* Hero */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Custom Document AI Solutions</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              When pre-trained models aren't enough, we build custom AI solutions tailored to your unique documents and
              workflows. Whether you need to process proprietary forms, legacy documents, or industry-specific
              paperwork, our team creates AI models that understand your exact requirements.
            </p>
          </div>

          {/* Process */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Consultation</h3>
                <p className="text-muted-foreground">
                  We analyze your document types, data extraction needs, and integration requirements. Our experts
                  design a custom solution that fits seamlessly into your existing workflows.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Model Training</h3>
                <p className="text-muted-foreground">
                  Using your document samples, we train specialized AI models that understand your specific formats,
                  layouts, and data patterns. Our models achieve industry-leading accuracy for your use case.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Deployment</h3>
                <p className="text-muted-foreground">
                  We deploy your custom model through our secure, scalable API infrastructure. Integration is seamless
                  with comprehensive documentation and developer support.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Ongoing Support</h3>
                <p className="text-muted-foreground">
                  Continuous monitoring and model improvements ensure optimal performance. We provide ongoing support
                  and updates as your document processing needs evolve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container">
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
