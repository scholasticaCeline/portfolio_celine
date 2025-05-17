import type React from "react"
import Navbar from "@/components/ui/navbar"
import BackgroundParticles from "@/components/ui/background-2"
import { Linkedin, Instagram, Github, Mail, Music, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />
      <div className="absolute inset-0 -z-10">
        <BackgroundParticles />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">Get In Touch</h1>

        <div className="max-w-md w-full space-y-12 text-center">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
            <div className="space-y-6">
              <ContactItem
                icon={<Mail className="w-5 h-5 text-violet-400" />}
                label="Email"
                value="scholastica.celine@gmail.com"
                href="mailto:scholastica.celine@gmail.com"
              />
              <ContactItem
                icon={<Phone className="w-5 h-5 text-violet-400" />}
                label="Phone"
                value="+62 (812) 8019-1639"
              />
              <ContactItem
                icon={<MapPin className="w-5 h-5 text-violet-400" />}
                label="Location"
                value="Banten, Indonesia"
              />
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white">Social Media</h2>
            <div className="grid grid-cols-2 gap-4">
              <SocialButton
                icon={<Linkedin className="w-5 h-5" />}
                label="LinkedIn"
                href="https://www.linkedin.com/in/scholastica-celine-wahyudi-1505a0291/"
              />
              <SocialButton
                icon={<Instagram className="w-5 h-5" />}
                label="Instagram"
                href="https://instagram.com/yourusername"
              />
              <SocialButton
                icon={<Github className="w-5 h-5" />}
                label="GitHub"
                href="https://github.com/scholasticaCeline"
              />
              <SocialButton
                icon={<Music className="w-5 h-5" />}
                label="Spotify"
                href="https://open.spotify.com/user/2kke0mufy26e73ltabw2zize0?si=b432638b6f554a80"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
}) {
  const content = (
    <div className="flex items-center justify-center space-x-3">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <p className="text-white">{value}</p>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} className="block hover:text-violet-400">
        {content}
      </a>
    )
  }

  return content
}

function SocialButton({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode
  label: string
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center space-x-2 bg-gray-800/50 hover:bg-violet-500/20 transition-colors p-3 rounded-lg border border-gray-700"
    >
      {icon}
      <span className="text-white">{label}</span>
    </a>
  )
}
