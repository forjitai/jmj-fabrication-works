import Link from 'next/link'

export const metadata = { title: 'Contact — JMJ Fabrication Works' }

export default function Contact() {
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-logo"><Link href="/">JMJ <span>Fabrication</span></Link></div>
          <div className="nav-links">
            <Link href="/">Home</Link><Link href="/about">About</Link>
            <Link href="/services">Services</Link><Link href="/clients">Clients</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <a href="tel:+919967935910" className="nav-cta">Call Now</a>
        </div>
      </nav>

      <section className="section section-dark" style={{ paddingTop: 140 }}>
        <div className="container">
          <div className="contact-grid">
            <div>
              <div className="section-label">Get In Touch</div>
              <h1 className="section-title">Let's Build <span style={{ color: 'var(--gold)' }}>Together</span></h1>
              <p className="section-sub">Tell us about your project and we'll get back to you with a quote — usually within a few hours.</p>

              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div>
                    <div className="contact-label">Phone / WhatsApp</div>
                    <a href="tel:+919967935910" className="contact-value">+91 99679 35910</a>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <div>
                    <div className="contact-label">Email</div>
                    <a href="mailto:jmjfabricationworks@gmail.com" className="contact-value">jmjfabricationworks@gmail.com</a>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <div className="contact-label">Address</div>
                    <div className="contact-value">Dsouza House, Opp. Guruprasad Society No.5,<br/>Mahatma Phule Nagar, Kores Road,<br/>Behind ESI Hospital, Thane West – 400606</div>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🕐</span>
                  <div>
                    <div className="contact-label">Business Hours</div>
                    <div className="contact-value">Mon – Sat: 9:00 AM – 7:00 PM</div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 40 }}>
                <a href="https://wa.me/919967935910?text=Hello%20JMJ%20Fabrication%2C%20I%20would%20like%20a%20quote%20for%20my%20project." className="btn-primary">
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="contact-form">
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--white)', marginBottom: 28 }}>Send Us a Message</h3>
              <form action="https://formsubmit.co/jmjfabricationworks@gmail.com" method="POST">
                <input type="hidden" name="_subject" value="New enquiry from JMJ Website" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://jmj-fabrication-works.vercel.app/contact" />
                <div className="form-group">
                  <label>Your Name *</label>
                  <input type="text" name="name" required placeholder="e.g. Rajesh Kumar" />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" name="phone" required placeholder="+91 XXXXX XXXXX" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label>Service Required *</label>
                  <select name="service" required>
                    <option value="">Select a service...</option>
                    <option>Tensile Structure</option>
                    <option>Car Parking Shed</option>
                    <option>Structural Steel Fabrication</option>
                    <option>Awning / Canopy</option>
                    <option>Solar Panel Mounting Structure</option>
                    <option>Grills & Gates</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Project Details</label>
                  <textarea name="message" placeholder="Tell us about your project — size, location, timeline..."></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', border: 'none', cursor: 'pointer', fontSize: '0.95rem' }}>
                  Send Enquiry →
                </button>
              </form>
            </div>
          </div>

          <div style={{ marginTop: 80 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.689!2d72.9726!3d19.1943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDExJzM5LjQiTiA3MsKwNTgnMjEuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%" height="320" style={{ border: 0, borderRadius: 4, filter: 'grayscale(30%) invert(90%) hue-rotate(180deg)' }}
              allowFullScreen loading="lazy"
              title="JMJ Fabrication Works Location"
            />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-bottom">© 2025 <span>JMJ Fabrication Works</span>. All rights reserved. GST: 27ATXPD2912Q1Z0</div>
        </div>
      </footer>
      <a href="https://wa.me/919967935910" className="whatsapp-float">💬</a>
    </>
  )
}
