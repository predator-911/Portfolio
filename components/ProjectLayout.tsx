import type React from "react"
import Navigation from "./Navigation"
import Footer from "./Footer"

interface ProjectLayoutProps {
  children: React.ReactNode
  title: string
}

export default function ProjectLayout({ children, title }: ProjectLayoutProps) {
  return (
    <>
      <Navigation />
      <header className="ex-header">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 offset-xl-1">
              <h1>{title}</h1>
            </div>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <Footer />
    </>
  )
}

