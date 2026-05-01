import { createFileRoute } from '@tanstack/react-router'
import { type ChangeEvent, type FormEvent, useState } from 'react'
import { useMutation } from 'convex/react'
import { api } from '../../convex/_generated/api'

export const Route = createFileRoute('/')({
  component: Home,
})

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-12 w-12 flex-shrink-0">
        <svg viewBox="0 0 100 100" className="h-full w-full drop-shadow-sm">
          <defs>
            <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3eb6e5" />
              <stop offset="33%" stopColor="#4cb9b0" />
              <stop offset="66%" stopColor="#e54a7c" />
              <stop offset="100%" stopColor="#f09a3e" />
            </linearGradient>
          </defs>
          <path
            d="M50 88.5L43.2 82.2C19 60.1 3 45.6 3 27.9C3 13.5 14.3 2.2 28.7 2.2C36.8 2.2 44.6 6 50 12C55.4 6 63.2 2.2 71.3 2.2C85.7 2.2 97 13.5 97 27.9C97 45.6 81 60.1 56.8 82.2L50 88.5Z"
            fill="url(#heartGradient)"
          />
          <text
            x="50"
            y="55"
            textAnchor="middle"
            fill="white"
            fontSize="32"
            fontWeight="900"
            fontFamily="sans-serif"
          >
            LS
          </text>
        </svg>
      </div>
      <div className="flex flex-col -space-y-1">
        <span className="font-black text-2xl tracking-tighter text-slate-900 leading-none">
          LEIJA SIGNS
        </span>
        <span className="text-[10px] font-bold tracking-[0.2em] text-brand-teal">
          LUV SIGNS LLC
        </span>
      </div>
    </div>
  )
}

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    projectType: 'Signage Installation',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const submitLead = useMutation(api.leads.submit)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await submitLead(formData)
      setSubmitted(true)
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        projectType: 'Signage Installation',
        message: '',
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your request. Please try again.')
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 py-3 px-6 md:px-12 flex justify-between items-center">
        <Logo />
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#services" className="text-sm font-bold uppercase tracking-widest hover:text-brand-teal transition-colors">Services</a>
          <a href="/projects" className="text-sm font-bold uppercase tracking-widest hover:text-brand-teal transition-colors">Projects</a>
          <a href="#government" className="text-sm font-bold uppercase tracking-widest hover:text-brand-teal transition-colors">Government</a>
          <a href="#clients" className="text-sm font-bold uppercase tracking-widest hover:text-brand-teal transition-colors">Performance</a>
          <a href="#contact" className="text-sm font-bold uppercase tracking-widest hover:text-brand-teal transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-6">
          <a href="tel:2106631393" className="hidden lg:block text-slate-900 font-black hover:text-brand-teal transition-colors uppercase tracking-tight">
            210-663-1393
          </a>
          <a 
            href="#contact" 
            className="bg-brand-teal text-white px-6 py-3 rounded-sm text-xs font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-md shadow-brand-teal/20 active:scale-95"
          >
            Request Quote
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 px-6 md:px-12 border-b border-slate-100 overflow-hidden bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-brand-teal mb-6">
              <span className="w-2 h-2 bg-brand-teal rounded-full animate-pulse"></span>
              Serving Texas & Regional Markets Since 2009
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.05] uppercase">
              Commercial Signage <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-teal to-brand-orange">& Wayfinding</span> Solutions
            </h1>
            <div className="h-1.5 w-32 bg-brand-teal mb-8"></div>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-medium">
              Fabrication • Installation • ADA Compliance • Rebrands. <br className="hidden md:block"/>
              Trusted by financial institutions and national brands for precise, compliant, and on-time execution.
            </p>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-brand-orange">
              New: project gallery page ready for completed work photos
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex justify-center items-center bg-brand-teal text-white px-8 py-4 rounded-sm text-lg font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all shadow-lg shadow-brand-teal/20 active:scale-95"
              >
                Request a Quote
              </a>
              <a 
                href="/projects" 
                className="inline-flex justify-center items-center bg-white/5 text-white border-2 border-white/20 px-8 py-4 rounded-sm text-lg font-black uppercase tracking-widest hover:border-brand-teal hover:text-brand-teal transition-all active:scale-95"
              >
                View Project Gallery
              </a>
            </div>
          </div>
        </div>
        
        {/* Abstract Background Element - Dark Textured Pattern (Mock) */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-brand-teal/10 to-transparent hidden lg:block"></div>
      </section>

      {/* Core Competencies */}
      <section id="services" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black tracking-tighter mb-4 text-slate-900 uppercase">Core Competencies</h2>
              <div className="h-2 w-24 bg-brand-teal mb-8"></div>
              <p className="text-lg text-slate-600 font-medium">
                Professional fabrication and installation services for mission-critical corporate environments.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {[
              { title: "Fabrication & Design", desc: "Custom manufacturing of high-quality signage solutions tailored to your specific brand standards." },
              { title: "Wayfinding & ADA", desc: "Expert installation of interior and exterior wayfinding systems and fully ADA-compliant signage." },
              { title: "Corporate Branding", desc: "High-impact environmental graphics and corporate branding displays for corporate headquarters." },
              { title: "Mission-Critical", desc: "Specialized installers for data centers, financial hubs, and high-security government environments." },
              { title: "Multi-Site Rollouts", desc: "Efficient coordination and execution for national brand refreshes across multiple locations." },
              { title: "Retrofit & Removal", desc: "Professional removal of legacy signage and precise retrofitting for updated brand standards." }
            ].map((service, idx) => (
              <div key={idx} className="group p-8 border-b-4 border-slate-100 hover:border-brand-teal hover:bg-slate-50 transition-all duration-300">
                <div className="text-brand-pink font-black text-lg mb-4 tracking-tighter uppercase">Service 0{idx + 1}</div>
                <h3 className="text-xl font-black mb-3 text-slate-900 uppercase tracking-tight">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Performance */}
      <section id="clients" className="py-24 px-6 md:px-12 bg-slate-950 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-black tracking-tighter mb-4 uppercase">Institutional Trust</h2>
            <div className="h-2 w-24 bg-brand-orange mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              { 
                client: "Wells Fargo", 
                details: ["Nationwide deployment", "Long-term performance partner", "Secure financial environments"],
                description: "Executing complex signage refreshes across high-security financial branches and corporate offices nationwide.",
                color: "border-brand-teal"
              },
              { 
                client: "Equinix", 
                details: ["Data center installs", "Controlled-access environments", "Zero-disruption workflows"],
                description: "Installation specialist for mission-critical data center environments requiring strict security clearance.",
                color: "border-brand-blue"
              },
              { 
                client: "Vanguard", 
                details: ["Corporate branding installs", "High compliance standards", "Precision execution"],
                description: "Delivering institutional-grade branding installations for corporate real estate teams.",
                color: "border-brand-pink"
              },
              { 
                client: "Chubb Insurance", 
                details: ["Ongoing corporate support", "Multi-state execution", "Brand consistency"],
                description: "Long-term installation partner for national insurance corporate facilities.",
                color: "border-brand-orange"
              }
            ].map((item, idx) => (
              <div key={idx} className={`bg-white/5 border-l-8 ${item.color} p-8 hover:bg-white/10 transition-colors group`}>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{item.client}</h3>
                <p className="text-slate-300 mb-6 text-lg leading-relaxed font-medium">{item.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-white transition-colors">
                      <span className="w-1.5 h-1.5 bg-brand-teal rounded-full"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-black tracking-tighter mb-8 uppercase">The LUV Advantage</h2>
            <div className="space-y-10">
              {[
                { title: "Security Clearances", desc: "Extensive background working in data centers and financial institutions.", accent: "bg-brand-blue" },
                { title: "Agile Teams", desc: "Direct access to principal installers who ensure project timeline integrity.", accent: "bg-brand-teal" },
                { title: "Operational Discipline", desc: "Focus on site verification, precise execution, and exhaustive QC reports.", accent: "bg-brand-pink" },
                { title: "Minimal Disruption", desc: "Flexible scheduling and clean-jobsite protocols for corporate campuses.", accent: "bg-brand-orange" }
              ].map((diff, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className={`flex-shrink-0 w-12 h-12 ${diff.accent} text-white flex items-center justify-center font-black text-xl rounded-sm shadow-lg`}>
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-2 uppercase tracking-tight text-slate-900">{diff.title}</h4>
                    <p className="text-slate-600 leading-relaxed font-medium">{diff.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#f8f9fa] p-8 md:p-12 border border-slate-200 relative">
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-teal"></div>
            <h3 className="text-2xl font-black mb-6 text-slate-900 uppercase">Operating Model</h3>
            <div className="space-y-6">
              <div className="p-6 bg-white border border-slate-200 rounded-sm shadow-sm">
                <h4 className="font-black text-brand-blue mb-2 uppercase tracking-wider text-sm">Nationwide Deployment</h4>
                <p className="text-sm text-slate-600 font-medium">Managing multi-state rollouts with centralized coordination and consistent QC.</p>
              </div>
              <div className="p-6 bg-white border border-slate-200 rounded-sm shadow-sm">
                <h4 className="font-black text-brand-teal mb-2 uppercase tracking-wider text-sm">Centralized Coordination</h4>
                <p className="text-sm text-slate-600 font-medium">One point of contact for fabrication, scheduling, and verified installation.</p>
              </div>
              <div className="p-6 bg-white border border-slate-200 rounded-sm shadow-sm">
                <h4 className="font-black text-brand-orange mb-2 uppercase tracking-wider text-sm">Site Documentation</h4>
                <p className="text-sm text-slate-600 font-medium">Comprehensive photo verification and institutional sign-off procedures.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government & Institutional Section */}
      <section id="government" className="py-24 px-6 md:px-12 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tighter mb-4 uppercase text-slate-900">Institutional & Government Procurement</h2>
            <div className="h-2 w-24 bg-brand-teal mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 font-medium max-w-3xl mx-auto uppercase tracking-wide">
              Registered and compliant to execute mission-critical signage projects at the Local, State, and Federal level.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-10 border-t-8 border-brand-blue shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <svg viewBox="0 0 24 24" className="w-16 h-16 fill-current text-slate-900"><path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z"/></svg>
              </div>
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tight text-slate-900">Local Level</h3>
              <p className="text-slate-600 font-medium mb-6 leading-relaxed">
                Primary hub in San Antonio (Windcrest), TX. Registered vendor for local municipal projects, regional facilities management, and county-level infrastructure across the San Antonio metro and Bexar County.
              </p>
              <div className="flex items-center gap-2 text-brand-blue font-black text-[10px] uppercase tracking-[0.2em]">
                <span className="w-2 h-2 bg-brand-blue rounded-full"></span> Regional Municipality Hub
              </div>
            </div>

            <div className="bg-white p-10 border-t-8 border-brand-teal shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <svg viewBox="0 0 24 24" className="w-16 h-16 fill-current text-slate-900"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
              </div>
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tight text-slate-900">State Level</h3>
              <p className="text-slate-600 font-medium mb-6 leading-relaxed">
                Qualified contractor for State of Texas agencies. Experienced in handling state-wide rebrands, educational institution wayfinding, and large-scale state facility environmental graphics.
              </p>
              <div className="flex items-center gap-2 text-brand-teal font-black text-[10px] uppercase tracking-[0.2em]">
                <span className="w-2 h-2 bg-brand-teal rounded-full"></span> State of Texas Registered
              </div>
            </div>

            <div className="bg-white p-10 border-t-8 border-brand-orange shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <svg viewBox="0 0 24 24" className="w-16 h-16 fill-current text-slate-900"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
              </div>
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tight text-slate-900">Federal Level</h3>
              <p className="text-slate-600 font-medium mb-6 leading-relaxed">
                Fully registered in SAM.gov for federal procurement. Cleared and experienced in high-security, controlled-access environments including federal campuses and agency offices.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <span>UEI: QGXSXN3FC6M3</span>
                  <span>CAGE: 17J55</span>
                </div>
                <div className="h-1.5 bg-slate-100 w-full rounded-full overflow-hidden">
                  <div className="h-full bg-brand-orange w-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 p-8 bg-slate-900 text-white flex flex-col md:flex-row justify-between items-center gap-8 border-l-8 border-brand-teal">
            <div className="flex-1">
              <h4 className="text-2xl font-black uppercase mb-2 tracking-tight">Full Capabilities Statement</h4>
              <p className="text-slate-400 text-sm font-medium">Request our official procurement package including all NAICS codes, past performance, and institutional security documentation.</p>
            </div>
            <a 
              href="#contact" 
              className="bg-brand-teal text-white px-10 py-5 rounded-sm font-black uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-slate-900 transition-all active:scale-95 whitespace-nowrap shadow-xl shadow-brand-teal/10"
            >
              Request Statement
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 text-slate-900 uppercase leading-[1.0]">Ready to <br/><span className="text-brand-teal">Coordinate?</span></h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed font-medium">
              Contact us today for a precise bid on your commercial signage project. We specialize in high-security and corporate environments.
            </p>
            
            <div className="space-y-8 mb-12">
              <a href="tel:2106631393" className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white border border-slate-200 flex items-center justify-center text-2xl group-hover:bg-brand-teal group-hover:border-brand-teal group-hover:text-white transition-all shadow-sm">📞</div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Direct Bid Line</p>
                  <p className="text-2xl font-black text-slate-900 group-hover:text-brand-teal transition-colors tracking-tight">210-663-1393</p>
                </div>
              </a>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white border border-slate-200 flex items-center justify-center text-2xl text-slate-900 shadow-sm">📍</div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Operations Hub</p>
                  <p className="text-2xl font-black text-slate-900 tracking-tight uppercase">San Antonio, TX</p>
                </div>
              </div>
            </div>
            
            <div className="p-8 bg-white border border-slate-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-teal/5 rounded-full -mr-12 -mt-12"></div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Federal Identifiers</p>
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">UEI</p>
                  <p className="font-mono font-black text-slate-900 text-sm">QGXSXN3FC6M3</p>
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">CAGE</p>
                  <p className="font-mono font-black text-slate-900 text-sm">17J55</p>
                </div>
                <div className="col-span-2">
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter mb-1">Primary NAICS</p>
                  <p className="text-xs font-black text-slate-700 tracking-tight">238990, 339950, 541430, 541810</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-t-8 border-brand-teal p-8 md:p-12 shadow-2xl shadow-slate-200/50">
            {submitted ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-brand-teal/10 text-brand-teal rounded-full flex items-center justify-center text-3xl mx-auto mb-6">✓</div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">Request Received</h3>
                <p className="text-slate-600 mb-8 font-medium">Our coordination team will review your project details and contact you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-brand-teal font-black uppercase tracking-widest text-xs hover:underline"
                >
                  Submit Another Bid Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Project Lead Name</label>
                    <input 
                      required
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Michael Chen" 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-teal focus:bg-white outline-none transition-all rounded-sm font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Organization</label>
                    <input 
                      required
                      type="text" 
                      id="company" 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Facilities Management" 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-teal focus:bg-white outline-none transition-all rounded-sm font-medium"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Direct Email</label>
                    <input 
                      required
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="work@email.com" 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-teal focus:bg-white outline-none transition-all rounded-sm font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Mobile/Direct Line</label>
                    <input 
                      required
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="210-XXX-XXXX" 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-teal focus:bg-white outline-none transition-all rounded-sm font-medium"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="projectType" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Service Category</label>
                  <select 
                    id="projectType" 
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-teal focus:bg-white outline-none transition-all rounded-sm font-medium appearance-none"
                  >
                    <option>Signage Installation</option>
                    <option>Wayfinding & ADA</option>
                    <option>Corporate Branding</option>
                    <option>Fabrication Solutions</option>
                    <option>Mission-Critical Support</option>
                    <option>Multi-Site Rollout</option>
                    <option>Removal / Retrofit</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Project Requirements</label>
                  <textarea 
                    required
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    placeholder="Specify location, timeline, and scope..." 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-teal focus:bg-white outline-none transition-all rounded-sm font-medium"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-slate-900 text-white py-4 font-black uppercase tracking-widest hover:bg-brand-teal transition-all shadow-xl shadow-slate-900/10 active:scale-95 rounded-sm"
                >
                  Submit Quote Request
                </button>
                <p className="text-[10px] text-center text-slate-400 uppercase tracking-tighter font-bold">
                  Institutional coordination inquiries prioritized.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111] text-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-white/5 pb-16">
            <div className="col-span-1 md:col-span-2">
              <Logo />
              <p className="text-slate-500 max-w-sm leading-relaxed mt-8 font-medium">
                Premier partner for commercial signage fabrication and installation in high-security and institutional environments.
              </p>
            </div>
            
            <div>
              <h4 className="font-black uppercase tracking-[0.2em] text-xs mb-8 text-brand-teal">Capabilities</h4>
              <ul className="space-y-4 text-slate-400 text-xs font-bold uppercase tracking-wider">
                <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2"><span className="w-1 h-1 bg-brand-blue"></span> Fabrication</li>
                <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2"><span className="w-1 h-1 bg-brand-teal"></span> Wayfinding</li>
                <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2"><span className="w-1 h-1 bg-brand-pink"></span> ADA Compliance</li>
                <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2"><span className="w-1 h-1 bg-brand-orange"></span> Data Centers</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-black uppercase tracking-[0.2em] text-xs mb-8 text-brand-teal">Contact</h4>
              <ul className="space-y-4 text-slate-400 text-xs font-bold uppercase tracking-wider">
                <li><span className="text-slate-600">PH:</span> 210-663-1393</li>
                <li><span className="text-slate-600">WEB:</span> www.leijasigns.com</li>
                <li><span className="text-slate-600">UEI:</span> QGXSXN3FC6M3</li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black uppercase tracking-[0.3em] text-slate-700">
            <p>© {new Date().getFullYear()} LEIJA SIGNS / LUV SIGNS LLC. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
              <span className="hover:text-brand-teal cursor-pointer transition-colors">Privacy</span>
              <span className="hover:text-brand-teal cursor-pointer transition-colors">Compliance</span>
            </div>
          </div>
        </div>
      </footer>
    </div>

  )
}
