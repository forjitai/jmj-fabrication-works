import Link from 'next/link'
export const metadata = { title: 'Services — JMJ Fabrication Works' }
const categories = [
  {cat:'Tensile Structures',icon:'🏗️',items:['Airport Tensile Structure','Inverted Fabric Tensile Structure','Toll Plaza Tensile Structure','Modular Membrane Tensile Structure','Architectural Tensile Structure','Cafeteria Canopy Tensile Structure','Membrane Roofing Tensile Structure','Conical Tensile Structure','Pavilion Tensile Structure','Resort Umbrella Tensile Structure','Inverted Cone Tensile Structure','Swimming Pool Tensile Structure','Outdoor Gazebo Tensile Structure','Tensile Membrane Structure','Auditorium Tensile Structure','Stadium Membrane Tensile Structure','Tensile Shade Structure','Umbrella Membrane Tensile Structure','FRP Sail Sheds','Walkway Tensile Structure','Arch Roof Tensile Structure','Aluminium Tensile Structure','Waterproof Tensile Structure','Tensile Umbrella']},
  {cat:'Awnings & Canopies',icon:'⛱️',items:['Outdoor PVC Striped Retractable Awning','Outdoor Shade Awning','Terrace Fixed Awning','House Striped Shade Awning','Restaurant Retractable Awning','Waterproof Outdoor Canopies','Car Parking Shed','Commercial Shade Awning','Double Sided Retractable Awning','PVC Fixed Awnings','Aluminium Tent','PVC Modular Tensile Fabric Structure']},
  {cat:'Structural Fabrication',icon:'🔩',items:['Industrial Fabrication Service','Structural Steel Fabricators','PEB Structures Fabrication','Structural Steel Fabrication','Heavy Industrial Fabrication Service','Heavy Structural Steel Fabrication','Conventional Steel Structures','Galvanized Steel Structure','Prefabricated School Building','Prefabricated Steel Buildings']},
  {cat:'Specialty Structures',icon:'☀️',items:['Solar Panel Mounting Structure','Industrial Fabric Tensile Structure','White Tensile Structure','Industrial Membrane Tensile Structure','Gazebo Tensile Structure','Outdoor Conical Tensile Structure','Outdoor Fabric Membrane Tensile Structure']},
]
const WA = <a href="https://wa.me/919967935910" className="whatsapp-float" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="30" height="30" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
export default function Services() {
  return (<>
    <nav className="nav"><div className="nav-inner"><Link href="/" className="nav-logo">JMJ <span>Fabrication</span></Link><input type="checkbox" id="nav-toggle" className="nav-toggle" /><div className="nav-links"><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/clients">Clients</Link><Link href="/contact">Contact</Link></div><div className="nav-right"><a href="tel:+919967935910" className="nav-cta">📞 Call Now</a><label htmlFor="nav-toggle" className="nav-burger"><span /><span /><span /></label></div></div></nav>
    <div style={{paddingTop:70,background:'linear-gradient(150deg,#0b1e26,#1B5E70 55%,#0f2b36)',minHeight:260,display:'flex',alignItems:'center'}}><div className="container" style={{padding:'56px 24px'}}><div className="hero-badge">What We Build</div><h1 style={{fontFamily:'var(--font-heading)',fontSize:'clamp(2rem,5vw,3.5rem)',fontWeight:800,color:'var(--white)',letterSpacing:'-0.02em',marginTop:12}}>Our <span style={{color:'var(--gold)'}}>Services</span></h1><p style={{color:'rgba(255,255,255,0.7)',marginTop:12,maxWidth:480,fontSize:'1rem'}}>50+ service types across tensile structures, steel fabrication, awnings and specialty metalwork.</p></div></div>
    <section className="section"><div className="container">
      {categories.map((cat)=>(
        <div key={cat.cat} style={{marginBottom:60}}>
          <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:24,paddingBottom:16,borderBottom:'2px solid var(--grey-200)'}}>
            <span style={{fontSize:'2rem'}}>{cat.icon}</span>
            <h2 style={{fontFamily:'var(--font-heading)',fontSize:'1.5rem',fontWeight:800,color:'var(--teal-dark)',letterSpacing:'-0.01em'}}>{cat.cat}</h2>
            <span style={{marginLeft:'auto',background:'var(--teal-bg)',color:'var(--teal)',fontSize:'0.75rem',fontWeight:700,padding:'4px 12px',borderRadius:'50px'}}>{cat.items.length} services</span>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(210px,1fr))',gap:10}}>
            {cat.items.map(item=>(
              <div key={item} style={{background:'var(--off-white)',padding:'12px 16px',borderRadius:'var(--radius-sm)',borderLeft:'3px solid var(--teal)',fontSize:'0.875rem',fontWeight:600,color:'var(--dark-2)',fontFamily:'var(--font-body)'}}>{item}</div>
            ))}
          </div>
        </div>
      ))}
      <div style={{textAlign:'center',marginTop:32}}><Link href="/contact" className="btn-primary" style={{background:'var(--teal)',boxShadow:'0 4px 20px rgba(27,94,112,0.3)'}}>Get a Quote for Your Project →</Link></div>
    </div></section>
    <footer className="footer"><div className="container"><div className="footer-bottom">© 2025 <span>JMJ Fabrication Works</span>. All rights reserved.</div></div></footer>
    {WA}
  </>)
}
