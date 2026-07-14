import Link from 'next/link'
export const metadata = { title: 'Project Gallery \u2014 JMJ Fabrication Works' }

const BASE = 'https://raw.githubusercontent.com/forjitai/jmj-fabrication-works/main/public/images/gallery'

const images = [
  { src: BASE+'/tensile-01.jpg', label: 'Tensile Structure' },
  { src: BASE+'/tensile-02.jpg', label: 'Tensile Canopy' },
  { src: BASE+'/hero-01.jpg',    label: 'Tensile Installation' },
  { src: BASE+'/tensile-05.jpg', label: 'Membrane Structure' },
  { src: BASE+'/hero-02.jpg',    label: 'Tensile Project' },
  { src: BASE+'/tensile-07.jpg', label: 'Tensile Shade' },
  { src: BASE+'/tensile-08.jpg', label: 'Car Parking Shed' },
  { src: BASE+'/tensile-09.jpg', label: 'Tensile Structure' },
  { src: BASE+'/tensile-10.jpg', label: 'Fabrication Work' },
  { src: BASE+'/tensile-11.jpg', label: 'Steel Fabrication' },
  { src: BASE+'/tensile-03.jpg', label: 'Tensile Roof' },
  { src: BASE+'/tensile-04.jpg', label: 'Tensile Canopy' },
  { src: BASE+'/tensile-06.jpg', label: 'Membrane Roof' },
  { src: BASE+'/tensile-12.jpg', label: 'Site Work' },
  { src: BASE+'/structural-01.jpg', label: 'Structural Steel' },
  { src: BASE+'/structural-02.jpg', label: 'Steel Fabrication' },
  { src: BASE+'/structural-03.jpg', label: 'Industrial Fabrication' },
  { src: BASE+'/structural-04.jpg', label: 'Metal Structure' },
  { src: BASE+'/structural-05.jpg', label: 'Steel Structure' },
  { src: BASE+'/structural-06.jpg', label: 'Fabrication Project' },
  { src: BASE+'/project-01.jpg', label: 'Completed Project' },
  { src: BASE+'/project-02.jpg', label: 'Site Installation' },
  { src: BASE+'/project-03.jpg', label: 'Project Work' },
  { src: BASE+'/project-04.jpg', label: 'Fabrication Site' },
  { src: BASE+'/project-05.jpg', label: 'Completed Work' },
]

const WA = () => (
  <a href="https://wa.me/919967935910?text=Hello%20JMJ%20Fabrication%2C%20I%20would%20like%20a%20quote." className="whatsapp-float" aria-label="WhatsApp">
    <svg viewBox="0 0 24 24" width="30" height="30" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
  </a>
)

export default function Gallery() {
  return (<>
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">JMJ <span>Fabrication</span></Link>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <div className="nav-links">
          <Link href="/">Home</Link><Link href="/about">About</Link>
          <Link href="/services">Services</Link><Link href="/gallery">Gallery</Link>
          <Link href="/clients">Clients</Link><Link href="/contact">Contact</Link>
        </div>
        <div className="nav-right">
          <a href="tel:+919967935910" className="nav-cta">📞 Call Now</a>
          <label htmlFor="nav-toggle" className="nav-burger"><span /><span /><span /></label>
        </div>
      </div>
    </nav>

    <div style={{paddingTop:70,background:'linear-gradient(150deg,#0b1e26,#1B5E70 55%,#0f2b36)',minHeight:260,display:'flex',alignItems:'center'}}>
      <div className="container" style={{padding:'56px 24px'}}>
        <div className="hero-badge">Our Work</div>
        <h1 style={{fontFamily:'var(--font-heading)',fontSize:'clamp(2rem,5vw,3.5rem)',fontWeight:800,color:'var(--white)',letterSpacing:'-0.02em',marginTop:12}}>
          Project <span style={{color:'var(--gold)'}}>Gallery</span>
        </h1>
        <p style={{color:'rgba(255,255,255,0.7)',marginTop:12,maxWidth:520,fontSize:'1rem'}}>
          Real completed projects — tensile structures, steel fabrication and metalwork across Maharashtra.
        </p>
      </div>
    </div>

    <section className="section section-alt">
      <div className="container">
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:32,flexWrap:'wrap',gap:12}}>
          <div>
            <div className="section-badge">25 Projects</div>
            <h2 className="section-title" style={{marginTop:8}}>Completed Works</h2>
          </div>
          <Link href="/contact" className="btn-primary" style={{background:'var(--teal)',boxShadow:'0 4px 20px rgba(27,94,112,0.3)'}}>
            Get a Quote →
          </Link>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:16}}>
          {images.map((img,i) => (
            <div key={i} style={{position:'relative',aspectRatio:'4/3',borderRadius:'var(--radius)',overflow:'hidden',background:'var(--grey-100)',boxShadow:'var(--shadow)'}}>
              <img
                src={img.src}
                alt={'JMJ Fabrication Works - '+img.label}
                style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}
                loading="lazy"
              />
              <div style={{position:'absolute',bottom:0,left:0,right:0,background:'linear-gradient(transparent,rgba(14,32,40,0.85))',padding:'40px 16px 16px'}}>
                <div style={{fontFamily:'var(--font-heading)',fontWeight:700,color:'var(--white)',fontSize:'0.95rem'}}>{img.label}</div>
                <div style={{fontSize:'0.75rem',color:'var(--gold)',marginTop:3,fontWeight:600}}>JMJ Fabrication Works</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{marginTop:56,textAlign:'center',background:'linear-gradient(135deg,var(--teal-dark),var(--teal))',borderRadius:'var(--radius)',padding:'48px 32px'}}>
          <h3 style={{fontFamily:'var(--font-heading)',fontSize:'1.6rem',fontWeight:800,color:'var(--white)',marginBottom:10}}>Like What You See?</h3>
          <p style={{color:'rgba(255,255,255,0.75)',marginBottom:28}}>Contact us for a free site visit and quote. We serve Thane, Mumbai and all of Maharashtra.</p>
          <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
            <a href="tel:+919967935910" className="btn-primary">📞 +91 99679 35910</a>
            <a href="https://wa.me/919967935910" className="btn-outline">💬 WhatsApp Us</a>
          </div>
        </div>
      </div>
    </section>

    <footer className="footer">
      <div className="container">
        <div className="footer-bottom">© 2025 <span>JMJ Fabrication Works</span>. All rights reserved.</div>
      </div>
    </footer>
    <WA />
  </>)
}
