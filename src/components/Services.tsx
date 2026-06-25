import { motion } from 'framer-motion'
import { SERVICES, CLIENT } from '../constants'

const ease = [0.16, 1, 0.3, 1] as const

// Free Unsplash images — relevant per service
const PHOTOS: Record<string, string> = {
  'banho-tosa': 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=600&q=80', // dog grooming
  'racao':      'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=600&q=80',
  'vet':        'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=600&q=80',
}

export function Services() {
  return (
    <section id="serviços" className="relative py-20 md:py-28 px-5 md:px-12 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-[.2em] mb-4">O que fazemos</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold text-cream leading-tight">
            Cuidado completo,{' '}
            <em className="text-warm-gradient not-italic">com carinho.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`group glass-warm rounded-3xl overflow-hidden border ${s.border} flex flex-col`}
            >
              {/* Photo */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={PHOTOS[s.id]}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a06] to-transparent" />
                <span className={`absolute top-4 left-4 ${s.tag} bg-black/40 backdrop-blur-sm border border-white/10 text-xs font-semibold px-3 py-1 rounded-full`}>
                  {s.badge}
                </span>
              </div>

              {/* Body */}
              <div className="p-7 flex flex-col flex-1">
                <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl`} />
                <h3 className="font-display text-2xl font-bold text-cream mb-3">{s.title}</h3>
                <p className="text-cream/50 text-sm leading-relaxed flex-1">{s.description}</p>
                <a
                  href={CLIENT.whatsapp}
                  target="_blank" rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-300 hover:text-orange-200 transition-colors"
                >
                  Agendar agora →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
