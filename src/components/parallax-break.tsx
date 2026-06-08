type ParallaxBreakProps = {
  quote: string
  label: string
  image: string
}

export default function ParallaxBreak({ quote, label, image }: ParallaxBreakProps) {
  return (
    <section className="parallax-break" aria-label={label}>
      <div className="parallax-break-bg" aria-hidden="true">
        <img src={image} alt="" />
      </div>
      <div className="parallax-break-overlay">
        <p className="parallax-break-text">
          "{quote}"
          <span>{label}</span>
        </p>
      </div>
    </section>
  )
}
