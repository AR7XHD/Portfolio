import * as React from "react"
import { Link } from "react-router-dom"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon, Github, Menu, X } from "lucide-react"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      {/* Desktop Navigation */}
      <div className="fixed top-4 left-0 right-0 w-full hidden md:flex items-center justify-between px-8 z-50">
        {/* Logo on the left */}
        <div className="bg-white border  border-white rounded-full shadow-2xl backdrop-blur-sm px-4 py-2">
          <span className="text-white font-extrabold text-lg tracking-widest font-mono"></span>
        </div>

        {/* Main Navigation - Centered */}
        <div className="bg-black border border-gray-800 rounded-full shadow-2xl backdrop-blur-sm">
          <div className="px-6 py-3">
            <NavigationMenu viewport={false}>
              <NavigationMenuList className="flex items-center justify-center space-x-1">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#393939] focus:bg-white/20 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    <a href="#about">About</a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#393939] focus:bg-white/20 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    <a href="#projects">Projects</a>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#393939] focus:bg-white/20 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    <a href="#testimonials">Testimonials</a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    <a href="#contact">Contact</a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* GitHub Link */}
        <HoverBorderGradient
          containerClassName="rounded-full border-2 shadow-[0_0_20px_rgba(59,130,246,0.6),0_0_40px_rgba(147,51,234,0.4),0_0_60px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8),0_0_60px_rgba(147,51,234,0.6),0_0_90px_rgba(236,72,153,0.5)]"
          as="a"
          href="https://github.com/AR7XHD"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-4 text-white hover:bg-gray-900/50 transition-all duration-300 hover:scale-110 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] hover:drop-shadow-[0_0_20px_rgba(147,51,234,0.9)]"
          duration={0.3}
          clockwise={true}
        >
          <Github size={24} className="filter drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
          <span className="sr-only">GitHub</span>
        </HoverBorderGradient>
      </div>

      {/* Mobile Navigation */}
      <div className="fixed top-4 left-0 right-0 w-full md:hidden flex items-center justify-between px-4 z-50">
        {/* Logo */}
        <div className="bg-white border border-white rounded-full shadow-2xl backdrop-blur-sm px-3 py-2">
          <span className="text-white font-extrabold text-base tracking-widest font-mono"></span>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-black border border-gray-800 rounded-full shadow-2xl backdrop-blur-sm p-3 text-white hover:bg-gray-900 transition-all duration-300"
        >
          <div className="relative w-5 h-5">
            <Menu
              size={20}
              className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
                }`}
            />
            <X
              size={20}
              className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay (black & white styling like desktop) */}
<div className={`fixed inset-0 z-[60] md:hidden transition-all duration-500 ease-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
  <div className="fixed inset-0 bg-black/60" onClick={() => setIsOpen(false)} />
  <div className={`fixed top-20 left-4 right-4 bg-black border border-gray-800 rounded-lg shadow-xl p-6 transform transition-all duration-500 ease-out ${
    isOpen ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-8 opacity-0 scale-95'
  }`}>
    <nav className="flex flex-col space-y-4">
      <a
        href="#about"
        className="text-white hover:bg-[#393939] hover:text-white py-2 text-lg font-medium px-3 rounded-md"
        onClick={() => setIsOpen(false)}
      >
        About
      </a>
      <a
        href="#projects"
        className="text-white hover:bg-[#393939] hover:text-white py-2 text-lg font-medium px-3 rounded-md"
        onClick={() => setIsOpen(false)}
      >
        Projects
      </a>
      <a
        href="#testimonials"
        className="text-white hover:bg-[#393939] hover:text-white py-2 text-lg font-medium px-3 rounded-md"
        onClick={() => setIsOpen(false)}
      >
        Testimonials
      </a>
      <a
        href="#contact"
        className="text-white hover:bg-[#393939] hover:text-white py-2 text-lg font-medium px-3 rounded-md"
        onClick={() => setIsOpen(false)}
      >
        Contact
      </a>
      <a
        href="https://github.com/AR7XHD"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-white hover:bg-[#393939] hover:text-white py-2 text-lg font-medium px-3 rounded-md"
        onClick={() => setIsOpen(false)}
      >
        <Github size={20} />
        GitHub
      </a>
    </nav>
  </div>
</div>

    </>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
