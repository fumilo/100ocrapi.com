import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { FileText, CreditCard, Shield, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Our AI-Powered OCR Products</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our pre-trained APIs for a variety of global ID documents.
          </p>
        </div>
      </section>

      {/* Section 1: Passport OCR (Text on Left, Image on Right) */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <FileText className="h-12 w-12 text-primary" />
              <h2 className="text-3xl font-bold">Passport OCR API</h2>
              <p className="text-lg text-muted-foreground">
                Go beyond simple data entry. Our AI-powered API instantly and accurately extracts all essential
                information from the Machine-Readable Zone (MRZ) of ICAO-compliant passports worldwide. Capture full
                names, document numbers, nationality, dates of birth, and expiration dates with over 99% accuracy,
                streamlining check-ins, identity verification, and compliance processes.
              </p>
              <Link href="/product-passport">
                <Button size="lg">Explore Passport API</Button>
              </Link>
            </div>
            <div>
              <Image
                src="/images/passport-ocr.jpg"
                alt="AI scanning a passport to extract MRZ data"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Driver's License OCR (Image on Left, Text on Right) */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:order-first">
              <Image
               src="/images/drivers-license-ocr.jpg"
                alt="Data being extracted from a driver's license for user onboarding"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <CreditCard className="h-12 w-12 text-primary" />
              <h2 className="text-3xl font-bold">Driver's License OCR API</h2>
              <p className="text-lg text-muted-foreground">
                Automate form-filling and enhance user onboarding with our intelligent Driver's License OCR. The API is
                trained to recognize and parse the complex and varied layouts of driver's licenses from numerous
                countries. It accurately extracts addresses, license classes, issue/expiration dates, and personal
                details, reducing manual input errors and friction.
              </p>
              <Link href="/product-drivers-license">
                <Button size="lg">Explore License API</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: National ID Card OCR (Text on Left, Image on Right) */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Shield className="h-12 w-12 text-primary" />
              <h2 className="text-3xl font-bold">National ID Card OCR API</h2>
              <p className="text-lg text-muted-foreground">
                Expand your global reach with reliable data extraction for national identity cards. Our solution
                supports a vast and growing library of ID cards from diverse regions, including Southeast Asia, Latin
                America, and Europe. Reliably capture national identification numbers, names, and other key data points
                for robust KYC and identity proofing.
              </p>
              <Link href="/product-national-id-card">
                <Button size="lg">Explore ID Card API</Button>
              </Link>
            </div>
            <div>
              <Image
                src="/images/national-id-ocr.jpg"
                alt="Global national ID cards being processed for KYC verification"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Custom Document AI (Image on Left, Text on Right) */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:order-first">
              <Image
                src="/images/custom-document-ai.jpg"
                alt="Abstract representation of a custom AI model being trained for unique documents"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <Zap className="h-12 w-12 text-primary" />
              <h2 className="text-3xl font-bold">Custom Document AI</h2>
              <p className="text-lg text-muted-foreground">
                Have a unique document type? Don't let rigid solutions limit your workflow. Our flexible AI platform can
                be fine-tuned to understand virtually any structured or semi-structured document. From residence permits
                to specific industry credentials, we'll work with you to build a custom OCR model tailored to your exact
                needs.
              </p>
              <Link href="/contact">
                <Button size="lg">Request a Custom Solution</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
