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
  title: "Romanian ID Card OCR",
  summary: "id number + name recognition",
  endpoint: "hhttps://api.100ocrapi.com/v1/rou_id_card",
  method: "POST",
  requestParams: [
    {
      parameter: "img",
      type: "String",
      description: "base64 encoded image. It is recommended that the image be less than 200KB, so it will be returned within 2 seconds, otherwise the return time will be longer.",
    },
  ],
  responseFields: [
    { field: "series", type: "string", description: "ID card series" },
    { field: "number", type: "string", description: "ID card number" },
    { field: "last_name", type: "string", description: "Last name" },
    { field: "first_name", type: "string", description: "First name" },
    { field: "nationality", type: "string", description: "Nationality" },
    { field: "place_of_birth", type: "string", description: "Place of birth" },
    { field: "address", type: "string", description: "Address" },
    { field: "issued_by", type: "string", description: "Issuing authority" },
    { field: "validity", type: "string", description: "Validity period" },
  ],
  customContent: `
    <div class="space-y-8">
      <hr class="border-border" />
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Endpoints</h2>
        <p class="text-muted-foreground">
          <code class="bg-muted px-2 py-1 rounded text-sm font-mono">POSThttps://api.100ocrapi.com/v1/rou_id_card</code>
        </p>
      </div>
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Request Parameters</h2>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse border border-border">
            <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">parameter</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
            <tbody><tr><td class="border border-border px-4 py-2"><code>img</code></td><td class="border border-border px-4 py-2"><code>string</code>, base64 encoded image. It is recommended that the image be less than 200KB, so it will be returned within 2 seconds, otherwise the return time will be longer.</td></tr></tbody>
          </table>
        </div>
      </div>
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold">Code Example</h2>
        <div>
          <h4 class="text-lg font-medium mb-2">Code snippet</h4>
          <div class="mb-4">
            <h5 class="text-sm font-semibold mb-2">cURL</h5>
            <pre class="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-bash">curl --location --request POST 'https://api.100ocrapi.com/v1/rou_id_card' \\
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
    <span class="text-blue-400">"series"</span>: <span class="text-green-400">"AB"</span>,
    <span class="text-blue-400">"number"</span>: <span class="text-green-400">"123456"</span>,
    <span class="text-blue-400">"last_name"</span>: <span class="text-green-400">"DOE"</span>,
    <span class="text-blue-400">"first_name"</span>: <span class="text-green-400">"JOHN"</span>,
    <span class="text-blue-400">"nationality"</span>: <span class="text-green-400">"Română / ROU"</span>,
    <span class="text-blue-400">"place_of_birth"</span>: <span class="text-green-400">"Jud. BC, Mun. Bacău"</span>,
    <span class="text-blue-400">"address"</span>: <span class="text-green-400">"Str. 13 Septembrie nr. 70, Jud. BC, Mun. Bacău"</span>,
    <span class="text-blue-400">"issued_by"</span>: <span class="text-green-400">"SPCLEP Bacău"</span>,
    <span class="text-blue-400">"validity"</span>: <span class="text-green-400">"15.12.19-16.10.2029"</span>
  }
}</code></pre>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Response Format</h3>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-border">
              <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">fields</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
              <tbody>
                <tr><td class="border border-border px-4 py-2"><code>status</code></td><td class="border border-border px-4 py-2">status code</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>message</code></td><td class="border border-border px-4 py-2"><code>series</code>: ID card series<br/><code>number</code>: ID card number<br/><code>last_name</code>: Last name<br/><code>first_name</code>: First name<br/><code>nationality</code>: Nationality<br/><code>place_of_birth</code>: Place of birth<br/><code>address</code>: Address<br/><code>issued_by</code>: Issuing authority<br/><code>validity</code>: Validity period</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Status Code</h3>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-border">
              <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">status</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
              <tbody>
                <tr><td class="border border-border px-4 py-2"><code>OK</code></td><td class="border border-border px-4 py-2"><code>charge</code>, success</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>FAIL</code></td><td class="border border-border px-4 py-2"><code>charge</code>, image recognition error, please check input image</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>INVALID_REQUEST</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid request parameters</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>IMAGE_INVALID_FORMAT</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid image format, image format should be one of jpeg/jpg/png/bmp</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>IMAGE_INVALID_SIZE</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid image size, should be less than 2M</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>INNER_ERROR</code></td><td class="border border-border px-4 py-2"><code>free</code>, server error</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Error Response Examples</h3>
          <div class="space-y-3">
            <div><p class="text-muted-foreground mb-2">Response for recognition fail</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check input image and retry"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for input image not identity card</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"not identity card"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for not recognized card type</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"card not recognized"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for invalid request parameters</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INVALID_REQUEST"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check request params"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for invalid image format</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_FORMAT"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image format not support"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for image size larger than 2M</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_SIZE"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image larger than 2M"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for server error</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INNER_ERROR"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"Inner error, please retry later"</span>
}</code></pre></div>
          </div>
        </div>
      </div>
    </div>
  `,
},
  "philippines-tinid": {
    title: "Philippines TinID OCR",
    summary: "licenseNumber + name recognition",
    endpoint: "https://api.100ocrapi.com/v1/phl_tinid",
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
            <code class="bg-muted px-2 py-1 rounded text-sm font-mono">POST https://api.100ocrapi.com/v1/phl_tinid</code>
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
              <pre class="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-bash">curl --location --request POST 'https://api.100ocrapi.com/v1/phl_tinid' \\
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
            <h3 class="text-lg font-medium">Response Format</h3>
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

          <div class="space-y-4">
            <h3 class="text-lg font-medium">Status Code</h3>
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
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check input image and retry"</span>
}</code></pre>
          </div>

          <div class="space-y-4">
            <h4 class="text-md font-medium">Invalid Request Parameters</h4>
            <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INVALID_REQUEST"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check request params"</span>
}</code></pre>
          </div>

          <div class="space-y-4">
            <h4 class="text-md font-medium">Invalid Image Format</h4>
            <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_FORMAT"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image format not support"</span>
}</code></pre>
          </div>

          <div class="space-y-4">
            <h4 class="text-md font-medium">Image Size Too Large</h4>
            <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_SIZE"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image larger than 2M"</span>
}</code></pre>
          </div>

          <div class="space-y-4">
            <h4 class="text-md font-medium">Server Error</h4>
            <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INNER_ERROR"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"Inner error, please retry later"</span>
}</code></pre>
          </div>
        </div>
      </div>
    `,
  },

  "philippines-umid": {
    title: "Philippines UMID OCR",
    summary: "crn + name recognition",
    endpoint: "https://api.100ocrapi.com/v1/phl_umid",
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
            <code class="bg-muted px-2 py-1 rounded text-sm font-mono">POST https://api.100ocrapi.com/v1/phl_umid</code>
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
              <pre class="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-bash">curl --location --request POST 'https://api.100ocrapi.com/v1/phl_umid' \\
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

          <div class="space-y-4">
            <h3 class="text-lg font-medium">Response Format</h3>
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
                    <td class="border border-border px-4 py-2"><code>crn</code>: the crn number<br><code>surname</code>: surname<br><code>givenName</code>: given name<br><code>middleName</code>: middle name<br><code>birthday</code>: date of birth<br><code>sex</code>: gender<br><code>address</code>: address</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="space-y-4">
            <h3 class="text-lg font-medium">Status Code</h3>
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
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check input image and retry"</span>
}</code></pre>
          </div>

          <div class="space-y-4">
            <h4 class="text-md font-medium">Invalid Request Parameters</h4>
            <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INVALID_REQUEST"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check request params"</span>
}</code></pre>
          </div>

          <div class="space-y-4">
            <h4 class="text-md font-medium">Invalid Image Format</h4>
            <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_FORMAT"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image format not support"</span>
}</code></pre>
          </div>

          <div class="space-y-4">
            <h4 class="text-md font-medium">Image Size Too Large</h4>
            <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_SIZE"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image larger than 2M"</span>
}</code></pre>
          </div>

          <div class="space-y-4">
            <h4 class="text-md font-medium">Server Error</h4>
            <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INNER_ERROR"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"Inner error, please retry later"</span>
}</code></pre>
          </div>
        </div>
      </div>
    `,
  },
  "philippines-drivers-license": {
    title: "Philippines Driver's License OCR API",
    summary:
      "The Philippines Driver's License OCR API allows you to extract and recognize key information from a Philippines Driver's License using Optical Character Recognition (OCR) technology. The extracted information includes the license number and the name of the license holder.",
    endpoint: "https://api.100ocrapi.com/v1/phl_drivers_license",
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
          <h2 class="text-2xl font-semibold">Endpoints</h2>
          <p class="text-muted-foreground">
            <code class="bg-muted px-2 py-1 rounded text-sm font-mono">POST https://api.100ocrapi.com/v1/phl_drivers_license</code>
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
              <pre class="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-bash">curl --location --request POST 'https://api.100ocrapi.com/v1/phl_drivers_license' \\
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
            <h3 class="text-lg font-medium">Response Format</h3>
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
                    <td class="border border-border px-4 py-2"><code>name</code>: full name<br><code>lastName</code>: last name<br><code>firstName</code>: first name<br><code>middleName</code>: middle name<br><code>nationality</code>: citizenship<br><code>sex</code>: gender, 'M' or 'F'<br><code>address</code>: address<br><code>licenseNo</code>: license number<br><code>expiresDate</code>: license expiry Date<br><code>agencyCode</code>: agency code<br><code>birthday</code>: date of birth</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="space-y-4">
            <h3 class="text-lg font-medium">Status Code</h3>
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
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check input image and retry"</span>
}</code></pre>
          </div>

          <div class="space-y-4">
            <h4 class="text-md font-medium">Invalid Request Parameters</h4>
            <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INVALID_REQUEST"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check request params"</span>
}</code></pre>
          </div>

          <div class="space-y-4">
            <h4 class="text-md font-medium">Invalid Image Format</h4>
            <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_FORMAT"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image format not support"</span>
}</code></pre>
          </div>

          <div class="space-y-4">
            <h4 class="text-md font-medium">Image Size Too Large</h4>
            <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_SIZE"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image larger than 2M"</span>
}</code></pre>
          </div>

          <div class="space-y-4">
            <h4 class="text-md font-medium">Server Error</h4>
            <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INNER_ERROR"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"Inner error, please retry later"</span>
}</code></pre>
          </div>
        </div>
      </div>
    `,
  },
  "philippines-voters-id": {
    title: "Philippines Voter's ID OCR",
    summary: "vin + name recognition",
    endpoint: "https://api.100ocrapi.com/v1/phl_voters_id",
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
      { field: "vin", type: "string", description: "the vin number" },
      { field: "firstName", type: "string", description: "first name" },
      { field: "lastName", type: "string", description: "last name" },
      { field: "birthday", type: "string", description: "date of birth" },
      { field: "civilStatus", type: "string", description: "civil status" },
      { field: "citizenship", type: "string", description: "nationality" },
      { field: "address", type: "string", description: "address" },
      { field: "precinctNo", type: "string", description: "precinct No" },
    ],
    customContent: `
      <div class="space-y-8">
        <hr class="border-border" />
        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">Endpoints</h2>
          <p class="text-muted-foreground">
            <code class="bg-muted px-2 py-1 rounded text-sm font-mono">POST https://api.100ocrapi.com/v1/phl_voters_id</code>
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
              <pre class="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-bash">curl --location --request POST 'https://api.100ocrapi.com/v1/phl_voters_id' \\
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
    <span class="text-blue-400">"vin"</span>: <span class="text-green-400">"7801-0451-11881MMC20002-3"</span>,
    <span class="text-blue-400">"firstName"</span>: <span class="text-green-400">"CARBALLO"</span>,
    <span class="text-blue-400">"lastName"</span>: <span class="text-green-400">"MAGAS"</span>,
    <span class="text-blue-400">"birthday"</span>: <span class="text-green-400">"September 18,1981"</span>,
    <span class="text-blue-400">"civilStatus"</span>: <span class="text-green-400">"Single"</span>,
    <span class="text-blue-400">"citizenship"</span>: <span class="text-green-400">"Filipino"</span>,
    <span class="text-blue-400">"address"</span>: <span class="text-green-400">" M50-B IGNACIA ST.STA QUITERIA BARANGAY 162"</span>,
    <span class="text-blue-400">"precinctNo"</span>: <span class="text-green-400">"0451B"</span>
  }
}</code></pre>
          </div>

          <div class="space-y-4">
            <h3 class="text-lg font-medium">Response Format</h3>
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
                    <td class="border border-border px-4 py-2"><code>vin</code>: the vin number<br><code>firstName</code>: first name<br><code>lastName</code>: last name<br><code>birthday</code>: date of birth<br><code>civilStatus</code>: civil status<br><code>citizenship</code>: nationality<br><code>address</code>: address<br><code>precinctNo</code>: precinct No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="space-y-4">
            <h3 class="text-lg font-medium">Status Code</h3>
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
            <h3 class="text-lg font-medium">Error Response Examples</h3>
            
            <div class="space-y-3">
              <div>
                <p class="text-muted-foreground mb-2">Response for recognition fail</p>
                <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check input image and retry"</span>
}</code></pre>
              </div>

              <div>
                <p class="text-muted-foreground mb-2">Response for invalid request parameters</p>
                <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INVALID_REQUEST"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check request params"</span>
}</code></pre>
              </div>

              <div>
                <p class="text-muted-foreground mb-2">Response for invalid image format</p>
                <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_FORMAT"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image format not support"</span>
}</code></pre>
              </div>

              <div>
                <p class="text-muted-foreground mb-2">Response for image size larger than 2M</p>
                <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_SIZE"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image larger than 2M"</span>
}</code></pre>
              </div>

              <div>
                <p class="text-muted-foreground mb-2">Response for server error</p>
                <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INNER_ERROR"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"Inner error, please retry later"</span>
}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  },

  "india-pan": {
    title: "India PAN Card Data Extraction API",
    summary:
      "Extract comprehensive identity information from Indonesian KTP cards including personal details, address, and demographic data.",
    endpoint: "https://api.100ocrapi.com/v1/ind_pan",
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
      { field: "name", type: "string", description: "name" },
      { field: "id", type: "string", description: "ID card number, NIK" },
      { field: "pob", type: "string", description: "place of birth, maybe empty" },
      { field: "dob", type: "string", description: "date of birth, maybe empty" },
      { field: "gender", type: "string", description: "gender, maybe empty" },
      { field: "address", type: "string", description: "address, maybe empty" },
      { field: "rt", type: "string", description: "RT, maybe empty" },
      { field: "rw", type: "string", description: "RW, maybe empty" },
      { field: "village", type: "string", description: "village, maybe empty" },
      { field: "district", type: "string", description: "district, maybe empty" },
      { field: "religion", type: "string", description: "religion, maybe empty" },
      { field: "marital_status", type: "string", description: "marital status, maybe empty" },
      { field: "work", type: "string", description: "work, maybe empty" },
      { field: "nationnality", type: "string", description: "nationnality, maybe empty" },
      { field: "city", type: "string", description: "city, maybe empty" },
      { field: "province", type: "string", description: "province, maybe empty" },
    ],
    customContent: `
      <div class="space-y-8">
        <hr class="border-border" />
        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">Endpoints</h2>
          <p class="text-muted-foreground">
            <code class="bg-muted px-2 py-1 rounded text-sm font-mono">POST https://api.100ocrapi.com/v1/ind_pan</code>
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
              <pre class="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-bash">curl --location --request POST 'https://api.100ocrapi.com/v1/ind_pan' \\
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
    <span class="text-blue-400">"name"</span>: <span class="text-green-400">"HELLO NAME"</span>,
    <span class="text-blue-400">"id"</span>: <span class="text-green-400">"3171024302821001"</span>,
    <span class="text-blue-400">"pob"</span>: <span class="text-green-400">"GARESSI SUPPA"</span>,
    <span class="text-blue-400">"dob"</span>: <span class="text-green-400">"01-01-1961"</span>,
    <span class="text-blue-400">"gender"</span>: <span class="text-green-400">"LAKI-LAKI"</span>,
    <span class="text-blue-400">"address"</span>: <span class="text-green-400">"BTN UNHALU BLOK C NO. 28"</span>,
    <span class="text-blue-400">"rt"</span>: <span class="text-green-400">"006"</span>,
    <span class="text-blue-400">"rw"</span>: <span class="text-green-400">"003"</span>,
    <span class="text-blue-400">"village"</span>: <span class="text-green-400">"KAMBU"</span>,
    <span class="text-blue-400">"district"</span>: <span class="text-green-400">"KAMBU"</span>,
    <span class="text-blue-400">"religion"</span>: <span class="text-green-400">"ISLAM"</span>,
    <span class="text-blue-400">"marital_status"</span>: <span class="text-green-400">"KAWIN"</span>,
    <span class="text-blue-400">"work"</span>: <span class="text-green-400">"PEGAWAI NEGERI SIPIL (PNS)"</span>,
    <span class="text-blue-400">"nationnality"</span>: <span class="text-green-400">"WNI"</span>,
    <span class="text-blue-400">"city"</span>: <span class="text-green-400">"KOTA KENDARI"</span>,
    <span class="text-blue-400">"province"</span>: <span class="text-green-400">"SULAWESI TENGGARA"</span>
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
        </div>
      </div>
    `,
  },
  "india-aadhaar-back": {
    title: "India Aadhaar Back OCR",
    summary: "address + card number + vid recognition",
    endpoint: "https://api.100ocrapi.com/v1/ind_aadhaar_back",
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
      { field: "City", type: "string", description: "city name" },
      { field: "Province", type: "string", description: "province name" },
      { field: "PostCode", type: "string", description: "post code" },
      { field: "Address", type: "string", description: "detail address info" },
      { field: "CardNumber", type: "string", description: "card number" },
      { field: "VID", type: "string", description: "vid number" },
    ],
    customContent: `
      <div class="space-y-8">
        <hr class="border-border" />
        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">Endpoints</h2>
          <p class="text-muted-foreground">
            <code class="bg-muted px-2 py-1 rounded text-sm font-mono">POST https://api.100ocrapi.com/v1/ind_aadhaar_back</code>
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
              <pre class="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-bash">curl --location --request POST 'https://api.100ocrapi.com/v1/ind_aadhaar_back' \\
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
    <span class="text-blue-400">"City"</span>: <span class="text-green-400">"Sitapur"</span>,
    <span class="text-blue-400">"Province"</span>: <span class="text-green-400">"Uttar Pradesh"</span>,
    <span class="text-blue-400">"PostCode"</span>: <span class="text-green-400">"261131"</span>,
    <span class="text-blue-400">"Address"</span>: <span class="text-green-400">"S/O: Jameel Khan, tikariya, Tikariya, Sitapur, Uttar Pradesh - 261131"</span>,
    <span class="text-blue-400">"CardNumber"</span>: <span class="text-green-400">"387133213107"</span>,
    <span class="text-blue-400">"VID"</span>: <span class="text-green-400">"9106098539989335"</span>
  }
}</code></pre>
          </div>

          <div class="space-y-4">
            <h3 class="text-lg font-medium">Response Format</h3>
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
                    <td class="border border-border px-4 py-2"><code>VID</code>: vid number<br><code>CardNumber</code>: card number<br><code>City</code>: city name<br><code>Province</code>: province name<br><code>PostCode</code>: post code<br><code>Address</code>: detail address info</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="space-y-4">
            <h3 class="text-lg font-medium">Status Code</h3>
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
            <h3 class="text-lg font-medium">Error Response Examples</h3>
            
            <div class="space-y-3">
              <div>
                <p class="text-muted-foreground mb-2">Response for recognition fail</p>
                <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check input image and retry"</span>
}</code></pre>
              </div>

              <div>
                <p class="text-muted-foreground mb-2">Response for invalid request parameters</p>
                <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INVALID_REQUEST"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check request params"</span>
}</code></pre>
              </div>

              <div>
                <p class="text-muted-foreground mb-2">Response for invalid image format</p>
                <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_FORMAT"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image format not support"</span>
}</code></pre>
              </div>

              <div>
                <p class="text-muted-foreground mb-2">Response for image size larger than 2M</p>
                <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_SIZE"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image larger than 2M"</span>
}</code></pre>
              </div>

              <div>
                <p class="text-muted-foreground mb-2">Response for server error</p>
                <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INNER_ERROR"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"Inner error, please retry later"</span>
}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  "india-aadhaar-front": {
    title: "India Aadhaar Front OCR",
    summary: "card number + name recognition",
    endpoint: "https://api.100ocrapi.com/v1/ind_aadhaar_front",
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
      { field: "CardNumber", type: "string", description: "card number" },
      {
        field: "DateOfBirth",
        type: "string",
        description: "date of birth, two formats in the card: dd/MM/yyyy or yyyy",
      },
      { field: "DownloadDate", type: "string", description: "download date" },
      { field: "Gender", type: "string", description: "gender" },
      { field: "IssueDate", type: "string", description: "the issue date" },
      { field: "MobileNumber", type: "string", description: "mobile number" },
      { field: "Name", type: "string", description: "user name" },
      { field: "VID", type: "string", description: "vid number" },
    ],
    customContent: `
      <div class="space-y-8">
        <hr class="border-border" />
        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">Endpoints</h2>
          <p class="text-muted-foreground">
            <code class="bg-muted px-2 py-1 rounded text-sm font-mono">POST https://api.100ocrapi.com/v1/ind_aadhaar_front</code>
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
              <pre class="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-bash">curl --location --request POST 'https://api.100ocrapi.com/v1/ind_aadhaar_front' \\
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
    <span class="text-blue-400">"CardNumber"</span>: <span class="text-green-400">"775754348277"</span>,
    <span class="text-blue-400">"DateOfBirth"</span>: <span class="text-green-400">"16/07/2000"</span>,
    <span class="text-blue-400">"DownloadDate"</span>: <span class="text-green-400">"06/09/2020"</span>,
    <span class="text-blue-400">"Gender"</span>: <span class="text-green-400">"FEMALE"</span>,
    <span class="text-blue-400">"IssueDate"</span>: <span class="text-green-400">"04/09/2020"</span>,
    <span class="text-blue-400">"MobileNumber"</span>: <span class="text-green-400">""</span>,
    <span class="text-blue-400">"Name"</span>: <span class="text-green-400">"Sinch Poonam Sagar"</span>,
    <span class="text-blue-400">"VID"</span>: <span class="text-green-400">"9150912715607691"</span>
  }
}</code></pre>
          </div>

          <div class="space-y-4">
            <h3 class="text-lg font-medium">Response Format</h3>
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
                    <td class="border border-border px-4 py-2"><code>CardNumber</code>: card number<br><code>DateOfBirth</code>: date of birth, two formats in the card: dd/MM/yyyy or yyyy<br><code>DownloadDate</code>: download date<br><code>Gender</code>: gender<br><code>IssueDate</code>: the issue date<br><code>MobileNumber</code>: mobile number<br><code>Name</code>: user name<br><code>VID</code>: vid number</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="space-y-4">
            <h3 class="text-lg font-medium">Error Response Formats</h3>
            
            <div class="space-y-3">
              <h4 class="text-base font-medium">Recognition Failure</h4>
              <p class="text-muted-foreground text-sm">Response for recognition fail</p>
              <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check input image and retry"</span>
}</code></pre>
            </div>

            <div class="space-y-3">
              <h4 class="text-base font-medium">Invalid Request Parameters</h4>
              <p class="text-muted-foreground text-sm">Response for invalid request parameters</p>
              <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INVALID_REQUEST"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check request params"</span>
}</code></pre>
            </div>

            <div class="space-y-3">
              <h4 class="text-base font-medium">Invalid Image Format</h4>
              <p class="text-muted-foreground text-sm">Response for invalid image format</p>
              <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_FORMAT"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image format not support"</span>
}</code></pre>
            </div>

            <div class="space-y-3">
              <h4 class="text-base font-medium">Image Size Too Large</h4>
              <p class="text-muted-foreground text-sm">Response for image size larger than 2M</p>
              <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_SIZE"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image larger than 2M"</span>
}</code></pre>
            </div>

            <div class="space-y-3">
              <h4 class="text-base font-medium">Server Error</h4>
              <p class="text-muted-foreground text-sm">Response for server error</p>
              <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INNER_ERROR"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"Inner error, please retry later"</span>
}</code></pre>
            </div>
          </div>

          <div class="space-y-4">
            <h3 class="text-lg font-medium">Status Codes</h3>
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
        </div>
      </div>
    `,
  },

"thailand-drivers-license": {
  title: "Thailand Driver's License OCR",
  summary: "license number + name recognition + id number",
  endpoint: "https://api.100ocrapi.com/v1/tha_drivers_license",
  method: "POST",
  requestParams: [
    {
      parameter: "img",
      type: "String",
      description: "base64 encoded image. It is recommended that the image be less than 200KB, so it will be returned within 2 seconds, otherwise the return time will be longer.",
    },
  ],
  responseFields: [
    { field: "cardTypeTh", type: "string", description: "Card type in Thai" },
    { field: "cardTypeEn", type: "string", description: "Card type in English" },
    { field: "licenseNumber", type: "string", description: "License number" },
    { field: "idNumber", type: "string", description: "ID number" },
    { field: "nameTh", type: "string", description: "Name in Thai" },
    { field: "nameEn", type: "string", description: "Name in English" },
    { field: "birthTh", type: "string", description: "Date of birth in Thai" },
    { field: "birthEn", type: "string", description: "Date of birth in English" },
    { field: "issueDate", type: "string", description: "Card issue date" },
    { field: "expiryDate", type: "string", description: "Card expiry date" },
  ],
  customContent: `
    <div class="space-y-8">
      <hr class="border-border" />
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Endpoints</h2>
        <p class="text-muted-foreground">
          <code class="bg-muted px-2 py-1 rounded text-sm font-mono">POST https://api.100ocrapi.com/v1/tha_drivers_license</code>
        </p>
      </div>
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Request Parameters</h2>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse border border-border">
            <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">parameter</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
            <tbody><tr><td class="border border-border px-4 py-2"><code>img</code></td><td class="border border-border px-4 py-2"><code>string</code>, base64 encoded image. It is recommended that the image be less than 200KB, so it will be returned within 2 seconds, otherwise the return time will be longer.</td></tr></tbody>
          </table>
        </div>
      </div>
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold">Code Example</h2>
        <div>
          <h4 class="text-lg font-medium mb-2">Code snippet</h4>
          <div class="mb-4">
            <h5 class="text-sm font-semibold mb-2">cURL</h5>
            <pre class="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-bash">curl --location --request POST 'https://api.100ocrapi.com/v1/tha_drivers_license' \\
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
    <span class="text-blue-400">"cardTypeTh"</span>: <span class="text-green-400">"ใบอนุญาตขับรถ"</span>,
    <span class="text-blue-400">"cardTypeEn"</span>: <span class="text-green-400">"Driving License"</span>,
    <span class="text-blue-400">"licenseNumber"</span>: <span class="text-green-400">"61002614"</span>,
    <span class="text-blue-400">"idNumber"</span>: <span class="text-green-400">"1102652247328"</span>,
    <span class="text-blue-400">"nameTh"</span>: <span class="text-green-400">"นาย อนิรุต ทองรักอยู่"</span>,
    <span class="text-blue-400">"nameEn"</span>: <span class="text-green-400">"MR. ANIRUT THONGRAKYU"</span>,
    <span class="text-blue-400">"birthTh"</span>: <span class="text-green-400">"27 พฤษภาคม 2538"</span>,
    <span class="text-blue-400">"birthEn"</span>: <span class="text-green-400">"27 May 1995"</span>,
    <span class="text-blue-400">"issueDate"</span>: <span class="text-green-400">"24 December 2018"</span>,
    <span class="text-blue-400">"expiryDate"</span>: <span class="text-green-400">"24 December 2020"</span>
  }
}</code></pre>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Response Format</h3>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-border">
              <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">fields</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
              <tbody>
                <tr><td class="border border-border px-4 py-2"><code>status</code></td><td class="border border-border px-4 py-2">status code</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>message</code></td><td class="border border-border px-4 py-2"><code>cardTypeTh</code>: th card type<br/><code>cardTypeEn</code>: en card type<br/><code>licenseNumber</code>: license number<br/><code>idNumber</code>: id number<br/><code>nameTh</code>: th name<br/><code>nameEn</code>: en name<br/><code>birthTh</code>: birth day of th<br/><code>birthEn</code>: birth day of en<br/><code>issueDate</code>: issuse date<br/><code>expiryDate</code>: expiry date</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Status Code</h3>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-border">
              <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">status</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
              <tbody>
                <tr><td class="border border-border px-4 py-2"><code>OK</code></td><td class="border border-border px-4 py-2"><code>charge</code>, success</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>FAIL</code></td><td class="border border-border px-4 py-2"><code>charge</code>, image recognition error, please check input image</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>INVALID_REQUEST</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid request parameters</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>IMAGE_INVALID_FORMAT</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid image format, image format should be one of jpeg/jpg/png/bmp</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>IMAGE_INVALID_SIZE</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid image size, should be less than 2M</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>INNER_ERROR</code></td><td class="border border-border px-4 py-2"><code>free</code>, server error</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Error Response Examples</h3>
          <div class="space-y-3">
            <div><p class="text-muted-foreground mb-2">Response for recognition fail</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check input image and retry"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for invalid request parameters</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INVALID_REQUEST"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check request params"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for invalid image format</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_FORMAT"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image format not support"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for image size larger than 2M</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_SIZE"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image larger than 2M"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for server error</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INNER_ERROR"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"Inner error, please retry later"</span>
}</code></pre></div>
          </div>
        </div>
      </div>
    </div>
  `,
},
  "thailand-id-card": {
    title: "Thailand ID Card OCR",
    summary: "id number + name recognition",
    endpoint: "https://api.100ocrapi.com/v1/tha_id_card",
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
        { field: "cardTypeTh", type: "string", description: "Card type in Thai" },
        { field: "cardTypeEn", type: "string", description: "Card type in English" },
        { field: "idNumber", type: "string", description: "ID number" },
        { field: "serialNumber", type: "string", description: "Card serial number" },
        { field: "nameTh", type: "string", description: "Name in Thai" },
        { field: "nameEn", type: "string", description: "First name in English" },
        { field: "lastNameEn", type: "string", description: "Last name in English" },
        { field: "birthTh", type: "string", description: "Date of birth in Thai" },
        { field: "birthEn", type: "string", description: "Date of birth in English" },
        { field: "issueDateEN", type: "string", description: "Issue date in English" },
        { field: "issueDateTH", type: "string", description: "Issue date in Thai" },
        { field: "expiryDateEN", type: "string", description: "Expiry date in English" },
        { field: "expiryDateTH", type: "string", description: "Expiry date in Thai" },
        { field: "religion", type: "string", description: "Religion" },
        { field: "address", type: "string", description: "Address" },
    ],
    customContent: `
      <div class="space-y-8">
        <hr class="border-border" />
        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">Endpoints</h2>
          <p class="text-muted-foreground">
            <code class="bg-muted px-2 py-1 rounded text-sm font-mono">POST https://api.100ocrapi.com/v1/tha_id_card</code>
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
              <pre class="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-bash">curl --location --request POST 'https://api.100ocrapi.com/v1/tha_id_card' \\
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
    <span class="text-blue-400">"cardTypeTh"</span>: <span class="text-green-400">"บัตรประจำตัวประชาชน"</span>,
    <span class="text-blue-400">"cardTypeEn"</span>: <span class="text-green-400">"Thai National ID Card"</span>,
    <span class="text-blue-400">"idNumber"</span>: <span class="text-green-400">"1842356782169"</span>,
    <span class="text-blue-400">"serialNumber"</span>: <span class="text-green-400">"8407-03-22251350"</span>,
    <span class="text-blue-400">"nameTh"</span>: <span class="text-green-400">"น.ส. พรนภา ยิ่งเภตรา"</span>,
    <span class="text-blue-400">"nameEn"</span>: <span class="text-green-400">"Miss. Ponnapa"</span>,
    <span class="text-blue-400">"lastNameEn"</span>: <span class="text-green-400">"Yinthpetra"</span>,
    <span class="text-blue-400">"birthTh"</span>: <span class="text-green-400">"29 ม.ค. 2540"</span>,
    <span class="text-blue-400">"birthEn"</span>: <span class="text-green-400">"29 Jan. 1997"</span>,
    <span class="text-blue-400">"issueDateEN"</span>: <span class="text-green-400">"12 Apr. 2017"</span>,
    <span class="text-blue-400">"issueDateTH"</span>: <span class="text-green-400">"12 เม.ย. 2560"</span>,
    <span class="text-blue-400">"expiryDateEN"</span>: <span class="text-green-400">"22 Jun. 2025"</span>,
    <span class="text-blue-400">"expiryDateTH"</span>: <span class="text-green-400">"22 มิ.ย. 2568"</span>,
    <span class="text-blue-400">"religion"</span>: <span class="text-green-400">"พุทธ"</span>,
    <span class="text-blue-400">"address"</span>: <span class="text-green-400">"ที่อยู่ 125 หมู่ที่ 7 ต.ช้างขวา อ.กาญจนดิษฐ์"</span>
  }
}</code></pre>
          </div>

          <div class="space-y-4">
            <h3 class="text-lg font-medium">Response Format</h3>
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
                    <td class="border border-border px-4 py-2"><code>cardTypeTh</code>: th card type<br/><code>cardTypeEn</code>: en card type<br/><code>idNumber</code>: id number<br/><code>serialNumber</code>: serial number<br/><code>nameTh</code>: name<br/><code>nameEn</code>: name<br/><code>lastNameEn</code>: last name of En<br/><code>birthTh</code>: birth day of th<br/><code>birthEn</code>: birth day of en<br/><code>issueDateEN</code>: en issue date<br/><code>issueDateTH</code>: th issue date<br/><code>expiryDateEN</code>: expiry date<br/><code>expiryDateTH</code>: expiry date<br/><code>religion</code>: religion<br/><code>address</code>: address</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="space-y-4">
            <h3 class="text-lg font-medium">Status Code</h3>
            <div class="overflow-x-auto">
              <table class="w-full border-collapse border border-border">
                <thead>
                  <tr class="bg-muted">
                    <th class="border border-border px-4 py-2 text-left">status</th>
                    <th class="border border-border px-4 py-2 text-left">description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td class="border border-border px-4 py-2"><code>OK</code></td><td class="border border-border px-4 py-2"><code>charge</code>, success</td></tr>
                  <tr><td class="border border-border px-4 py-2"><code>FAIL</code></td><td class="border border-border px-4 py-2"><code>charge</code>, image recognition error, please check input image</td></tr>
                  <tr><td class="border border-border px-4 py-2"><code>INVALID_REQUEST</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid request parameters</td></tr>
                  <tr><td class="border border-border px-4 py-2"><code>IMAGE_INVALID_FORMAT</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid image format, image format should be one of jpeg/jpg/png/bmp</td></tr>
                  <tr><td class="border border-border px-4 py-2"><code>IMAGE_INVALID_SIZE</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid image size, should be less than 2M</td></tr>
                  <tr><td class="border border-border px-4 py-2"><code>INNER_ERROR</code></td><td class="border border-border px-4 py-2"><code>free</code>, server error</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="space-y-4">
            <h3 class="text-lg font-medium">Error Response Examples</h3>
            <div class="space-y-3">
              <div><p class="text-muted-foreground mb-2">Response for recognition fail</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check input image and retry"</span>
}</code></pre></div>
              <div><p class="text-muted-foreground mb-2">Response for invalid request parameters</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INVALID_REQUEST"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check request params"</span>
}</code></pre></div>
              <div><p class="text-muted-foreground mb-2">Response for invalid image format</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_FORMAT"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image format not support"</span>
}</code></pre></div>
              <div><p class="text-muted-foreground mb-2">Response for image size larger than 2M</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_SIZE"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image larger than 2M"</span>
}</code></pre></div>
              <div><p class="text-muted-foreground mb-2">Response for server error</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INNER_ERROR"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"Inner error, please retry later"</span>
}</code></pre></div>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  "indonesia-ktp": {
  title: "Indonesia KTP OCR",
  summary: "KTP + name recognition",
  endpoint: "https://api.100ocrapi.com/v1/idn_ktp",
  method: "POST",
  requestParams: [
    {
      parameter: "img",
      type: "String",
      description: "base64 encoded image. It is recommended that the image be less than 200KB, so it will be returned within 2 seconds, otherwise the return time will be longer.",
    },
  ],
  responseFields: [
    { field: "id", type: "string", description: "ID card number, NIK" },
    { field: "name", type: "string", description: "Name" },
    { field: "pob", type: "string", description: "Place of birth" },
    { field: "dob", type: "string", description: "Date of birth" },
    { field: "gender", type: "string", description: "Gender" },
    { field: "address", type: "string", description: "Address" },
    { field: "rt", type: "string", description: "RT" },
    { field: "rw", type: "string", description: "RW" },
    { field: "village", type: "string", description: "Village" },
    { field: "district", type: "string", description: "District" },
    { field: "religion", type: "string", description: "Religion" },
    { field: "marital_status", type: "string", description: "Marital status" },
    { field: "work", type: "string", description: "Work/Occupation" },
    { field: "nationnality", type: "string", description: "Nationality" },
    { field: "city", type: "string", description: "City" },
    { field: "province", type: "string", description: "Province" },
  ],
  customContent: `
    <div class="space-y-8">
      <hr class="border-border" />
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Endpoints</h2>
        <p class="text-muted-foreground">
          <code class="bg-muted px-2 py-1 rounded text-sm font-mono">POST https://api.100ocrapi.com/v1/idn_ktp</code>
        </p>
      </div>
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Request Parameters</h2>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse border border-border">
            <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">parameter</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
            <tbody><tr><td class="border border-border px-4 py-2"><code>img</code></td><td class="border border-border px-4 py-2"><code>string</code>, base64 encoded image. It is recommended that the image be less than 200KB, so it will be returned within 2 seconds, otherwise the return time will be longer.</td></tr></tbody>
          </table>
        </div>
      </div>
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold">Code Example</h2>
        <div>
          <h4 class="text-lg font-medium mb-2">Code snippet</h4>
          <div class="mb-4">
            <h5 class="text-sm font-semibold mb-2">cURL</h5>
            <pre class="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-bash">curl --location --request POST 'https://api.100ocrapi.com/v1/idn_ktp' \\
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
    <span class="text-blue-400">"name"</span>: <span class="text-green-400">"HELLO NAME"</span>,
    <span class="text-blue-400">"id"</span>: <span class="text-green-400">"3171024302821001"</span>,
    <span class="text-blue-400">"pob"</span>: <span class="text-green-400">"GARESSI SUPPA"</span>,
    <span class="text-blue-400">"dob"</span>: <span class="text-green-400">"01-01-1961"</span>,
    <span class="text-blue-400">"gender"</span>: <span class="text-green-400">"LAKI-LAKI"</span>,
    <span class="text-blue-400">"address"</span>: <span class="text-green-400">"BTN UNHALU BLOK C NO. 28"</span>,
    <span class="text-blue-400">"rt"</span>: <span class="text-green-400">"006"</span>,
    <span class="text-blue-400">"rw"</span>: <span class="text-green-400">"003"</span>,
    <span class="text-blue-400">"village"</span>: <span class="text-green-400">"KAMBU"</span>,
    <span class="text-blue-400">"district"</span>: <span class="text-green-400">"KAMBU"</span>,
    <span class="text-blue-400">"religion"</span>: <span class="text-green-400">"ISLAM"</span>,
    <span class="text-blue-400">"marital_status"</span>: <span class="text-green-400">"KAWIN"</span>,
    <span class="text-blue-400">"work"</span>: <span class="text-green-400">"PEGAWAI NEGERI SIPIL (PNS)"</span>,
    <span class="text-blue-400">"nationnality"</span>: <span class="text-green-400">"WNI"</span>,
    <span class="text-blue-400">"city"</span>: <span class="text-green-400">"KOTA KENDARI"</span>,
    <span class="text-blue-400">"province"</span>: <span class="text-green-400">"SULAWESI TENGGARA"</span>
  }
}</code></pre>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Response Format</h3>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-border">
              <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">fields</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
              <tbody>
                <tr><td class="border border-border px-4 py-2"><code>status</code></td><td class="border border-border px-4 py-2">status code</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>message</code></td><td class="border border-border px-4 py-2"><code>id</code>: ID card number, NIK<br/><code>name</code>: name<br/><code>pob</code>: place of birth, maybe empty<br/><code>dob</code>: date of birth, maybe empty<br/><code>gender</code>: gender, maybe empty<br/><code>address</code>: address, maybe empty<br/><code>province</code>: province, maybe empty<br/><code>city</code>: city, maybe empty<br/><code>district</code>: district, maybe empty<br/><code>village</code>: village, maybe empty<br/><code>rt</code>: RT, maybe empty<br/><code>rw</code>: RW, maybe empty<br/><code>religion</code>: religion, maybe empty<br/><code>marital_status</code>: marital status, maybe empty<br/><code>work</code>: work, maybe empty<br/><code>nationnality</code>: nationnality, maybe empty</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Status Code</h3>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-border">
              <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">status</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
              <tbody>
                <tr><td class="border border-border px-4 py-2"><code>OK</code></td><td class="border border-border px-4 py-2"><code>charge</code>, success</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>FAIL</code></td><td class="border border-border px-4 py-2"><code>charge</code>, image recognition error, please check input image</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>INVALID_REQUEST</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid request parameters</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>IMAGE_INVALID_FORMAT</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid image format, image format should be one of jpeg/jpg/png/bmp</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>IMAGE_INVALID_SIZE</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid image size, should be less than 2M</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>INNER_ERROR</code></td><td class="border border-border px-4 py-2"><code>free</code>, server error</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Error Response Examples</h3>
          <div class="space-y-3">
            <div><p class="text-muted-foreground mb-2">Response for recognition fail</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check input image and retry"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for invalid request parameters</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INVALID_REQUEST"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check request params"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for invalid image format</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_FORMAT"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image format not support"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for image size larger than 2M</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_SIZE"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image larger than 2M"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for server error</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INNER_ERROR"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"Service is not available right now, please try again later"</span>
}</code></pre></div>
          </div>
        </div>
      </div>
    </div>
  `,
},
"pakistan-id-card": {
  title: "Pakistan ID Card OCR",
  summary: "id number + name recognition",
  endpoint: "https://api.100ocrapi.com/v1/pak_id_card",
  method: "POST",
  requestParams: [
    {
      parameter: "img",
      type: "String",
      description: "base64 encoded image. It is recommended that the image be less than 200KB, so it will be returned within 2 seconds, otherwise the return time will be longer.",
    },
  ],
  responseFields: [
    { field: "idNumber", type: "string", description: "Card number" },
    { field: "name", type: "string", description: "Name" },
    { field: "fatherName", type: "string", description: "Father's name" },
    { field: "gender", type: "string", description: "Gender" },
    { field: "country", type: "string", description: "Country" },
    { field: "birthDay", type: "string", description: "Date of birth" },
    { field: "issueDay", type: "string", description: "Date of issue" },
    { field: "expiryDay", type: "string", description: "Date of expiry" },
  ],
  customContent: `
    <div class="space-y-8">
      <hr class="border-border" />
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Endpoints</h2>
        <p class="text-muted-foreground">
          <code class="bg-muted px-2 py-1 rounded text-sm font-mono">POST https://api.100ocrapi.com/v1/pak_id_card</code>
        </p>
      </div>
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Request Parameters</h2>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse border border-border">
            <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">parameter</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
            <tbody><tr><td class="border border-border px-4 py-2"><code>img</code></td><td class="border border-border px-4 py-2"><code>string</code>, base64 encoded image. It is recommended that the image be less than 200KB, so it will be returned within 2 seconds, otherwise the return time will be longer.</td></tr></tbody>
          </table>
        </div>
      </div>
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold">Code Example</h2>
        <div>
          <h4 class="text-lg font-medium mb-2">Code snippet</h4>
          <div class="mb-4">
            <h5 class="text-sm font-semibold mb-2">cURL</h5>
            <pre class="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-bash">curl --location --request POST 'https://api.100ocrapi.com/v1/pak_id_card' \\
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
          <p class="text-muted-foreground">Response for ID card recognition success</p>
          <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"OK"</span>,
  <span class="text-blue-400">"message"</span>: {
    <span class="text-blue-400">"idNumber"</span>: <span class="text-green-400">"33100-7411692-4"</span>,
    <span class="text-blue-400">"name"</span>: <span class="text-green-400">"Janat Mirza"</span>,
    <span class="text-blue-400">"fatherName"</span>: <span class="text-green-400">"Mirza Anjum Kamal"</span>,
    <span class="text-blue-400">"gender"</span>: <span class="text-green-400">"F"</span>,
    <span class="text-blue-400">"country"</span>: <span class="text-green-400">"Pakistan"</span>,
    <span class="text-blue-400">"birthDay"</span>: <span class="text-green-400">"20010914"</span>,
    <span class="text-blue-400">"issueDay"</span>: <span class="text-green-400">"20200309"</span>,
    <span class="text-blue-400">"expiryDay"</span>: <span class="text-green-400">"20300309"</span>
  }
}</code></pre>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Response Format</h3>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-border">
              <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">fields</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
              <tbody>
                <tr><td class="border border-border px-4 py-2"><code>status</code></td><td class="border border-border px-4 py-2">status code</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>message</code></td><td class="border border-border px-4 py-2"><code>idNumber</code>: card number<br/><code>name</code>: name<br/><code>fatherName</code>: father name<br/><code>gender</code>: gender<br/><code>country</code>: country<br/><code>birthDay</code>: birth day<br/><code>issueDay</code>: issue day<br/><code>expiryDay</code>: expiry day</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Status Code</h3>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-border">
              <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">status</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
              <tbody>
                <tr><td class="border border-border px-4 py-2"><code>OK</code></td><td class="border border-border px-4 py-2"><code>charge</code>, success</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>FAIL</code></td><td class="border border-border px-4 py-2"><code>charge</code>, image recognition error, please check input image</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>INVALID_REQUEST</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid request parameters</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>IMAGE_INVALID_FORMAT</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid image format, image format should be one of jpeg/jpg/png/bmp</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>IMAGE_INVALID_SIZE</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid image size, should be less than 2M</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>INNER_ERROR</code></td><td class="border border-border px-4 py-2"><code>free</code>, server error</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Error Response Examples</h3>
          <div class="space-y-3">
            <div><p class="text-muted-foreground mb-2">Response for recognition fail</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check input image and retry"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for input image not identity card</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"not identity card"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for not recognized card type</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"card not recognized"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for invalid request parameters</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INVALID_REQUEST"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check request params"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for invalid image format</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_FORMAT"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image format not support"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for image size larger than 2M</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_SIZE"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image larger than 2M"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for server error</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INNER_ERROR"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"Inner error, please retry later"</span>
}</code></pre></div>
          </div>
        </div>
      </div>
    </div>
  `,
},
 "malaysia-id-card": {
  title: "Malaysia ID Card OCR",
  summary: "Recognizing the front of a Malaysia ID card",
  endpoint: "https://api.100ocrapi.com/v1/mys_id_card",
  method: "POST",
  requestParams: [
    {
      parameter: "img",
      type: "String",
      description: "base64 encoded image. It is recommended that the image be less than 200KB, so it will be returned within 2 seconds, otherwise the return time will be longer.",
    },
  ],
  responseFields: [
    { field: "CardNumber", type: "string", description: "Card number" },
    { field: "Name", type: "string", description: "Name" },
    { field: "Gender", type: "string", description: "Gender" },
    { field: "DateOfBirth", type: "string", description: "Date of birth" },
    { field: "Address", type: "string", description: "Address" },
  ],
  customContent: `
    <div class="space-y-8">
      <hr class="border-border" />
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Endpoints</h2>
        <p class="text-muted-foreground">
          <code class="bg-muted px-2 py-1 rounded text-sm font-mono">POST https://api.100ocrapi.com/v1/mys_id_card</code>
        </p>
      </div>
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Request Parameters</h2>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse border border-border">
            <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">parameter</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
            <tbody><tr><td class="border border-border px-4 py-2"><code>img</code></td><td class="border border-border px-4 py-2"><code>string</code>, base64 encoded image. It is recommended that the image be less than 200KB, so it will be returned within 2 seconds, otherwise the return time will be longer.</td></tr></tbody>
          </table>
        </div>
      </div>
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold">Code Example</h2>
        <div>
          <h4 class="text-lg font-medium mb-2">Code snippet</h4>
          <div class="mb-4">
            <h5 class="text-sm font-semibold mb-2">cURL</h5>
            <pre class="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-bash">curl --location --request POST 'https://api.100ocrapi.com/v1/mys_id_card' \\
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
          <p class="text-muted-foreground">Response for ID front card recognition success</p>
          <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"OK"</span>,
  <span class="text-blue-400">"message"</span>: {
    <span class="text-blue-400">"CardNumber"</span>: <span class="text-green-400">"460619-12-5087"</span>,
    <span class="text-blue-400">"DateOfBirth"</span>: <span class="text-green-400">"19460619"</span>,
    <span class="text-blue-400">"Gender"</span>: <span class="text-green-400">"LELAKI"</span>,
    <span class="text-blue-400">"Name"</span>: <span class="text-green-400">"ABD RAUF BIN HAMSAH"</span>,
    <span class="text-blue-400">"Address"</span>: <span class="text-green-400">"KAMPUNG MASJID PO BOX 42 89007 KENINGAU SABAH"</span>
  }
}</code></pre>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Response Format</h3>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-border">
              <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">fields</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
              <tbody>
                <tr><td class="border border-border px-4 py-2"><code>status</code></td><td class="border border-border px-4 py-2">status code</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>message</code></td><td class="border border-border px-4 py-2"><code>CardNumber</code>: card number<br/><code>Name</code>: name<br/><code>Gender</code>: gender<br/><code>DateOfBirth</code>: date of birth<br/><code>Address</code>: address</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Status Code</h3>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-border">
              <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">status</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
              <tbody>
                <tr><td class="border border-border px-4 py-2"><code>OK</code></td><td class="border border-border px-4 py-2"><code>charge</code>, success</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>FAIL</code></td><td class="border border-border px-4 py-2"><code>charge</code>, image recognition error, please check input image</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>INVALID_REQUEST</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid request parameters</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>IMAGE_INVALID_FORMAT</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid image format, image format should be one of jpeg/jpg/png/bmp</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>IMAGE_INVALID_SIZE</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid image size, should be less than 2M</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>INNER_ERROR</code></td><td class="border border-border px-4 py-2"><code>free</code>, server error</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Error Response Examples</h3>
          <div class="space-y-3">
            <div><p class="text-muted-foreground mb-2">Response for recognition fail</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check input image and retry"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for not recognized card type</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"not identity card"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for invalid request parameters</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INVALID_REQUEST"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check request params"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for invalid image format</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_FORMAT"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image format not support"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for image size larger than 2M</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_SIZE"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image larger than 2M"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for server error</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INNER_ERROR"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"Inner error, please retry later"</span>
}</code></pre></div>
          </div>
        </div>
      </div>
    </div>
  `,
},
 "bengal-id-card": {
  title: "Bengal ID Card OCR",
  summary: "id number + name recognition",
  endpoint: "https://api.100ocrapi.com/v1/bgd_id_card",
  method: "POST",
  requestParams: [
    {
      parameter: "img",
      type: "String",
      description: "base64 encoded image. It is recommended that the image be less than 200KB, so it will be returned within 2 seconds, otherwise the return time will be longer.",
    },
  ],
  responseFields: [
    { field: "id_number", type: "string", description: "Card number (from front)" },
    { field: "name", type: "string", description: "Name (from front)" },
    { field: "birthday", type: "string", description: "Date of birth (from front)" },
    { field: "address", type: "string", description: "Address (from back)" },
    { field: "blood_type", type: "string", description: "Blood type (from back)" },
    { field: "issue_date", type: "string", description: "Date of issue (from back)" },
    { field: "birth_place", type: "string", description: "Place of birth (from back)" },
  ],
  customContent: `
    <div class="space-y-8">
      <hr class="border-border" />
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Endpoints</h2>
        <p class="text-muted-foreground">
          <code class="bg-muted px-2 py-1 rounded text-sm font-mono">POST https://api.100ocrapi.com/v1/bgd_id_card</code>
        </p>
      </div>
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Request Parameters</h2>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse border border-border">
            <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">parameter</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
            <tbody><tr><td class="border border-border px-4 py-2"><code>img</code></td><td class="border border-border px-4 py-2"><code>string</code>, base64 encoded image. It is recommended that the image be less than 200KB, so it will be returned within 2 seconds, otherwise the return time will be longer.</td></tr></tbody>
          </table>
        </div>
      </div>
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold">Code Example</h2>
        <div>
          <h4 class="text-lg font-medium mb-2">Code snippet</h4>
          <div class="mb-4">
            <h5 class="text-sm font-semibold mb-2">cURL</h5>
            <pre class="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-bash">curl --location --request POST 'https://api.100ocrapi.com/v1/bgd_id_card' \\
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
          <p class="text-muted-foreground">Response for ID card front recognition success</p>
          <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"OK"</span>,
  <span class="text-blue-400">"message"</span>: {
    <span class="text-blue-400">"id_number"</span>: <span class="text-green-400">"5053750146"</span>,
    <span class="text-blue-400">"name"</span>: <span class="text-green-400">"RABEYA SULTANA"</span>,
    <span class="text-blue-400">"birthday"</span>: <span class="text-green-400">"02-06-1972"</span>
  }
}</code></pre>
          <p class="text-muted-foreground mt-4">Response for ID card back recognition success</p>
          <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"OK"</span>,
  <span class="text-blue-400">"message"</span>: {
    <span class="text-blue-400">"address"</span>: <span class="text-green-400">"গ্রাম/রাস্তা: উত্তর মহুরী পাড়া, ঝিলংজা, ডাকঘর: ঝিলংজা ৪৭০১, কক্সবাজার সদর, কক্সবাজার"</span>,
    <span class="text-blue-400">"blood_type"</span>: <span class="text-green-400">"A"</span>,
    <span class="text-blue-400">"issue_date"</span>: <span class="text-green-400">"06-12-2017"</span>,
    <span class="text-blue-400">"birth_place"</span>: <span class="text-green-400">"COX'S BAZAR"</span>
  }
}</code></pre>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Response Format</h3>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-border">
              <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">fields</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
              <tbody>
                <tr><td class="border border-border px-4 py-2"><code>status</code></td><td class="border border-border px-4 py-2">status code</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>message</code></td><td class="border border-border px-4 py-2">Contains various fields depending on whether the front or back of the card is scanned. See success examples above.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Status Code</h3>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-border">
              <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">status</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
              <tbody>
                <tr><td class="border border-border px-4 py-2"><code>OK</code></td><td class="border border-border px-4 py-2"><code>charge</code>, success</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>FAIL</code></td><td class="border border-border px-4 py-2"><code>charge</code>, image recognition error, please check input image</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>INVALID_REQUEST</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid request parameters</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>IMAGE_INVALID_FORMAT</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid image format, image format should be one of jpeg/jpg/png/bmp</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>IMAGE_INVALID_SIZE</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid image size, should be less than 2M</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>INNER_ERROR</code></td><td class="border border-border px-4 py-2"><code>free</code>, server error</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Error Response Examples</h3>
          <div class="space-y-3">
            <div><p class="text-muted-foreground mb-2">Response for recognition fail</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check input image and retry"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for not recognized card type</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"card not recognized"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for invalid request parameters</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INVALID_REQUEST"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check request params"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for invalid image format</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_FORMAT"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image format not support"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for image size larger than 2M</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_SIZE"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image larger than 2M"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for server error</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INNER_ERROR"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"Inner error, please retry later"</span>
}</code></pre></div>
          </div>
        </div>
      </div>
    </div>
  `,
},
 "colombia-id-card": {
  title: "Colombia ID Card OCR",
  summary: "id number + name recognition",
  endpoint: "https://api.100ocrapi.com/v1/col_id_card",
  method: "POST",
  requestParams: [
    {
      parameter: "img",
      type: "String",
      description: "base64 encoded image. It is recommended that the image be less than 200KB, so it will be returned within 2 seconds, otherwise the return time will be longer.",
    },
  ],
  responseFields: [
    { field: "CardNumber", type: "string", description: "Card number" },
    { field: "GivenNames", type: "string", description: "Given names" },
    { field: "Surname", type: "string", description: "Surname" },
    { field: "Gender", type: "string", description: "Gender" },
    { field: "DateOfBirth", type: "string", description: "Date of birth" },
    { field: "DateOfExpiry", type: "string", description: "Date of expiry" },
    { field: "PlaceOfBirth", type: "string", description: "Place of birth" },
    { field: "DateOfIssue", type: "string", description: "Date of issue" },
    { field: "PlaceOfIssue", type: "string", description: "Place of issue" },
    { field: "Height", type: "string", description: "Height" },
    { field: "BloodType", type: "string", description: "Blood type" },
  ],
  customContent: `
    <div class="space-y-8">
      <hr class="border-border" />
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Endpoints</h2>
        <p class="text-muted-foreground">
          <code class="bg-muted px-2 py-1 rounded text-sm font-mono">POST https://api.100ocrapi.com/v1/col_id_card</code>
        </p>
      </div>
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Request Parameters</h2>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse border border-border">
            <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">parameter</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
            <tbody><tr><td class="border border-border px-4 py-2"><code>img</code></td><td class="border border-border px-4 py-2"><code>string</code>, base64 encoded image. It is recommended that the image be less than 200KB, so it will be returned within 2 seconds, otherwise the return time will be longer.</td></tr></tbody>
          </table>
        </div>
      </div>
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold">Code Example</h2>
        <div>
          <h4 class="text-lg font-medium mb-2">Code snippet</h4>
          <div class="mb-4">
            <h5 class="text-sm font-semibold mb-2">cURL</h5>
            <pre class="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-bash">curl --location --request POST 'https://api.100ocrapi.com/v1/col_id_card' \\
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
          <p class="text-muted-foreground">Response for ID card front recognition success</p>
          <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"OK"</span>,
  <span class="text-blue-400">"message"</span>: {
    <span class="text-blue-400">"CardNumber"</span>: <span class="text-green-400">"1.136.879.353"</span>,
    <span class="text-blue-400">"GivenNames"</span>: <span class="text-green-400">"OSCAR FELIPE"</span>,
    <span class="text-blue-400">"Surname"</span>: <span class="text-green-400">"RUEDA PLATA"</span>,
    <span class="text-blue-400">"DateOfBirth"</span>: <span class="text-green-400">"19870117"</span>
  }
}</code></pre>
          <p class="text-muted-foreground mt-4">Response for ID card back recognition success</p>
          <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"OK"</span>,
  <span class="text-blue-400">"message"</span>: {
    <span class="text-blue-400">"CardNumber"</span>: <span class="text-green-400">""</span>,
    <span class="text-blue-400">"GivenNames"</span>: <span class="text-green-400">""</span>,
    <span class="text-blue-400">"Surname"</span>: <span class="text-green-400">""</span>,
    <span class="text-blue-400">"DateOfExpiry"</span>: <span class="text-green-400">""</span>,
    <span class="text-blue-400">"BloodType"</span>: <span class="text-green-400">"A+"</span>,
    <span class="text-blue-400">"DateOfBirth"</span>: <span class="text-green-400">"17-ENE-1987"</span>,
    <span class="text-blue-400">"DateOfIssue"</span>: <span class="text-green-400">"16-FEB-2005"</span>,
    <span class="text-blue-400">"Gender"</span>: <span class="text-green-400">"M"</span>,
    <span class="text-blue-400">"Height"</span>: <span class="text-green-400">"1.72"</span>,
    <span class="text-blue-400">"PlaceOfBirth"</span>: <span class="text-green-400">"BOGOTA D.C (CUNDINAMARCA)"</span>,
    <span class="text-blue-400">"PlaceOfIssue"</span>: <span class="text-green-400">"BOGOTA D.C."</span>
  }
}</code></pre>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Response Format</h3>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-border">
              <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">fields</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
              <tbody>
                <tr><td class="border border-border px-4 py-2"><code>status</code></td><td class="border border-border px-4 py-2">status code</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>message</code></td><td class="border border-border px-4 py-2"><code>CardNumber</code>: card number<br/><code>GivenNames</code>: given names<br/><code>Surname</code>: surname<br/><code>Gender</code>: gender<br/><code>DateOfBirth</code>: birth date<br/><code>DateOfExpiry</code>: expiry date<br/><code>PlaceOfBirth</code>: birth place<br/><code>DateOfIssue</code>: issue date<br/><code>PlaceOfIssue</code>: issue place<br/><code>Height</code>: height<br/><code>BloodType</code>: blood type</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Status Code</h3>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-border">
              <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">status</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
              <tbody>
                <tr><td class="border border-border px-4 py-2"><code>OK</code></td><td class="border border-border px-4 py-2"><code>charge</code>, success</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>FAIL</code></td><td class="border border-border px-4 py-2"><code>charge</code>, image recognition error, please check input image</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>INVALID_REQUEST</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid request parameters</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>IMAGE_INVALID_FORMAT</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid image format, image format should be one of jpeg/jpg/png/bmp</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>IMAGE_INVALID_SIZE</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid image size, should be less than 2M</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>INNER_ERROR</code></td><td class="border border-border px-4 py-2"><code>free</code>, server error</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Error Response Examples</h3>
          <div class="space-y-3">
            <div><p class="text-muted-foreground mb-2">Response for recognition fail</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check input image and retry"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for input image not identity card</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"not identity card"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for not recognized card type</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"card not recognized"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for invalid request parameters</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INVALID_REQUEST"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check request params"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for invalid image format</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_FORMAT"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image format not support"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for image size larger than 2M</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_SIZE"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image larger than 2M"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for server error</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INNER_ERROR"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"Inner error, please retry later"</span>
}</code></pre></div>
          </div>
        </div>
      </div>
    </div>
  `,
},
 "peru-id-card": {
  title: "Peru ID Card OCR",
  summary: "id number + name recognition",
  endpoint: "https://api.100ocrapi.com/v1/per_id_card",
  method: "POST",
  requestParams: [
    {
      parameter: "img",
      type: "String",
      description: "base64 encoded image. It is recommended that the image be less than 200KB, so it will be returned within 2 seconds, otherwise the return time will be longer.",
    },
  ],
  responseFields: [
    { field: "CardNumber", type: "string", description: "Card number" },
    { field: "DateOfBirth", type: "string", description: "Date of birth" },
    { field: "PlaceOfBirthNo", type: "string", description: "Place of birth number" },
    { field: "ForeNames", type: "string", description: "Forenames" },
    { field: "Surname", type: "string", description: "Surname" },
    { field: "SecondSurname", type: "string", description: "Second surname" },
    { field: "dateOfExpiry", type: "string", description: "Date of expiry" },
    { field: "dateOfIssue", type: "string", description: "Date of issue" },
    { field: "dateOfRegister", type: "string", description: "Date of register" },
    { field: "gender", type: "string", description: "Gender" },
    { field: "maritalStatus", type: "string", description: "Marital status" },
    { field: "nationality", type: "string", description: "Nationality" },
  ],
  customContent: `
    <div class="space-y-8">
      <hr class="border-border" />
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Endpoints</h2>
        <p class="text-muted-foreground">
          <code class="bg-muted px-2 py-1 rounded text-sm font-mono">POST https://api.100ocrapi.com/v1/per_id_card</code>
        </p>
      </div>
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Request Parameters</h2>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse border border-border">
            <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">parameter</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
            <tbody><tr><td class="border border-border px-4 py-2"><code>img</code></td><td class="border border-border px-4 py-2"><code>string</code>, base64 encoded image. It is recommended that the image be less than 200KB, so it will be returned within 2 seconds, otherwise the return time will be longer.</td></tr></tbody>
          </table>
        </div>
      </div>
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold">Code Example</h2>
        <div>
          <h4 class="text-lg font-medium mb-2">Code snippet</h4>
          <div class="mb-4">
            <h5 class="text-sm font-semibold mb-2">cURL</h5>
            <pre class="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-bash">curl --location --request POST 'https://api.100ocrapi.com/v1/per_id_card' \\
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
    <span class="text-blue-400">"CardNumber"</span>: <span class="text-green-400">"41701152"</span>,
    <span class="text-blue-400">"DateOfBirth"</span>: <span class="text-green-400">"19820131"</span>,
    <span class="text-blue-400">"ForeNames"</span>: <span class="text-green-400">"ALFREDO ALBERTO"</span>,
    <span class="text-blue-400">"PlaceOfBirthNo"</span>: <span class="text-green-400">"140135"</span>,
    <span class="text-blue-400">"SecondSurname"</span>: <span class="text-green-400">"BAUTISTA"</span>,
    <span class="text-blue-400">"Surname"</span>: <span class="text-green-400">"FRANCIA"</span>,
    <span class="text-blue-400">"dateOfExpiry"</span>: <span class="text-green-400">"20220218"</span>,
    <span class="text-blue-400">"dateOfIssue"</span>: <span class="text-green-400">"20210127"</span>,
    <span class="text-blue-400">"dateOfRegister"</span>: <span class="text-green-400">"20010618"</span>,
    <span class="text-blue-400">"gender"</span>: <span class="text-green-400">"M"</span>,
    <span class="text-blue-400">"maritalStatus"</span>: <span class="text-green-400">"S"</span>,
    <span class="text-blue-400">"nationality"</span>: <span class="text-green-400">"PER"</span>
  }
}</code></pre>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Response Format</h3>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-border">
              <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">fields</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
              <tbody>
                <tr><td class="border border-border px-4 py-2"><code>status</code></td><td class="border border-border px-4 py-2">status code</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>message</code></td><td class="border border-border px-4 py-2"><code>CardNumber</code>: card number<br/><code>DateOfBirth</code>: birth date<br/><code>PlaceOfBirthNo</code>: birth place no<br/><code>ForeNames</code>: fore names<br/><code>Surname</code>: surname<br/><code>SecondSurname</code>: second surname<br/><code>dateOfExpiry</code>: expiry date<br/><code>dateOfIssue</code>: issue date<br/><code>dateOfRegister</code>: register date<br/><code>gender</code>: gender<br/><code>maritalStatus</code>: marital status<br/><code>nationality</code>: nationality</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Status Code</h3>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-border">
              <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">status</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
              <tbody>
                <tr><td class="border border-border px-4 py-2"><code>OK</code></td><td class="border border-border px-4 py-2"><code>charge</code>, success</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>FAIL</code></td><td class="border border-border px-4 py-2"><code>charge</code>, image recognition error, please check input image</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>INVALID_REQUEST</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid request parameters</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>IMAGE_INVALID_FORMAT</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid image format, image format should be one of jpeg/jpg/png/bmp</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>IMAGE_INVALID_SIZE</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid image size, should be less than 2M</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>INNER_ERROR</code></td><td class="border border-border px-4 py-2"><code>free</code>, server error</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Error Response Examples</h3>
          <div class="space-y-3">
            <div><p class="text-muted-foreground mb-2">Response for recognition fail</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check input image and retry"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for input image not identity card</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"not identity card"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for not recognized card type</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"card not recognized"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for invalid request parameters</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INVALID_REQUEST"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check request params"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for invalid image format</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_FORMAT"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image format not support"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for image size larger than 2M</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_SIZE"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image larger than 2M"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for server error</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INNER_ERROR"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"Inner error, please retry later"</span>
}</code></pre></div>
          </div>
        </div>
      </div>
    </div>
  `,
},
  "argentina-id-card": {
  title: "Argentina ID Card OCR",
  summary: "id number + name recognition",
  endpoint: "https://api.100ocrapi.com/v1/arg_id_card",
  method: "POST",
  requestParams: [
    {
      parameter: "img",
      type: "String",
      description: "base64 encoded image. It is recommended that the image be less than 200KB, so it will be returned within 2 seconds, otherwise the return time will be longer.",
    },
  ],
  responseFields: [
    { field: "DocumentNumber", type: "string", description: "Document number" },
    { field: "GivenName", type: "string", description: "Given name(s)" },
    { field: "Surname", type: "string", description: "Surname" },
    { field: "Nationality", type: "string", description: "Nationality" },
    { field: "Gender", type: "string", description: "Gender" },
    { field: "DateOfBirth", type: "string", description: "Date of birth" },
    { field: "DateOfIssue", type: "string", description: "Date of issue" },
    { field: "DateOfExpiry", type: "string", description: "Date of expiry" },
  ],
  customContent: `
    <div class="space-y-8">
      <hr class="border-border" />
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Endpoints</h2>
        <p class="text-muted-foreground">
          <code class="bg-muted px-2 py-1 rounded text-sm font-mono">POST https://api.100ocrapi.com/v1/arg_id_card</code>
        </p>
      </div>
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Request Parameters</h2>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse border border-border">
            <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">parameter</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
            <tbody><tr><td class="border border-border px-4 py-2"><code>img</code></td><td class="border border-border px-4 py-2"><code>string</code>, base64 encoded image. It is recommended that the image be less than 200KB, so it will be returned within 2 seconds, otherwise the return time will be longer.</td></tr></tbody>
          </table>
        </div>
      </div>
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold">Code Example</h2>
        <div>
          <h4 class="text-lg font-medium mb-2">Code snippet</h4>
          <div class="mb-4">
            <h5 class="text-sm font-semibold mb-2">cURL</h5>
            <pre class="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-bash">curl --location --request POST 'https://api.100ocrapi.com/v1/arg_id_card' \\
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
    <span class="text-blue-400">"DateOfBirth"</span>: <span class="text-green-400">"19981020"</span>,
    <span class="text-blue-400">"DateOfExpiry"</span>: <span class="text-green-400">"20281028"</span>,
    <span class="text-blue-400">"DateOfIssue"</span>: <span class="text-green-400">"20240102"</span>,
    <span class="text-blue-400">"DocumentNumber"</span>: <span class="text-green-400">"81566660"</span>,
    <span class="text-blue-400">"Gender"</span>: <span class="text-green-400">"F"</span>,
    <span class="text-blue-400">"GivenName"</span>: <span class="text-green-400">"PAULINA ANDREA"</span>,
    <span class="text-blue-400">"Surname"</span>: <span class="text-green-400">"SOTO MALDONADO"</span>,
    <span class="text-blue-400">"Nationality"</span>: <span class="text-green-400">"ARGENTINA"</span>
  }
}</code></pre>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Response Format</h3>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-border">
              <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">fields</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
              <tbody>
                <tr><td class="border border-border px-4 py-2"><code>status</code></td><td class="border border-border px-4 py-2">status code</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>message</code></td><td class="border border-border px-4 py-2"><code>DocumentNumber</code>: Document number<br/><code>GivenName</code>: Given name(s)<br/><code>Surname</code>: Surname<br/><code>Nationality</code>: Nationality<br/><code>Gender</code>: Gender<br/><code>DateOfBirth</code>: Date of birth<br/><code>DateOfIssue</code>: Date of issue<br/><code>DateOfExpiry</code>: Date of expiry</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Status Code</h3>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-border">
              <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">status</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
              <tbody>
                <tr><td class="border border-border px-4 py-2"><code>OK</code></td><td class="border border-border px-4 py-2"><code>charge</code>, success</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>FAIL</code></td><td class="border border-border px-4 py-2"><code>charge</code>, image recognition error, please check input image</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>INVALID_REQUEST</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid request parameters</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>IMAGE_INVALID_FORMAT</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid image format, image format should be one of jpeg/jpg/png/bmp</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>IMAGE_INVALID_SIZE</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid image size, should be less than 2M</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>INNER_ERROR</code></td><td class="border border-border px-4 py-2"><code>free</code>, server error</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Error Response Examples</h3>
          <div class="space-y-3">
            <div><p class="text-muted-foreground mb-2">Response for recognition fail</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check input image and retry"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for input image not identity card</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"not identity card"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for not recognized card type</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"card not recognized"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for invalid request parameters</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INVALID_REQUEST"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check request params"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for invalid image format</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_FORMAT"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image format not support"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for image size larger than 2M</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_SIZE"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image larger than 2M"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for server error</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INNER_ERROR"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"Inner error, please retry later"</span>
}</code></pre></div>
          </div>
        </div>
      </div>
    </div>
  `,
},
 "mexico-id-card": {
  title: "Mexico ID Card OCR",
  summary: "id number + name recognition",
  endpoint: "https://api.100ocrapi.com/v1/mex_id_card",
  method: "POST",
  requestParams: [
    {
      parameter: "img",
      type: "String",
      description: "base64 encoded image. It is recommended that the image be less than 200KB, so it will be returned within 2 seconds, otherwise the return time will be longer.",
    },
  ],
  responseFields: [
    { field: "idNumber", type: "string", description: "ID number" },
    { field: "fullName", type: "string", description: "Full name" },
    { field: "fatherLastName", type: "string", description: "Father's last name" },
    { field: "motherLastName", type: "string", description: "Mother's last name" },
    { field: "name", type: "string", description: "Given name(s)" },
    { field: "birthday", type: "string", description: "Date of birth" },
    { field: "gender", type: "string", description: "Gender" },
    { field: "expiryYear", type: "string", description: "Year of expiry" },
    { field: "issueYear", type: "string", description: "Year of issue" },
    { field: "voterId", type: "string", description: "Voter ID" },
    { field: "placeNumber", type: "string", description: "Place number" },
    { field: "stateNumber", type: "string", description: "State number" },
    { field: "municipalNumber", type: "string", description: "Municipal number" },
    { field: "state", type: "string", description: "State" },
    { field: "district", type: "string", description: "District" },
    { field: "subDistrict", type: "string", description: "Sub-district" },
    { field: "addressAll", type: "string", description: "Full address" },
    { field: "postalCode", type: "string", description: "Postal code" },
    { field: "registrationYearAndMonth", type: "string", description: "Year and month of registration" },
  ],
  customContent: `
    <div class="space-y-8">
      <hr class="border-border" />
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Endpoints</h2>
        <p class="text-muted-foreground">
          <code class="bg-muted px-2 py-1 rounded text-sm font-mono">POST https://api.100ocrapi.com/v1/mex_id_card</code>
        </p>
      </div>
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Request Parameters</h2>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse border border-border">
            <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">parameter</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
            <tbody><tr><td class="border border-border px-4 py-2"><code>img</code></td><td class="border border-border px-4 py-2"><code>string</code>, base64 encoded image. It is recommended that the image be less than 200KB, so it will be returned within 2 seconds, otherwise the return time will be longer.</td></tr></tbody>
          </table>
        </div>
      </div>
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold">Code Example</h2>
        <div>
          <h4 class="text-lg font-medium mb-2">Code snippet</h4>
          <div class="mb-4">
            <h5 class="text-sm font-semibold mb-2">cURL</h5>
            <pre class="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-bash">curl --location --request POST 'https://api.100ocrapi.com/v1/mex_id_card' \\
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
          <p class="text-muted-foreground">Response for card front recognition success</p>
          <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"OK"</span>,
  <span class="text-blue-400">"message"</span>: {
    <span class="text-blue-400">"gender"</span>: <span class="text-green-400">"M"</span>,
    <span class="text-blue-400">"idNumber"</span>: <span class="text-green-400">"MONY801107MTSLRR07"</span>,
    <span class="text-blue-400">"voterId"</span>: <span class="text-green-400">"MLNRYR80110728M300"</span>,
    <span class="text-blue-400">"fullName"</span>: <span class="text-green-400">"MOLINA NORATO YURI YERANIA"</span>,
    <span class="text-blue-400">"fatherLastName"</span>: <span class="text-green-400">"MOLINA"</span>,
    <span class="text-blue-400">"motherLastName"</span>: <span class="text-green-400">"NORATO"</span>,
    <span class="text-blue-400">"name"</span>: <span class="text-green-400">"YURI YERANIA"</span>,
    <span class="text-blue-400">"birthday"</span>: <span class="text-green-400">"15/07/1987"</span>,
    <span class="text-blue-400">"issueYear"</span>: <span class="text-green-400">"2011"</span>,
    <span class="text-blue-400">"expiryYear"</span>: <span class="text-green-400">"2021"</span>,
    <span class="text-blue-400">"registrationYearAndMonth"</span>: <span class="text-green-400">"200101"</span>,
    <span class="text-blue-400">"municipalNumber"</span>: <span class="text-green-400">"041"</span>,
    <span class="text-blue-400">"postalCode"</span>: <span class="text-green-400">"87040"</span>,
    <span class="text-blue-400">"placeNumber"</span>: <span class="text-green-400">"0001"</span>,
    <span class="text-blue-400">"stateNumber"</span>: <span class="text-green-400">"28"</span>,
    <span class="text-blue-400">"state"</span>: <span class="text-green-400">"TAMPS"</span>,
    <span class="text-blue-400">"district"</span>: <span class="text-green-400">"VICTORIA"</span>,
    <span class="text-blue-400">"subDistrict"</span>: <span class="text-green-400">"FRACC EL MIRADOR"</span>,
    <span class="text-blue-400">"addressAll"</span>: <span class="text-green-400">"AND 8 1121 INF ALDAMA 87040 VICTORIA ,TAMPS."</span>
  }
}</code></pre>
          <p class="text-muted-foreground mt-4">Response for card back recognition success</p>
          <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"OK"</span>,
  <span class="text-blue-400">"message"</span>: {
    <span class="text-blue-400">"idNumber"</span>: <span class="text-green-400">""</span>,
    <span class="text-blue-400">"fullName"</span>: <span class="text-green-400">"JTMENEZ HERNANDEZ ADRTANA"</span>,
    <span class="text-blue-400">"fatherLastName"</span>: <span class="text-green-400">"JTMENEZ"</span>,
    <span class="text-blue-400">"motherLastName"</span>: <span class="text-green-400">"HERNANDEZ"</span>,
    <span class="text-blue-400">"name"</span>: <span class="text-green-400">"ADRTANA"</span>,
    <span class="text-blue-400">"birthday"</span>: <span class="text-green-400">"16/03/1970"</span>,
    <span class="text-blue-400">"gender"</span>: <span class="text-green-400">"M"</span>,
    <span class="text-blue-400">"expiryYear"</span>: <span class="text-green-400">"2032"</span>,
    <span class="text-blue-400">"issueYear"</span>: <span class="text-green-400">"2022"</span>,
    <span class="text-blue-400">"voterId"</span>: <span class="text-green-400">""</span>,
    <span class="text-blue-400">"placeNumber"</span>: <span class="text-green-400">""</span>,
    <span class="text-blue-400">"stateNumber"</span>: <span class="text-green-400">""</span>,
    <span class="text-blue-400">"municipalNumber"</span>: <span class="text-green-400">""</span>,
    <span class="text-blue-400">"state"</span>: <span class="text-green-400">""</span>,
    <span class="text-blue-400">"district"</span>: <span class="text-green-400">""</span>,
    <span class="text-blue-400">"subDistrict"</span>: <span class="text-green-400">""</span>,
    <span class="text-blue-400">"addressAll"</span>: <span class="text-green-400">""</span>,
    <span class="text-blue-400">"postalCode"</span>: <span class="text-green-400">""</span>,
    <span class="text-blue-400">"registrationYearAndMonth"</span>: <span class="text-green-400">""</span>
  }
}</code></pre>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Response Format</h3>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-border">
              <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">fields</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
              <tbody>
                <tr><td class="border border-border px-4 py-2"><code>status</code></td><td class="border border-border px-4 py-2">status code</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>message</code></td><td class="border border-border px-4 py-2"><code>idNumber</code>: id number<br/><code>fullName</code>: name<br/><code>fatherLastName</code>: father lastName<br/><code>motherLastName</code>: mother lastName<br/><code>name</code>: name<br/><code>birthday</code>: birthday<br/><code>gender</code>: gender<br/><code>expiryYear</code>: expiry year<br/><code>issueYear</code>: issue year<br/><code>voterId</code>: voter id<br/><code>placeNumber</code>: place number<br/><code>stateNumber</code>: state number<br/><code>municipalNumber</code>: municipal number<br/><code>state</code>: state<br/><code>district</code>: district<br/><code>subDistrict</code>: sub district<br/><code>addressAll</code>: address<br/><code>postalCode</code>: postal code<br/><code>registrationYearAndMonth</code>: registration year and month</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Status Code</h3>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-border">
              <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">status</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
              <tbody>
                <tr><td class="border border-border px-4 py-2"><code>OK</code></td><td class="border border-border px-4 py-2"><code>charge</code>, success</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>FAIL</code></td><td class="border border-border px-4 py-2"><code>charge</code>, image recognition error, please check input image</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>INVALID_REQUEST</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid request parameters</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>IMAGE_INVALID_FORMAT</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid image format, image format should be one of jpeg/jpg/png/bmp</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>IMAGE_INVALID_SIZE</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid image size, should be less than 2M</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>INNER_ERROR</code></td><td class="border border-border px-4 py-2"><code>free</code>, server error</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Error Response Examples</h3>
          <div class="space-y-3">
            <div><p class="text-muted-foreground mb-2">Response for recognition fail</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check input image and retry"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for invalid request parameters</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INVALID_REQUEST"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check request params"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for invalid image format</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_FORMAT"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image format not support"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for image size larger than 2M</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_SIZE"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image larger than 2M"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for server error</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INNER_ERROR"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"Inner error, please retry later"</span>
}</code></pre></div>
          </div>
        </div>
      </div>
    </div>
  `,
},
 "ghana-id-card": {
  title: "Ghana ID Card OCR",
  summary: "id number + name recognition",
  endpoint: "https://api.100ocrapi.com/v1/gha_id_card",
  method: "POST",
  requestParams: [
    {
      parameter: "img",
      type: "String",
      description: "base64 encoded image. It is recommended that the image be less than 200KB, so it will be returned within 2 seconds, otherwise the return time will be longer.",
    },
  ],
  responseFields: [
    { field: "personalId", type: "string", description: "Personal ID" },
    { field: "surname", type: "string", description: "Surname" },
    { field: "firstname", type: "string", description: "First name" },
    { field: "gender", type: "string", description: "Gender" },
    { field: "nationality", type: "string", description: "Nationality" },
    { field: "placeOfIssue", type: "string", description: "Place of issue" },
    { field: "dateOfBirth", type: "string", description: "Date of birth" },
    { field: "dateOfExpiry", type: "string", description: "Date of expiry" },
    { field: "dateOfIssue", type: "string", description: "Date of issue" },
    { field: "documentId", type: "string", description: "Document ID" },
  ],
  customContent: `
    <div class="space-y-8">
      <hr class="border-border" />
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Endpoints</h2>
        <p class="text-muted-foreground">
          <code class="bg-muted px-2 py-1 rounded text-sm font-mono">POST https://api.100ocrapi.com/v1/gha_id_card</code>
        </p>
      </div>
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Request Parameters</h2>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse border border-border">
            <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">parameter</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
            <tbody><tr><td class="border border-border px-4 py-2"><code>img</code></td><td class="border border-border px-4 py-2"><code>string</code>, base64 encoded image. It is recommended that the image be less than 200KB, so it will be returned within 2 seconds, otherwise the return time will be longer.</td></tr></tbody>
          </table>
        </div>
      </div>
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold">Code Example</h2>
        <div>
          <h4 class="text-lg font-medium mb-2">Code snippet</h4>
          <div class="mb-4">
            <h5 class="text-sm font-semibold mb-2">cURL</h5>
            <pre class="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-bash">curl --location --request POST 'https://api.100ocrapi.com/v1/gha_id_card' \\
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
    <span class="text-blue-400">"dateOfBirth"</span>: <span class="text-green-400">"02/02/1990"</span>,
    <span class="text-blue-400">"dateOfExpiry"</span>: <span class="text-green-400">"14/05/2029"</span>,
    <span class="text-blue-400">"dateOfIssue"</span>: <span class="text-green-400">"16/05/2019"</span>,
    <span class="text-blue-400">"documentId"</span>: <span class="text-green-400">"AC2938503"</span>,
    <span class="text-blue-400">"firstname"</span>: <span class="text-green-400">"PRINCE DAVID OPPONG"</span>,
    <span class="text-blue-400">"gender"</span>: <span class="text-green-400">"M"</span>,
    <span class="text-blue-400">"nationality"</span>: <span class="text-green-400">"GHANAIAN"</span>,
    <span class="text-blue-400">"personalId"</span>: <span class="text-green-400">"GHA-712808643-8"</span>,
    <span class="text-blue-400">"placeOfIssue"</span>: <span class="text-green-400">"ACCRA"</span>,
    <span class="text-blue-400">"surname"</span>: <span class="text-green-400">"OBENG"</span>
  }
}</code></pre>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Response Format</h3>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-border">
              <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">fields</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
              <tbody>
                <tr><td class="border border-border px-4 py-2"><code>status</code></td><td class="border border-border px-4 py-2">status code</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>message</code></td><td class="border border-border px-4 py-2"><code>personalId</code>: personal id<br/><code>surname</code>: surname<br/><code>firstname</code>: first name<br/><code>gender</code>: gender<br/><code>nationality</code>: nationality<br/><code>placeOfIssue</code>: place of issue<br/><code>dateOfBirth</code>: date of birth<br/><code>dateOfExpiry</code>: date of expiry<br/><code>dateOfIssue</code>: date of issue<br/><code>documentId</code>: document id</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Status Code</h3>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-border">
              <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">status</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
              <tbody>
                <tr><td class="border border-border px-4 py-2"><code>OK</code></td><td class="border border-border px-4 py-2"><code>charge</code>, success</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>FAIL</code></td><td class="border border-border px-4 py-2"><code>charge</code>, image recognition error, please check input image</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>INVALID_REQUEST</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid request parameters</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>IMAGE_INVALID_FORMAT</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid image format, image format should be one of jpeg/jpg/png/bmp</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>IMAGE_INVALID_SIZE</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid image size, should be less than 2M</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>INNER_ERROR</code></td><td class="border border-border px-4 py-2"><code>free</code>, server error</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Error Response Examples</h3>
          <div class="space-y-3">
            <div><p class="text-muted-foreground mb-2">Response for recognition fail</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check input image and retry"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for input image not identity card</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"not identity card"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for not recognized card type</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"card not recognized"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for invalid request parameters</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INVALID_REQUEST"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check request params"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for invalid image format</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_FORMAT"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image format not support"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for image size larger than 2M</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_SIZE"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image larger than 2M"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for server error</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INNER_ERROR"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"Inner error, please retry later"</span>
}</code></pre></div>
          </div>
        </div>
      </div>
    </div>
  `,
},
"passport": {
  title: "Passport OCR",
  summary: "passport recognition",
  endpoint: "https://api.100ocrapi.com/v1/passport",
  method: "POST",
  requestParams: [
    {
      parameter: "img",
      type: "String",
      description: "base64 encoded image. It is recommended that the image be less than 200KB, so it will be returned within 2 seconds, otherwise the return time will be longer.",
    },
  ],
  responseFields: [
    { field: "passportNumber", type: "string", description: "Passport number" },
    { field: "chName", type: "string", description: "Chinese name (if applicable)" },
    { field: "name", type: "string", description: "Name" },
    { field: "gender", type: "string", description: "Gender" },
    { field: "birthDay", type: "string", description: "Date of birth" },
    { field: "birthPlace", type: "string", description: "Place of birth" },
    { field: "issueDay", type: "string", description: "Date of issue" },
    { field: "issuePlace", type: "string", description: "Place of issue" },
    { field: "expiryDay", type: "string", description: "Date of expiry" },
    { field: "nationality", type: "string", description: "Nationality" },
  ],
  customContent: `
    <div class="space-y-8">
      <hr class="border-border" />
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Endpoints</h2>
        <p class="text-muted-foreground">
          <code class="bg-muted px-2 py-1 rounded text-sm font-mono">POST https://api.100ocrapi.com/v1/passport</code>
        </p>
      </div>
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Request Parameters</h2>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse border border-border">
            <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">parameter</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
            <tbody><tr><td class="border border-border px-4 py-2"><code>img</code></td><td class="border border-border px-4 py-2"><code>string</code>, base64 encoded image. It is recommended that the image be less than 200KB, so it will be returned within 2 seconds, otherwise the return time will be longer.</td></tr></tbody>
          </table>
        </div>
      </div>
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold">Code Example</h2>
        <div>
          <h4 class="text-lg font-medium mb-2">Code snippet</h4>
          <div class="mb-4">
            <h5 class="text-sm font-semibold mb-2">cURL</h5>
            <pre class="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-bash">curl --location --request POST 'https://api.100ocrapi.com/v1/passport' \\
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
          <p class="text-muted-foreground">Response for ID passport recognition success</p>
          <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"OK"</span>,
  <span class="text-blue-400">"message"</span>: {
    <span class="text-blue-400">"passportNumber"</span>: <span class="text-green-400">"E95095047"</span>,
    <span class="text-blue-400">"name"</span>: <span class="text-green-400">"KHOLISATUN NISA"</span>,
    <span class="text-blue-400">"gender"</span>: <span class="text-green-400">"F"</span>,
    <span class="text-blue-400">"birthDay"</span>: <span class="text-green-400">"19891110"</span>,
    <span class="text-blue-400">"birthPlace"</span>: <span class="text-green-400">"SUBANG"</span>,
    <span class="text-blue-400">"issueDay"</span>: <span class="text-green-400">"20170214"</span>,
    <span class="text-blue-400">"expiryDay"</span>: <span class="text-green-400">"20270213"</span>,
    <span class="text-blue-400">"issuePlace"</span>: <span class="text-green-400">"WONOSOBO"</span>,
    <span class="text-blue-400">"nationality"</span>: <span class="text-green-400">"INDONESIA"</span>
  }
}</code></pre>
          <p class="text-muted-foreground mt-4">Response for CN passport recognition success</p>
          <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"OK"</span>,
  <span class="text-blue-400">"message"</span>: {
    <span class="text-blue-400">"passportNumber"</span>: <span class="text-green-400">"E95095047"</span>,
    <span class="text-blue-400">"chName"</span>: <span class="text-green-400">"徐涛涛"</span>,
    <span class="text-blue-400">"name"</span>: <span class="text-green-400">"XU, TAOTA0"</span>,
    <span class="text-blue-400">"gender"</span>: <span class="text-green-400">"M"</span>,
    <span class="text-blue-400">"birthDay"</span>: <span class="text-green-400">"19891110"</span>,
    <span class="text-blue-400">"birthPlace"</span>: <span class="text-green-400">"SHANDONG"</span>,
    <span class="text-blue-400">"issueDay"</span>: <span class="text-green-400">"20170214"</span>,
    <span class="text-blue-400">"expiryDay"</span>: <span class="text-green-400">"20270213"</span>,
    <span class="text-blue-400">"issuePlace"</span>: <span class="text-green-400">"SHANDONG"</span>,
    <span class="text-blue-400">"nationality"</span>: <span class="text-green-400">"CHINESE"</span>
  }
}</code></pre>
          <p class="text-muted-foreground mt-4">Response for PH passport recognition success</p>
          <pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"OK"</span>,
  <span class="text-blue-400">"message"</span>: {
    <span class="text-blue-400">"passportNumber"</span>: <span class="text-green-400">"P9603119"</span>,
    <span class="text-blue-400">"name"</span>: <span class="text-green-400">"KHOLISATUN NISA"</span>,
    <span class="text-blue-400">"gender"</span>: <span class="text-green-400">"F"</span>,
    <span class="text-blue-400">"birthDay"</span>: <span class="text-green-400">"19891110"</span>,
    <span class="text-blue-400">"birthPlace"</span>: <span class="text-green-400">"MAKATI MM"</span>,
    <span class="text-blue-400">"issueDay"</span>: <span class="text-green-400">"20170214"</span>,
    <span class="text-blue-400">"expiryDay"</span>: <span class="text-green-400">"20270213"</span>,
    <span class="text-blue-400">"nationality"</span>: <span class="text-green-400">"FILIPINO"</span>
  }
}</code></pre>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Response Format</h3>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-border">
              <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">fields</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
              <tbody>
                <tr><td class="border border-border px-4 py-2"><code>status</code></td><td class="border border-border px-4 py-2">status code</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>message</code></td><td class="border border-border px-4 py-2"><code>passportNumber</code>: passport number<br/><code>chName</code>: Chinese name<br/><code>name</code>: name<br/><code>gender</code>: gender<br/><code>birthDay</code>: birth day<br/><code>birthPlace</code>: birth place<br/><code>issueDay</code>: issue day<br/><code>issuePlace</code>: issue place<br/><code>expiryDay</code>: expiry day<br/><code>nationality</code>: nationality</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Status Code</h3>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-border">
              <thead><tr class="bg-muted"><th class="border border-border px-4 py-2 text-left">status</th><th class="border border-border px-4 py-2 text-left">description</th></tr></thead>
              <tbody>
                <tr><td class="border border-border px-4 py-2"><code>OK</code></td><td class="border border-border px-4 py-2"><code>charge</code>, success</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>FAIL</code></td><td class="border border-border px-4 py-2"><code>charge</code>, image recognition error, please check input image</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>INVALID_REQUEST</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid request parameters</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>IMAGE_INVALID_FORMAT</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid image format, image format should be one of jpeg/jpg/png/bmp</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>IMAGE_INVALID_SIZE</code></td><td class="border border-border px-4 py-2"><code>free</code>, invalid image size, should be less than 2M</td></tr>
                <tr><td class="border border-border px-4 py-2"><code>INNER_ERROR</code></td><td class="border border-border px-4 py-2"><code>free</code>, server error</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-medium">Error Response Examples</h3>
          <div class="space-y-3">
            <div><p class="text-muted-foreground mb-2">Response for recognition fail</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check input image and retry"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for not recognized type</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"FAIL"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"not a passport"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for invalid request parameters</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INVALID_REQUEST"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"check request params"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for invalid image format</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_FORMAT"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image format not support"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for image size larger than 2M</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"IMAGE_INVALID_SIZE"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"image larger than 2M"</span>
}</code></pre></div>
            <div><p class="text-muted-foreground mb-2">Response for server error</p><pre class="bg-slate-900 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto border"><code class="language-json">{
  <span class="text-blue-400">"status"</span>: <span class="text-green-400">"INNER_ERROR"</span>,
  <span class="text-blue-400">"message"</span>: <span class="text-green-400">"Inner error, please retry later"</span>
}</code></pre></div>
          </div>
        </div>
      </div>
    </div>
  `,
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
