import { motion } from 'framer-motion'
import { CLIENT } from '../constants'

const ease = [0.16, 1, 0.3, 1] as const

export function About() {
  return (
    <section id="sobre" className="relative py-20 md:py-28 px-5 md:px-12 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Image — aparece abaixo do texto em mobile */}
        <motion.div
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, ease }}
          className="relative h-72 sm:h-96 md:h-[480px] order-2 md:order-1"
        >
          <img
            src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=700&q=80"
            alt="Pet feliz"
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a06]/60 to-transparent rounded-3xl" />

          {/* Floating info pill */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-6 left-6 right-6 glass-warm rounded-2xl p-5 flex items-center gap-4 border border-orange-500/20 bg-[#17100b]/80 backdrop-blur-xl"
          >
            <div className="text-4xl">🏆</div>
            <div>
              <p className="text-cream font-bold text-sm">Referência em Porto Velho</p>
              <p className="text-cream/50 text-xs mt-0.5">Mais de 10 anos cuidando com amor</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="order-1 md:order-2"
        >
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-[.2em] mb-4">Quem somos</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold text-cream leading-[1.0] mb-6">
            Uma família
            <br />
            <em className="text-warm-gradient not-italic">que ama pets.</em>
          </h2>
          <p className="text-cream/60 text-base leading-relaxed mb-5">
            Nascemos em Porto Velho com um propósito simples: oferecer o mesmo cuidado que você daria ao seu pet. Não somos apenas um pet shop — somos parceiros de quem ama animais.
          </p>
          <p className="text-cream/60 text-base leading-relaxed mb-10">
            Nossa equipe é formada por profissionais apaixonados, treinados para tratar cada bichinho com paciência, carinho e técnica. Do banho ao veterinário, tudo pensado para o bem-estar do seu animal.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-10">
            {[['10+', 'anos'], ['3k+', 'pets'], ['5★', 'Google']].map(([v, l]) => (
              <div key={l} className="glass-warm rounded-2xl p-4 text-center border border-orange-500/10">
                <div className="font-display text-2xl font-bold text-warm-gradient">{v}</div>
                <div className="text-cream/40 text-xs mt-1">{l}</div>
              </div>
            ))}
          </div>

          <a
            href={CLIENT.whatsapp}
            target="_blank" rel="noopener noreferrer"
            className="btn-warm inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-2xl"
          >
            📱 Fale com a gente
          </a>
        </motion.div>

      </div>
    </section>
  )
}
