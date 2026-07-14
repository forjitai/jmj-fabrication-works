import Link from 'next/link'

const topServices = [
  { icon: '🏗️', name: 'Tensile Structures', desc: 'Airport, stadium, conical, pavilion, walkway, swimming pool and all forms of tensile membrane structures.' },
  { icon: '🚗', name: 'Car Parking Sheds', desc: 'Waterproof, durable parking shade structures for residential complexes, offices and commercial spaces.' },
  { icon: '🔩', name: 'Structural Steel Fabrication', desc: 'Heavy and conventional structural steel, PEB structures, galvanized and prefabricated steel buildings.' },
  { icon: '☀️', name: 'Solar Panel Mounting', desc: 'Custom mounting structures for rooftop and ground-mounted solar panel installations.' },
  { icon: '⛱️', name: 'Awnings & Canopies', desc: 'Retractable, fixed, PVC stripe and outdoor shade awnings for restaurants, homes and commercial facades.' },
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
          <Link href="/" className="nav-logo">JMJ <span>Fabrication</span></Link>
          <input type="checkbox" id="nav-toggle" className="nav-toggle" />
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/clients">Clients</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="nav-right">
            <a href="tel:+919967935910" className="nav-cta">📞 Call Now</a>
            <label htmlFor="nav-toggle" className="nav-burger" aria-label="Menu">
              <span /><span /><span />
            </label>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-dots" />
        <div className="hero-circle" />
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">Thane · Mumbai · Maharashtra</div>
            <h1>
              Precision Fabrication,<br />
              <span className="accent">Built to Last.</span>
            </h1>
            <p className="hero-sub">
              JMJ Fabrication Works — over 40 years of trusted tensile structures,
              structural steel fabrication, and architectural metalwork for Maharashtra's
              leading builders and institutions.
            </p>
            <div className="hero-actions">
              <a href="/contact" className="btn-primary">Get a Free Quote →</a>
              <a href="/services" className="btn-outline">View Our Services</a>
            </div>
            <div className="hero-stats">
              <div><div className="stat-num">40+</div><div className="stat-label">Years in Business</div></div>
              <div><div className="stat-num">14+</div><div className="stat-label">Major Clients</div></div>
              <div><div className="stat-num">50+</div><div className="stat-label">Service Types</div></div>
              <div><div className="stat-num">500+</div><div className="stat-label">Projects Done</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-badge">What We Build</div>
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
            <Link href="/services" className="btn-primary" style={{ background: 'var(--teal)', boxShadow: '0 4px 20px rgba(27,94,112,0.3)' }}>View All 50+ Services →</Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div>
              <div className="section-badge">Who We Are</div>
              <h2 className="section-title">A Family Legacy of Steel & Trust</h2>
              <p className="section-sub">
                Founded by Clarance Avel Henry Dsouza, JMJ Fabrication Works has been a cornerstone
                of structural and tensile fabrication in Thane for over four decades. What started as
                a family workshop has grown into a trusted name for Maharashtra's biggest builders,
                schools, and developers.
              </p>
              <div className="about-facts">
                <div className="fact-box"><div className="fact-num">40+</div><div className="fact-label">Years Experience</div></div>
                <div className="fact-box"><div className="fact-num">5</div><div className="fact-label">Skilled Workers</div></div>
                <div className="fact-box"><div className="fact-num">GST ✓</div><div className="fact-label">Registered</div></div>
                <div className="fact-box"><div className="fact-num">MSME ✓</div><div className="fact-label">Certified</div></div>
              </div>
              <div style={{ marginTop: 32 }}>
                <Link href="/about" className="btn-primary" style={{ background: 'var(--teal)', boxShadow: '0 4px 20px rgba(27,94,112,0.3)' }}>Learn More About Us →</Link>
              </div>
            </div>
            <div>
              <div className="section-badge">Certifications</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, marginBottom: 20 }}>Registered & Verified</h3>
              <div className="certs-list">
                {[
                  { icon: '📋', label: 'GST Registration', value: '27ATXPD2912Q1Z0' },
                  { icon: '🏭', label: 'MSME / Udyog Aadhaar', value: 'MH33E0129971' },
                  { icon: '🏛️', label: 'Shop Act', value: 'Registered, Thane' },
                  { icon: '📍', label: 'Location', value: 'Mahatma Phule Nagar, Thane West – 400606' },
                ].map(c => (
                  <div className="cert-item" key={c.label}>
                    <span className="cert-icon">{c.icon}</span>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--grey-600)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>{c.label}</div>
                      <div style={{ color: 'var(--teal)', fontWeight: 700, fontSize: '0.9rem', marginTop: 2 }}>{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-badge">Trusted By</div>
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

      {/* CTA */}
      <section className="cta-band">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-badge" style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--gold)', borderColor: 'rgba(201,168,76,0.3)' }}>Get Started</div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.7rem, 4vw, 2.4rem)', fontWeight: 800, color: 'var(--white)', margin: '12px 0 10px', letterSpacing: '-0.02em' }}>
            Ready to Start Your Project?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 32, fontSize: '1rem' }}>
            Call us or send a WhatsApp message — we'll get back to you within hours.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+919967935910" className="btn-primary">📞 +91 99679 35910</a>
            <a href="https://wa.me/919967935910" className="btn-outline">💬 WhatsApp Us</a>
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
                <li style={{ color: 'var(--grey-600)', fontSize: '0.85rem', lineHeight: 1.6 }}>Dsouza House, Mahatma Phule Nagar,<br />Thane West – 400606</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">© 2025 <span>JMJ Fabrication Works</span>. All rights reserved. GST: 27ATXPD2912Q1Z0</div>
        </div>
      </footer>

      {/* WhatsApp */}
      <a href="https://wa.me/919967935910?text=Hello%20JMJ%20Fabrication%2C%20I%20would%20like%20a%20quote%20for%20my%20project." className="whatsapp-float" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" width="30" height="30" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </>
  )
}
