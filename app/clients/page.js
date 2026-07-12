import Link from 'next/link'

export const metadata = { title: 'Our Clients — JMJ Fabrication Works' }

const clients = [
  { name: 'Vibgyor Chain of Schools', type: 'Education' },
  { name: 'Ryan International', type: 'Education' },
  { name: 'Navkis International', type: 'Education' },
  { name: 'Unimont Builders', type: 'Real Estate' },
  { name: 'Karuna Welfare', type: 'NGO / Welfare' },
  { name: 'HMD Architects', type: 'Architecture' },
  { name: 'Siddhi Group', type: 'Real Estate' },
  { name: 'Balaji Group', type: 'Real Estate' },
  { name: 'Haware Developers', type: 'Real Estate' },
  { name: 'Voltas', type: 'Industrial / HVAC' },
  { name: 'Man Reality', type: 'Real Estate' },
  { name: 'Doric Infra', type: 'Infrastructure' },
  { name: 'Omkar Developers', type: 'Real Estate' },
  { name: 'Home Centre', type: 'Retail' },
]

export default function Clients() {
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

      <div style={{ paddingTop: 80, background: 'var(--dark)', minHeight: 280, display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ padding: '64px 24px' }}>
          <div className="hero-eyebrow">Trusted By</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem,6vw,4.5rem)', fontWeight: 800, color: 'var(--white)', textTransform: 'uppercase', lineHeight: 1 }}>
            Our <span style={{ color: 'var(--gold)' }}>Clients</span>
          </h1>
          <p style={{ color: 'var(--grey-300)', marginTop: 16, maxWidth: 520 }}>14+ major organisations across education, real estate, infrastructure, retail and more.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-label">Who We Work With</div>
          <h2 className="section-title">Trusted by Maharashtra's Best</h2>
          <p className="section-sub">From school chains to luxury developers, JMJ Fabrication Works has delivered quality structures for some of the region's most recognised names.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px,1fr))', gap: 2, marginTop: 56, background: 'var(--grey-100)' }}>
            {clients.map(c => (
              <div key={c.name} style={{ background: 'var(--white)', padding: '28px 24px', borderTop: '3px solid var(--teal)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--teal-dark)' }}>{c.name}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--gold)', fontWeight: 600, marginTop: 6, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{c.type}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 64, background: 'var(--off-white)', padding: '48px 40px', borderLeft: '4px solid var(--gold)' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--teal-dark)', marginBottom: 12 }}>
              Join Our Client List
            </h3>
            <p style={{ color: 'var(--grey-600)', marginBottom: 24 }}>Looking for a reliable fabrication partner? We work with builders, architects, schools, corporates and individuals across Thane, Mumbai and Maharashtra.</p>
            <Link href="/contact" className="btn-primary">Request a Quote</Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-bottom">© 2025 <span>JMJ Fabrication Works</span>. All rights reserved.</div>
        </div>
      </footer>
      <a href="https://wa.me/919967935910" className="whatsapp-float">💬</a>
    </>
  )
}
