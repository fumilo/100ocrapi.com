"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface CodeTabsProps {
  tabs: {
    label: string
    language: string
    code: string
  }[]
}

export function CodeTabs({ tabs }: CodeTabsProps) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Code Examples</h3>

      {/* Tab buttons */}
      <div className="flex space-x-1 rounded-lg bg-muted p-1">
        {tabs.map((tab, index) => (
          <Button
            key={tab.label}
            variant={activeTab === index ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab(index)}
            className={cn("flex-1 text-xs", activeTab === index && "bg-background shadow-sm")}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Code content */}
      <Card>
        <CardContent className="p-0">
          <pre className="overflow-x-auto p-4 text-sm">
            <code className={`language-${tabs[activeTab].language}`}>{tabs[activeTab].code}</code>
          </pre>
        </CardContent>
      </Card>
    </div>
  )
}
