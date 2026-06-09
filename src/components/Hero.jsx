// components/Hero.jsx
import { useEffect} from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FiShoppingBag, FiChevronDown, FiStar, FiTruck, FiAward } from 'react-icons/fi'
import heroCake from '../assets/hero-main.jpg'

export default function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 18 })
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 18 })
  const imgY  = useTransform(smoothY, [-0.5, 0.5], [-15, 15])
  const imgX  = useTransform(smoothX, [-0.5, 0.5], [-10, 10])
  const txtY  = useTransform(smoothY, [-0.5, 0.5], [8, -8])

  useEffect(() => {
    const move = (e) => {
      mouseX.set((e.clientX / window.innerWidth)  - 0.5)
      mouseY.set((e.clientY / window.innerHeight) - 0.5)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mouseX, mouseY])

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-bg-overlay" />

      <div style={{ position:'absolute', inset:0, zIndex:0, pointerEvents:'none' }}>
        <div className="hero-ring" />
        <div className="hero-ring" />
      </div>

      {[
        { top:'18%', left:'6%',  size:6, delay:0 },
        { top:'65%', left:'9%',  size:4, delay:1.2 },
        { top:'30%', right:'4%', size:5, delay:0.6 },
        { top:'75%', right:'7%', size:3, delay:1.8 },
      ].map((s, i) => (
        <motion.div
          key={i}
          style={{
            position:'absolute', zIndex:1, pointerEvents:'none',
            top:s.top, left:s.left, right:s.right,
            width:s.size, height:s.size, borderRadius:'50%',
            background:'radial-gradient(circle, var(--gold-bright), var(--gold))',
            boxShadow:`0 0 ${s.size*3}px var(--gold)`,
          }}
          animate={{ opacity:[0.2,1,0.2], scale:[1,1.8,1] }}
          transition={{ duration:3+i*0.5, repeat:Infinity, delay:s.delay }}
        />
      ))}

      <div className="hero-inner">
        <motion.div className="hero-left" style={{ y: txtY }}>

          <motion.div
            className="hero-eyebrow"
            initial={{ opacity:0, y:24 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.8, delay:0.2 }}
          >
            100% Icing Cakes · Fresh &amp; Hygienic
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity:0, y:50 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:1, delay:0.35, ease:[0.25,0.46,0.45,0.94] }}
          >
            Freshly Baked
            <em>Happiness</em>
          </motion.h1>

          <motion.p
            className="hero-tagline"
            initial={{ opacity:0, y:28 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.85, delay:0.52 }}
          >
            With 1 kg cakes starting at just ₹350 — 100% fresh cream goodness without breaking the bank. Handcrafted in Dharmapuri &amp; Kaveripattinam.
          </motion.p>

          <motion.div
            className="hero-quick-pills"
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.8, delay:0.62 }}
          >
            <span className="hero-pill">⏱ Standard: 20–30 mins</span>
            <span className="hero-pill hero-pill-gold">🎨 Custom: 1–2 hrs</span>
            <span className="hero-pill hero-pill-green">🛵 FREE delivery up to 5 km</span>
          </motion.div>

          <motion.div
            className="hero-cta"
            initial={{ opacity:0, y:26 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.8, delay:0.74 }}
          >
            <motion.button
              className="btn-primary"
              whileHover={{ scale:1.04, y:-3 }}
              whileTap={{ scale:0.97 }}
              onClick={() => scrollTo('#contact')}
            >
              <FiShoppingBag size={16} /> Order Now
            </motion.button>
            <motion.button
              className="btn-secondary"
              whileHover={{ scale:1.04, y:-3 }}
              whileTap={{ scale:0.97 }}
              onClick={() => scrollTo('#cakes')}
            >
              View Menu <FiChevronDown size={16} />
            </motion.button>
          </motion.div>

          <motion.div
            className="hero-trust"
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:1, duration:0.8 }}
          >
            {[
              { icon:<FiStar size={16}/>,  num:'4.9★', lbl:'Star Rating' },
              { icon:<FiAward size={16}/>, num:'1000+', lbl:'Happy Customers' },
              { icon:<FiTruck size={16}/>, num:'FREE',  lbl:'5 km Delivery' },
            ].map(({ icon, num, lbl }) => (
              <div key={lbl} className="hero-trust-item">
                <span style={{ color:'var(--gold)' }}>{icon}</span>
                <div>
                  <div className="hero-trust-num">{num}</div>
                  <div className="hero-trust-label">{lbl}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="hero-right">
          <motion.div
            className="hero-cake-frame"
            style={{ x: imgX, y: imgY }}
            initial={{ opacity:0, scale:0.88, x:60 }}
            animate={{ opacity:1, scale:1, x:0 }}
            transition={{ duration:1.1, delay:0.4, ease:[0.25,0.46,0.45,0.94] }}
          >
            <img
              src={heroCake}
              alt="Fresh cream signature cake The Cake Bite Dharmapuri"
              className="hero-cake-img"
            />
            <motion.div
              className="hero-badge"
              initial={{ opacity:0, x:-30 }}
              animate={{ opacity:1, x:0 }}
              transition={{ delay:1, duration:0.7 }}
            >
              <span className="hero-badge-val">2024</span>
              <span className="hero-badge-lbl">Est. Since</span>
            </motion.div>
            <motion.div
              className="hero-badge-2"
              initial={{ opacity:0, x:30 }}
              animate={{ opacity:1, x:0 }}
              transition={{ delay:1.15, duration:0.7 }}
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="hero-scroll-hint"
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:1.5, duration:1 }}
        onClick={() => scrollTo('#cakes')}
        style={{ cursor:'pointer' }}
      >
        <div className="scroll-line" />
        <span>Scroll</span>
      </motion.div>
    </section>
  )
}