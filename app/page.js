import Link from 'next/link'

const topServices = [
  { icon: '🏗️', name: 'Tensile Structures', desc: 'Airport, stadium, conical, pavilion, walkway, swimming pool and all forms of tensile membrane structures.' },
  { icon: '🚗', name: 'Car Parking Sheds', desc: 'Waterproof, durable parking shade structures for residential complexes, offices and commercial spaces.' },
  { icon: '🔩', name: 'Structural Steel Fabrication', desc: 'Heavy and conventional structural steel, PEB structures, galvanized and prefabricated steel buildings.' },
  { icon: '☀️', name: 'Solar Panel Mounting', desc: 'Custom mounting structures for rooftop and ground-mounted solar panel installations.' },
  { icon: '🪟', name: 'Awnings & Canopies', desc: 'Retractable, fixed, PVC stripe and outdoor shade awnings for restaurants, homes and commercial facades.' },
  { icon: '🏢', name: 'Grills & Gates', desc: 'Custom designed security grills, gates and metal work for residential and commercial properties.' },
]

const clients = [
  'Vibgyor Schools', 'Ryan International', 'Navkis International',
  'Unimont Builders', 'Karuna Welfare', 'HMD Architects',
  'Siddhi Group', 'Balaji Group', 'Haware Developers',
  'Voltas', 'Man Reality', 'Doric Infra',
  'Omkar Developers', 'Home Centre',
]

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-logo">JMJ <span>Fabrication</span></div>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/clients">Clients</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <a href="tel:+919967935910" className="nav-cta">Call Now</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="container">
          <div className="hero-content">
            <div className="hero-eyebrow">Thane · Mumbai · Maharashtra</div>
            <h1>
              Built to<br />
              <span className="accent">Last.</span>
            </h1>
            <p className="hero-sub">
              JMJ Fabrication Works — over 40 years of precision tensile structures,
              structural steel fabrication, and architectural metalwork trusted by
              India's leading builders and institutions.
            </p>
            <div className="hero-actions">
              <a href="/contact" className="btn-primary">Get a Free Quote</a>
              <a href="/services" className="btn-outline">Our Services</a>
            </div>
            <div className="hero-stats">
              <div>
                <div className="stat-num">40+</div>
                <div className="stat-label">Years in Business</div>
              </div>
              <div>
                <div className="stat-num">14+</div>
                <div className="stat-label">Major Clients</div>
              </div>
              <div>
                <div className="stat-num">50+</div>
                <div className="stat-label">Service Types</div>
              </div>
              <div>
                <div className="stat-num">500+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-label">What We Build</div>
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-sub">From tensile membrane structures to heavy steel fabrication — engineered for durability, delivered on time.</p>
          <div className="services-grid">
            {topServices.map((s) => (
              <div className="service-card" key={s.name}>
                <div className="service-icon">{s.icon}</div>
                <div className="service-name">{s.name}</div>
                <div className="service-desc">{s.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40, textAlign: 'center' }}>
            <Link href="/services" className="btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <div className="section-label">Who We Are</div>
              <h2 className="section-title">A Family Legacy of Steel</h2>
              <p className="section-sub">
                Founded by Clarance Avel Henry Dsouza, JMJ Fabrication Works has been a cornerstone
                of structural and tensile fabrication in Thane for over four decades. What started as
                a family workshop has grown into a trusted name for Maharashtra's biggest builders,
                schools, and developers.
              </p>
              <div className="about-facts">
                <div className="fact-box">
                  <div className="fact-num">40+</div>
                  <div className="fact-label">Years of Experience</div>
                </div>
                <div className="fact-box">
                  <div className="fact-num">5</div>
                  <div className="fact-label">Skilled Team Members</div>
                </div>
                <div className="fact-box">
                  <div className="fact-num">GST</div>
                  <div className="fact-label">Registered Business</div>
                </div>
                <div className="fact-box">
                  <div className="fact-num">MSME</div>
                  <div className="fact-label">Certified Enterprise</div>
                </div>
              </div>
            </div>
            <div>
              <div className="section-label">Certifications</div>
              <h3 className="section-title" style={{ fontSize: '1.6rem' }}>Registered &amp; Verified</h3>
              <div className="certs-list" style={{ marginTop: 24 }}>
                {[
                  { icon: '📋', label: 'GST Registration', value: '27ATXPD2912Q1Z0' },
                  { icon: '🏭', label: 'MSME / Udyog Aadhaar', value: 'MH33E0129971' },
                  { icon: '🏛️', label: 'Shop Act', value: 'Registered, Thane' },
                  { icon: '📍', label: 'Location', value: 'Mahatma Phule Nagar, Thane West – 400606' },
                ].map(c => (
                  <div className="cert-item" key={c.label}>
                    <span className="cert-icon">{c.icon}</span>
                    <div>
                      <div className="cert-label" style={{ fontSize: '0.72rem', color: '#c8d4d9', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{c.label}</div>
                      <div style={{ color: '#C9A84C', fontWeight: 600, fontSize: '0.9rem', marginTop: 2 }}>{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 32 }}>
                <Link href="/about" className="btn-primary">Learn More About Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-label">Trusted By</div>
          <h2 className="section-title">Our Clients</h2>
          <p className="section-sub">Proud to have served Maharashtra's leading builders, schools, and corporations.</p>
          <div className="clients-grid">
            {clients.map((c) => (
              <div className="client-card" key={c}>
                <div className="client-name">{c}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section style={{ background: 'var(--gold)', padding: '64px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 800, textTransform: 'uppercase', color: 'var(--dark)', marginBottom: 12 }}>
            Ready to Start Your Project?
          </h2>
          <p style={{ color: '#3a3000', marginBottom: 32, fontSize: '1rem' }}>
            Call us or send a WhatsApp message — we'll get back to you within hours.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+919967935910" className="btn-primary" style={{ background: 'var(--dark)', color: 'var(--white)' }}>
              📞 +91 99679 35910
            </a>
            <a href="https://wa.me/919967935910" className="btn-outline" style={{ borderColor: 'var(--dark)', color: 'var(--dark)' }}>
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <div className="nav-logo">JMJ <span>Fabrication</span></div>
              <p>Tensile structures, steel fabrication & architectural metalwork. Serving Thane, Mumbai and Maharashtra for 40+ years.</p>
            </div>
            <div className="footer-links">
              <h4>Pages</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/clients">Clients</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Contact</h4>
              <ul>
                <li><a href="tel:+919967935910">+91 99679 35910</a></li>
                <li><a href="mailto:jmjfabricationworks@gmail.com">jmjfabricationworks@gmail.com</a></li>
                <li style={{ color: 'var(--grey-600)', fontSize: '0.85rem', maxWidth: 200, lineHeight: 1.5 }}>Dsouza House, Mahatma Phule Nagar, Thane West – 400606</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            © 2025 <span>JMJ Fabrication Works</span>. All rights reserved. GST: 27ATXPD2912Q1Z0
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a href="https://wa.me/919967935910" className="whatsapp-float" title="Chat on WhatsApp">💬</a>
    </>
  )
}
