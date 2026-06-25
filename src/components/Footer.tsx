import { CLIENT } from '../constants'

export function Footer() {
  return (
    <footer className="border-t border-orange-900/20 py-8 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🐾</span>
          <span className="font-display font-bold text-cream/70">Pet World</span>
        </div>
        <p className="text-cream/20 text-xs text-center">
          © {new Date().getFullYear()} Pet World · Porto Velho, RO · Feito com ❤️ para os pets
        </p>
        <a href={CLIENT.whatsapp} target="_blank" rel="noopener noreferrer"
           className="text-orange-400 hover:text-orange-300 text-xs transition-colors">
          Agendar →
        </a>
      </div>
    </footer>
  )
}
