import Link from 'next/link'
export const metadata = { title: 'About Us — JMJ Fabrication Works' }
const WA = <a href="https://wa.me/919967935910" className="whatsapp-float" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="30" height="30" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
function NavBar() {
  return <nav className="nav"><div className="nav-inner"><Link href="/" className="nav-logo">JMJ <span>Fabrication</span></Link><input type="checkbox" id="nav-toggle" className="nav-toggle" /><div className="nav-links"><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/clients">Clients</Link><Link href="/contact">Contact</Link></div><div className="nav-right"><a href="tel:+919967935910" className="nav-cta">📞 Call Now</a><label htmlFor="nav-toggle" className="nav-burger"><span /><span /><span /></label></div></div></nav>
}
function FooterSimple() {
  return <footer className="footer"><div className="container"><div className="footer-bottom">© 2025 <span>JMJ Fabrication Works</span>. All rights reserved.</div></div></footer>
}
export default function About() {
  return (<>
    <NavBar />
    <div style={{paddingTop:70,background:'linear-gradient(150deg,#0b1e26,#1B5E70 55%,#0f2b36)',minHeight:260,display:'flex',alignItems:'center'}}>
      <div className="container" style={{padding:'56px 24px'}}>
        <div className="hero-badge">Our Story</div>
        <h1 style={{fontFamily:'var(--font-heading)',fontSize:'clamp(2rem,5vw,3.5rem)',fontWeight:800,color:'var(--white)',letterSpacing:'-0.02em',marginTop:12}}>About <span style={{color:'var(--gold)'}}>JMJ Fabrication</span></h1>
      </div>
    </div>
    <section className="section"><div className="container"><div className="about-grid">
      <div>
        <div className="section-badge">Our History</div>
        <h2 className="section-title">Four Decades of Fabrication Excellence</h2>
        <p className="section-sub">JMJ Fabrication Works was established by Clarance Avel Henry Dsouza as a family-run enterprise in Thane, Maharashtra. With over 40 years of hands-on experience in structural and tensile fabrication, the company has grown into a trusted contractor for Maharashtra's most prominent builders, schools, and corporations.</p>
        <p className="section-sub" style={{marginTop:14}}>Our commitment to quality craftsmanship, on-time delivery, and competitive pricing has earned us long-term relationships with clients including Vibgyor Schools, Ryan International, Voltas, Omkar Developers, and many more.</p>
        <div style={{marginTop:32}}><Link href="/contact" className="btn-primary" style={{background:'var(--teal)',boxShadow:'0 4px 20px rgba(27,94,112,0.3)'}}>Get in Touch →</Link></div>
      </div>
      <div><div className="about-facts">{[{num:'40+',label:'Years in Business'},{num:'5',label:'Skilled Workers'},{num:'14+',label:'Major Clients'},{num:'50+',label:'Service Types'}].map(f=><div className="fact-box" key={f.label}><div className="fact-num">{f.num}</div><div className="fact-label">{f.label}</div></div>)}</div></div>
    </div></div></section>
    <section className="section section-dark"><div className="container">
      <div className="section-badge">Credentials</div>
      <h2 className="section-title">Registered & Certified</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:20,marginTop:40}}>
        {[{icon:'📋',title:'GST Registered',detail:'27ATXPD2912Q1Z0',sub:'Regular registration valid from 28/11/2021'},{icon:'🏭',title:'MSME Certified',detail:'UAM: MH33E0129971',sub:'Udyog Aadhaar — Manufacturing'},{icon:'🏛️',title:'Shop Act',detail:'Registered, Thane',sub:'Maharashtra Shops & Establishments Act'},{icon:'🔧',title:'Proprietorship',detail:'Clarance Avel Henry Dsouza',sub:'PAN: ATXPD2912Q'}].map(c=>(
          <div key={c.title} style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(201,168,76,0.2)',padding:28,borderRadius:'var(--radius)',borderTop:'3px solid var(--gold)'}}>
            <div style={{fontSize:'2rem',marginBottom:12}}>{c.icon}</div>
            <div style={{fontFamily:'var(--font-heading)',fontSize:'1rem',fontWeight:700,color:'var(--gold)'}}>{c.title}</div>
            <div style={{fontWeight:700,color:'var(--white)',marginTop:6,fontSize:'0.95rem'}}>{c.detail}</div>
            <div style={{fontSize:'0.82rem',color:'rgba(255,255,255,0.55)',marginTop:5,lineHeight:1.5}}>{c.sub}</div>
          </div>
        ))}
      </div>
    </div></section>
    <FooterSimple />{WA}
  </>)
}
