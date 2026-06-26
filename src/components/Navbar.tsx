import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { CLIENT } from '../constants'

const LINKS = [['Serviços', '#serviços'], ['Sobre', '#sobre'], ['Contato', '#contato']] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [showBanner, setShowBanner] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 flex flex-col backdrop-blur-md transition-all duration-300 border-b ${
          scrolled 
            ? 'bg-[#0f0a06]/95 border-orange-500/10 shadow-lg shadow-black/40' 
            : 'bg-[#0f0a06]/40 border-white/5'
        }`}
      >
        {/* Banner de anúncio */}
        <AnimatePresence>
          {showBanner && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600 text-white text-xs font-semibold py-2.5 px-4 pr-10 relative text-center w-full overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                <span className="hidden sm:inline">🎁</span>
                <span>
                  <strong>Primeira vez?</strong> Use o cupom <span className="bg-white/20 px-1.5 py-0.5 rounded font-mono text-[10px]">MEUPET10</span> e ganhe 10% OFF!
                </span>
                <a
                  href={CLIENT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-orange-100 font-bold ml-1 inline-flex items-center gap-0.5"
                >
                  Agendar →
                </a>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setShowBanner(false)
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Fechar aviso"
              >
                <X size={14} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Navbar Row */}
        <div className={`flex items-center justify-between px-5 md:px-12 w-full transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}>
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-xl leading-none shrink-0">🐾</span>
            <span className="font-display font-bold text-lg text-cream truncate">Pet World</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-cream/40">
            {LINKS.map(([label, href]) => (
              <a key={href} href={href} className="hover:text-cream transition-colors">{label}</a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={CLIENT.whatsapp}
              target="_blank" rel="noopener noreferrer"
              className="btn-warm text-white text-sm font-bold px-4 py-2.5 rounded-xl whitespace-nowrap"
            >
              <span className="hidden sm:inline">Agendar agora </span>🐶
            </a>
            <button
              onClick={() => setOpen(o => !o)}
              className="md:hidden glass-warm p-2 rounded-lg text-cream/60"
              aria-label="Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer inside header flow */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full bg-[#0f0a06]/95 border-t border-orange-900/30 px-5 py-4 flex flex-col gap-1 md:hidden overflow-hidden"
            >
              {LINKS.map(([label, href]) => (
                <a
                  key={href} href={href}
                  onClick={() => setOpen(false)}
                  className="text-cream/70 hover:text-cream text-base py-3 border-b border-white/5 last:border-0 transition-colors"
                >
                  {label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
