import Link from 'next/link'

export const metadata = { title: 'About Us — JMJ Fabrication Works' }

export default function About() {
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
          <div className="hero-eyebrow">Our Story</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem,6vw,4.5rem)', fontWeight: 800, color: 'var(--white)', textTransform: 'uppercase', lineHeight: 1 }}>
            About <span style={{ color: 'var(--gold)' }}>JMJ</span>
          </h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div>
              <div className="section-label">Our History</div>
              <h2 className="section-title">Four Decades of Fabrication Excellence</h2>
              <p className="section-sub">JMJ Fabrication Works was established by Clarance Avel Henry Dsouza as a family-run enterprise in Thane, Maharashtra. With over 40 years of hands-on experience in structural and tensile fabrication, the company has grown from a local workshop into a trusted contractor for Maharashtra's most prominent builders, schools, and corporations.</p>
              <p className="section-sub" style={{ marginTop: 16 }}>Our commitment to quality craftsmanship, on-time delivery, and competitive pricing has earned us long-term relationships with clients including Vibgyor Schools, Ryan International, Voltas, Omkar Developers, and many more.</p>
              <div style={{ marginTop: 40 }}>
                <Link href="/contact" className="btn-primary">Get in Touch</Link>
              </div>
            </div>
            <div>
              <div className="about-facts">
                {[
                  { num: '40+', label: 'Years in Business' },
                  { num: '5', label: 'Skilled Workers' },
                  { num: '14+', label: 'Major Clients' },
                  { num: '50+', label: 'Service Categories' },
                ].map(f => (
                  <div className="fact-box" key={f.label}>
                    <div className="fact-num">{f.num}</div>
                    <div className="fact-label">{f.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-label">Credentials</div>
          <h2 className="section-title">Registered & Certified</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px,1fr))', gap: 24, marginTop: 48 }}>
            {[
              { icon: '📋', title: 'GST Registered', detail: 'No. 27ATXPD2912Q1Z0', sub: 'Regular registration valid from 28/11/2021' },
              { icon: '🏭', title: 'MSME Certified', detail: 'UAM No. MH33E0129971', sub: 'Udyog Aadhaar Memorandum — Manufacturing' },
              { icon: '🏛️', title: 'Shop Act', detail: 'Registered in Thane', sub: 'Compliant with Maharashtra Shops & Establishments Act' },
              { icon: '🔧', title: 'Proprietorship', detail: 'Owner: Clarance Avel Henry Dsouza', sub: 'PAN: ATXPD2912Q' },
            ].map(c => (
              <div key={c.title} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.2)', padding: 28, borderTop: '3px solid var(--gold)' }}>
                <div style={{ fontSize: '2rem', marginBottom: 12 }}>{c.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase' }}>{c.title}</div>
                <div style={{ fontWeight: 600, color: 'var(--white)', marginTop: 6 }}>{c.detail}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--grey-300)', marginTop: 6, lineHeight: 1.5 }}>{c.sub}</div>
              </div>
            ))}
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
