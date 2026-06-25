import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Sparkles, Check, ArrowRight } from 'lucide-react'

type PetType = 'dog' | 'cat'
type PetSize = 'small' | 'medium' | 'large'
type ServiceType = 'banho' | 'tosa' | 'vet'

interface PriceEstimate {
  range: string
  time: string
  benefits: string[]
}

const ESTIMATES: Record<PetType, Record<ServiceType, Record<PetSize, PriceEstimate>>> = {
  dog: {
    banho: {
      small: { range: 'R$ 55 - R$ 65', time: '40 min', benefits: ['Shampoo Neutro Premium', 'Secagem Turbo', 'Corte de unhas', 'Limpeza de ouvidos'] },
      medium: { range: 'R$ 70 - R$ 85', time: '60 min', benefits: ['Shampoo Neutro Premium', 'Secagem Turbo', 'Corte de unhas', 'Limpeza de ouvidos'] },
      large: { range: 'R$ 95 - R$ 130', time: '90 min', benefits: ['Shampoo Especial', 'Secagem e Escovação', 'Corte de unhas', 'Limpeza de ouvidos'] },
    },
    tosa: {
      small: { range: 'R$ 85 - R$ 105', time: '90 min', benefits: ['Banho Completo', 'Tosa Higiênica + Geral', 'Hidratação de Pelagem', 'Perfume importado'] },
      medium: { range: 'R$ 105 - R$ 135', time: '120 min', benefits: ['Banho Completo', 'Tosa Geral (Máquina/Tesoura)', 'Hidratação de Pelagem', 'Perfume importado'] },
      large: { range: 'R$ 145 - R$ 195', time: '150 min', benefits: ['Banho Completo', 'Tosa Geral', 'Escovação de subpelo', 'Tratamento de pelagem'] },
    },
    vet: {
      small: { range: 'R$ 120 (Consulta)', time: '30-40 min', benefits: ['Avaliação Geral de Saúde', 'Exame físico completo', 'Orientação de vacinas'] },
      medium: { range: 'R$ 120 (Consulta)', time: '30-40 min', benefits: ['Avaliação Geral de Saúde', 'Exame físico completo', 'Orientação de vacinas'] },
      large: { range: 'R$ 120 (Consulta)', time: '30-40 min', benefits: ['Avaliação Geral de Saúde', 'Exame físico completo', 'Orientação de vacinas'] },
    }
  },
  cat: {
    banho: {
      small: { range: 'R$ 75 - R$ 95', time: '50 min', benefits: ['Shampoo Cat-Friendly', 'Secagem Ultra Silenciosa', 'Corte de unhas'] },
      medium: { range: 'R$ 75 - R$ 95', time: '50 min', benefits: ['Shampoo Cat-Friendly', 'Secagem Ultra Silenciosa', 'Corte de unhas'] },
      large: { range: 'R$ 95 - R$ 115', time: '70 min', benefits: ['Shampoo Cat-Friendly', 'Secagem Ultra Silenciosa', 'Corte de unhas'] },
    },
    tosa: {
      small: { range: 'R$ 115 - R$ 135', time: '90 min', benefits: ['Banho Relaxante', 'Tosa Higiênica/Geral', 'Corte de unhas', 'Limpeza de ouvidos'] },
      medium: { range: 'R$ 115 - R$ 135', time: '90 min', benefits: ['Banho Relaxante', 'Tosa Higiênica/Geral', 'Corte de unhas', 'Limpeza de ouvidos'] },
      large: { range: 'R$ 135 - R$ 165', time: '110 min', benefits: ['Banho Relaxante', 'Tosa Geral', 'Corte de unhas', 'Limpeza de ouvidos'] },
    },
    vet: {
      small: { range: 'R$ 120 (Consulta)', time: '30-40 min', benefits: ['Consulta especializada felinos', 'Avaliação de estresse', 'Exame físico completo'] },
      medium: { range: 'R$ 120 (Consulta)', time: '30-40 min', benefits: ['Consulta especializada felinos', 'Avaliação de estresse', 'Exame físico completo'] },
      large: { range: 'R$ 120 (Consulta)', time: '30-40 min', benefits: ['Consulta especializada felinos', 'Avaliação de estresse', 'Exame físico completo'] },
    }
  }
}

export function QuickBook() {
  const [petType, setPetType] = useState<PetType>('dog')
  const [petSize, setPetSize] = useState<PetSize>('small')
  const [serviceType, setServiceType] = useState<ServiceType>('banho')

  const currentEstimate = ESTIMATES[petType][serviceType][petSize]

  const generateWhatsAppLink = () => {
    const petName = petType === 'dog' ? 'Cachorro' : 'Gato'
    const sizeName = petSize === 'small' ? 'Pequeno' : petSize === 'medium' ? 'Médio' : 'Grande'
    const serviceName = serviceType === 'banho' ? 'Banho Completo' : serviceType === 'tosa' ? 'Banho & Tosa' : 'Consulta Veterinária'
    const text = `Olá! Usei o simulador do site e gostaria de agendar um serviço para meu pet:
🐾 Pet: ${petName} (Porte ${sizeName})
🧼 Serviço: ${serviceName}
🎁 Cupom: MEUPET10 (10% OFF no primeiro agendamento)

Poderiam verificar os horários disponíveis?`
    return `https://wa.me/5569992114611?text=${encodeURIComponent(text)}`
  }

  return (
    <div className="glass-warm rounded-3xl p-6 border border-orange-500/25 shadow-2xl relative overflow-hidden flex flex-col gap-5 w-full bg-[#17100b]/80 backdrop-blur-xl">
      {/* Decorative top glow */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/5 pb-4">
        <div>
          <span className="inline-flex items-center gap-1 bg-orange-500/10 text-orange-400 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-1">
            <Sparkles size={10} /> Primeira Visita
          </span>
          <h3 className="font-display text-xl font-bold text-cream">Agendamento Rápido</h3>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-cream/40 uppercase tracking-widest leading-none">Ganhe</p>
          <p className="text-lg font-bold text-warm-gradient">10% OFF</p>
        </div>
      </div>

      {/* 1. Seleção do Pet */}
      <div>
        <label className="text-cream/50 text-[11px] font-semibold uppercase tracking-wider block mb-2">1. Tipo do Pet</label>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setPetType('dog')}
            className={`py-3 px-4 rounded-xl flex items-center justify-center gap-2 border text-sm font-semibold transition-all ${
              petType === 'dog'
                ? 'bg-orange-500/15 border-orange-500/40 text-orange-300'
                : 'bg-white/5 border-transparent text-cream/60 hover:bg-white/10 hover:text-cream'
            }`}
          >
            <span>🐶</span> Cão
          </button>
          <button
            onClick={() => setPetType('cat')}
            className={`py-3 px-4 rounded-xl flex items-center justify-center gap-2 border text-sm font-semibold transition-all ${
              petType === 'cat'
                ? 'bg-orange-500/15 border-orange-500/40 text-orange-300'
                : 'bg-white/5 border-transparent text-cream/60 hover:bg-white/10 hover:text-cream'
            }`}
          >
            <span>🐱</span> Gato
          </button>
        </div>
      </div>

      {/* 2. Seleção do Porte */}
      <div>
        <label className="text-cream/50 text-[11px] font-semibold uppercase tracking-wider block mb-2">2. Porte / Tamanho</label>
        <div className="grid grid-cols-3 gap-2">
          {(['small', 'medium', 'large'] as PetSize[]).map((size) => {
            const label = size === 'small' ? 'P' : size === 'medium' ? 'M' : 'G'
            const desc = size === 'small' ? 'Até 10kg' : size === 'medium' ? '10-25kg' : '25kg+'
            return (
              <button
                key={size}
                onClick={() => setPetSize(size)}
                className={`py-2 px-1 rounded-xl flex flex-col items-center justify-center border text-center transition-all ${
                  petSize === size
                    ? 'bg-orange-500/15 border-orange-500/40 text-orange-300'
                    : 'bg-white/5 border-transparent text-cream/60 hover:bg-white/10 hover:text-cream'
                }`}
              >
                <span className="text-sm font-bold">{label}</span>
                <span className="text-[9px] opacity-60 mt-0.5">{desc}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* 3. Seleção do Serviço */}
      <div>
        <label className="text-cream/50 text-[11px] font-semibold uppercase tracking-wider block mb-2">3. Serviço</label>
        <div className="grid grid-cols-3 gap-2">
          {(['banho', 'tosa', 'vet'] as ServiceType[]).map((service) => {
            const label = service === 'banho' ? 'Banho' : service === 'tosa' ? 'Tosa' : 'Consulta'
            const emoji = service === 'banho' ? '🧼' : service === 'tosa' ? '✂️' : '🩺'
            return (
              <button
                key={service}
                onClick={() => setServiceType(service)}
                className={`py-2.5 px-1 rounded-xl flex flex-col items-center justify-center border text-center transition-all ${
                  serviceType === service
                    ? 'bg-orange-500/15 border-orange-500/40 text-orange-300'
                    : 'bg-white/5 border-transparent text-cream/60 hover:bg-white/10 hover:text-cream'
                }`}
              >
                <span className="text-lg mb-0.5">{emoji}</span>
                <span className="text-xs font-semibold">{label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Estimate Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${petType}-${petSize}-${serviceType}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="bg-black/30 border border-white/5 rounded-2xl p-4 flex flex-col gap-3 flex-1"
        >
          <div className="flex items-baseline justify-between">
            <span className="text-xs text-cream/40 font-medium">Estimativa:</span>
            <span className="text-lg font-bold text-cream">{currentEstimate.range}</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-orange-300">
            <Calendar size={12} />
            <span>Duração média: ~{currentEstimate.time}</span>
          </div>

          {/* Benefits List */}
          <div className="border-t border-white/5 pt-2 mt-1 space-y-1.5">
            {currentEstimate.benefits.map((b, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-cream/60">
                <Check size={12} className="text-green-400 shrink-0" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Booking CTA Button */}
      <a
        href={generateWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-warm text-white font-bold py-3.5 px-6 rounded-2xl text-center flex items-center justify-center gap-2 group/btn relative overflow-hidden transition-all duration-300 hover:scale-[1.02]"
      >
        <span className="relative z-10 flex items-center gap-2 text-sm md:text-base">
          Reservar Horário com Desconto
          <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
        </span>
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-300 opacity-0 group-hover/btn:opacity-20 transition-opacity" />
      </a>
      <p className="text-[10px] text-cream/30 text-center leading-none">
        *Preços finais dependem da avaliação presencial do pet.
      </p>
    </div>
  )
}
