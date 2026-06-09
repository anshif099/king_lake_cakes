import logo from '../assets/logo.png'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <path d="M17.5 6.5h.01" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 8.5h2.2V5h-2.9C10.5 5 9 6.8 9 9.4V12H6v3.5h3V22h4v-6.5h3l.5-3.5H13V9.8c0-.8.3-1.3 1-1.3z" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16.6 5.3A5 5 0 0 0 19.8 7v3.4a8.2 8.2 0 0 1-3.7-.9v5.6a6.1 6.1 0 1 1-6.1-6.1c.4 0 .8 0 1.1.1v3.6a2.6 2.6 0 1 0 1.8 2.5V2h3.4c.1 1.4.7 2.6 1.6 3.3z" />
    </svg>
  )
}

const footerLinks = {
  Navigate: [
    { href: '#about', label: 'About' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#process', label: 'Process' },
    { href: '#specialties', label: 'Specialties' },
    { href: '#contact', label: 'Contact' },
  ],
  Follow: [
    { href: 'https://www.instagram.com/kinglakecakes/', label: 'Instagram' },
    { href: 'https://www.facebook.com/KinglakeCakes', label: 'Facebook' },
    { href: 'https://www.tiktok.com/@kinglakecakes', label: 'TikTok' },
  ],
  Enquiries: [
    { href: 'mailto:hello@kinglakecakes.com', label: 'Email Us' },
    { href: '#contact', label: 'Book Appointment' },
  ],
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <a className="footer-logo" href="#home" aria-label="Kinglake Cakes home">
              <img src={logo} alt="Kinglake Cakes" />
            </a>
            <p>Bespoke luxury cakes meticulously fashioned by appointment only. Each creation is unique, handcrafted, and designed solely for you.</p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div className="footer-col" key={title}>
              <p className="footer-col-title">{title}</p>
              <ul>
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              {title === 'Enquiries' ? (
                <p className="footer-note">
                  By appointment only.
                  <br />
                  Limited commissions available.
                </p>
              ) : null}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Kinglake Cakes. All rights reserved. Bespoke luxury cakes by appointment.</p>
          <div className="footer-social" aria-label="Social links">
            <a href="https://www.instagram.com/kinglakecakes/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/KinglakeCakes" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://www.tiktok.com/@kinglakecakes" target="_blank" rel="noreferrer" aria-label="TikTok">
              <TikTokIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
