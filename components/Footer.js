import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="nav-logo">JMJ <span>Fabrication</span></div>
            <p>Tensile structures, steel fabrication &amp; architectural metalwork. Serving Thane, Mumbai and Maharashtra for 40+ years.</p>
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
              <li style={{color:'var(--grey-600)',fontSize:'0.85rem',maxWidth:220,lineHeight:1.5}}>Dsouza House, Mahatma Phule Nagar, Thane West – 400606</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">© 2025 <span>JMJ Fabrication Works</span>. All rights reserved. GST: 27ATXPD2912Q1Z0</div>
      </div>
    </footer>
  )
}
