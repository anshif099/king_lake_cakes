const steps = [
  {
    number: 'I',
    title: 'Private Consultation',
    description: 'We begin with a private consultation to understand your vision, occasion, flavour preferences and aesthetic.',
  },
  {
    number: 'II',
    title: 'Bespoke Design',
    description: 'Our artisans sketch and present a unique design concept tailored exclusively to you. No templates. No repeats.',
  },
  {
    number: 'III',
    title: 'Artisan Creation',
    description: 'Every element is handcrafted in our private atelier using the finest ingredients and techniques.',
  },
  {
    number: 'IV',
    title: 'Personal Delivery',
    description: 'Your creation is delivered with white-glove care, arriving in perfect condition for your special moment.',
  },
]

export default function Process() {
  return (
    <section className="process-section" id="process">
      <div className="container">
        <div className="process-header">
          <p className="section-label">How It Works</p>
          <h2 className="section-title">
            The <em>Private</em> Experience
          </h2>
          <div className="gold-rule centered" />
        </div>
        <div className="process-steps">
          {steps.map((step) => (
            <article className="process-step" key={step.number}>
              <div className="step-num">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
