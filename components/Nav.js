import Link from 'next/link'

export default function Nav() {
  return (
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
          <a href="tel:+919967935910" className="nav-cta">Call Now</a>
          <label htmlFor="nav-toggle" className="nav-burger" aria-label="Open menu">
            <span></span><span></span><span></span>
          </label>
        </div>
      </div>
    </nav>
  )
}
