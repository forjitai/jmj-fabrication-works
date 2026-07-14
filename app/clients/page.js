import Link from 'next/link'
export const metadata = { title: 'Our Clients — JMJ Fabrication Works' }
const clients = [{name:'Vibgyor Chain of Schools',type:'Education',icon:'🏫'},{name:'Ryan International',type:'Education',icon:'🏫'},{name:'Navkis International',type:'Education',icon:'🏫'},{name:'Unimont Builders',type:'Real Estate',icon:'🏢'},{name:'Karuna Welfare',type:'NGO / Welfare',icon:'🤝'},{name:'HMD Architects',type:'Architecture',icon:'📐'},{name:'Siddhi Group',type:'Real Estate',icon:'🏢'},{name:'Balaji Group',type:'Real Estate',icon:'🏢'},{name:'Haware Developers',type:'Real Estate',icon:'🏢'},{name:'Voltas',type:'Industrial / HVAC',icon:'⚙️'},{name:'Man Reality',type:'Real Estate',icon:'🏢'},{name:'Doric Infra',type:'Infrastructure',icon:'🏗️'},{name:'Omkar Developers',type:'Real Estate',icon:'🏢'},{name:'Home Centre',type:'Retail',icon:'🛒'}]
const WA = <a href="https://wa.me/919967935910" className="whatsapp-float" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="30" height="30" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
export default function Clients() {
  return (<>
    <nav className="nav"><div className="nav-inner"><Link href="/" className="nav-logo">JMJ <span>Fabrication</span></Link><input type="checkbox" id="nav-toggle" className="nav-toggle" /><div className="nav-links"><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/clients">Clients</Link><Link href="/contact">Contact</Link></div><div className="nav-right"><a href="tel:+919967935910" className="nav-cta">📞 Call Now</a><label htmlFor="nav-toggle" className="nav-burger"><span /><span /><span /></label></div></div></nav>
    <div style={{paddingTop:70,background:'linear-gradient(150deg,#0b1e26,#1B5E70 55%,#0f2b36)',minHeight:260,display:'flex',alignItems:'center'}}><div className="container" style={{padding:'56px 24px'}}><div className="hero-badge">Trusted By</div><h1 style={{fontFamily:'var(--font-heading)',fontSize:'clamp(2rem,5vw,3.5rem)',fontWeight:800,color:'var(--white)',letterSpacing:'-0.02em',marginTop:12}}>Our <span style={{color:'var(--gold)'}}>Clients</span></h1></div></div>
    <section className="section"><div className="container">
      <div className="section-badge">Who We Work With</div>
      <h2 className="section-title">Trusted by Maharashtra's Best</h2>
      <p className="section-sub">From school chains to major developers — JMJ has delivered quality structures for some of the region's most recognised names.</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:16,marginTop:48}}>
        {clients.map(c=>(
          <div key={c.name} style={{background:'var(--white)',padding:'24px 22px',borderRadius:'var(--radius)',border:'1.5px solid var(--grey-200)',display:'flex',alignItems:'flex-start',gap:14,transition:'all 0.2s',boxShadow:'none'}}>
            <span style={{fontSize:'1.6rem',flexShrink:0}}>{c.icon}</span>
            <div>
              <div style={{fontFamily:'var(--font-heading)',fontSize:'1rem',fontWeight:700,color:'var(--teal-dark)'}}>{c.name}</div>
              <div style={{fontSize:'0.75rem',color:'var(--gold)',fontWeight:700,marginTop:4,textTransform:'uppercase',letterSpacing:'0.08em'}}>{c.type}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{marginTop:56,background:'var(--teal-bg)',padding:'40px',borderRadius:'var(--radius)',border:'1.5px solid var(--grey-200)',borderLeft:'4px solid var(--teal)'}}>
        <h3 style={{fontFamily:'var(--font-heading)',fontSize:'1.3rem',fontWeight:800,color:'var(--teal-dark)',marginBottom:10}}>Join Our Client List</h3>
        <p style={{color:'var(--grey-600)',marginBottom:24,maxWidth:480}}>Looking for a reliable fabrication partner? We work with builders, architects, schools, corporates and individuals across Thane, Mumbai and Maharashtra.</p>
        <Link href="/contact" className="btn-primary" style={{background:'var(--teal)',boxShadow:'0 4px 20px rgba(27,94,112,0.3)'}}>Request a Quote →</Link>
      </div>
    </div></section>
    <footer className="footer"><div className="container"><div className="footer-bottom">© 2025 <span>JMJ Fabrication Works</span>. All rights reserved.</div></div></footer>
    {WA}
  </>)
}
