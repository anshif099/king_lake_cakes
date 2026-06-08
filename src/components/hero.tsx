import heroImage from '../assets/hero.png'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-parallax" aria-hidden="true">
        <img src={heroImage} alt="" />
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-eyebrow">Bespoke Luxury Cakes &mdash; By Appointment Only</p>
        <p className="hero-brand">Kinglake Cakes</p>
        <div className="hero-divider" />
        <p className="hero-tagline">Where every creation is a singular work of edible art.</p>
        <a href="#gallery" className="hero-cta">
          Explore the Collection
        </a>
      </div>
      <div className="scroll-indicator" aria-hidden="true">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
