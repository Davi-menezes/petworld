import { motion } from 'framer-motion'
import { CLIENT, STATS } from '../constants'
import { QuickBook } from './QuickBook'

const ease = [0.16, 1, 0.3, 1] as const

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 pt-28 px-5 md:px-12 overflow-hidden">

      {/* ── Video background ── */}
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1600&q=80"
      >
        {/* Pexels free stock — dog grooming / happy pets */}
        <source src="https://videos.pexels.com/video-files/3191954/3191954-uhd_2560_1440_25fps.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a06] via-[#0f0a06]/60 to-[#0f0a06]/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f0a06]/80 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Buttons */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease }}
              className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/25
                         text-orange-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 self-start"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              Porto Velho, RO — Desde 2014
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="font-display text-[clamp(2.8rem,7vw,5.5rem)] leading-[.95] font-bold text-cream mb-6"
            >
              Seu pet
              <br />
              <em className="text-warm-gradient not-italic">merece</em>
              <br />
              o melhor.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.3 }}
              className="text-cream/60 text-lg leading-relaxed mb-10 max-w-md"
            >
              Banho & tosa, ração e veterinário — tudo com o carinho que seu bichinho merece.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a href={CLIENT.whatsapp} target="_blank" rel="noopener noreferrer"
                 className="btn-warm text-white font-bold px-8 py-4 rounded-2xl text-base text-center">
                📱 Agendar pelo WhatsApp
              </a>
              <a href="#serviços"
                 className="glass-warm text-cream/70 hover:text-cream font-medium px-8 py-4 rounded-2xl text-base text-center transition-colors">
                Ver serviços ↓
              </a>
            </motion.div>
          </div>

          {/* Right Column: Calculator Widget */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="lg:col-span-5 w-full max-w-md mx-auto lg:mx-0"
          >
            <QuickBook />
          </motion.div>
          
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.55 }}
          className="flex flex-wrap gap-6 sm:gap-10 mt-14 pt-8 border-t border-white/10"
        >
          {STATS.map((s) => (
            <div key={s.label} className="flex items-baseline gap-2">
              <span className="font-display text-3xl font-bold text-warm-gradient">{s.value}</span>
              <span className="text-cream/40 text-sm">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
