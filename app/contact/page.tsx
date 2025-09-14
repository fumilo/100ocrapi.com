import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Our Experts</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tell us about your project, and we'll help you find the best solution.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 px-4">
        <div className="container max-w-6xl mx-auto flex justify-center">
          <div className="w-full max-w-lg">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input id="email" type="email" placeholder="john@company.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">WhatsApp (Optional)</Label>
                    <Input id="whatsapp" placeholder="+1 (555) 123-4567" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="needs">Describe your needs</Label>
                    <Textarea
                      id="needs"
                      placeholder="Tell us about your project, document types, expected volume, and any specific requirements..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
