import Link from 'next/link'
export const metadata = { title: 'Contact — JMJ Fabrication Works' }
const WA = <a href="https://wa.me/919967935910?text=Hello%20JMJ%20Fabrication%2C%20I%20would%20like%20a%20quote%20for%20my%20project." className="whatsapp-float" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="30" height="30" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
export default function Contact() {
  return (<>
    <nav className="nav"><div className="nav-inner"><Link href="/" className="nav-logo">JMJ <span>Fabrication</span></Link><input type="checkbox" id="nav-toggle" className="nav-toggle" /><div className="nav-links"><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/clients">Clients</Link><Link href="/contact">Contact</Link></div><div className="nav-right"><a href="tel:+919967935910" className="nav-cta">📞 Call Now</a><label htmlFor="nav-toggle" className="nav-burger"><span /><span /><span /></label></div></div></nav>
    <section className="section section-dark" style={{paddingTop:120}}>
      <div className="container"><div className="contact-grid">
        <div>
          <div className="section-badge" style={{background:'rgba(201,168,76,0.12)',color:'var(--gold)',borderColor:'rgba(201,168,76,0.3)'}}>Get In Touch</div>
          <h1 className="section-title" style={{marginTop:12}}>Let's Build <span style={{color:'var(--gold)'}}>Together</span></h1>
          <p className="section-sub">Tell us about your project and we'll get back to you with a quote — usually within a few hours.</p>
          <div className="contact-info">
            {[{icon:'📞',label:'Phone / WhatsApp',val:<a href="tel:+919967935910" className="contact-value">+91 99679 35910</a>},{icon:'✉️',label:'Email',val:<a href="mailto:jmjfabricationworks@gmail.com" className="contact-value">jmjfabricationworks@gmail.com</a>},{icon:'📍',label:'Address',val:<div className="contact-value">Dsouza House, Opp. Guruprasad Society No.5,<br/>Mahatma Phule Nagar, Kores Road,<br/>Behind ESI Hospital, Thane West – 400606</div>},{icon:'🕐',label:'Business Hours',val:<div className="contact-value">Mon – Sat: 9:00 AM – 7:00 PM</div>}].map(c=>(
              <div className="contact-item" key={c.label}>
                <div className="contact-icon-wrap">{c.icon}</div>
                <div><div className="contact-label">{c.label}</div>{c.val}</div>
              </div>
            ))}
          </div>
          <div style={{marginTop:36}}><a href="https://wa.me/919967935910?text=Hello%20JMJ%20Fabrication%2C%20I%20would%20like%20a%20quote%20for%20my%20project." className="btn-primary">💬 Chat on WhatsApp</a></div>
        </div>
        <div className="contact-form">
          <h3 style={{fontFamily:'var(--font-heading)',fontSize:'1.3rem',fontWeight:800,color:'var(--white)',marginBottom:24}}>Send Us a Message</h3>
          <form action="https://formsubmit.co/jmjfabricationworks@gmail.com" method="POST">
            <input type="hidden" name="_subject" value="New enquiry from JMJ Website" />
            <input type="hidden" name="_captcha" value="false" />
            <div className="form-group"><label>Your Name *</label><input type="text" name="name" required placeholder="e.g. Rajesh Kumar" /></div>
            <div className="form-group"><label>Phone Number *</label><input type="tel" name="phone" required placeholder="+91 XXXXX XXXXX" /></div>
            <div className="form-group"><label>Email</label><input type="email" name="email" placeholder="your@email.com" /></div>
            <div className="form-group"><label>Service Required *</label><select name="service" required><option value="">Select a service...</option><option>Tensile Structure</option><option>Car Parking Shed</option><option>Structural Steel Fabrication</option><option>Awning / Canopy</option><option>Solar Panel Mounting Structure</option><option>Grills & Gates</option><option>Other</option></select></div>
            <div className="form-group"><label>Project Details</label><textarea name="message" placeholder="Tell us about your project — size, location, timeline..."></textarea></div>
            <button type="submit" className="btn-primary" style={{width:'100%',border:'none',cursor:'pointer',fontSize:'0.95rem',fontFamily:'var(--font-body)'}}>Send Enquiry →</button>
          </form>
        </div>
      </div></div>
    </section>
    <footer className="footer"><div className="container"><div className="footer-bottom">© 2025 <span>JMJ Fabrication Works</span>. All rights reserved. GST: 27ATXPD2912Q1Z0</div></div></footer>
    {WA}
  </>)
}
