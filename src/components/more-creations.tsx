import cake8 from '../assets/portfolio/CAKE IMG 8.webp'
import cake9 from '../assets/portfolio/CAKE IMG 9.webp'
import cake10 from '../assets/portfolio/CAKE IMG 10.webp'
import cake11 from '../assets/portfolio/CAKE IMG 11.webp'
import cake12 from '../assets/portfolio/CAKE IMG 12.webp'

const creations = [
  { label: 'Creation 1', image: cake8 },
  { label: 'Creation 2', image: cake9 },
  { label: 'Creation 3', image: cake10 },
  { label: 'Creation 4', image: cake11 },
  { label: 'Creation 5', image: cake12 },
]

export default function MoreCreations() {
  return (
    <section className="more-creations-section" aria-labelledby="more-creations-title">
      <div className="more-creations-header">
        <p className="section-label" id="more-creations-title">
          More Creations
        </p>
      </div>
      <div className="gallery-row" aria-label="More creations carousel">
        <div className="gallery-row-track">
          {[0, 1].map((setIndex) => (
            <div className="gallery-row-set" key={setIndex} aria-hidden={setIndex === 1}>
              {creations.map((creation) => (
                <article className="gallery-row-item" key={`${creation.label}-${setIndex}`} aria-label={creation.label}>
                  <img src={creation.image} alt={creation.label} />
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
