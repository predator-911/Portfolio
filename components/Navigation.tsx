"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Code } from "lucide-react"
import type React from "react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <Code className="w-8 h-8 text-purple-500" />
          </Link>

          <div className="hidden md:flex space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-3">
            <NavLink href="#about" onClick={() => setIsOpen(false)}>
              About
            </NavLink>
            <NavLink href="#services" onClick={() => setIsOpen(false)}>
              Services
            </NavLink>
            <NavLink href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </NavLink>
            <NavLink href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  )
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link
      href={href}
      className="block text-gray-300 hover:text-white hover:glow-text transition-all duration-300"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

