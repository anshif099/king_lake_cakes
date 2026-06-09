import { useState } from 'react'

const ENQUIRY_ENDPOINT = '/send-enquiry.php'

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8" />
      <path d="M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .95.68l1.5 4.49a1 1 0 0 1-.5 1.21l-2.26 1.13a11 11 0 0 0 5.52 5.52l1.13-2.26a1 1 0 0 1 1.21-.5l4.49 1.5a1 1 0 0 1 .68.95V19a2 2 0 0 1-2 2h-1C9.72 21 3 14.28 3 6V5z" />
    </svg>
  )
}

function SocialIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <path d="M17.5 6.5h.01" />
    </svg>
  )
}

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    formData.append('source_url', window.location.href)

    setSubmitStatus('sending')
    setSubmitMessage('')

    try {
      const response = await fetch(ENQUIRY_ENDPOINT, {
        method: 'POST',
        body: formData,
      })
      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Submission failed')
      }

      setSubmitStatus('success')
      setSubmitMessage('Thank you. Your appointment request has been sent.')
      form.reset()
    } catch {
      setSubmitStatus('error')
      setSubmitMessage('We could not send your enquiry. Please try again.')
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-text">
            <p className="section-label">Book a Consultation</p>
            <h2 className="section-title">
              Request
              <br />
              <em>Your Appointment</em>
            </h2>
            <div className="gold-rule" />
            <p className="contact-body">
              Kinglake Cakes accepts a strictly limited number of commissions each month to ensure every creation receives
              the care and devotion it deserves. To begin your journey, please reach out. We would be honoured to craft
              something remarkable for you.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <MailIcon />
                </div>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:cakes@kinglakecakes.com">cakes@kinglakecakes.com</a>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <PhoneIcon />
                </div>
                <div>
                  <strong>Phone / WhatsApp</strong>
                  <span className="detail-note">03 4333 4200</span>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <SocialIcon />
                </div>
                <div>
                  <strong>Social</strong>
                  <div className="social-links">
                    <a href="https://instagram.com/kinglakecakes" target="_blank" rel="noreferrer">
                      @kinglakecakes
                    </a>
                    <a href="https://tiktok.com/@kinglakecakes" target="_blank" rel="noreferrer">
                      TikTok
                    </a>
                    <a href="https://facebook.com/KinglakeCakes" target="_blank" rel="noreferrer">
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <p className="section-label">Enquiry Form</p>
            <form onSubmit={handleSubmit}>
              <input className="form-honeypot" type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="first-name">First Name</label>
                  <input id="first-name" name="first_name" type="text" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="last-name">Last Name</label>
                  <input id="last-name" name="last_name" type="text" placeholder="Family name" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone / WhatsApp</label>
                <input id="phone" name="phone" type="tel" placeholder="+61 or your country code" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="occasion">Occasion Type</label>
                  <select id="occasion" name="occasion" defaultValue="">
                    <option value="">Select...</option>
                    <option>Wedding</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Corporate Event</option>
                    <option>Engagement</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="event-date">Event Date</label>
                  <input id="event-date" name="event_date" type="date" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="vision">Your Vision</label>
                <textarea
                  id="vision"
                  name="message"
                  placeholder="Tell us about your dream cake - style, theme, guest count, inspiration..."
                />
              </div>
              <button type="submit" className="form-submit" disabled={submitStatus === 'sending'}>
                {submitStatus === 'sending' ? 'Sending Enquiry' : 'Request Appointment'}
              </button>
              {submitMessage ? (
                <p className={`form-status ${submitStatus === 'error' ? 'is-error' : 'is-success'}`} role="status">
                  {submitMessage}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
