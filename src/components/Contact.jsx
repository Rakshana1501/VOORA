import { useState } from 'react'
import './Contact.css'
import form  from '../assets/image/form-image.webp'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    e.target.reset()
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className="section contact" id="contact">
      <div className="contact-bg" />
      <div className="contact-blob" />
      <div className="container contact-inner">
        

        <form className="contact-form" data-reveal="left" onSubmit={handleSubmit}>
          <div className="form-row">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email ID" required />
          </div>
          <div className="form-row">
            <input type="tel" placeholder="Mobile Number" required />
            <select required defaultValue="">
              <option value="" disabled>Type of Project</option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Interior Design</option>
              <option>Renovation</option>
            </select>
          </div>
          <textarea rows="4" placeholder="Type Your Message" required />
          <button type="submit" className="btn btn-primary form-submit">
            {sent ? '✓ Message Sent!' : 'Send Message'}
          </button>
        </form>

        <div className="contact-copy" data-reveal="right">
  <img src={form} alt="Form Image" className="contact-img" />
</div>
      </div>
    </section>
  )
}
