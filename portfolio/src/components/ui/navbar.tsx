"use client"

import type React from "react"

import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-4 bg-black/30 backdrop-blur-sm">
      <Link href="/" className="text-xl font-bold text-white">
        Portfolio
      </Link>

      <div className="flex space-x-8">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </div>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="relative text-sm font-medium text-white transition-colors hover:text-gray-300 group">
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
    </Link>
  )
}
