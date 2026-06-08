import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#process', label: 'Process' },
  { href: '#specialties', label: 'Specialties' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 20)

    updateScrolled()
    window.addEventListener('scroll', updateScrolled)

    return () => window.removeEventListener('scroll', updateScrolled)
  }, [])

  return (
    <header className={`site-header${isScrolled ? ' scrolled' : ''}`}>
      <a className="nav-logo" href="#home" aria-label="Kinglake Cakes home">
        <img src={logo} alt="Kinglake Cakes" />
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <a href="#contact" className="nav-cta">
          Book Now
        </a>
      </nav>
    </header>
  )
}
