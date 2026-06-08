import { useEffect, useState } from 'react'

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
  const [activeItem, setActiveItem] = useState(null)

  useEffect(() => {
    if (!activeItem) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveItem(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeItem])

  const openPreview = (item, target) => {
    const rect = target.getBoundingClientRect()
    const gap = 16
    const previewWidth = Math.min(window.innerWidth - gap * 2, Math.max(rect.width * 1.8, 560))
    const previewHeight = Math.min(window.innerHeight - gap * 2, Math.max(rect.height * 1.8, 520))
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const left = Math.min(Math.max(centerX, previewWidth / 2 + gap), window.innerWidth - previewWidth / 2 - gap)
    const top = Math.min(Math.max(centerY, previewHeight / 2 + gap), window.innerHeight - previewHeight / 2 - gap)

    setActiveItem({
      ...item,
      style: {
        height: `${previewHeight}px`,
        left: `${left}px`,
        top: `${top}px`,
        width: `${previewWidth}px`,
      },
    })
  }

  const closePreview = () => {
    setActiveItem(null)
  }

  const handlePreviewKeyDown = (event, item) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openPreview(item, event.currentTarget)
    }
  }

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
            <article
              className={`gallery-item ${item.className ?? ''}`}
              key={item.caption}
              onClick={(event) => openPreview(item, event.currentTarget)}
              onFocus={(event) => openPreview(item, event.currentTarget)}
              onKeyDown={(event) => handlePreviewKeyDown(event, item)}
              onMouseEnter={(event) => openPreview(item, event.currentTarget)}
              role="button"
              tabIndex="0"
            >
              <img src={item.image} alt={item.caption} />
              <div className="gallery-caption">
                <span className="gallery-caption-text">{item.caption}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
      {activeItem && (
        <div
          className="gallery-hover-preview"
          onMouseLeave={closePreview}
          style={activeItem.style}
          aria-label={`${activeItem.caption} full image preview`}
        >
          <img src={activeItem.image} alt={activeItem.caption} />
          <p>{activeItem.caption}</p>
        </div>
      )}
    </section>
  )
}
