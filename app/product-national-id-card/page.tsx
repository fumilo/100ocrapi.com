import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function NationalIdCardProductPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 px-4">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold">National ID Card OCR API</h1>
                <p className="text-xl text-muted-foreground">
                  Our advanced National ID Card OCR API supports a vast and growing library of national ID cards from
                  diverse regions including Southeast Asia, Latin America, and Europe. This comprehensive solution
                  enables robust KYC (Know Your Customer) processes and identity proofing workflows, delivering
                  exceptional accuracy across multiple document formats and security features to streamline your
                  verification operations.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Extracted Data Fields</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• National ID Number</li>
                  <li>• Full Name</li>
                  <li>• Date of Birth</li>
                  <li>• Address</li>
                  <li>• Gender</li>
                  <li>• Issuing Authority</li>
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
  "document_type": "NATIONAL_ID",
  "id_data": {
    "national_id_number": "A123456789",
    "full_name": "MARIA GONZALEZ LOPEZ",
    "date_of_birth": "1988-07-12",
    "address": "Calle Principal 456, Madrid",
    "gender": "F",
    "issuing_authority": "Ministry of Interior",
    "expiration_date": "2028-07-12"
  },
  "confidence": 0.978
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
