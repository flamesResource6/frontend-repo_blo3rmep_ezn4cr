import { useMemo } from 'react'

const PHONE_PRIMARY = '+919704380923'
const RESORT_NAME = 'Palm Beach Resort'
const LOCATION = 'Mandarmoni, West Bengal'

function Icon({ name, className = '' }) {
  const paths = {
    phone: 'M2 3.5A1.5 1.5 0 0 1 3.5 2h2A1.5 1.5 0 0 1 7 3.5v1A1.5 1.5 0 0 1 5.5 6H5a9 9 0 0 0 9 9v-.5A1.5 1.5 0 0 1 15.5 13h1A1.5 1.5 0 0 1 18 14.5v2A1.5 1.5 0 0 1 16.5 18H16C8.82 18 3 12.18 3 5V4.5A1.5 1.5 0 0 1 4.5 3h0',
    map: 'M9.5 3.5 6 2 2 3.5v13L6 15l3.5 1.5L14 15l4 1.5v-13L14 2l-4.5 1.5v13',
    star: 'M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
    waves: 'M2 12s2-2 5-2 5 2 8 2 5-2 5-2M2 18s2-2 5-2 5 2 8 2 5-2 5-2M2 6s2-2 5-2 5 2 8 2 5-2 5-2',
    check: 'M20 6 9 17l-5-5',
    camera: 'M21 19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3l2-2h4l2 2h3a2 2 0 0 1 2 2zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  }
  return (
    <svg className={`w-5 h-5 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={paths[name]} />
    </svg>
  )
}

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 border-b border-white/30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white font-bold">PB</div>
          <div>
            <p className="font-semibold text-gray-900 leading-tight">{RESORT_NAME}</p>
            <p className="text-xs text-gray-600">{LOCATION}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href={`tel:${PHONE_PRIMARY}`} className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
            <Icon name="phone" /> Call Now
          </a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  const background = useMemo(() => (
    'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2000&auto=format&fit=crop'
  ), [])

  return (
    <section className="relative min-h-[90vh] flex items-center">
      <img src={background} alt="Beachfront resort" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      <div className="relative max-w-6xl mx-auto px-4 py-24 w-full">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur border border-white/20 mb-4">
            <Icon name="waves" className="text-cyan-200" />
            <span className="text-sm">Beachside resort with instant beach access</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight">{RESORT_NAME}</h1>
          <p className="mt-4 text-lg sm:text-xl text-white/90">Escape to the golden shores of {LOCATION}. Wake up to waves, walk straight onto the beach, and unwind under endless skies.</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={`tel:${PHONE_PRIMARY}`} className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition">
              <Icon name="phone" /> Book by Phone
            </a>
            <a href={`https://wa.me/${PHONE_PRIMARY.replace('+','')}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/30 transition">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm">Scroll to explore</div>
    </section>
  )
}

function Highlights() {
  const features = [
    { icon: 'waves', title: 'Instant Beach Access', desc: 'Step out and feel the sand between your toes in seconds.' },
    { icon: 'star', title: 'Sea-view Rooms', desc: 'Wake up to panoramic views of the Bay of Bengal.' },
    { icon: 'check', title: 'Local Seafood', desc: 'Fresh, delicious meals inspired by coastal flavors.' },
    { icon: 'map', title: 'Prime Location', desc: 'Situated in the heart of Mandarmoni beach stretch.' },
  ]
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900">Why stay with us</h2>
        <p className="mt-2 text-gray-600">Everything you want for a relaxed seaside getaway.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-xl border bg-white/70 hover:shadow-lg transition">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <Icon name={f.icon} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Rooms() {
  const rooms = [
    {
      name: 'Deluxe Sea View',
      img: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d95?q=80&w=1600&auto=format&fit=crop',
      perks: ['Balcony', 'King Bed', 'Air Conditioning']
    },
    {
      name: 'Family Suite',
      img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop',
      perks: ['Two Bedrooms', 'Garden Access', 'Breakfast']
    },
    {
      name: 'Cozy Standard',
      img: 'https://images.unsplash.com/photo-1552324190-9e86fa095c4a?q=80&w=1600&auto=format&fit=crop',
      perks: ['Queen Bed', 'Smart TV', '24/7 Power']
    },
  ]
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Rooms & Suites</h2>
            <p className="mt-2 text-gray-600">Comfort meets coastal charm. Choose what suits you best.</p>
          </div>
          <a href={`tel:${PHONE_PRIMARY}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
            <Icon name="phone" /> Enquire Availability
          </a>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {rooms.map((r) => (
            <div key={r.name} className="group rounded-xl overflow-hidden bg-white border hover:shadow-xl transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={r.img} alt={r.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{r.name}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {r.perks.map(p => (
                    <span key={p} className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                      <Icon name="check" /> {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const photos = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1470214203634-e436a8848e23?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1200&auto=format&fit=crop',
  ]
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900">Gallery</h2>
        <p className="mt-2 text-gray-600">A glimpse of sunny days and starlit nights by the sea.</p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
          {photos.map((src, i) => (
            <div key={i} className={`overflow-hidden rounded-lg ${i % 5 === 0 ? 'col-span-2 row-span-2' : ''}`}>
              <img src={src} alt={`Resort ${i+1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LocationMap() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Find us in Mandarmoni</h2>
            <p className="mt-2 text-gray-600">We are located right on the beachfront. Reach out for directions or local travel tips.</p>
            <div className="mt-6 space-y-2 text-gray-700">
              <p className="flex items-center gap-2"><Icon name="map" className="text-blue-600" /> {LOCATION}</p>
              <a href={`tel:${PHONE_PRIMARY}`} className="flex items-center gap-2 text-blue-600 hover:underline">
                <Icon name="phone" className="text-blue-600" /> {PHONE_PRIMARY}
              </a>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border bg-white">
            <iframe
              title="Google Map - Mandarmoni"
              src="https://www.google.com/maps?q=Mandarmani%2C%20West%20Bengal&output=embed"
              className="w-full h-[320px] md:h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <p className="font-semibold">{RESORT_NAME}</p>
          <p className="text-sm text-gray-400">{LOCATION}</p>
          <p className="mt-3 text-sm text-gray-400">Beachside resort with instant beach access.</p>
        </div>
        <div>
          <p className="font-semibold">Contact</p>
          <a href={`tel:${PHONE_PRIMARY}`} className="mt-2 block hover:underline">{PHONE_PRIMARY}</a>
          <a href={`https://wa.me/${PHONE_PRIMARY.replace('+','')}`} target="_blank" rel="noreferrer" className="mt-1 block hover:underline">WhatsApp</a>
        </div>
        <div>
          <p className="font-semibold">Quick Links</p>
          <a href="#rooms" className="mt-2 block text-gray-400 hover:text-white">Rooms</a>
          <a href="#gallery" className="mt-1 block text-gray-400 hover:text-white">Gallery</a>
          <a href="#contact" className="mt-1 block text-gray-400 hover:text-white">Contact</a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-gray-400">
          © {new Date().getFullYear()} {RESORT_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <Hero />
        <Highlights />
        <Rooms />
        <Gallery />
        <LocationMap />
      </main>
      <Footer />
    </div>
  )
}
