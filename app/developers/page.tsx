"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronRight, Copy, Check } from "lucide-react"

const apiNavigation = [
  {
    title: "GETTING STARTED",
    items: [
      { id: "introduction", title: "Introduction" },
      { id: "authentication", title: "Authentication" },
    ],
  },
  {
    title: "Asia",
    collapsible: true,
    regions: [
      {
        country: "PHILIPPINES",
        apis: [
          { id: "philippines-tinid", title: "Philippines TinID OCR" },
          { id: "philippines-umid", title: "Philippines UMID OCR" },
          { id: "philippines-drivers-license", title: "Philippines Driver's License OCR" },
          { id: "philippines-voters-id", title: "Philippines Voter's ID OCR" },
        ],
      },
      {
        country: "INDIA",
        apis: [
          { id: "india-pan", title: "India Pan OCR" },
          { id: "india-aadhaar-back", title: "India Aadhaar Back OCR" },
          { id: "india-aadhaar-front", title: "India Aadhaar Front OCR" },
        ],
      },
      {
        country: "THAILAND",
        apis: [
          { id: "thailand-drivers-license", title: "Thailand Driver's License OCR" },
          { id: "thailand-id-card", title: "Thailand ID Card OCR" },
        ],
      },
      {
        country: "INDONESIA",
        apis: [{ id: "indonesia-ktp", title: "Indonesia KTP OCR" }],
      },
      {
        country: "PAKISTAN",
        apis: [{ id: "pakistan-id-card", title: "Pakistan ID Card OCR" }],
      },
      {
        country: "MALAYSIA",
        apis: [{ id: "malaysia-id-card", title: "Malaysia ID Card OCR" }],
      },
      {
        country: "BENGAL (Bangladesh)",
        apis: [{ id: "bengal-id-card", title: "Bengal ID Card OCR" }],
      },
    ],
  },
  {
    title: "South America",
    collapsible: true,
    regions: [
      {
        country: "COLOMBIA",
        apis: [{ id: "colombia-id-card", title: "Colombia ID Card OCR" }],
      },
      {
        country: "PERU",
        apis: [{ id: "peru-id-card", title: "Peru ID Card OCR" }],
      },
      {
        country: "ARGENTINA",
        apis: [{ id: "argentina-id-card", title: "Argentina ID Card OCR" }],
      },
    ],
  },
  {
    title: "North America",
    collapsible: true,
    regions: [
      {
        country: "MEXICO",
        apis: [{ id: "mexico-id-card", title: "Mexico ID Card OCR" }],
      },
    ],
  },
  {
    title: "Europe",
    collapsible: true,
    regions: [
      {
        country: "ROMANIA",
        apis: [{ id: "romania-id-card", title: "Romanian ID Card OCR" }],
      },
    ],
  },
  {
    title: "Africa",
    collapsible: true,
    regions: [
      {
        country: "GHANA",
        apis: [{ id: "ghana-id-card", title: "Ghana ID Card OCR" }],
      },
    ],
  },
  {
    title: "GLOBAL DOCUMENTS",
    items: [{ id: "passport", title: "Passport OCR" }],
  },
  {
    title: "CUSTOM SOLUTIONS",
    items: [{ id: "custom-ocr-api", title: "Custom OCR API" }],
  },
]

const apiData = {
  introduction: {
    title: "Introduction",
    summary:
      "Welcome to the 100ocrAPI documentation. Our AI-powered OCR platform provides instant, accurate data extraction from identity documents worldwide.",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold">What is 100ocrAPI?</h2>
        <p class="text-muted-foreground leading-relaxed">
          100ocrAPI is a comprehensive identity document verification platform that uses advanced AI and machine learning to extract structured data from passports, driver's licenses, national ID cards, and other identity documents. Our API is designed for developers who need reliable, fast, and accurate document processing for KYC compliance, user onboarding, and identity verification workflows.
        </p>
        
        <div class="bg-muted p-4 rounded-md">
          <h3 class="font-semibold mb-2">Base URL</h3>
          <code class="text-sm">https://api.100ocrapi.com/v1</code>
        </div>
        
        <h3 class="text-xl font-semibold">Key Features</h3>
        <ul class="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Support for 200+ countries and territories</li>
          <li>99%+ accuracy rate with advanced AI models</li>
          <li>Sub-second processing times</li>
          <li>Enterprise-grade security and compliance</li>
          <li>RESTful API with comprehensive documentation</li>
        </ul>
      </div>
    `,
  },
  authentication: {
    title: "Authentication",
    summary: "All API requests require authentication using your API key in the X-API-Key header.",
    content: `
      <div class="space-y-6">
        <p class="text-muted-foreground leading-relaxed">
          100ocrAPI uses API keys to authenticate requests. You can view and manage your API keys in the developer dashboard. Your API keys carry many privileges, so be sure to keep them secure!
        </p>
        
        <div class="bg-muted p-4 rounded-md">
          <h3 class="font-semibold mb-2">Authentication Header</h3>
          <code class="text-sm">X-API-Key: your_api_key_here</code>
        </div>
        
        <h3 class="text-xl font-semibold">Rate Limits</h3>
        <ul class="list-disc list-inside space-y-2 text-muted-foreground">
          <li><strong>Free Tier:</strong> 10 requests per minute, 1,000 requests per month</li>
          <li><strong>Starter Plan:</strong> 100 requests per minute, 10,000 requests per month</li>
          <li><strong>Business Plan:</strong> 1,000 requests per minute, unlimited monthly requests</li>
        </ul>
      </div>
    `,
  },
  "romania-id-card": {
    title: "Romanian ID Card Data Extraction API",
    summary:
      "This API provides a powerful tool for extracting and verifying data from Romanian ID cards. Our engine uses advanced algorithms to parse key information, including ID number, name, and personal details. The entire process is designed to mimic a reverse-engineered understanding of the card's data layout.",
    endpoint: "https://api.100ocrapi.com/v1/ro_ocr/general",
    method: "POST",
    requestParams: [
      {
        parameter: "img",
        type: "String",
        description:
          "The image of the Romanian ID card, encoded in Base64. For optimal performance, it is recommended to keep the image size below 200KB to ensure a swift response, typically within 2 seconds. Larger images will result in longer processing times.",
      },
    ],
    responseFields: [
      { field: "series", type: "string", description: "ID card series" },
      { field: "number", type: "string", description: "ID card number" },
      { field: "last_name", type: "string", description: "Last name as printed on the card" },
      { field: "first_name", type: "string", description: "First name as printed on the card" },
      { field: "nationality", type: "string", description: "Nationality" },
      { field: "place_of_birth", type: "string", description: "Place of birth" },
      { field: "address", type: "string", description: "Registered address" },
      { field: "issued_by", type: "string", description: "Issuing authority" },
      { field: "validity", type: "string", description: "Validity period" },
    ],
    customContent: `
      <div class="space-y-8">
        <!-- Separator -->
        <hr class="border-border" />

        <!-- Endpoints Section -->
        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">Endpoints</h2>
          <p class="text-muted-foreground">
            <code class="bg-muted px-2 py-1 rounded text-sm font-mono">POST https://api.100ocrapi.com/v1/ro_ocr/general</code>
          </p>
          <p class="text-muted-foreground">This endpoint processes the submitted ID card image and returns the extracted data.</p>
        </div>

        <!-- Separator -->
        <hr class="border-border" />

        <!-- Request Parameters Section -->
        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">Request Parameters</h2>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-border rounded-lg">
              <thead>
                <tr class="bg-muted/50">
                  <th class="border border-border p-3 text-left font-semibold">Parameter</th>
                  <th class="border border-border p-3 text-left font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-border p-3 font-mono text-sm font-semibold">img</td>
                  <td class="border border-border p-3">
                    <strong>String</strong>. The image of the Romanian ID card, encoded in Base64. For optimal performance, it is recommended to keep the image size below 200KB to ensure a swift response, typically within 2 seconds. Larger images will result in longer processing times.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Separator -->
        <hr class="border-border" />

        <!-- Code Example Section -->
        <div class="space-y-6">
          <h2 class="text-2xl font-semibold">Code Example</h2>
          <p class="text-muted-foreground">Code snippet</p>

          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="text-sm font-semibold">cURL</h4>
            </div>
            <pre class="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-bash">curl --location --request POST 'https://api.100ocrapi.com/v1/ro_ocr/general' \\
--header 'Content-Type: application/x-www-form-urlencoded' \\
--header 'X-API-Key: AbcdEfgh' \\
--data-urlencode 'img=BASE64_ENCODE_VALUE'</code></pre>
          </div>
        </div>

        <!-- Separator -->
        <hr class="border-border" />

        <!-- Response Formats Section -->
        <div class="space-y-6">
          <h2 class="text-2xl font-semibold">Response Formats</h2>
          <p class="text-muted-foreground leading-relaxed">
            The API's response is a JSON object with two main fields: <code class="bg-muted px-1 py-0.5 rounded text-sm">status</code> and <code class="bg-muted px-1 py-0.5 rounded text-sm">message</code>.
          </p>

          <!-- Successful Data Extraction Subsection -->
          <div class="space-y-4">
            <h3 class="text-xl font-semibold">
              Successful Data Extraction (Status <strong><code class="bg-muted px-1 py-0.5 rounded text-sm">OK</code></strong>)
            </h3>
            <p class="text-muted-foreground leading-relaxed">
              When the ID card is successfully processed, the <code class="bg-muted px-1 py-0.5 rounded text-sm">status</code> field is set to <strong><code class="bg-muted px-1 py-0.5 rounded text-sm">OK</code></strong>. The <code class="bg-muted px-1 py-0.5 rounded text-sm">message</code> field contains a JSON object with the extracted data fields, including:
            </p>

            <ul class="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li><code class="bg-muted px-1 py-0.5 rounded text-sm">series</code></li>
              <li><code class="bg-muted px-1 py-0.5 rounded text-sm">number</code></li>
              <li><code class="bg-muted px-1 py-0.5 rounded text-sm">last_name</code></li>
              <li><code class="bg-muted px-1 py-0.5 rounded text-sm">first_name</code></li>
              <li><code class="bg-muted px-1 py-0.5 rounded text-sm">nationality</code></li>
              <li><code class="bg-muted px-1 py-0.5 rounded text-sm">place_of_birth</code></li>
              <li><code class="bg-muted px-1 py-0.5 rounded text-sm">address</code></li>
              <li><code class="bg-muted px-1 py-0.5 rounded text-sm">issued_by</code></li>
              <li><code class="bg-muted px-1 py-0.5 rounded text-sm">validity</code></li>
            </ul>

            <div class="space-y-2">
              <div class="flex items-center justify-between mb-2">
                <h4 class="text-sm font-semibold">JSON Response</h4>
              </div>
              <pre class="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"OK"</span>,
  <span class="text-blue-400">"message"</span>: {
    <span class="text-blue-400">"series"</span>: <span class="text-green-400">"AB"</span>,
    <span class="text-blue-400">"number"</span>: <span class="text-green-400">"123456"</span>,
    <span class="text-blue-400">"last_name"</span>: <span class="text-green-400">"DOE"</span>,
    <span class="text-blue-400">"first_name"</span>: <span class="text-green-400">"JOHN"</span>,
    <span class="text-blue-400">"nationality"</span>: <span class="text-green-400">"Română / ROU"</span>,
    <span class="text-blue-400">"place_of_birth"</span>: <span class="text-green-400">"BUCURESTI"</span>,
    <span class="text-blue-400">"address"</span>: <span class="text-green-400">"STR. EXEMPLU NR. 123, BUCURESTI"</span>,
    <span class="text-blue-400">"issued_by"</span>: <span class="text-green-400">"SPCLEP SECTOR 1"</span>,
    <span class="text-blue-400">"validity"</span>: <span class="text-green-400">"31.12.2030"</span>
  }
}</code></pre>
            </div>
          </div>

          <!-- Failure Responses Subsection -->
          <div class="space-y-4">
            <h3 class="text-xl font-semibold">
              Failure Responses (Status <strong><code class="bg-muted px-1 py-0.5 rounded text-sm">FAIL</code></strong> or <strong><code class="bg-muted px-1 py-0.5 rounded text-sm">INVALID_REQUEST</code></strong>)
            </h3>
            <p class="text-muted-foreground leading-relaxed">
              The API returns a <strong><code class="bg-muted px-1 py-0.5 rounded text-sm">FAIL</code></strong> or <strong><code class="bg-muted px-1 py-0.5 rounded text-sm">INVALID_REQUEST</code></strong> status when it cannot process the request due to an issue with the input. The <code class="bg-muted px-1 py-0.5 rounded text-sm">message</code> field will contain a description of the error.
            </p>

            <div class="overflow-x-auto">
              <table class="w-full border-collapse border border-border rounded-lg">
                <thead>
                  <tr class="bg-muted/50">
                    <th class="border border-border p-3 text-left font-semibold">Status Code</th>
                    <th class="border border-border p-3 text-left font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-border p-3 font-mono text-sm">OK</td>
                    <td class="border border-border p-3">Chargeable. The process was successful, and data was extracted.</td>
                  </tr>
                  <tr>
                    <td class="border border-border p-3 font-mono text-sm">FAIL</td>
                    <td class="border border-border p-3">Chargeable. Data extraction failed. The input image may be corrupted, or the card is not readable. Please verify and retry.</td>
                  </tr>
                  <tr>
                    <td class="border border-border p-3 font-mono text-sm">INVALID_REQUEST</td>
                    <td class="border border-border p-3">Free. The request parameters were malformed. Please verify the API call parameters.</td>
                  </tr>
                  <tr>
                    <td class="border border-border p-3 font-mono text-sm">IMAGE_INVALID_FORMAT</td>
                    <td class="border border-border p-3">Free. The image format is not supported. Supported formats include JPEG, JPG, PNG, and BMP.</td>
                  </tr>
                  <tr>
                    <td class="border border-border p-3 font-mono text-sm">IMAGE_INVALID_SIZE</td>
                    <td class="border border-border p-3">Free. The image size exceeds the 2MB limit.</td>
                  </tr>
                  <tr>
                    <td class="border border-border p-3 font-mono text-sm">INNER_ERROR</td>
                    <td class="border border-border p-3">Free. A server-side error occurred. Please wait and try again.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Specific Failure Messages -->
            <div class="space-y-4 mt-6">
              <h4 class="text-lg font-semibold">Example Failure Responses</h4>
              
              <div class="space-y-4">
                <div>
                  <h5 class="text-sm font-semibold mb-2">Invalid API Key</h5>
                  <pre class="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-red-400">"INVALID_REQUEST"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-red-400">"Invalid API key"</span>
}</code></pre>
                </div>

                <div>
                  <h5 class="text-sm font-semibold mb-2">Missing Image Parameter</h5>
                  <pre class="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-red-400">"INVALID_REQUEST"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-red-400">"Missing 'img' parameter"</span>
}</code></pre>
                </div>

                <div>
                  <h5 class="text-sm font-semibold mb-2">Invalid Base64 Format</h5>
                  <pre class="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-red-400">"INVALID_REQUEST"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-red-400">"Invalid Base64 format"</span>
}</code></pre>
                </div>

                <div>
                  <h5 class="text-sm font-semibold mb-2">Processing Failed</h5>
                  <pre class="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-red-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-red-400">"Unable to extract data from the provided image"</span>
}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  "philippines-tinid": {
    title: "Philippines TinID OCR",
    summary: "licenseNumber + name recognition",
    endpoint: "https://api.ekycpro.com/v1/ph_ocr_tinid/general",
    method: "POST",
    requestParams: [
      {
        parameter: "img",
        type: "String",
        description:
          "base64 encoded image. It is recommended that the image be less than 200KB, so it will be returned within 2 seconds, otherwise the return time will be longer.",
      },
    ],
    responseFields: [
      { field: "fullName", type: "string", description: "fullName" },
      { field: "licenseNumber", type: "string", description: "the license number" },
      { field: "birthday", type: "string", description: "date of birth" },
      { field: "issueDate", type: "string", description: "date of issue" },
      { field: "address", type: "string", description: "address" },
    ],
    customContent: `
      <div class="space-y-8">
        <hr class="border-border" />
        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">Endpoints</h2>
          <p class="text-muted-foreground">
            <code class="bg-muted px-2 py-1 rounded text-sm font-mono">POST https://api.ekycpro.com/v1/ph_ocr_tinid/general</code>
          </p>
        </div>
        
        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">Request Parameters</h2>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-border">
              <thead>
                <tr class="bg-muted">
                  <th class="border border-border px-4 py-2 text-left">parameter</th>
                  <th class="border border-border px-4 py-2 text-left">description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-border px-4 py-2"><code>img</code></td>
                  <td class="border border-border px-4 py-2"><code>string</code>, base64 encoded image. It is recommended that the image be less than 200KB, so it will be returned within 2 seconds, otherwise the return time will be longer.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="space-y-6">
          <h2 class="text-2xl font-semibold">Code Example</h2>
          <div>
            <h4 class="text-lg font-medium mb-2">Code snippet</h4>
            <div class="mb-4">
              <h5 class="text-sm font-semibold mb-2">cURL</h5>
              <pre class="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-bash">curl --location --request POST 'https://api.ekycpro.com/v1/ph_ocr_tinid/general' \\
--header 'Content-Type: application/x-www-form-urlencoded' \\
--header 'X-API-Key: AbcdEfgh' \\
--data-urlencode 'img=BASE64_ENCODE_VALUE'</code></pre>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <h2 class="text-2xl font-semibold">Response Formats</h2>
          
          <div class="space-y-4">
            <h3 class="text-lg font-medium">Success Response Format</h3>
            <p class="text-muted-foreground">Response for recognition success</p>
            <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"OK"</span>,
  <span class="text-blue-400">"message"</span>: {
    <span class="text-blue-400">"fullName"</span>: <span class="text-green-400">"Dela Cruz,Mia"</span>,
    <span class="text-blue-400">"licenseNumber"</span>: <span class="text-green-400">"123-456-789-000"</span>,
    <span class="text-blue-400">"birthday"</span>: <span class="text-green-400">"09/04/1994"</span>,
    <span class="text-blue-400">"issueDate"</span>: <span class="text-green-400">"10/02/2017"</span>,
    <span class="text-blue-400">"address"</span>: <span class="text-green-400">"28 Payapa St.Bagong Diwa Sto.Cristobal,Caloocan City "</span>
  }
}</code></pre>
          </div>

          <div class="space-y-4">
            <h3 class="text-lg font-medium">Failure Responses</h3>
            <div class="overflow-x-auto">
              <table class="w-full border-collapse border border-border">
                <thead>
                  <tr class="bg-muted">
                    <th class="border border-border px-4 py-2 text-left">status</th>
                    <th class="border border-border px-4 py-2 text-left">description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-border px-4 py-2"><code>OK</code></td>
                    <td class="border border-border px-4 py-2"><code>charge</code>, success</td>
                  </tr>
                  <tr>
                    <td class="border border-border px-4 py-2"><code>FAIL</code></td>
                    <td class="border border-border px-4 py-2"><code>charge</code>, image recognition error, please check input image</td>
                  </tr>
                  <tr>
                    <td class="border border-border px-4 py-2"><code>INVALID_REQUEST</code></td>
                    <td class="border border-border px-4 py-2"><code>free</code>, invalid request parameters</td>
                  </tr>
                  <tr>
                    <td class="border border-border px-4 py-2"><code>IMAGE_INVALID_FORMAT</code></td>
                    <td class="border border-border px-4 py-2"><code>free</code>, invalid image format, image format should be one of jpeg/jpg/png/bmp</td>
                  </tr>
                  <tr>
                    <td class="border border-border px-4 py-2"><code>IMAGE_INVALID_SIZE</code></td>
                    <td class="border border-border px-4 py-2"><code>free</code>, invalid image size, should be less than 2M</td>
                  </tr>
                  <tr>
                    <td class="border border-border px-4 py-2"><code>INNER_ERROR</code></td>
                    <td class="border border-border px-4 py-2"><code>free</code>, server error</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="space-y-4">
            <h4 class="text-md font-medium">Recognition Fail</h4>
            <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-red-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-red-400">"check input image and retry"</span>
}</code></pre>
          </div>

          <div class="space-y-4">
            <h4 class="text-md font-medium">Invalid Request Parameters</h4>
            <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-red-400">"INVALID_REQUEST"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-red-400">"check request params"</span>
}</code></pre>
          </div>

          <div class="space-y-4">
            <h4 class="text-md font-medium">Invalid Image Format</h4>
            <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-red-400">"IMAGE_INVALID_FORMAT"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-red-400">"image format not support"</span>
}</code></pre>
          </div>

          <div class="space-y-4">
            <h4 class="text-md font-medium">Image Size Too Large</h4>
            <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-red-400">"IMAGE_INVALID_SIZE"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-red-400">"image larger than 2M"</span>
}</code></pre>
          </div>

          <div class="space-y-4">
            <h4 class="text-md font-medium">Server Error</h4>
            <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-red-400">"INNER_ERROR"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-red-400">"Inner error, please retry later"</span>
}</code></pre>
          </div>

          <div class="space-y-4">
            <h3 class="text-lg font-medium">Response format</h3>
            <div class="overflow-x-auto">
              <table class="w-full border-collapse border border-border">
                <thead>
                  <tr class="bg-muted">
                    <th class="border border-border px-4 py-2 text-left">fields</th>
                    <th class="border border-border px-4 py-2 text-left">description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-border px-4 py-2"><code>status</code></td>
                    <td class="border border-border px-4 py-2">status code</td>
                  </tr>
                  <tr>
                    <td class="border border-border px-4 py-2"><code>message</code></td>
                    <td class="border border-border px-4 py-2">
                      <code>licenseNumber</code>: the license number<br/>
                      <code>fullName</code>: fullName<br/>
                      <code>birthday</code>: date of birth<br/>
                      <code>issueDate</code>: date of issue<br/>
                      <code>address</code>: address
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        
      </div>
    `,
  },

  "philippines-umid": {
    title: "Philippines UMID OCR",
    summary: "crn + name recognition",
    endpoint: "https://api.ekycpro.com/v1/ph_ocr_umid/general",
    method: "POST",
    requestParams: [
      {
        parameter: "img",
        type: "String",
        description:
          "base64 encoded image. It is recommended that the image be less than 200KB, so it will be returned within 2 seconds, otherwise the return time will be longer.",
      },
    ],
    responseFields: [
      { field: "crn", type: "string", description: "the crn number" },
      { field: "surname", type: "string", description: "surname" },
      { field: "givenName", type: "string", description: "given name" },
      { field: "middleName", type: "string", description: "middle name" },
      { field: "birthday", type: "string", description: "date of birth" },
      { field: "sex", type: "string", description: "gender" },
      { field: "address", type: "string", description: "address" },
    ],
    customContent: `
      <div class="space-y-8">
        <hr class="border-border" />
        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">Endpoints</h2>
          <p class="text-muted-foreground">
            <code class="bg-muted px-2 py-1 rounded text-sm font-mono">POST https://api.ekycpro.com/v1/ph_ocr_umid/general</code>
          </p>
        </div>
        <hr class="border-border" />
        <div class="space-y-6">
          <h2 class="text-2xl font-semibold">Request Parameters</h2>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-border">
              <thead>
                <tr class="bg-muted">
                  <th class="border border-border px-4 py-2 text-left">parameter</th>
                  <th class="border border-border px-4 py-2 text-left">description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-border px-4 py-2 font-mono text-sm">img</td>
                  <td class="border border-border px-4 py-2">string, base64 encoded image. It is recommended that the image be less than 200KB, so it will be returned within 2 seconds, otherwise the return time will be longer.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <hr class="border-border" />
        <div class="space-y-6">
          <h2 class="text-2xl font-semibold">Code Example</h2>
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="text-sm font-semibold">cURL</h4>
            </div>
            <pre class="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-bash">curl --location --request POST 'https://api.ekycpro.com/v1/ph_ocr_umid/general' \\
--header 'Content-Type: application/x-www-form-urlencoded' \\
--header 'X-API-Key: AbcdEfgh' \\
--data-urlencode 'img=BASE64_ENCODE_VALUE'</code></pre>
          </div>
        </div>
        <hr class="border-border" />
        <div class="space-y-6">
          <h2 class="text-2xl font-semibold">Response Formats</h2>
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-semibold mb-3">Response format</h3>
              <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-border">
                  <thead>
                    <tr class="bg-muted">
                      <th class="border border-border px-4 py-2 text-left">fields</th>
                      <th class="border border-border px-4 py-2 text-left">description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border border-border px-4 py-2 font-mono text-sm">status</td>
                      <td class="border border-border px-4 py-2">status code</td>
                    </tr>
                    <tr>
                      <td class="border border-border px-4 py-2 font-mono text-sm">message</td>
                      <td class="border border-border px-4 py-2">
                        <code>crn</code>: the crn number<br>
                        <code>surname</code>: surname<br>
                        <code>givenName</code>: given name<br>
                        <code>middleName</code>: middle name<br>
                        <code>birthday</code>: date of birth<br>
                        <code>sex</code>: gender<br>
                        <code>address</code>: address
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-3">Success Response</h3>
              <pre class="bg-slate-900 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"OK"</span>,
  <span class="text-blue-400">"message"</span>: {
    <span class="text-blue-400">"crn"</span>: <span class="text-green-400">"CRN-0028-1215160-9"</span>,
    <span class="text-blue-400">"surname"</span>: <span class="text-green-400">"SANTOS"</span>,
    <span class="text-blue-400">"givenName"</span>: <span class="text-green-400">"JOSE"</span>,
    <span class="text-blue-400">"MiddleName"</span>: <span class="text-green-400">"CRUZ"</span>,
    <span class="text-blue-400">"birthday"</span>: <span class="text-green-400">"1960/01/28"</span>,
    <span class="text-blue-400">"sex"</span>: <span class="text-green-400">"M"</span>,
    <span class="text-blue-400">"address"</span>: <span class="text-green-400">"28 PAYAPA ST BAGONG DIWA STO CRISTOBAL CAL OOCAN CITY METRO MANILA PHILIPPINES 1800"</span>
  }
}</code></pre>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-3">Status Code</h3>
              <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-border">
                  <thead>
                    <tr class="bg-muted">
                      <th class="border border-border px-4 py-2 text-left">status</th>
                      <th class="border border-border px-4 py-2 text-left">description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border border-border px-4 py-2 font-mono text-sm">OK</td>
                      <td class="border border-border px-4 py-2">charge, success</td>
                    </tr>
                    <tr>
                      <td class="border border-border px-4 py-2 font-mono text-sm">FAIL</td>
                      <td class="border border-border px-4 py-2">charge, image recognition error, please check input image</td>
                    </tr>
                    <tr>
                      <td class="border border-border px-4 py-2 font-mono text-sm">INVALID_REQUEST</td>
                      <td class="border border-border px-4 py-2">free, invalid request parameters</td>
                    </tr>
                    <tr>
                      <td class="border border-border px-4 py-2 font-mono text-sm">IMAGE_INVALID_FORMAT</td>
                      <td class="border border-border px-4 py-2">free, invalid image format, image format should be one of jpeg/jpg/png/bmp</td>
                    </tr>
                    <tr>
                      <td class="border border-border px-4 py-2 font-mono text-sm">IMAGE_INVALID_SIZE</td>
                      <td class="border border-border px-4 py-2">free, invalid image size, should be less than 2M</td>
                    </tr>
                    <tr>
                      <td class="border border-border px-4 py-2 font-mono text-sm">INNER_ERROR</td>
                      <td class="border border-border px-4 py-2">free, server error</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-3">Failure Responses</h3>
              <div class="space-y-4">
                <div>
                  <h4 class="text-md font-medium mb-2">Recognition Fail</h4>
                  <pre class="bg-slate-900 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-red-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-red-400">"check input image and retry"</span>
}</code></pre>
                </div>
                <div>
                  <h4 class="text-md font-medium mb-2">Invalid Request Parameters</h4>
                  <pre class="bg-slate-900 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-red-400">"INVALID_REQUEST"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-red-400">"check request params"</span>
}</code></pre>
                </div>
                <div>
                  <h4 class="text-md font-medium mb-2">Invalid Image Format</h4>
                  <pre class="bg-slate-900 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-red-400">"IMAGE_INVALID_FORMAT"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-red-400">"image format not support"</span>
}</code></pre>
                </div>
                <div>
                  <h4 class="text-md font-medium mb-2">Image Size Too Large</h4>
                  <pre class="bg-slate-900 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-red-400">"IMAGE_INVALID_SIZE"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-red-400">"image larger than 2M"</span>
}</code></pre>
                </div>
                <div>
                  <h4 class="text-md font-medium mb-2">Server Error</h4>
                  <pre class="bg-slate-900 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-red-400">"INNER_ERROR"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-red-400">"Inner error, please retry later"</span>
}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  "philippines-drivers-license": {
    title: "Philippines Driver's License OCR API",
    summary:
      "The Philippines Driver's License OCR API allows you to extract and recognize key information from a Philippines Driver's License using Optical Character Recognition (OCR) technology. The extracted information includes the license number and the name of the license holder.",
    endpoint: "https://api.ekycpro.com/v1/ph_ocr_dl/general",
    method: "POST",
    requestParams: [
      {
        parameter: "img",
        type: "String",
        description:
          "Base64 encoded image. It is recommended that the image be less than 200KB, so it will be returned within 2 seconds, otherwise the return time will be longer.",
      },
    ],
    responseFields: [
      { field: "name", type: "string", description: "Full name" },
      { field: "lastName", type: "string", description: "Last name" },
      { field: "firstName", type: "string", description: "First name" },
      { field: "middleName", type: "string", description: "Middle name" },
      { field: "nationality", type: "string", description: "Citizenship" },
      { field: "sex", type: "string", description: "Gender, 'M' or 'F'" },
      { field: "address", type: "string", description: "Address" },
      { field: "licenseNo", type: "string", description: "License number" },
      { field: "expiresDate", type: "string", description: "License expiry Date" },
      { field: "agencyCode", type: "string", description: "Agency code" },
      { field: "birthday", type: "string", description: "Date of birth" },
    ],
    customContent: `
      <div class="space-y-8">
        <hr class="border-border" />
        
        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">Features</h2>
          <ul class="space-y-2 text-muted-foreground">
            <li><strong>License Number Recognition</strong>: Automatically detect and extract the license number from the driver's license.</li>
            <li><strong>Name Recognition</strong>: Automatically detect and extract the name of the license holder.</li>
            <li><strong>High Accuracy</strong>: Utilizes advanced OCR technology to ensure high accuracy in text recognition.</li>
            <li><strong>Fast Processing</strong>: Quickly process and return the extracted information.</li>
          </ul>
        </div>

        <hr class="border-border" />
        
        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">Endpoints</h2>
          <p class="text-muted-foreground">
            <code class="bg-muted px-2 py-1 rounded text-sm font-mono">POST https://api.ekycpro.com/v1/ph_ocr_dl/general</code>
          </p>
        </div>

        <hr class="border-border" />
        
        <div class="space-y-6">
          <h2 class="text-2xl font-semibold">Request Parameters</h2>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-border">
              <thead>
                <tr class="bg-muted">
                  <th class="border border-border px-4 py-2 text-left">Parameter</th>
                  <th class="border border-border px-4 py-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-border px-4 py-2 font-mono text-sm">img</td>
                  <td class="border border-border px-4 py-2">string, base64 encoded image. It is recommended that the image be less than 200KB, so it will be returned within 2 seconds, otherwise the return time will be longer.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <hr class="border-border" />
        
        <div class="space-y-6">
          <h2 class="text-2xl font-semibold">Code Example</h2>
          <div class="space-y-4">
            <p class="text-muted-foreground">Code snippet</p>
            <div>
              <div class="flex items-center justify-between mb-2">
                <h4 class="text-sm font-semibold">cURL</h4>
              </div>
              <pre class="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-bash">curl --location --request POST 'https://api.ekycpro.com/v1/ph_ocr_dl/general' \\
--header 'Content-Type: application/x-www-form-urlencoded' \\
--header 'X-API-Key: AbcdEfgh' \\
--data-urlencode 'img=BASE64_ENCODE_VALUE'</code></pre>
            </div>
          </div>
        </div>

        <hr class="border-border" />
        
        <div class="space-y-6">
          <h2 class="text-2xl font-semibold">Response Formats</h2>
          
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">Success Response</h3>
            <p class="text-muted-foreground">Response for recognition success</p>
            <pre class="bg-slate-900 text-white p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"OK"</span>,
  <span class="text-blue-400">"message"</span>: {
    <span class="text-blue-400">"name"</span>: <span class="text-green-400">"SANCHEZ,CARLOS"</span>,
    <span class="text-blue-400">"lastName"</span>: <span class="text-green-400">"SANCHEZ"</span>,
    <span class="text-blue-400">"firstName"</span>: <span class="text-green-400">"CARLOS"</span>,
    <span class="text-blue-400">"middleName"</span>: <span class="text-green-400">""</span>,
    <span class="text-blue-400">"nationality"</span>: <span class="text-green-400">"PHL"</span>,
    <span class="text-blue-400">"sex"</span>: <span class="text-green-400">"F"</span>,
    <span class="text-blue-400">"address"</span>: <span class="text-green-400">"166 E TRES DE ABRIL ST CEBU CITY CEBU 6000"</span>,
    <span class="text-blue-400">"licenseNo"</span>: <span class="text-green-400">"G01-90-189371"</span>,
    <span class="text-blue-400">"expiresDate"</span>: <span class="text-green-400">"2023/11/03"</span>,
    <span class="text-blue-400">"agencyCode"</span>: <span class="text-green-400">"G01"</span>,
    <span class="text-blue-400">"birthday"</span>: <span class="text-green-400">"1969/11/03"</span>
  }
}</code></pre>
          </div>

          <div class="space-y-4">
            <h3 class="text-lg font-semibold">Failure Responses</h3>
            
            <div class="overflow-x-auto">
              <table class="w-full border-collapse border border-border">
                <thead>
                  <tr class="bg-muted">
                    <th class="border border-border px-4 py-2 text-left">Status</th>
                    <th class="border border-border px-4 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-border px-4 py-2 font-mono text-sm">OK</td>
                    <td class="border border-border px-4 py-2">charge, success</td>
                  </tr>
                  <tr>
                    <td class="border border-border px-4 py-2 font-mono text-sm">FAIL</td>
                    <td class="border border-border px-4 py-2">charge, image recognition error, please check input image</td>
                  </tr>
                  <tr>
                    <td class="border border-border px-4 py-2 font-mono text-sm">INVALID_REQUEST</td>
                    <td class="border border-border px-4 py-2">free, invalid request parameters</td>
                  </tr>
                  <tr>
                    <td class="border border-border px-4 py-2 font-mono text-sm">IMAGE_INVALID_FORMAT</td>
                    <td class="border border-border px-4 py-2">free, invalid image format, image format should be one of jpeg/jpg/png/bmp</td>
                  </tr>
                  <tr>
                    <td class="border border-border px-4 py-2 font-mono text-sm">IMAGE_INVALID_SIZE</td>
                    <td class="border border-border px-4 py-2">free, invalid image size, should be less than 2M</td>
                  </tr>
                  <tr>
                    <td class="border border-border px-4 py-2 font-mono text-sm">INNER_ERROR</td>
                    <td class="border border-border px-4 py-2">free, server error</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="space-y-4">
              <h4 class="text-md font-semibold">Recognition Fail</h4>
              <pre class="bg-slate-900 text-white p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-red-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-red-400">"check input image and retry"</span>
}</code></pre>
            </div>

            <div class="space-y-4">
              <h4 class="text-md font-semibold">Invalid Request Parameters</h4>
              <pre class="bg-slate-900 text-white p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-red-400">"INVALID_REQUEST"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-red-400">"check request params"</span>
}</code></pre>
            </div>

            <div class="space-y-4">
              <h4 class="text-md font-semibold">Invalid Image Format</h4>
              <pre class="bg-slate-900 text-white p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-red-400">"IMAGE_INVALID_FORMAT"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-red-400">"image format not support"</span>
}</code></pre>
            </div>

            <div class="space-y-4">
              <h4 class="text-md font-semibold">Image Size Too Large</h4>
              <pre class="bg-slate-900 text-white p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-red-400">"IMAGE_INVALID_SIZE"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-red-400">"image larger than 2M"</span>
}</code></pre>
            </div>

            <div class="space-y-4">
              <h4 class="text-md font-semibold">Server Error</h4>
              <pre class="bg-slate-900 text-white p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-red-400">"INNER_ERROR"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-red-400">"Inner error, please retry later"</span>
}</code></pre>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  "philippines-voters-id": {
    title: "Philippines Voter's ID Data Extraction API",
    summary:
      "This API provides a powerful tool for extracting and verifying data from Philippines Voter's ID cards. Our engine uses advanced algorithms to parse key information, including voter ID number, name, and personal details.",
    endpoint: "https://api.100ocrapi.com/v1/ph_ocr/voters_id",
    method: "POST",
    requestParams: [
      {
        parameter: "img",
        type: "String",
        description:
          "The image of the Philippines Voter's ID card, encoded in Base64. For optimal performance, it is recommended to keep the image size below 200KB to ensure a swift response, typically within 2 seconds.",
      },
    ],
    responseFields: [
      { field: "voter_id_number", type: "string", description: "Voter ID number" },
      { field: "full_name", type: "string", description: "Full name as printed on the card" },
      { field: "date_of_birth", type: "string", description: "Date of birth" },
      { field: "address", type: "string", description: "Registered address" },
    ],
    customContent: `
      <div class="space-y-8">
        <hr class="border-border" />
        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">Endpoints</h2>
          <p class="text-muted-foreground">
            <code class="bg-muted px-2 py-1 rounded text-sm font-mono">POST https://api.100ocrapi.com/v1/ph_ocr/voters_id</code>
          </p>
        </div>
        <hr class="border-border" />
        <div class="space-y-6">
          <h2 class="text-2xl font-semibold">Code Example</h2>
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="text-sm font-semibold">cURL</h4>
            </div>
            <pre class="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-bash">curl --location --request POST 'https://api.100ocrapi.com/v1/ph_ocr/voters_id' \\
--header 'Content-Type: application/x-www-form-urlencoded' \\
--header 'X-API-Key: AbcdEfgh' \\
--data-urlencode 'img=BASE64_ENCODE_VALUE'</code></pre>
          </div>
        </div>
      </div>
    `,
  },
  "india-pan": {
    title: "India PAN Card Data Extraction API",
    summary:
      "This API provides a powerful tool for extracting and verifying data from India PAN cards. Our engine uses advanced algorithms to parse key information, including PAN number, name, and personal details.",
    endpoint: "https://api.100ocrapi.com/v1/in_ocr/pan",
    method: "POST",
    requestParams: [
      {
        parameter: "img",
        type: "String",
        description:
          "The image of the India PAN card, encoded in Base64. For optimal performance, it is recommended to keep the image size below 200KB to ensure a swift response, typically within 2 seconds.",
      },
    ],
    responseFields: [
      { field: "pan_number", type: "string", description: "PAN card number" },
      { field: "full_name", type: "string", description: "Full name as printed on the card" },
      { field: "father_name", type: "string", description: "Father's name" },
      { field: "date_of_birth", type: "string", description: "Date of birth" },
    ],
    customContent: `
      <div class="space-y-8">
        <hr class="border-border" />
        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">Endpoints</h2>
          <p class="text-muted-foreground">
            <code class="bg-muted px-2 py-1 rounded text-sm font-mono">POST https://api.100ocrapi.com/v1/in_ocr/pan</code>
          </p>
        </div>
        <hr class="border-border" />
        <div class="space-y-6">
          <h2 class="text-2xl font-semibold">Code Example</h2>
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="text-sm font-semibold">cURL</h4>
            </div>
            <pre class="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-bash">curl --location --request POST 'https://api.100ocrapi.com/v1/in_ocr/pan' \\
--header 'Content-Type: application/x-www-form-urlencoded' \\
--header 'X-API-Key: AbcdEfgh' \\
--data-urlencode 'img=BASE64_ENCODE_VALUE'</code></pre>
          </div>
        </div>
      </div>
    `,
  },
  "india-aadhaar-back": {
    title: "India Aadhaar Back Data Extraction API",
    summary:
      "This API provides a powerful tool for extracting and verifying data from India Aadhaar back side cards. Our engine uses advanced algorithms to parse key information, including Aadhaar number and address details.",
    endpoint: "https://api.100ocrapi.com/v1/in_ocr/aadhaar_back",
    method: "POST",
    requestParams: [
      {
        parameter: "img",
        type: "String",
        description:
          "The image of the India Aadhaar back side card, encoded in Base64. For optimal performance, it is recommended to keep the image size below 200KB to ensure a swift response, typically within 2 seconds.",
      },
    ],
    responseFields: [
      { field: "aadhaar_number", type: "string", description: "Aadhaar card number" },
      { field: "address", type: "string", description: "Registered address" },
      { field: "pin_code", type: "string", description: "PIN code" },
    ],
    customContent: `
      <div class="space-y-8">
        <hr class="border-border" />
        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">Endpoints</h2>
          <p class="text-muted-foreground">
            <code class="bg-muted px-2 py-1 rounded text-sm font-mono">POST https://api.100ocrapi.com/v1/in_ocr/aadhaar_back</code>
          </p>
        </div>
        <hr class="border-border" />
        <div class="space-y-6">
          <h2 class="text-2xl font-semibold">Code Example</h2>
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="text-sm font-semibold">cURL</h4>
            </div>
            <pre class="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-bash">curl --location --request POST 'https://api.100ocrapi.com/v1/in_ocr/aadhaar_back' \\
--header 'Content-Type: application/x-www-form-urlencoded' \\
--header 'X-API-Key: AbcdEfgh' \\
--data-urlencode 'img=BASE64_ENCODE_VALUE'</code></pre>
          </div>
        </div>
      </div>
    `,
  },
  "india-aadhaar-front": {
    title: "India Aadhaar Front Data Extraction API",
    summary:
      "This API provides a powerful tool for extracting and verifying data from India Aadhaar front side cards. Our engine uses advanced algorithms to parse key information, including Aadhaar number, name, and personal details.",
    endpoint: "https://api.100ocrapi.com/v1/in_ocr/aadhaar_front",
    method: "POST",
    requestParams: [
      {
        parameter: "img",
        type: "String",
        description:
          "The image of the India Aadhaar front side card, encoded in Base64. For optimal performance, it is recommended to keep the image size below 200KB to ensure a swift response, typically within 2 seconds.",
      },
    ],
    responseFields: [
      { field: "aadhaar_number", type: "string", description: "Aadhaar card number" },
      { field: "full_name", type: "string", description: "Full name as printed on the card" },
      { field: "date_of_birth", type: "string", description: "Date of birth" },
      { field: "gender", type: "string", description: "Gender" },
    ],
    customContent: `
      <div class="space-y-8">
        <hr class="border-border" />
        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">Endpoints</h2>
          <p class="text-muted-foreground">
            <code class="bg-muted px-2 py-1 rounded text-sm font-mono">POST https://api.100ocrapi.com/v1/in_ocr/aadhaar_front</code>
          </p>
        </div>
        <hr class="border-border" />
        <div class="space-y-6">
          <h2 class="text-2xl font-semibold">Code Example</h2>
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="text-sm font-semibold">cURL</h4>
            </div>
            <pre class="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-bash">curl --location --request POST 'https://api.100ocrapi.com/v1/in_ocr/aadhaar_front' \\
--header 'Content-Type: application/x-www-form-urlencoded' \\
--header 'X-API-Key: AbcdEfgh' \\
--data-urlencode 'img=BASE64_ENCODE_VALUE'</code></pre>
          </div>
        </div>
      </div>
    `,
  },
  "thailand-drivers-license": {
    title: "Thailand Driver's License Data Extraction API",
    summary:
      "This API provides a powerful tool for extracting and verifying data from Thailand Driver's License cards. Our engine uses advanced algorithms to parse key information, including license number, name, and personal details.",
    endpoint: "https://api.100ocrapi.com/v1/th_ocr/drivers_license",
    method: "POST",
    requestParams: [
      {
        parameter: "img",
        type: "String",
        description:
          "The image of the Thailand Driver's License card, encoded in Base64. For optimal performance, it is recommended to keep the image size below 200KB to ensure a swift response, typically within 2 seconds.",
      },
    ],
    responseFields: [
      { field: "license_number", type: "string", description: "Driver's license number" },
      { field: "full_name", type: "string", description: "Full name in Thai and English" },
      { field: "date_of_birth", type: "string", description: "Date of birth" },
      { field: "address", type: "string", description: "Registered address" },
      { field: "issue_date", type: "string", description: "Card issue date" },
      { field: "expiry_date", type: "string", description: "Card expiry date" },
    ],
    customContent: `
      <div class="space-y-8">
        <hr class="border-border" />
        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">Endpoints</h2>
          <p class="text-muted-foreground">
            <code class="bg-muted px-2 py-1 rounded text-sm font-mono">POST https://api.100ocrapi.com/v1/th_ocr/drivers_license</code>
          </p>
        </div>
        <hr class="border-border" />
        <div class="space-y-6">
          <h2 class="text-2xl font-semibold">Code Example</h2>
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="text-sm font-semibold">cURL</h4>
            </div>
            <pre class="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-bash">curl --location --request POST 'https://api.100ocrapi.com/v1/th_ocr/drivers_license' \\
--header 'Content-Type: application/x-www-form-urlencoded' \\
--header 'X-API-Key: AbcdEfgh' \\
--data-urlencode 'img=BASE64_ENCODE_VALUE'</code></pre>
          </div>
        </div>
      </div>
    `,
  },
  "thailand-id-card": {
    title: "Thailand ID Card Data Extraction API",
    summary:
      "This API provides a powerful tool for extracting and verifying data from Thai national identity cards. Our engine uses advanced algorithms to parse key information, including ID number, name, and personal details.",
    endpoint: "https://api.100ocrapi.com/v1/th_ocr/id_card",
    method: "POST",
    requestParams: [
      {
        parameter: "img",
        type: "String",
        description:
          "The image of the Thailand ID card, encoded in Base64. For optimal performance, it is recommended to keep the image size below 200KB to ensure a swift response, typically within 2 seconds.",
      },
    ],
    responseFields: [
      { field: "id_number", type: "string", description: "Thai national ID number" },
      { field: "full_name", type: "string", description: "Full name in Thai and English" },
      { field: "date_of_birth", type: "string", description: "Date of birth" },
      { field: "address", type: "string", description: "Registered address" },
      { field: "issue_date", type: "string", description: "Card issue date" },
      { field: "expiry_date", type: "string", description: "Card expiry date" },
    ],
    customContent: `
      <div class="space-y-8">
        <hr class="border-border" />
        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">Endpoints</h2>
          <p class="text-muted-foreground">
            <code class="bg-muted px-2 py-1 rounded text-sm font-mono">POST https://api.100ocrapi.com/v1/th_ocr/id_card</code>
          </p>
        </div>
        <hr class="border-border" />
        <div class="space-y-6">
          <h2 class="text-2xl font-semibold">Code Example</h2>
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="text-sm font-semibold">cURL</h4>
            </div>
            <pre class="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-bash">curl --location --request POST 'https://api.100ocrapi.com/v1/th_ocr/id_card' \\
--header 'Content-Type: application/x-www-form-urlencoded' \\
--header 'X-API-Key: AbcdEfgh' \\
--data-urlencode 'img=BASE64_ENCODE_VALUE'</code></pre>
          </div>
        </div>
      </div>
    `,
  },
  "indonesia-ktp": {
    title: "Indonesia KTP OCR",
    summary: "Extracts data from Indonesian Kartu Tanda Penduduk (KTP) identity cards.",
    endpoint: "https://api.100ocrapi.com/v1/ocr/indonesia/ktp",
    method: "POST",
    requestParams: [
      { parameter: "image", type: "file", description: "The KTP image file (JPG, PNG, PDF)" },
      { parameter: "format", type: "string", description: "Response format (json, xml). Default: json" },
    ],
    responseFields: [
      { field: "status", type: "string", description: "Processing status (OK, FAIL, etc.)" },
      { field: "nik", type: "string", description: "Nomor Induk Kependudukan (NIK)" },
      { field: "full_name", type: "string", description: "Full name as printed on the card" },
      { field: "place_of_birth", type: "string", description: "Place of birth" },
      { field: "date_of_birth", type: "string", description: "Date of birth" },
      { field: "gender", type: "string", description: "Gender" },
      { field: "address", type: "string", description: "Registered address" },
      { field: "religion", type: "string", description: "Religion" },
      { field: "marital_status", type: "string", description: "Marital status" },
      { field: "occupation", type: "string", description: "Occupation" },
      { field: "confidence", type: "number", description: "Extraction confidence score (0-1)" },
    ],
  },
  "pakistan-id-card": {
    title: "Pakistan ID Card OCR",
    summary: "Extracts data from Pakistani Computerized National Identity Cards (CNIC).",
    endpoint: "https://api.100ocrapi.com/v1/ocr/pakistan/id-card",
    method: "POST",
    requestParams: [
      { parameter: "image", type: "file", description: "The CNIC image file (JPG, PNG, PDF)" },
      { parameter: "format", type: "string", description: "Response format (json, xml). Default: json" },
    ],
    responseFields: [
      { field: "status", type: "string", description: "Processing status (OK, FAIL, etc.)" },
      { field: "cnic_number", type: "string", description: "CNIC number" },
      { field: "full_name", type: "string", description: "Full name as printed on the card" },
      { field: "father_name", type: "string", description: "Father's name" },
      { field: "date_of_birth", type: "string", description: "Date of birth" },
      { field: "gender", type: "string", description: "Gender" },
      { field: "country_of_stay", type: "string", description: "Country of stay" },
      { field: "date_of_issue", type: "string", description: "Card issue date" },
      { field: "date_of_expiry", type: "string", description: "Card expiry date" },
      { field: "confidence", type: "number", description: "Extraction confidence score (0-1)" },
    ],
  },
  "malaysia-id-card": {
    title: "Malaysia ID Card OCR",
    summary: "Extracts data from Malaysian MyKad identity cards.",
    endpoint: "https://api.100ocrapi.com/v1/ocr/malaysia/id-card",
    method: "POST",
    requestParams: [
      { parameter: "image", type: "file", description: "The MyKad image file (JPG, PNG, PDF)" },
      { parameter: "format", type: "string", description: "Response format (json, xml). Default: json" },
    ],
    responseFields: [
      { field: "status", type: "string", description: "Processing status (OK, FAIL, etc.)" },
      { field: "ic_number", type: "string", description: "Identity card number" },
      { field: "full_name", type: "string", description: "Full name as printed on the card" },
      { field: "date_of_birth", type: "string", description: "Date of birth" },
      { field: "place_of_birth", type: "string", description: "Place of birth" },
      { field: "gender", type: "string", description: "Gender" },
      { field: "address", type: "string", description: "Registered address" },
      { field: "religion", type: "string", description: "Religion" },
      { field: "confidence", type: "number", description: "Extraction confidence score (0-1)" },
    ],
  },
  "bengal-id-card": {
    title: "Bengal ID Card OCR",
    summary: "Extracts data from Bangladeshi National Identity Cards.",
    endpoint: "https://api.100ocrapi.com/v1/ocr/bangladesh/id-card",
    method: "POST",
    requestParams: [
      { parameter: "image", type: "file", description: "The NID image file (JPG, PNG, PDF)" },
      { parameter: "format", type: "string", description: "Response format (json, xml). Default: json" },
    ],
    responseFields: [
      { field: "status", type: "string", description: "Processing status (OK, FAIL, etc.)" },
      { field: "nid_number", type: "string", description: "National ID number" },
      { field: "full_name", type: "string", description: "Full name in Bengali and English" },
      { field: "father_name", type: "string", description: "Father's name" },
      { field: "mother_name", type: "string", description: "Mother's name" },
      { field: "date_of_birth", type: "string", description: "Date of birth" },
      { field: "address", type: "string", description: "Registered address" },
      { field: "confidence", type: "number", description: "Extraction confidence score (0-1)" },
    ],
  },
  "colombia-id-card": {
    title: "Colombia ID Card OCR",
    summary: "Extracts data from Colombian national identity cards (Cédula de Ciudadanía).",
    endpoint: "https://api.100ocrapi.com/v1/ocr/colombia/id-card",
    method: "POST",
    requestParams: [
      { parameter: "image", type: "file", description: "The ID card image file (JPG, PNG, PDF)" },
      { parameter: "format", type: "string", description: "Response format (json, xml). Default: json" },
    ],
    responseFields: [
      { field: "status", type: "string", description: "Processing status (OK, FAIL, etc.)" },
      { field: "document_number", type: "string", description: "Colombian ID card number" },
      { field: "full_name", type: "string", description: "Full name as printed on the card" },
      { field: "date_of_birth", type: "string", description: "Date of birth" },
      { field: "place_of_birth", type: "string", description: "Place of birth" },
      { field: "blood_type", type: "string", description: "Blood type" },
      { field: "confidence", type: "number", description: "Extraction confidence score (0-1)" },
    ],
  },
  "peru-id-card": {
    title: "Peru ID Card OCR",
    summary: "Extracts data from Peruvian national identity cards (DNI).",
    endpoint: "https://api.100ocrapi.com/v1/ocr/peru/id-card",
    method: "POST",
    requestParams: [
      { parameter: "image", type: "file", description: "The DNI image file (JPG, PNG, PDF)" },
      { parameter: "format", type: "string", description: "Response format (json, xml). Default: json" },
    ],
    responseFields: [
      { field: "status", type: "string", description: "Processing status (OK, FAIL, etc.)" },
      { field: "dni_number", type: "string", description: "DNI number" },
      { field: "full_name", type: "string", description: "Full name as printed on the card" },
      { field: "date_of_birth", type: "string", description: "Date of birth" },
      { field: "place_of_birth", type: "string", description: "Place of birth" },
      { field: "address", type: "string", description: "Registered address" },
      { field: "marital_status", type: "string", description: "Marital status" },
      { field: "confidence", type: "number", description: "Extraction confidence score (0-1)" },
    ],
  },
  "argentina-id-card": {
    title: "Argentina ID Card OCR",
    summary: "Extracts data from Argentine national identity cards (DNI).",
    endpoint: "https://api.100ocrapi.com/v1/ocr/argentina/id-card",
    method: "POST",
    requestParams: [
      { parameter: "image", type: "file", description: "The DNI image file (JPG, PNG, PDF)" },
      { parameter: "format", type: "string", description: "Response format (json, xml). Default: json" },
    ],
    responseFields: [
      { field: "status", type: "string", description: "Processing status (OK, FAIL, etc.)" },
      { field: "dni_number", type: "string", description: "DNI number" },
      { field: "full_name", type: "string", description: "Full name as printed on the card" },
      { field: "date_of_birth", type: "string", description: "Date of birth" },
      { field: "place_of_birth", type: "string", description: "Place of birth" },
      { field: "gender", type: "string", description: "Gender" },
      { field: "nationality", type: "string", description: "Nationality" },
      { field: "confidence", type: "number", description: "Extraction confidence score (0-1)" },
    ],
  },
  "mexico-id-card": {
    title: "Mexico ID Card OCR",
    summary: "Extracts data from Mexican voter ID cards (INE).",
    endpoint: "https://api.100ocrapi.com/v1/ocr/mexico/id-card",
    method: "POST",
    requestParams: [
      { parameter: "image", type: "file", description: "The INE image file (JPG, PNG, PDF)" },
      { parameter: "format", type: "string", description: "Response format (json, xml). Default: json" },
    ],
    responseFields: [
      { field: "status", type: "string", description: "Processing status (OK, FAIL, etc.)" },
      { field: "ine_number", type: "string", description: "INE voter ID number" },
      { field: "full_name", type: "string", description: "Full name as printed on the card" },
      { field: "date_of_birth", type: "string", description: "Date of birth" },
      { field: "address", type: "string", description: "Registered address" },
      { field: "curp", type: "string", description: "CURP (Unique Population Registry Code)" },
      { field: "gender", type: "string", description: "Gender" },
      { field: "confidence", type: "number", description: "Extraction confidence score (0-1)" },
    ],
  },
  "ghana-id-card": {
    title: "Ghana ID Card OCR",
    summary: "Extracts data from Ghanaian national identity cards (Ghana Card).",
    endpoint: "https://api.100ocrapi.com/v1/ocr/ghana/id-card",
    method: "POST",
    requestParams: [
      { parameter: "image", type: "file", description: "The Ghana Card image file (JPG, PNG, PDF)" },
      { parameter: "format", type: "string", description: "Response format (json, xml). Default: json" },
    ],
    responseFields: [
      { field: "status", type: "string", description: "Processing status (OK, FAIL, etc.)" },
      { field: "ghana_card_number", type: "string", description: "Ghana Card number" },
      { field: "full_name", type: "string", description: "Full name as printed on the card" },
      { field: "date_of_birth", type: "string", description: "Date of birth" },
      { field: "place_of_birth", type: "string", description: "Place of birth" },
      { field: "gender", type: "string", description: "Gender" },
      { field: "nationality", type: "string", description: "Nationality" },
      { field: "confidence", type: "number", description: "Extraction confidence score (0-1)" },
    ],
  },
  passport: {
    title: "Passport OCR",
    summary: "Extracts Machine Readable Zone (MRZ) data from international passports.",
    endpoint: "https://api.100ocrapi.com/v1/ocr/passport",
    method: "POST",
    requestParams: [
      { parameter: "image", type: "file", description: "The passport image file (JPG, PNG, PDF)" },
      { parameter: "format", type: "string", description: "Response format (json, xml). Default: json" },
    ],
    responseFields: [
      { field: "status", type: "string", description: "Processing status (OK, FAIL, etc.)" },
      { field: "passport_number", type: "string", description: "Passport number" },
      { field: "full_name", type: "string", description: "Full name from MRZ" },
      { field: "nationality", type: "string", description: "Nationality code" },
      { field: "date_of_birth", type: "string", description: "Date of birth" },
      { field: "gender", type: "string", description: "Gender (M/F)" },
      { field: "expiry_date", type: "string", description: "Passport expiry date" },
      { field: "issuing_country", type: "string", description: "Issuing country code" },
      { field: "confidence", type: "number", description: "Extraction confidence score (0-1)" },
    ],
  },
  "custom-ocr-api": {
    title: "Custom OCR API",
    summary: "Build custom OCR solutions for your specific document types and use cases.",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold">Custom OCR Solutions</h2>
        <p class="text-muted-foreground leading-relaxed">
          Need OCR for documents not covered by our standard APIs? Our Custom OCR API allows you to train and deploy specialized models for your unique document types, forms, and data extraction requirements.
        </p>
        
        <h3 class="text-xl font-semibold">Features</h3>
        <ul class="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Train custom models on your document types</li>
          <li>Support for forms, invoices, receipts, and specialized documents</li>
          <li>Flexible field extraction and validation rules</li>
          <li>Integration with existing workflows</li>
          <li>Enterprise-grade accuracy and performance</li>
        </ul>
        
        <div class="bg-muted p-4 rounded-md">
          <h3 class="font-semibold mb-2">Contact Sales</h3>
          <p class="text-sm">Get in touch with our team to discuss your custom OCR requirements and pricing.</p>
        </div>
      </div>
    `,
  },
}

const getCodeExamples = (section: string) => {
  // Placeholder function to return code examples
  return {
    curl: `curl -X POST "https://api.100ocrapi.com/v1/ocr/${section}" -H "X-API-Key: your_api_key_here" -F "image=@path/to/image.jpg"`,
    javascript: `fetch("https://api.100ocrapi.com/v1/ocr/${section}", {
      method: "POST",
      headers: {
        "X-API-Key": "your_api_key_here"
      },
      body: new FormData()
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));`,
    python: `import requests

url = "https://api.100ocrapi.com/v1/ocr/${section}"
headers = {
    "X-API-Key": "your_api_key_here"
}
files = {
    "image": open("path/to/image.jpg", "rb")
}

response = requests.post(url, headers=headers, files=files)
print(response.json())`,
  }
}

const getSampleResponse = (section: string) => {
  // Placeholder function to return sample response
  return JSON.stringify(
    {
      status: "OK",
      document_number: "123456789",
      full_name: "John Doe",
      date_of_birth: "1990-01-01",
      address: "123 Main St",
      confidence: 0.95,
    },
    null,
    2,
  )
}

export default function APIDocumentationPage() {
  const [activeSection, setActiveSection] = useState("introduction")
  const [expandedRegions, setExpandedRegions] = useState<string[]>(["Asia"])
  const [activeCodeTab, setActiveCodeTab] = useState("curl")
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const toggleRegion = (region: string) => {
    setExpandedRegions((prev) => (prev.includes(region) ? prev.filter((r) => r !== region) : [...prev, region]))
  }

  const copyToClipboard = async (text: string, type: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedCode(type)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const currentApi = apiData[activeSection as keyof typeof apiData]
  const codeExamples = getCodeExamples(activeSection)
  const sampleResponse = getSampleResponse(activeSection)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        {/* Left Column - Navigation Sidebar */}
        <aside className="w-80 border-r bg-card/50 h-[calc(100vh-4rem)] sticky top-16">
          <ScrollArea className="h-full">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-6">API Documentation</h2>

              <nav className="space-y-2">
                {apiNavigation.map((section) => (
                  <div key={section.title}>
                    {section.collapsible ? (
                      <Collapsible
                        open={expandedRegions.includes(section.title)}
                        onOpenChange={() => toggleRegion(section.title)}
                      >
                        <CollapsibleTrigger className="flex items-center justify-between w-full p-2 text-sm font-medium hover:bg-accent rounded-md">
                          <span>{section.title}</span>
                          {expandedRegions.includes(section.title) ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </CollapsibleTrigger>
                        <CollapsibleContent className="ml-4 mt-2 space-y-2">
                          {section.regions?.map((region) => (
                            <div key={region.country}>
                              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                                {region.country}
                              </h4>
                              <div className="space-y-1 ml-2">
                                {region.apis.map((api) => (
                                  <button
                                    key={api.id}
                                    onClick={() => setActiveSection(api.id)}
                                    className={cn(
                                      "block w-full text-left p-2 text-sm rounded-md hover:bg-accent transition-colors",
                                      activeSection === api.id &&
                                        "bg-accent text-accent-foreground font-medium border-l-2 border-primary",
                                    )}
                                  >
                                    {api.title}
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <div>
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                          {section.title}
                        </h3>
                        <div className="space-y-1 ml-2">
                          {section.items?.map((item) => (
                            <button
                              key={item.id}
                              onClick={() => setActiveSection(item.id)}
                              className={cn(
                                "block w-full text-left p-2 text-sm rounded-md hover:bg-accent transition-colors",
                                activeSection === item.id &&
                                  "bg-accent text-accent-foreground font-medium border-l-2 border-primary",
                              )}
                            >
                              {item.title}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </ScrollArea>
        </aside>

        {/* Right Column - Combined Main Content and Code Examples */}
        <main className="flex-1 min-w-0">
          <div className="container max-w-6xl mx-auto p-8">
            {currentApi && (
              <div className="space-y-8">
                {/* Page Title and Summary */}
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold">{currentApi.title}</h1>
                  <p className="text-lg text-muted-foreground">{currentApi.summary}</p>
                </div>

                {"content" in currentApi || "customContent" in currentApi ? (
                  // Content Page Layout (Introduction, Authentication, etc.)
                  <div dangerouslySetInnerHTML={{ __html: currentApi.content || currentApi.customContent }} />
                ) : (
                  <div className="space-y-8">
                    {/* Separator */}
                    <hr className="border-border" />

                    {/* Endpoints Section */}
                    <div className="space-y-4">
                      <h2 className="text-2xl font-semibold">Endpoints</h2>
                      <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                        <Badge className="bg-green-600 hover:bg-green-700">{currentApi.method}</Badge>
                        <code className="text-sm font-mono">{currentApi.endpoint}</code>
                      </div>
                    </div>

                    {/* Separator */}
                    <hr className="border-border" />

                    {/* Request Parameters Section */}
                    <div className="space-y-4">
                      <h2 className="text-2xl font-semibold">Request Parameters</h2>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-border rounded-lg">
                          <thead>
                            <tr className="bg-muted/50">
                              <th className="border border-border p-3 text-left font-semibold">Parameter</th>
                              <th className="border border-border p-3 text-left font-semibold">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {currentApi.requestParams.map((param, index) => (
                              <tr key={index}>
                                <td className="border border-border p-3 font-mono text-sm font-semibold">
                                  {param.parameter}
                                </td>
                                <td className="border border-border p-3">
                                  <span className="font-semibold">{param.type}</span>. {param.description}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Separator */}
                    <hr className="border-border" />

                    {/* Code Example Section */}
                    <div className="space-y-6">
                      <h2 className="text-2xl font-semibold">Code Example</h2>
                      <p className="text-muted-foreground">Code snippet</p>

                      {/* Language Tabs */}
                      <div className="flex border-b">
                        {[
                          { id: "curl", label: "cURL" },
                          { id: "javascript", label: "JavaScript" },
                          { id: "python", label: "Python" },
                        ].map((tab) => (
                          <button
                            key={tab.id}
                            onClick={() => setActiveCodeTab(tab.id)}
                            className={cn(
                              "px-4 py-2 text-sm font-medium border-b-2 transition-colors",
                              activeCodeTab === tab.id
                                ? "border-primary text-primary"
                                : "border-transparent text-muted-foreground hover:text-foreground",
                            )}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </div>

                      {/* Request Code Block */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm font-semibold">Request</h4>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              copyToClipboard(codeExamples[activeCodeTab as keyof typeof codeExamples], "request")
                            }
                          >
                            {copiedCode === "request" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                          </Button>
                        </div>
                        <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto">
                          <code>{codeExamples[activeCodeTab as keyof typeof codeExamples]}</code>
                        </pre>
                      </div>
                    </div>

                    {/* Separator */}
                    <hr className="border-border" />

                    {/* Response Formats Section */}
                    <div className="space-y-6">
                      <h2 className="text-2xl font-semibold">Response Formats</h2>
                      <p className="text-muted-foreground leading-relaxed">
                        The API's response is a JSON object with two main fields:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded text-sm">status</code> and{" "}
                        <code className="bg-muted px-1 py-0.5 rounded text-sm">message</code>.
                      </p>

                      {/* Successful Data Extraction Subsection */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">
                          Successful Data Extraction (Status{" "}
                          <code className="bg-muted px-1 py-0.5 rounded text-sm">OK</code>)
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          When the ID card is successfully processed, the{" "}
                          <code className="bg-muted px-1 py-0.5 rounded text-sm">status</code> field is set to{" "}
                          <strong>
                            <code className="bg-muted px-1 py-0.5 rounded text-sm">OK</code>
                          </strong>
                          . The <code className="bg-muted px-1 py-0.5 rounded text-sm">message</code> field contains a
                          JSON object with the extracted data fields, including:
                        </p>

                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-border rounded-lg">
                            <thead>
                              <tr className="bg-muted/50">
                                <th className="border border-border p-3 text-left font-semibold">Field</th>
                                <th className="border border-border p-3 text-left font-semibold">Type</th>
                                <th className="border border-border p-3 text-left font-semibold">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              {currentApi.responseFields.map((field, index) => (
                                <tr key={index}>
                                  <td className="border border-border p-3 font-mono text-sm">{field.field}</td>
                                  <td className="border border-border p-3">
                                    <Badge variant="outline">{field.type}</Badge>
                                  </td>
                                  <td className="border border-border p-3">{field.description}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        {/* Example Response */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-sm font-semibold">Example Response</h4>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyToClipboard(sampleResponse, "response")}
                            >
                              {copiedCode === "response" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                            </Button>
                          </div>
                          <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto">
                            <code>{sampleResponse}</code>
                          </pre>
                        </div>
                      </div>

                      {/* Failure Responses Subsection */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">
                          Failure Responses (Status <code className="bg-muted px-1 py-0.5 rounded text-sm">FAIL</code>{" "}
                          or <code className="bg-muted px-1 py-0.5 rounded text-sm">INVALID_REQUEST</code>)
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          The API returns a{" "}
                          <strong>
                            <code className="bg-muted px-1 py-0.5 rounded text-sm">FAIL</code>
                          </strong>{" "}
                          or{" "}
                          <strong>
                            <code className="bg-muted px-1 py-0.5 rounded text-sm">INVALID_REQUEST</code>
                          </strong>{" "}
                          status when it cannot process the request due to an issue with the input. The{" "}
                          <code className="bg-muted px-1 py-0.5 rounded text-sm">message</code> field will contain a
                          description of the error.
                        </p>

                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-border rounded-lg">
                            <thead>
                              <tr className="bg-muted/50">
                                <th className="border border-border p-3 text-left font-semibold">Status Code</th>
                                <th className="border border-border p-3 text-left font-semibold">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border border-border p-3 font-mono text-sm">OK</td>
                                <td className="border border-border p-3">
                                  Chargeable. The process was successful, and data was extracted.
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-border p-3 font-mono text-sm">FAIL</td>
                                <td className="border border-border p-3">
                                  Chargeable. Data extraction failed. The input image may be corrupted, or the card is
                                  not readable. Please verify and retry.
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-border p-3 font-mono text-sm">INVALID_REQUEST</td>
                                <td className="border border-border p-3">
                                  Free. The request parameters were malformed. Please verify the API call parameters.
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-border p-3 font-mono text-sm">IMAGE_INVALID_FORMAT</td>
                                <td className="border border-border p-3">
                                  Free. The image format is not supported. Supported formats include JPEG, JPG, PNG, and
                                  BMP.
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-border p-3 font-mono text-sm">IMAGE_INVALID_SIZE</td>
                                <td className="border border-border p-3">
                                  Free. The image size exceeds the 2MB limit.
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-border p-3 font-mono text-sm">INNER_ERROR</td>
                                <td className="border border-border p-3">
                                  Free. A server-side error occurred. Please wait and try again.
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
