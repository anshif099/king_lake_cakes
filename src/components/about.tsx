import philosophyImage from '../assets/OurPhilosophy.png'

const pillars = [
  { value: '100%', label: 'Bespoke' },
  { value: '\u221e', label: 'Handcrafted' },
  { value: '1', label: 'Appointment Only' },
]

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-image-stack">
            <img src={philosophyImage} alt="Kinglake signature cake" className="about-img-main" />
            <img src={philosophyImage} alt="Artisan cake detail" className="about-img-accent" />
          </div>
          <div className="about-text-block">
            <p className="section-label">Our Philosophy</p>
            <h2 className="section-title">
              Crafted for
              <br />
              <em>those who seek</em>
              <br />
              the extraordinary
            </h2>
            <div className="gold-rule" />
            <blockquote className="about-quote">
              "Every cake is a collaboration between vision and artistry &mdash; a moment made eternal."
            </blockquote>
            <p className="about-body">
              Kinglake Cakes is not a bakery. It is an atelier &mdash; a private studio where each creation is conceived,
              designed, and hand-crafted exclusively for you. We work only by appointment, ensuring that every commission
              receives our full and undivided attention.
            </p>
            <p className="about-body">
              From architectural wedding towers to intimate celebration centrepieces, our work spans the full spectrum of
              luxury confectionery &mdash; always bespoke, always breathtaking.
            </p>
            <div className="pillars">
              {pillars.map((pillar) => (
                <div className="pillar" key={pillar.label}>
                  <span className="pillar-num">{pillar.value}</span>
                  <span className="pillar-label">{pillar.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
