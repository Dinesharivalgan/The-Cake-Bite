// components/Navbar.jsx
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiShoppingBag, FiMenu, FiX, FiChevronDown } from 'react-icons/fi'
import logo from '../assets/logo.png'

const NAV_LINKS = [
  { label: 'Home',    href: '#home' },
  { label: 'Cakes',  href: '#cakes' },
  { label: 'About',  href: '#about' },
  { label: 'Gallery',href: '#gallery' },
  { label: 'Contact',href: '#contact' },
]

const CLASSIC_BROWNIES = [
  { name: 'Dark Traffle Brownie',   price: '₹80' },
  { name: 'White Traffle Brownie',  price: '₹90' },
  { name: 'Milk Traffle Brownie',   price: '₹90' },
  { name: 'Double Choco Brownie',   price: '₹100' },
  { name: 'Triple Choco Brownie',   price: '₹100' },
  { name: 'Mutrella Brownie',       price: '₹100' },
]

const LOADED_BROWNIES = [
  { name: 'Dark Traffle Loaded Brownie',  price: '₹120' },
  { name: 'White Traffle Loaded Brownie', price: '₹130' },
  { name: 'Brownie with Ice Cream',       price: '₹130' },
  { name: 'Milk Truffle Loaded Brownie',  price: '₹140' },
  { name: 'Double Choco Loaded Brownie',  price: '₹150' },
  { name: 'Triple Choco Loaded Brownie',  price: '₹150' },
  { name: 'Mutrella Loaded Brownie',      price: '₹150' },
]

function BrownieDropdown({ onClose }) {
  const whatsappMsg = (name, price) =>
    encodeURIComponent(`Hi! I'd like to order a ${name} (${price}) from The Cake Bite 🍫`)

  return (
    <motion.div
      className="brownie-dropdown"
      initial={{ opacity: 0, y: -12, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.97 }}
      transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Glow accent */}
      <div className="brownie-dropdown-glow" />

      <div className="brownie-dropdown-header">
        🍫 Brownie Menu
      </div>

      <div className="brownie-dropdown-cols">
        {/* Classic */}
        <div className="brownie-col">
          <div className="brownie-col-title">🎖️ Classic Brownies</div>
          {CLASSIC_BROWNIES.map((b) => (
            <a
              key={b.name}
              href={`https://wa.me/918072411032?text=${whatsappMsg(b.name, b.price)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="brownie-row"
              onClick={onClose}
            >
              <span className="brownie-row-name">{b.name}</span>
              <span className="brownie-row-price">{b.price}</span>
            </a>
          ))}
        </div>

        {/* Loaded */}
        <div className="brownie-col">
          <div className="brownie-col-title">🔥 Loaded Brownies</div>
          {LOADED_BROWNIES.map((b) => (
            <a
              key={b.name}
              href={`https://wa.me/918072411032?text=${whatsappMsg(b.name, b.price)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="brownie-row"
              onClick={onClose}
            >
              <span className="brownie-row-name">{b.name}</span>
              <span className="brownie-row-price">{b.price}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="brownie-dropdown-footer">
        <a
          href="https://wa.me/918072411032?text=Hi!%20I'd%20like%20to%20order%20brownies%20from%20The%20Cake%20Bite%20%F0%9F%8D«"
          target="_blank"
          rel="noopener noreferrer"
          className="brownie-order-all"
          onClick={onClose}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.122 1.526 5.854L0 24l6.306-1.504A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.001-1.369l-.36-.213-3.727.888.924-3.618-.234-.372A9.818 9.818 0 0112 2.182c5.423 0 9.818 4.395 9.818 9.818s-4.395 9.818-9.818 9.818z"/>
          </svg>
          Order on WhatsApp
        </a>
      </div>
    </motion.div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false)
  const [menuOpen, setMenuOpen]       = useState(false)
  const [brownieOpen, setBrownieOpen] = useState(false)
  const brownieRef                    = useRef(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (brownieRef.current && !brownieRef.current.contains(e.target)) {
        setBrownieOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const scrollTo = (href) => {
    setMenuOpen(false)
    setBrownieOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        className={`navbar${scrolled ? ' scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Logo */}
        <motion.a
          href="#home"
          className="navbar-logo-wrap"
          onClick={(e) => { e.preventDefault(); scrollTo('#home') }}
          whileHover={{ scale: 1.02 }}
        >
          <img src={logo} alt="The Cake Bite Logo" className="navbar-logo-img" />
          <div className="navbar-logo-text">
            <span className="navbar-logo-name">The Cake Bite</span>
          </div>
        </motion.a>

        {/* Desktop links */}
        <div className="navbar-links">
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.07 }}
            >
              {link.label}
            </motion.a>
          ))}

          {/* Brownies dropdown trigger */}
          <motion.div
            ref={brownieRef}
            className="brownie-nav-wrap"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <button
              className={`brownie-nav-btn${brownieOpen ? ' active' : ''}`}
              onClick={() => setBrownieOpen((v) => !v)}
              aria-expanded={brownieOpen}
            >
              🍫 Brownies
              <FiChevronDown
                size={13}
                style={{
                  transition: 'transform 0.28s ease',
                  transform: brownieOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </button>

            <AnimatePresence>
              {brownieOpen && (
                <BrownieDropdown onClose={() => setBrownieOpen(false)} />
              )}
            </AnimatePresence>
          </motion.div>

          <motion.button
            className="btn-order-nav"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('#contact')}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <FiShoppingBag size={14} />
            Order Now
          </motion.button>
        </div>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--gold)', display: 'flex', alignItems: 'center' }}
        >
          {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, clipPath: 'circle(0% at 95% 3%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 95% 3%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 95% 3%)' }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.12 + i * 0.07 }}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
              >
                {link.label}
              </motion.a>
            ))}

            {/* Mobile brownie link */}
            <motion.a
              href="#brownies"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.47 }}
              onClick={(e) => {
                e.preventDefault()
                setMenuOpen(false)
                setBrownieOpen(false)
                const el = document.querySelector('#brownies-section')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              style={{ color: 'var(--gold-bright)' }}
            >
              🍫 Brownies
            </motion.a>

            <motion.button
              className="btn-primary"
              style={{ marginTop: 12, gap: 8 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              onClick={() => scrollTo('#contact')}
            >
              <FiShoppingBag size={15} /> Order Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}