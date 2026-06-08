import cake1 from '../assets/portfolio/CAKE IMG 1.png'
import cake2 from '../assets/portfolio/CAKE IMG 2.png'
import cake3 from '../assets/portfolio/CAKE IMG 3.png'
import cake4 from '../assets/portfolio/CAKE IMG 4.webp'
import cake5 from '../assets/portfolio/CAKE IMG 5.webp'
import cake6 from '../assets/portfolio/CAKE IMG 6.webp'
import cake7 from '../assets/portfolio/CAKE IMG 7.webp'

const galleryItems = [
  { caption: 'Imperial Gold Wedding', className: 'tall', image: cake1 },
  { caption: 'Gothic Noir', image: cake2 },
  { caption: 'Gravity Defying', image: cake3 },
  { caption: 'Desert Rose', className: 'wide', image: cake4 },
  { caption: 'Black Velvet & Red Rose', image: cake5 },
  { caption: 'Rose Atelier', image: cake6 },
  { caption: 'Desert Bloom', image: cake7 },
]

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="gallery-header">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">
            The <em>Collection</em>
          </h2>
          <div className="gold-rule centered" />
          <p className="section-subtitle">
            A curated selection of our most recent commissions. Each creation is unique and will never be replicated.
          </p>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <article className={`gallery-item ${item.className ?? ''}`} key={item.caption}>
              <img src={item.image} alt={item.caption} />
              <div className="gallery-caption">
                <span className="gallery-caption-text">{item.caption}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
