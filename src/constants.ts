export const CLIENT = {
  name: 'Pet World',
  tagline: 'Onde cada pet é tratado com amor',
  description: 'Em Porto Velho há mais de uma década cuidando dos seus melhores amigos.',
  address: 'R. Gonçalves Dias, 1210 — Porto Velho, RO',
  phone: '(69) 99211-4611',
  whatsapp: 'https://wa.me/5569992114611?text=Olá!%20Gostaria%20de%20agendar%20um%20serviço%20para%20meu%20pet.%20🐾',
  instagram: 'https://www.instagram.com/petworldpvh/',
  instagramHandle: '@petworldpvh',
  maps: 'https://www.google.com/maps/search/?api=1&query=Pet%20shop%20Pet%20World&query_place_id=ChIJH7hyT9FcMpIRrJLP7AM0vFw',
} as const

export const SERVICES = [
  {
    id: 'banho-tosa',
    pet: '🐶',
    title: 'Banho & Tosa',
    description: 'Seu cão ou gato cheiroso, limpo e feliz. Profissionais carinhosos e produtos de qualidade.',
    badge: 'Mais procurado',
    color: 'from-amber-500/20 to-orange-500/10',
    border: 'border-amber-500/20',
    tag: 'text-amber-400',
  },
  {
    id: 'racao',
    pet: '🐱',
    title: 'Loja de Ração',
    description: 'As melhores marcas para alimentar seu pet com saúde e amor, do filhote ao idoso.',
    badge: 'Maior variedade',
    color: 'from-orange-500/20 to-rose-500/10',
    border: 'border-orange-500/20',
    tag: 'text-orange-400',
  },
  {
    id: 'vet',
    pet: '🐾',
    title: 'Veterinário',
    description: 'Saúde preventiva e cuidados clínicos com veterinários que amam os animais tanto quanto você.',
    badge: 'Com agendamento',
    color: 'from-rose-500/20 to-amber-500/10',
    border: 'border-rose-400/20',
    tag: 'text-rose-400',
  },
] as const

export const STATS = [
  { value: '10+',  label: 'anos cuidando' },
  { value: '3k+',  label: 'pets atendidos' },
  { value: '5★',   label: 'no Google' },
] as const
