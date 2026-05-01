import { Link, createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/projects' as never)({
  head: () => ({
    meta: [{ title: 'Projects | Leija Signs' }],
  }),
  component: ProjectsPage,
})

type ProjectSpotlight = {
  title: string
  category: string
  caption: string
  palette: string
  glow: string
}

const featuredProject = {
  title: 'Clear Vinyl Conference Room Installation',
  category: 'Interior privacy graphics',
  stats: ['Commercial conference room', 'Fabrication + installation', 'Maintains daylight + openness'],
  caption:
    'Completed a clear vinyl installation for a commercial conference room. Fabrication and installation were coordinated to provide visual separation while maintaining openness and natural light.',
}

const projectSpotlights: Array<ProjectSpotlight> = [
  {
    title: 'Financial Branch Rebrand',
    category: 'Exterior signage refresh',
    caption:
      'Built for polished hero shots of storefront signage, clean install lines, and before/after transformation details.',
    palette: 'from-slate-950 via-slate-800 to-brand-blue/70',
    glow: 'bg-brand-blue/20',
  },
  {
    title: 'Corporate Wayfinding System',
    category: 'Interior ADA + directional package',
    caption:
      'Ideal for hallway directories, ADA plaques, dimensional lettering, and the premium fit-and-finish that buyers want to see.',
    palette: 'from-slate-900 via-slate-700 to-brand-teal/70',
    glow: 'bg-brand-teal/20',
  },
]

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-12 w-12 flex-shrink-0">
        <svg viewBox="0 0 100 100" className="h-full w-full drop-shadow-sm">
          <defs>
            <linearGradient id="projectsHeartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3eb6e5" />
              <stop offset="33%" stopColor="#4cb9b0" />
              <stop offset="66%" stopColor="#e54a7c" />
              <stop offset="100%" stopColor="#f09a3e" />
            </linearGradient>
          </defs>
          <path
            d="M50 88.5L43.2 82.2C19 60.1 3 45.6 3 27.9C3 13.5 14.3 2.2 28.7 2.2C36.8 2.2 44.6 6 50 12C55.4 6 63.2 2.2 71.3 2.2C85.7 2.2 97 13.5 97 27.9C97 45.6 81 60.1 56.8 82.2L50 88.5Z"
            fill="url(#projectsHeartGradient)"
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
        <span className="font-black text-2xl leading-none tracking-tighter text-white">
          LEIJA SIGNS
        </span>
        <span className="text-[10px] font-bold tracking-[0.2em] text-brand-teal">
          LUV SIGNS LLC
        </span>
      </div>
    </div>
  )
}

function FeaturedProjectPhoto() {
  const [imageAvailable, setImageAvailable] = useState(true)

  if (!imageAvailable) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-[linear-gradient(135deg,#0f172a,#111827_42%,#1e293b)] shadow-2xl shadow-black/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(62,182,229,0.16),transparent_24%),radial-gradient(circle_at_80%_15%,rgba(76,185,176,0.14),transparent_22%),radial-gradient(circle_at_70%_85%,rgba(240,154,62,0.14),transparent_24%)]" />
        <div className="absolute inset-6 border border-white/10 bg-black/15 backdrop-blur-sm" />
        <div className="absolute inset-x-10 top-10 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.25em] text-white/45">
          <span>Actual photo slot</span>
          <span>Awaiting upload</span>
        </div>
        <div className="absolute inset-x-10 bottom-10 max-w-md border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-teal">Next step</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Add the real image file to <span className="font-black text-white">public/projects/conference-room-vinyl.jpg</span> and this section will automatically switch to the actual photo with the upgraded presentation.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="group relative aspect-[4/3] overflow-hidden border border-white/10 bg-black shadow-2xl shadow-black/30">
      <img
        src="/projects/conference-room-vinyl.jpg"
        alt="Clear vinyl installation on a conference room glass wall"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        onError={() => setImageAvailable(false)}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.18)_44%,rgba(2,6,23,0.58)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),transparent)] mix-blend-screen" />
      <div className="absolute inset-x-6 top-6 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.25em] text-white/75">
        <span>Installed project</span>
        <span>Conference room privacy vinyl</span>
      </div>
      <div className="absolute inset-x-6 bottom-6 max-w-xl border border-white/15 bg-black/30 p-5 backdrop-blur-md">
        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-teal">
          Featured project photo
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-100">
          Real project photography with subtle contrast treatment, cleaner framing, and restrained overlays for a more premium portfolio presentation.
        </p>
      </div>
    </div>
  )
}

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 px-6 py-3 backdrop-blur-sm md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <Logo />
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center border border-white/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-slate-200 transition-colors hover:border-brand-teal hover:text-brand-teal"
            >
              Back Home
            </Link>
            <a
              href="#portfolio-ready"
              className="inline-flex items-center justify-center bg-brand-teal px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-slate-900"
            >
              Portfolio Plan
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/10 px-6 py-20 md:px-12 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(62,182,229,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(76,185,176,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(240,154,62,0.16),transparent_26%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-brand-teal">
                Elevated project gallery concept
              </div>
              <h1 className="text-5xl font-black uppercase tracking-tight text-white md:text-6xl lg:text-7xl">
                Your finished work deserves a stronger visual story.
              </h1>
              <div className="mt-8 h-1.5 w-28 bg-brand-teal" />
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
                Yes — if you add project photos and a short caption for each one, I can turn them into a polished portfolio page with stronger layout, hierarchy, and presentation.
              </p>
            </div>

            <div className="border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-orange">
                What this page is ready for
              </p>
              <ul className="mt-6 space-y-4 text-sm text-slate-300">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-teal" />
                  Hero images from installs, storefronts, interiors, or before/after shots
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-blue" />
                  Short captions describing client type, project scope, or install challenge
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-orange" />
                  Optional details like city, category, materials, and whether it was fabrication or install
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-teal">
                  Project 01 added
                </p>
                <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-white">
                  First completed project now has a premium case-study treatment
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-slate-400">
                I updated this section to a cleaner premium placeholder. Once the real image file is uploaded into the project, I can use the actual photo and polish the presentation around it.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="overflow-hidden border border-white/10 bg-white/5 p-3">
                <FeaturedProjectPhoto />
              </div>

              <article className="border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
                <div className="flex flex-wrap gap-2">
                  {featuredProject.stats.map((stat) => (
                    <span
                      key={stat}
                      className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-300"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
                <p className="mt-8 text-[10px] font-black uppercase tracking-[0.25em] text-brand-orange">
                  {featuredProject.category}
                </p>
                <h3 className="mt-3 text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
                  {featuredProject.title}
                </h3>
                <p className="mt-6 text-base leading-relaxed text-slate-300 md:text-lg">
                  {featuredProject.caption}
                </p>
                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-teal">
                    Presentation direction
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    Clean architectural framing, restrained overlays, and concise project language help the work feel more polished and commercial without over-designing it.
                  </p>
                </div>
              </article>
            </div>

            <div className="mt-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-teal">
                  Next projects ready
                </p>
                <h3 className="mt-3 text-3xl font-black uppercase tracking-tight text-white">
                  Send the next photos and I’ll keep filling out the gallery
                </h3>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-slate-400">
                These remaining cards are standing by for more installs, rebrands, and wayfinding work.
              </p>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              {projectSpotlights.map((project, index) => (
                <article
                  key={project.title}
                  className="group overflow-hidden border border-white/10 bg-white/5 transition-transform duration-300 hover:-translate-y-1 hover:border-white/20"
                >
                  <div className={`relative aspect-[5/4] overflow-hidden bg-gradient-to-br ${project.palette}`}>
                    <div className={`absolute left-6 top-6 h-24 w-24 rounded-full blur-2xl ${project.glow}`} />
                    <div className="absolute inset-x-6 top-6 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.25em] text-white/70">
                      <span>Upcoming slot {index + 2}</span>
                      <span>Awaiting photo</span>
                    </div>
                    <div className="absolute inset-x-6 bottom-6 border border-white/15 bg-black/20 p-5 backdrop-blur-sm">
                      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-teal">
                        {project.category}
                      </p>
                      <h3 className="mt-3 text-2xl font-black uppercase tracking-tight text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm leading-relaxed text-slate-300">{project.caption}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio-ready" className="border-t border-white/10 bg-white px-6 py-20 text-slate-900 md:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-teal">
                Ready when you are
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-tight">
                Send the photos and captions, and I’ll turn this into a real project gallery.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                I can help with layout polish, card styling, consistent caption formatting, section order, and a more premium overall look.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                'Upload project photos to the app or share the filenames.',
                'Add a 1–2 sentence caption for each project.',
                'Optionally include location, project type, or client category.',
                'I will format everything into a stronger portfolio presentation.',
              ].map((step, index) => (
                <div key={step} className="border border-slate-200 bg-slate-50 p-5">
                  <div className="text-sm font-black uppercase tracking-[0.2em] text-brand-orange">
                    Step 0{index + 1}
                  </div>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
