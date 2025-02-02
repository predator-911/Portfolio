import type React from "react"
import { Facebook, Twitter, Instagram, Linkedin, GitlabIcon as GitHub } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-center space-x-4 mb-4">
          <SocialLink href="#" icon={<Facebook />} label="Facebook" />
          <SocialLink href="#" icon={<Twitter />} label="Twitter" />
          <SocialLink href="#" icon={<Instagram />} label="Instagram" />
          <SocialLink href="#" icon={<Linkedin />} label="LinkedIn" />
          <SocialLink href="#" icon={<GitHub />} label="GitHub" />
        </div>
        <p className="text-center text-sm">&copy; {new Date().getFullYear()} Lakshya Kumar. All rights reserved.</p>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition duration-300"
      aria-label={label}
    >
      {icon}
    </a>
  )
}

