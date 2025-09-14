import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function DriversLicenseProductPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 px-4">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold">Driver's License OCR API</h1>
                <p className="text-xl text-muted-foreground">
                  Accurately extract data from driver's licenses from the US, Canada, EU, and more. Our advanced AI
                  handles various formats, layouts, and security features to deliver consistent, reliable results for
                  your verification needs.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Extracted Data Fields</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Full Name</li>
                  <li>• Address</li>
                  <li>• License Number</li>
                  <li>• Date of Birth</li>
                  <li>• Issue Date</li>
                  <li>• Expiration Date</li>
                  <li>• Vehicle Class</li>
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
  "doc_type": "DRIVER_LICENSE",
  "data": {
    "full_name": "JANE DOE",
    "license_number": "D123456789",
    "address": "123 Main St, City, ST 12345",
    "date_of_birth": "1985-03-22",
    "issue_date": "2020-03-22",
    "expiration_date": "2025-03-22",
    "vehicle_class": "C"
  },
  "confidence": 0.972
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
