// components/About.jsx
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import choco from '../assets/about pic.jpg'
import locationIcon from '../assets/location.png'

const stats = [
  { number: 1000, suffix: '+', label: 'Happy Customers' },
  { number: 1,    suffix: '+', label: 'Years Baking' },
  { number: 4.9,  suffix: '★', label: 'Avg Rating' },
]

function CountUp({ target, suffix, duration = 2000, isFloat = false }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  useEffect(() => {
    if (!inView) return
    const startTime = performance.now()
    const tick = (now) => {
      const elapsed  = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased    = 1 - Math.pow(1 - progress, 3)
      const current  = target * eased
      setValue(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target, duration, isFloat])

  return <span ref={ref}>{value}{suffix}</span>
}

/* Professional SVG icons — no emojis */
const IconLeaf = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0, color:'#5a8a3f' }}>
    <path d="M2 22c0 0 8-2 12-8s4-12 4-12-8 2-12 8S2 22 2 22z"/>
    <path d="M12 14l-4 4"/>
  </svg>
)
const IconTruck = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0, color:'#a66a38' }}>
    <rect x="1" y="3" width="15" height="13"/>
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
    <circle cx="5.5" cy="18.5" r="2.5"/>
    <circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
)
const IconPencil = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0, color:'#a66a38' }}>
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
)
const trustFeatures = [
  { Icon: IconLeaf,   text: '100% fresh cream and Natural Ingredients — No preservatives' },
  { Icon: IconTruck,  text: 'Same-day delivery in Dharmapuri & Kaveripattinam' },
  { Icon: IconPencil, text: 'Fully custom designs accepted' },
]

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">

        {/* Visual */}
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="about-img-frame">
            <div className="about-img-emoji">
              <img src={choco} alt="The Cake Bite signature creation" />
            </div>
          </div>
          <div className="about-badge">
            <span className="about-badge-year">2025</span>
            <span className="about-badge-text">Est.</span>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div className="section-eyebrow" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            Our Story
          </motion.div>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.28, duration: 0.7 }}
          >
            Baking <em>Happiness</em><br />Since 2025
          </motion.h2>

          <motion.blockquote
            className="about-quote"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.38, duration: 0.7 }}
          >
            "A cake is not just dessert — it's a memory waiting to be made."
          </motion.blockquote>

          <motion.p className="about-body" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.44, duration: 0.7 }}>
            The Cake Bite was born from a single kitchen and an obsession with perfect flavour.
            What started as weekend bakes for friends became Dharmapuri & Kaveripattinam's
            most-loved artisan bakery — built on real butter, fresh cream, and uncompromising craft.
          </motion.p>

          <motion.p className="about-body" style={{ marginTop: 14 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.52, duration: 0.7 }}>
            Every tier is layered by hand. Every decoration placed with intention.
            Whether it's a first birthday or a silver anniversary — we bake with the same
            love as if it were our own celebration.
          </motion.p>

          {/* Trust features — SVG icons */}
          <motion.div
            style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 28, marginBottom: 36 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {trustFeatures.map(({ Icon, text }) => (
              <div key={text} style={{ display:'flex', alignItems:'center', gap:10, fontFamily:'var(--font-body)', fontSize:'0.82rem', color:'var(--text-muted)' }}>
                <Icon />
                {text}
              </div>
            ))}
          </motion.div>

          {/* Location Links — SVG map pin */}
          <motion.div
            className="about-locations"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.62, duration: 0.6 }}
          >
            <div className="about-loc-label" style={{ display:'flex', alignItems:'center', gap:6 }}>
              <img src={locationIcon} alt="" className="loc-icon-img" /> Find Us
            </div>
            <div className="about-loc-links">
              <a href="https://maps.app.goo.gl/A99Hm6Uisnqna1ux8?g_st=aw" target="_blank" rel="noopener noreferrer" className="about-loc-link">
                <span className="about-loc-icon" style={{ display:'flex', alignItems:'center' }}>
                  <img src={locationIcon} alt="" className="loc-icon-img" />
                </span>
                <div>
                  <div className="about-loc-name">Dharmapuri Branch</div>
                  <div className="about-loc-addr">Krishnagiri to Dharmapuri Main Road</div>
                </div>
                <span className="about-loc-arrow">→</span>
              </a>
              <a href="https://maps.app.goo.gl/ZSVceK5oXSANrZ5U7?g_st=aw" target="_blank" rel="noopener noreferrer" className="about-loc-link">
                <span className="about-loc-icon" style={{ display:'flex', alignItems:'center' }}>
                  <img src={locationIcon} alt="" className="loc-icon-img" />
                </span>
                <div>
                  <div className="about-loc-name">Kaveripattinam Branch</div>
                  <div className="about-loc-addr">No.30, Panakal Street, Kaveripattinam</div>
                </div>
                <span className="about-loc-arrow">→</span>
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="stats-grid" style={{ marginTop: 32 }}>
            {stats.map(({ number, suffix, label }, i) => (
              <motion.div
                key={label}
                className="stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.65 + i * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="stat-number">
                  <CountUp target={number} suffix={suffix} duration={1800} isFloat={!Number.isInteger(number)} />
                </div>
                <div className="stat-label">{label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}