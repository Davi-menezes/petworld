import { motion } from 'framer-motion'

// All URLs verified 200 — only pets
const PHOTOS = [
  { src: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80', alt: 'Cachorro feliz', tall: true },
  { src: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=800&q=80', alt: 'Golden retriever', tall: false },
  { src: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&q=80', alt: 'Labrador fofo', tall: false },
  { src: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&q=80', alt: 'Gato curioso', tall: true },
  { src: 'https://images.unsplash.com/photo-1535930749574-1399327ce78f?w=800&q=80', alt: 'Cachorro sorrindo', tall: false },
  { src: 'https://images.unsplash.com/photo-1615751072497-5f5169febe17?w=800&q=80', alt: 'Filhote dormindo', tall: false },
]

export function Gallery() {
  return (
    <section className="py-16 md:py-20 px-5 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-[.2em] mb-4">Nossos clientes</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold text-cream">
            Pets felizes por{' '}
            <em className="text-warm-gradient not-italic">aqui. 🐾</em>
          </h2>
        </motion.div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {PHOTOS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="break-inside-avoid overflow-hidden rounded-2xl group relative cursor-pointer"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${p.tall ? 'aspect-[3/4]' : 'aspect-square'}`}
              />
              {/* Subtle hover overlay with caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-cream text-xs font-semibold tracking-wider uppercase bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 px-2.5 py-1 rounded-lg">
                  {p.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
