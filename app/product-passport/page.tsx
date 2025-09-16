import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function PassportProductPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold">Passport OCR API</h1>
                <p className="text-xl text-muted-foreground">
                  Our AI-powered Passport OCR API intelligently extracts key information from the Machine-Readable Zone
                  (MRZ) of all ICAO-9303 compliant travel documents. With industry-leading accuracy and lightning-fast
                  processing, streamline your identity verification workflows.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Extracted Data Fields</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Document Type</li>
                  <li>• Issuing Country</li>
                  <li>• Full Name</li>
                  <li>• Passport Number</li>
                  <li>• Nationality</li>
                  <li>• Date of Birth</li>
                  <li>• Gender</li>
                  <li>• Expiration Date</li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sample JSON Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="text-sm bg-muted p-4 rounded-md overflow-x-auto">
                    {`{
  "document_type": "PASSPORT",
  "mrz_data": {
    "full_name": "SMITH JOHN DOE",
    "passport_number": "123456789",
    "nationality": "USA",
    "date_of_birth": "1990-01-15",
    "gender": "M",
    "expiration_date": "2030-12-31",
    "issuing_country": "USA"
  },
  "confidence": 0.985
}`}
                  </pre>
                </CardContent>
              </Card>

              <Button className="w-full" size="lg" asChild>
                <Link href="/contact">Talk to an Expert</Link>
              </Button>
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
