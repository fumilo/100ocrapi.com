import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, UserCheck, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Intelligent Solutions for Your Business</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn how our AI-driven APIs can solve real-world business challenges and automate your workflows.
          </p>
        </div>
      </section>

      {/* Section 1: AI-Powered KYC Verification (Text on Left, Image on Right) */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <CheckCircle className="h-12 w-12 text-primary" />
              <h2 className="text-3xl font-bold">AI-Powered KYC Verification</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Navigate complex regulatory landscapes with confidence. Our enterprise-grade API automates identity
                verification for finance, crypto, and other regulated industries. By delivering over 99% accuracy on
                global ID documents, we help you reduce manual review costs, minimize human error, and ensure you meet
                stringent AML and KYC compliance requirements, all while accelerating customer onboarding.
              </p>
              <Link href="/solution-kyc">
                <Button size="lg" className="mt-4">
                  Explore KYC Solutions
                </Button>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="https://placehold.co/600x400/000000/FFFFFF?text=KYC+Compliance"
                alt="KYC Compliance Solution"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Automated User Onboarding (Image on Left, Text on Right) */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative md:order-first">
              <Image
                src="https://placehold.co/600x400/111827/FFFFFF?text=User+Onboarding"
                alt="User Onboarding Solution"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <UserCheck className="h-12 w-12 text-primary" />
              <h2 className="text-3xl font-bold">Frictionless User Onboarding</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Transform your signup process from a chore into a seamless, instantaneous interaction. Allow new users
                to onboard by simply snapping a picture of their ID. Our AI instantly extracts the necessary data to
                populate forms, eliminating tedious manual entry. This frictionless experience drastically reduces
                drop-off rates, boosts conversion, and sets a positive tone from the very first touchpoint.
              </p>
              <Link href="/solution-onboarding">
                <Button size="lg" className="mt-4">
                  Improve Onboarding Flows
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Custom Document AI Solutions (Text on Left, Image on Right) */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Clock className="h-12 w-12 text-primary" />
              <h2 className="text-3xl font-bold">Bespoke Document AI Solutions</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your business is unique, and your documents might be too. When pre-trained models don't fit your
                specific needs, we partner with you to build a tailor-made AI solution. From internal employee records
                to specialized industry permits, our team can train a custom model that understands your unique document
                structures and workflows, unlocking automation possibilities that off-the-shelf solutions can't.
              </p>
              <Link href="/solution-custom">
                <Button size="lg" className="mt-4">
                  Discuss a Custom Project
                </Button>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="https://placehold.co/600x400/1F2937/FFFFFF?text=Custom+Solutions"
                alt="Custom Solutions"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
