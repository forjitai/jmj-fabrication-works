import Link from 'next/link'

export const metadata = { title: 'Services — JMJ Fabrication Works' }

const categories = [
  {
    cat: 'Tensile Structures', icon: '🏗️',
    items: ['Airport Tensile Structure','Inverted Fabric Tensile Structure','Toll Plaza Tensile Structure','Modular Membrane Tensile Structure','Architectural Tensile Structure','Cafeteria Canopy Tensile Structure','Membrane Roofing Tensile Structure','Conical Tensile Structure','Pavilion Tensile Structure','Resort Umbrella Tensile Structure','Inverted Cone Tensile Structure','Swimming Pool Tensile Structure','Outdoor Gazebo Tensile Structure','Tensile Membrane Structure','Auditorium Tensile Structure','Stadium Membrane Tensile Structure','Tensile Shade Structure','Umbrella Membrane Tensile Structure','FRP Sail Sheds','Walkway Tensile Structure','Arch Roof Tensile Structure','Aluminium Tensile Structure','Waterproof Tensile Structure','Tensile Umbrella']
  },
  {
    cat: 'Awnings & Canopies', icon: '⛱️',
    items: ['Outdoor PVC Striped Retractable Awning','Outdoor Shade Awning','Terrace Fixed Awning','House Striped Shade Awning','Restaurant Retractable Awning','Waterproof Outdoor Canopies','Car Parking Shed','Commercial Shade Awning','Double Sided Retractable Awning','PVC Fixed Awnings','Aluminium Tent','PVC Modular Tensile Fabric Structure']
  },
  {
    cat: 'Structural Fabrication', icon: '🔩',
    items: ['Industrial Fabrication Service','Structural Steel Fabricators','PEB Structures Fabrication','Structural Steel Fabrication','Heavy Industrial Fabrication Service','Heavy Structural Steel Fabrication','Conventional Steel Structures','Galvanized Steel Structure','Prefabricated School Building','Prefabricated Steel Buildings']
  },
  {
    cat: 'Specialty Structures', icon: '☀️',
    items: ['Solar Panel Mounting Structure','Industrial Fabric Tensile Structure','White Tensile Structure','Industrial Membrane Tensile Structure','Gazebo Tensile Structure','Outdoor Conical Tensile Structure','Outdoor Fabric Membrane Tensile Structure']
  },
]

export default function Services() {
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
          <div className="hero-eyebrow">What We Do</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem,6vw,4.5rem)', fontWeight: 800, color: 'var(--white)', textTransform: 'uppercase', lineHeight: 1 }}>
            Our <span style={{ color: 'var(--gold)' }}>Services</span>
          </h1>
          <p style={{ color: 'var(--grey-300)', marginTop: 16, maxWidth: 520 }}>50+ service types across tensile structures, steel fabrication, awnings and specialty metalwork.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {categories.map((cat, i) => (
            <div key={cat.cat} style={{ marginBottom: 64 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28, paddingBottom: 16, borderBottom: '2px solid var(--gold)' }}>
                <span style={{ fontSize: '2rem' }}>{cat.icon}</span>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--teal-dark)' }}>{cat.cat}</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px,1fr))', gap: 12 }}>
                {cat.items.map(item => (
                  <div key={item} style={{ background: 'var(--off-white)', padding: '14px 18px', borderLeft: '3px solid var(--teal)', fontSize: '0.875rem', fontWeight: 500, color: 'var(--dark)' }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link href="/contact" className="btn-primary">Get a Quote for Your Project</Link>
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
