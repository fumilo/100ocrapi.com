"use client"

import { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Button from "./Button"
import Copy from "./Copy"

const apiNavigation = {
  // ... existing data ...
}

const apiData = {
  // ... existing data ...
}

export default function APIDocumentationPage() {
  const [activeEndpoint, setActiveEndpoint] = useState("")
  const [activeLanguage, setActiveLanguage] = useState("javascript")

  const currentEndpoint = apiData[activeEndpoint]

  const toggleRegion = (region) => {
    // ... existing logic ...
  }

  const copyToClipboard = (text) => {
    // ... existing logic ...
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        {/* Left Column - Navigation Sidebar (unchanged) */}
        <aside className="w-80 border-r bg-muted/30 h-screen sticky top-0 overflow-y-auto">
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">API Documentation</h2>
            <nav className="space-y-2">
              {Object.entries(apiNavigation).map(([category, items]) => (
                <div key={category} className="space-y-1">
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide px-2 py-1">
                    {category}
                  </h3>
                  {items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveEndpoint(item.id)}
                      className={`w-full text-left px-2 py-1.5 text-sm rounded-md transition-colors ${
                        activeEndpoint === item.id
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.name}</span>
                        <span
                          className={`text-xs px-1.5 py-0.5 rounded ${
                            item.method === "POST"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                              : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          }`}
                        >
                          {item.method}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              ))}
            </nav>
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto">
          <div className="p-8 max-w-none">
            {/* Page Title and Summary */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4">{currentEndpoint.name}</h1>
              <p className="text-lg text-muted-foreground mb-6">{currentEndpoint.description}</p>

              {/* Endpoint Information */}
              <div className="bg-muted/50 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-4 mb-2">
                  <span
                    className={`text-sm font-medium px-2 py-1 rounded ${
                      currentEndpoint.method === "POST"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    }`}
                  >
                    {currentEndpoint.method}
                  </span>
                  <code className="text-sm bg-background px-2 py-1 rounded border">{currentEndpoint.endpoint}</code>
                </div>
              </div>
            </div>

            {/* Request Parameters Table */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Request Parameters</h2>
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-3 font-medium">Parameter</th>
                      <th className="text-left p-3 font-medium">Type</th>
                      <th className="text-left p-3 font-medium">Required</th>
                      <th className="text-left p-3 font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentEndpoint.parameters.map((param, index) => (
                      <tr key={index} className="border-t">
                        <td className="p-3 font-mono text-sm">{param.name}</td>
                        <td className="p-3">
                          <span className="text-sm bg-muted px-2 py-1 rounded">{param.type}</span>
                        </td>
                        <td className="p-3">
                          {param.required ? (
                            <span className="text-sm text-red-600 dark:text-red-400">Required</span>
                          ) : (
                            <span className="text-sm text-muted-foreground">Optional</span>
                          )}
                        </td>
                        <td className="p-3 text-sm text-muted-foreground">{param.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Response Fields Table */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Response Fields</h2>
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-3 font-medium">Field</th>
                      <th className="text-left p-3 font-medium">Type</th>
                      <th className="text-left p-3 font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentEndpoint.responseFields.map((field, index) => (
                      <tr key={index} className="border-t">
                        <td className="p-3 font-mono text-sm">{field.name}</td>
                        <td className="p-3">
                          <span className="text-sm bg-muted px-2 py-1 rounded">{field.type}</span>
                        </td>
                        <td className="p-3 text-sm text-muted-foreground">{field.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Code Examples Section - moved to bottom */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Code Examples</h2>

              {/* Language Tabs */}
              <div className="flex space-x-1 mb-4 bg-muted/30 p-1 rounded-lg w-fit">
                {Object.keys(currentEndpoint.codeExamples).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setActiveLanguage(lang)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                      activeLanguage === lang
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              {/* Code Block */}
              <div className="relative">
                <pre className="bg-muted/50 rounded-lg p-4 overflow-x-auto text-sm">
                  <code>{currentEndpoint.codeExamples[activeLanguage]}</code>
                </pre>
                <button
                  onClick={() => copyToClipboard(currentEndpoint.codeExamples[activeLanguage])}
                  className="absolute top-2 right-2 p-2 text-muted-foreground hover:text-foreground transition-colors"
                  title="Copy code"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Try It Out Section */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Try It Out</h2>
              <div className="bg-muted/30 rounded-lg p-6">
                <div className="space-y-4">
                  {currentEndpoint.parameters
                    .filter((param) => param.required)
                    .map((param, index) => (
                      <div key={index}>
                        <label className="block text-sm font-medium mb-2">
                          {param.name} <span className="text-red-500">*</span>
                        </label>
                        {param.type === "file" ? (
                          <input type="file" className="w-full p-2 border rounded-md bg-background" accept="image/*" />
                        ) : (
                          <input
                            type="text"
                            placeholder={`Enter ${param.name}`}
                            className="w-full p-2 border rounded-md bg-background"
                          />
                        )}
                      </div>
                    ))}
                  <Button className="w-full">Send Request</Button>
                </div>
              </div>
            </div>

            {/* Rate Limiting Info */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <h3 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Rate Limiting</h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                This endpoint is limited to 100 requests per minute. Contact support for higher limits.
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
