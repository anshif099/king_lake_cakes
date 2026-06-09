import whatWeCreateImage from '../assets/WhatWeCreate.png'

const specialties = [
  {
    name: 'Wedding Masterpieces',
    description:
      'Multi-tiered architectural creations adorned with hand-sculpted sugar florals, gold leaf, and intricate lacework - the centrepiece your celebration deserves.',
  },
  {
    name: 'Celebration Commissions',
    description:
      'Milestone birthdays, anniversaries, and special occasions - each cake conceived as a deeply personal statement of luxury.',
  },
  {
    name: 'Geode & Sculptural',
    description:
      'Gravity-defying structures, crystal geode formations, and avant-garde sculptural works that blur the line between confectionery and fine art.',
  },
  {
    name: 'Corporate & Events',
    description:
      'Bespoke luxury pieces for brand launches, galas, and private events - where presentation and provenance matter as much as taste.',
  },
]

export default function Specialties() {
  return (
    <section className="specialties-section" id="specialties">
      <div className="container">
        <div className="specialties-inner">
          <div className="specialties-list">
            <p className="section-label">What We Create</p>
            <h2 className="section-title">
              Our <em>Specialties</em>
            </h2>
            <div className="gold-rule" />
            {specialties.map((specialty) => (
              <article className="specialty-item" key={specialty.name}>
                <div className="specialty-icon" />
                <div>
                  <p className="specialty-name">{specialty.name}</p>
                  <p className="specialty-desc">{specialty.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="specialties-image">
            <img src={whatWeCreateImage} alt="Kinglake Cakes specialty creation" />
            <div className="specialties-image-badge">
              <p className="badge-label">Our Standard</p>
              <p className="badge-text">"It is anything but ordinary"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
