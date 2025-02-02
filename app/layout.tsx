import type { Metadata } from "next"
import AnimatedBackground from "@/components/AnimatedBackground"
import "./globals.css"
import type React from "react" // Import React

export const metadata: Metadata = {
  title: "Lakshya Kumar - Portfolio",
  description: "Web Developer and Machine Learning Enthusiast",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <AnimatedBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}

