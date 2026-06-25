import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1] as const

const REVIEWS = [
  {
    name: 'Mariana S.',
    pet: 'tutora da Mel 🐶',
    avatar: 'M',
    text: 'Minha cachorra sai de lá cheirosa e super feliz! A equipe é carinhosa demais, trato a Mel como se fosse da família deles. Não troco por nada!',
    stars: 5,
  },
  {
    name: 'Carlos F.',
    pet: 'tutor do Thor 🐕',
    avatar: 'C',
    text: 'Atendimento veterinário excepcional. O doutor explicou tudo com clareza, sem pressa. O Thor se sentiu à vontade desde o primeiro minuto.',
    stars: 5,
  },
  {
    name: 'Juliana M.',
    pet: 'tutora da Luna 🐱',
    avatar: 'J',
    text: 'Compro ração aqui há anos. Sempre têm a marca que eu preciso, preço justo e o pessoal ainda dá dicas de nutrição. Recomendo muito!',
    stars: 5,
  },
  {
    name: 'Ricardo A.',
    pet: 'tutor do Bob 🐶',
    avatar: 'R',
    text: 'Levei o Bob para a tosa e ficou lindo! Agendamento pelo WhatsApp é super prático, atenderam rápido. Com certeza voltarei sempre.',
    stars: 5,
  },
] as const

const COLORS = [
  'from-amber-500/15 to-orange-500/5 border-amber-500/20',
  'from-orange-500/15 to-rose-500/5 border-orange-500/20',
  'from-rose-500/15 to-amber-500/5 border-rose-400/20',
  'from-amber-500/10 to-orange-500/5 border-amber-500/15',
]

export function Testimonials() {
  return (
    <section className="relative py-20 md:py-28 px-5 md:px-12 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-600/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-[.2em] mb-4">Depoimentos</p>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-bold text-cream leading-tight">
            O que nossos clientes{' '}
            <em className="text-warm-gradient not-italic">dizem.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease, delay: i * 0.1 }}
              className={`glass-warm rounded-3xl p-7 flex flex-col gap-5 border bg-gradient-to-br ${COLORS[i]}`}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(r.stars)].map((_, s) => (
                  <Star key={s} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-cream/75 text-sm leading-relaxed flex-1">"{r.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/[0.07]">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {r.avatar}
                </div>
                <div>
                  <p className="text-cream text-sm font-semibold">{r.name}</p>
                  <p className="text-cream/40 text-xs">{r.pet}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
