import { motion } from 'framer-motion'
import { ArrowRight, Phone, Sparkles } from 'lucide-react'
import { CLIENT } from '../constants'

const ease = [0.16, 1, 0.3, 1] as const

export function CTA() {
  return (
    <section className="relative py-20 md:py-28 px-5 md:px-12 overflow-hidden">
      {/* Background image com overlay forte */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=1600&q=80"
          alt=""
          aria-hidden
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0a06] via-[#0f0a06]/95 to-[#0f0a06]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a06] via-transparent to-[#0f0a06]/50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: CTA Pitch */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="text-orange-400 text-sm font-semibold uppercase tracking-[.2em] mb-5"
            >
              Seu pet está esperando
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.65, ease, delay: 0.05 }}
              className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold text-cream leading-[1.0] mb-6"
            >
              Quanto tempo faz
              <br />
              que ele não recebe
              <br />
              <em className="text-warm-gradient not-italic">atenção especial?</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, ease, delay: 0.15 }}
              className="text-cream/60 text-base md:text-lg leading-relaxed mb-10 max-w-lg"
            >
              Um banho completo, uma consulta preventiva, uma ração de verdade — pequenos cuidados que fazem toda a diferença na saúde e na felicidade do seu animal.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, ease, delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={CLIENT.whatsapp}
                target="_blank" rel="noopener noreferrer"
                className="btn-warm inline-flex items-center justify-center gap-2.5 text-white font-bold px-8 py-4 rounded-2xl text-base"
              >
                Agendar agora
                <ArrowRight size={18} />
              </a>
              <a
                href={`tel:${CLIENT.phone.replace(/\D/g, '')}`}
                className="glass-warm inline-flex items-center justify-center gap-2.5 text-cream/80 hover:text-cream font-semibold px-8 py-4 rounded-2xl text-base transition-colors"
              >
                <Phone size={16} className="text-orange-400" />
                {CLIENT.phone}
              </a>
            </motion.div>
          </div>

          {/* Right Column: Guarantees / Differences Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="lg:col-span-5 glass-warm rounded-3xl p-6 md:p-8 border border-orange-500/15 relative overflow-hidden bg-[#17100b]/60 backdrop-blur-xl"
          >
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <h3 className="font-display text-xl font-bold text-cream mb-6 flex items-center gap-2">
              <Sparkles size={18} className="text-orange-400" /> Por que a Pet World?
            </h3>

            <ul className="space-y-5">
              {[
                { title: 'Sem Estresse de Espera', desc: 'Agendamento rigoroso com hora marcada e acomodações confortáveis para o seu pet.' },
                { title: 'Cosméticos de Alta Qualidade', desc: 'Shampoos importados e hipoalergênicos, adequados para peles sensíveis.' },
                { title: 'Profissionais Qualificados', desc: 'Equipe especializada e com paciência para lidar com pets de todos os portes e idades.' },
                { title: 'Acompanhamento do Dono', desc: 'Se você preferir, enviamos fotos e atualizações durante todo o atendimento.' }
              ].map((g, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-cream text-sm font-semibold">{g.title}</h4>
                    <p className="text-cream/50 text-xs mt-0.5 leading-relaxed">{g.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
