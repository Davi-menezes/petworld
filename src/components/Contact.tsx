import { motion } from 'framer-motion'
import { MapPin, Phone } from 'lucide-react'
import { CLIENT } from '../constants'

const ease = [0.16, 1, 0.3, 1] as const

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Contact() {
  return (
    <section id="contato" className="relative py-20 md:py-28 px-5 md:px-12 overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-orange-900/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease }}
          >
            <p className="text-orange-400 text-sm font-semibold uppercase tracking-[.2em] mb-4">
              Venha nos visitar
            </p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold text-cream leading-tight mb-8">
              A gente fica{' '}
              <br />
              <em className="text-warm-gradient not-italic">esperando você.</em>
            </h2>

            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 glass-warm rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-orange-400" />
                </div>
                <div>
                  <p className="text-cream/30 text-xs uppercase tracking-widest mb-1">Endereço</p>
                  <p className="text-cream/70 text-sm leading-relaxed">{CLIENT.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 glass-warm rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-orange-400" />
                </div>
                <div>
                  <p className="text-cream/30 text-xs uppercase tracking-widest mb-1">WhatsApp</p>
                  <a href={`tel:${CLIENT.phone.replace(/\D/g,'')}`}
                     className="text-cream/70 text-sm hover:text-cream transition-colors">
                    {CLIENT.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href={CLIENT.maps} target="_blank" rel="noopener noreferrer"
                 className="glass-warm hover:border-orange-500/40 text-cream/70 hover:text-cream
                            text-sm font-medium px-6 py-3.5 rounded-xl text-center transition-all flex items-center justify-center gap-2">
                🗺️ Como Chegar
              </a>
              <a href={CLIENT.instagram} target="_blank" rel="noopener noreferrer"
                 className="btn-warm text-white text-sm font-bold px-6 py-3.5 rounded-xl text-center flex items-center justify-center gap-2">
                <InstagramIcon /> {CLIENT.instagramHandle}
              </a>
            </div>
          </motion.div>

          {/* Right: CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="glass-warm rounded-3xl p-7 md:p-10 relative overflow-hidden border border-orange-500/15"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px]" />
            <div className="relative z-10 text-center">
              <div className="text-5xl md:text-7xl mb-5 select-none">🐾</div>
              <h3 className="font-display text-3xl font-bold text-cream mb-3">
                Agende hoje!
              </h3>
              <p className="text-cream/50 text-sm leading-relaxed mb-8 max-w-xs mx-auto">
                Seu pet merece atenção especial. Fale com a gente agora e já marque o horário.
              </p>
              <a
                href={CLIENT.whatsapp}
                target="_blank" rel="noopener noreferrer"
                className="btn-warm w-full flex items-center justify-center gap-2 text-white font-bold py-4 rounded-2xl text-base"
              >
                📱 Falar pelo WhatsApp
              </a>
              <p className="text-cream/25 text-xs mt-4">Resposta rápida garantida 🐶</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
