import logo from '../assets/logo.png'

const footerLinks = {
  Navigate: [
    { href: '#about', label: 'About' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#process', label: 'Process' },
    { href: '#specialties', label: 'Specialties' },
    { href: '#contact', label: 'Contact' },
  ],
  Follow: [
    { href: 'https://instagram.com/kinglakecakes', label: 'Instagram' },
    { href: 'https://tiktok.com/@kinglakecakes', label: 'TikTok' },
    { href: 'https://facebook.com/KinglakeCakes', label: 'Facebook' },
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
            <p>Bespoke luxury cakes crafted by appointment only. Each creation is unique, handcrafted, and designed solely for you.</p>
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
            <a href="https://instagram.com/kinglakecakes" target="_blank" rel="noreferrer" aria-label="Instagram">
              Ig
            </a>
            <a href="https://tiktok.com/@kinglakecakes" target="_blank" rel="noreferrer" aria-label="TikTok">
              Tk
            </a>
            <a href="https://facebook.com/KinglakeCakes" target="_blank" rel="noreferrer" aria-label="Facebook">
              Fb
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
