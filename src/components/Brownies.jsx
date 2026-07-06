// components/Brownies.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import brownieImg from '../assets/browinee.jpg'

const CLASSIC = [
  { name: 'Dark Traffle Brownie',   price: 80 },
  { name: 'White Traffle Brownie',  price: 90 },
  { name: 'Milk Traffle Brownie',   price: 90 },
  { name: 'Double Choco Brownie',   price: 100 },
  { name: 'Triple Choco Brownie',   price: 100 },
  { name: 'Mutrella Brownie',       price: 100 },
]

const LOADED = [
  { name: 'Dark Traffle Loaded Brownie',  price: 120 },
  { name: 'White Traffle Loaded Brownie', price: 130 },
  { name: 'Brownie with Ice Cream',       price: 130 },
  { name: 'Milk Truffle Loaded Brownie',  price: 140 },
  { name: 'Double Choco Loaded Brownie',  price: 150 },
  { name: 'Triple Choco Loaded Brownie',  price: 150 },
  { name: 'Mutrella Loaded Brownie',      price: 150 },
]

const WA = (msg) => `https://wa.me/916381665877?text=${encodeURIComponent(msg)}`

function BrownieCard({ item, idx, category }) {
  return (
    <motion.div
      className={`brownie-card ${category}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6, scale: 1.02 }}
    >
      {/* Actual brownie image replacing emoji */}
      <div className="brownie-card-img-wrap">
        <img
          src={brownieImg}
          alt="Brownie"
          className="brownie-card-real-img"
        />
      </div>

      <div className="brownie-card-info">
        <div className="brownie-card-name">{item.name}</div>
        <div className="brownie-card-price">₹{item.price}</div>
      </div>

      <a
        href={WA(`Hi! I'd like to order a ${item.name} (₹${item.price}) from The Cake Bite 🍫`)}
        target="_blank"
        rel="noopener noreferrer"
        className="brownie-card-order"
      >
        Order
      </a>
    </motion.div>
  )
}

export default function Brownies() {
  const [tab, setTab] = useState('classic')

  return (
    <section id="brownies-section" className="brownies-section">
      <div className="brownies-bg-orb" />
      <div className="brownies-bg-orb-2" />

      <div className="brownies-inner">
        <div className="brownies-header">
          <motion.div
            className="section-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Handcrafted Indulgence
          </motion.div>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Our <em>Brownie</em> Menu
          </motion.h2>

          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Rich, fudgy brownies in classic and loaded styles — click any to order instantly via WhatsApp.
          </motion.p>

          <motion.div
            className="brownie-offer-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <span className="brownie-offer-badge">Offer</span>
            <motion.span
              className="brownie-offer-icon"
              animate={{ scale: [1, 1.18, 1], rotate: [0, -8, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 0.6 }}
            >
              🎉
            </motion.span>
            <span className="brownie-offer-text">
              Order <strong>1kg</strong> Brownies &amp; Get <strong>¼kg FREE</strong>!
            </span>
          </motion.div>

          <motion.div
            className="brownie-tabs"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <button className={`brownie-tab${tab === 'classic' ? ' active' : ''}`} onClick={() => setTab('classic')}>
              🎖️ Classic Brownies
            </button>
            <button className={`brownie-tab${tab === 'loaded' ? ' active' : ''}`} onClick={() => setTab('loaded')}>
              🔥 Loaded Brownies
            </button>
            <button className={`brownie-tab${tab === 'all' ? ' active' : ''}`} onClick={() => setTab('all')}>
              🍫 View All
            </button>
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          {(tab === 'classic' || tab === 'all') && (
            <motion.div
              key="classic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {tab === 'all' && <div className="brownie-section-label">🎖️ Classic Brownies</div>}
              <div className="brownie-grid">
                {CLASSIC.map((item, i) => (
                  <BrownieCard key={item.name} item={item} idx={i} category="classic" />
                ))}
              </div>
            </motion.div>
          )}

          {(tab === 'loaded' || tab === 'all') && (
            <motion.div
              key="loaded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: tab === 'all' ? 0.1 : 0 }}
            >
              {tab === 'all' && <div className="brownie-section-label" style={{ marginTop: 40 }}>🔥 Loaded Brownies</div>}
              <div className="brownie-grid">
                {LOADED.map((item, i) => (
                  <BrownieCard key={item.name} item={item} idx={i} category="loaded" />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          style={{ textAlign: 'center', marginTop: 52 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            href={WA("Hi! I'd like to order brownies from The Cake Bite 🍫 Please share the brownie menu.")}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-cta"
            style={{ display: 'inline-flex' }}
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.122 1.526 5.854L0 24l6.306-1.504A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.001-1.369l-.36-.213-3.727.888.924-3.618-.234-.372A9.818 9.818 0 0112 2.182c5.423 0 9.818 4.395 9.818 9.818s-4.395 9.818-9.818 9.818z"/>
            </svg>
            Order Brownies on WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}