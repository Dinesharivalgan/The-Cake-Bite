// components/Cakes.jsx
import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import blackForest        from '../assets/black forest.png'
import redVelvet          from '../assets/red.jpg'
import blackcurrent       from '../assets/black current.png'
import butterscartch      from '../assets/butter scratch.png'
import blueberry          from '../assets/blue berry.png'
import mango              from '../assets/mango cake.png'
import rainbow            from '../assets/rainbow cake.png'
import chocoCashew        from '../assets/Choco  Cashewnuts.jpg'
import chocoAlmond        from '../assets/Choco Almond.jpg'
import chocoChip          from '../assets/Choco Chip.jpg'
import chocoOreo          from '../assets/Choco Oreo.jpg'
// import butterscartchBlast from '../assets/Butter scotch blast.jpg'
// import chocoPista         from '../assets/Choco Pista.jpg'
// import chocoTruffle       from '../assets/choco truffle.jpg'
// import chocoWalnut        from '../assets/Choco Walnut.jpg'
// import ferror             from '../assets/ferror racho.jpg'
// import mangoBlast         from '../assets/Mango blast.jpg'
// import pinapple           from '../assets/pinaple cake.jpg'
// import naturalFruit       from '../assets/Natural Fruit Forest.jpg'
// import rasamalai          from '../assets/Rasamalai blast.jpg'
// import whiteforest        from '../assets/white forest.jpg'

/* ── Customized Cake gallery photos ── */
import custom1  from '../assets/customized cakes/WhatsApp Image 2026-07-06 at 11.03.46 AM.jpeg'
import custom2  from '../assets/customized cakes/WhatsApp Image 2026-07-06 at 11.10.00 AM.jpeg'
import custom3  from '../assets/customized cakes/WhatsApp Image 2026-07-06 at 11.11.07 AM (2).jpeg'
import custom4  from '../assets/customized cakes/WhatsApp_Image_2026-07-06_at_11.03.51_AM-removebg-preview.png'
import custom5  from '../assets/customized cakes/WhatsApp_Image_2026-07-06_at_11.09.57_AM-removebg-preview.png'
import custom6  from '../assets/customized cakes/WhatsApp_Image_2026-07-06_at_11.10.01_AM-removebg-preview.png'
import custom7  from '../assets/customized cakes/WhatsApp_Image_2026-07-06_at_11.10.02_AM-removebg-preview.png'
import custom8  from '../assets/customized cakes/WhatsApp_Image_2026-07-06_at_11.10.02_AM__1_-removebg-preview.png'
import custom9  from '../assets/customized cakes/WhatsApp_Image_2026-07-06_at_11.10.02_AM__2_-removebg-preview.png'
import custom10 from '../assets/customized cakes/WhatsApp_Image_2026-07-06_at_11.10.03_AM-removebg-preview.png'
import custom11 from '../assets/customized cakes/WhatsApp_Image_2026-07-06_at_11.10.03_AM__1_-removebg-preview.png'
import custom12 from '../assets/customized cakes/WhatsApp_Image_2026-07-06_at_11.10.03_AM__2_-removebg-preview.png'
import custom13 from '../assets/customized cakes/WhatsApp_Image_2026-07-06_at_11.10.04_AM-removebg-preview.png'
import custom14 from '../assets/customized cakes/WhatsApp_Image_2026-07-06_at_11.11.05_AM-removebg-preview.png'
import custom15 from '../assets/customized cakes/WhatsApp_Image_2026-07-06_at_11.11.06_AM-removebg-preview.png'
import custom16 from '../assets/customized cakes/WhatsApp_Image_2026-07-06_at_11.11.06_AM__1_-removebg-preview.png'
import custom17 from '../assets/customized cakes/WhatsApp_Image_2026-07-06_at_11.11.07_AM-removebg-preview.png'
import custom18 from '../assets/customized cakes/WhatsApp_Image_2026-07-06_at_11.11.07_AM__1_-removebg-preview.png'
import custom19 from '../assets/customized cakes/WhatsApp_Image_2026-07-06_at_11.11.08_AM-removebg-preview.png'
import custom20 from '../assets/customized cakes/WhatsApp_Image_2026-07-06_at_11.11.09_AM-removebg-preview.png'
import custom21 from '../assets/customized cakes/WhatsApp_Image_2026-07-06_at_11.11.09_AM__1_-removebg-preview.png'
import custom22 from '../assets/customized cakes/WhatsApp_Image_2026-07-06_at_11.11.09_AM__2_-removebg-preview.png'

const CUSTOM_CAKE_IMAGES = [
  custom1, custom2, custom3, custom4, custom5, custom6, custom7, custom8,
  custom9, custom10, custom11, custom12, custom13, custom14, custom15, custom16,
  custom17, custom18, custom19, custom20, custom21, custom22,
]

/* ──────────────────────────────────────────
   CAKE CARDS DATA
────────────────────────────────────────── */
const cakes = [
  { id: 1,  image: blackForest,   category: 'Vanilla Flavours',  name: 'Black Forest Cake',       desc: 'Rich chocolate sponge layered with whipped cream and cherries.',    halfKg: 200, oneKg: 350,  rating: 4.9, reviews: 342, badge: 'Best Seller' },
  { id: 2,  image: redVelvet,     category: 'Premium Signature', name: 'Red Velvet Cake',          desc: 'Soft red velvet cake with cream cheese frosting.',                  halfKg: 400, oneKg: 700,  rating: 5.0, reviews: 128, badge: 'Premium' },
  { id: 3,  image: blackcurrent,  category: 'Vanilla Flavours',  name: 'Black Currant Cake',       desc: 'Rich black currant flavour with soft sponge layers.',               halfKg: 270, oneKg: 450,  rating: 4.9, reviews: 220, badge: 'Best Seller' },
  { id: 4,  image: butterscartch, category: 'Vanilla Flavours',  name: 'Butterscotch Cake',        desc: 'Delicious butterscotch cream with crunchy praline.',                halfKg: 320, oneKg: 550,  rating: 5.0, reviews: 128, badge: 'Popular' },
  { id: 5,  image: blueberry,     category: 'Vanilla Flavours',  name: 'Blueberry Cake',           desc: 'Fresh blueberry topping with creamy sponge layers.',                halfKg: 270, oneKg: 450,  rating: 4.8, reviews: 210, badge: 'Popular' },
  { id: 6,  image: mango,         category: 'Vanilla Flavours',  name: 'Mango Cake',               desc: 'Fresh mango flavour with smooth cream frosting.',                   halfKg: 270, oneKg: 450,  rating: 4.9, reviews: 180, badge: 'Summer Special' },
  { id: 7,  image: rainbow,       category: 'Premium Signature', name: 'Rainbow Cake',             desc: 'Colorful layered cake loved by kids and families.',                 halfKg: 500, oneKg: 1000, rating: 4.9, reviews: 265, badge: 'Kids Favourite' },
  { id: 8,  image: chocoAlmond,   category: 'Choco With Nuts',   name: 'Choco Almond Cake',        desc: 'Crunchy almonds layered with rich chocolate sponge.',               halfKg: 450, oneKg: 800,  rating: 4.9, reviews: 190, badge: 'Rich & Nutty' },
  { id: 9,  image: chocoCashew,   category: 'Choco With Nuts',   name: 'Choco Cashewnuts Cake',    desc: 'Creamy cashew crunch with intense chocolate layers.',               halfKg: 450, oneKg: 800,  rating: 4.8, reviews: 155, badge: 'Nutty Delight' },
  { id: 10, image: chocoOreo,     category: 'Choco Flavours',    name: 'Choco Oreo Cake',          desc: 'Oreo crumble loaded with velvety chocolate cream.',                 halfKg: 380, oneKg: 650,  rating: 5.0, reviews: 312, badge: 'Fan Favourite' },
  { id: 11, image: chocoChip,     category: 'Choco Flavours',    name: 'Choco Chip Cake',          desc: 'Moist chocolate cake studded with melty choco chips.',              halfKg: 400, oneKg: 700,  rating: 4.9, reviews: 274, badge: 'Bestseller' },
]

/* ──────────────────────────────────────────
   FULL MENU — CAKES
────────────────────────────────────────── */
const CAKE_MENU = [
  {
    id: 'premium', emoji: '⭐', shortTitle: 'Premium Signature',
    title: '⭐ Premium Signature Cake',
    rows: [
      ['Red Velvet', 400, 700],
      ['Rasagulla', 450, 700],
      ['Gulab Jamun', 450, 700],
      ['Ferro Rocher', 450, 850],
      ['Rasamalai', 400, 700],
      ['Choco Red Velvet', 400, 700],
      ['Rainbow Cake', 500, 1000],
    ],
  },
  {
    id: 'vanilla', emoji: '🍦', shortTitle: 'Vanilla Flavours',
    title: '🍦 Vanilla Flavours Cake',
    rows: [
      ['Black Forest', 200, 350],
      ['White Forest', 270, 450],
      ['Strawberry', 270, 450],
      ['Blue Berry', 270, 450],
      ['Black Currant', 270, 450],
      ['Pineapple', 270, 450],
      ['Mango', 270, 450],
      ['Butter Scotch', 320, 550],
    ],
  },
  {
    id: 'chocoNuts', emoji: '🥜', shortTitle: 'Choco + Nuts',
    title: '🥜 Choco With Nuts Cake',
    rows: [
      ['Choco Almond', 450, 800],
      ['Choco Cashewnuts', 450, 800],
      ['Choco Walnut', 450, 800],
      ['Choco Pista', 450, 900],
      ['Natural Fruit Forest', 450, 800],
    ],
  },
  {
    id: 'choco', emoji: '🍫', shortTitle: 'Choco Flavours',
    title: '🍫 Choco Flavours Cake',
    rows: [
      ['Choco Truffle', 350, 600],
      ['Choco Oreo', 380, 650],
      ['Choco Forest', 380, 650],
      ['Choco Chip', 400, 700],
      ['Double Choco Truffle', 400, 700],
      ['Irish Coffee', 400, 700],
      ['Choco Scotch', 400, 700],
    ],
  },
  {
    id: 'offer', emoji: '🎁', shortTitle: 'BUY 1 GET ½ FREE',
    title: '🎁 BUY 1 KG GET ½ KG FREE',
    isOffer: true,
    rows: [
      ['Mango Blast', 400, 850],
      ['Blue Berry Blast', 400, 850],
      ['Pineapple Blast', 400, 850],
      ['Truffle Blast', 499, 999],
      ['Butter Scotch Blast', 499, 999],
      ['Rasamalai Blast', 550, 1100],
      ['Red Blast', 550, 1100],
    ],
  },
  {
    id: 'combo', emoji: '🌈', shortTitle: 'Mixed Combo',
    title: '🌈 Rich Mixed Combo Flavours',
    rows: [
      ['Choco Butter Scotch', 380, 650],
      ['Choco Straw Berry', 380, 650],
      ['Choco Mango', 380, 650],
      ['Choco Vanilla', 380, 650],
      ['Butter Nuts Blueberry', 380, 650],
      ['Mixed Berry', 380, 650],
      ['German Forest', 380, 650],
    ],
  },
]

/* ──────────────────────────────────────────
   FULL MENU — BROWNIES
────────────────────────────────────────── */
const BROWNIE_MENU = [
  {
    id: 'classic', emoji: '🎖️', shortTitle: 'Classic',
    title: '🎖️ Classic Brownies',
    rows: [
      ['Dark Traffle Brownie', 80],
      ['White Traffle Brownie', 90],
      ['Milk Traffle Brownie', 90],
      ['Double Choco Brownie', 100],
      ['Triple Choco Brownie', 100],
      ['Mutrella Brownie', 100],
    ],
  },
  {
    id: 'loaded', emoji: '🔥', shortTitle: 'Loaded',
    title: '🔥 Loaded Brownies',
    rows: [
      ['Dark Traffle Loaded Brownie', 120],
      ['White Traffle Loaded Brownie', 130],
      ['Brownie with Ice Cream', 130],
      ['Milk Truffle Loaded Brownie', 140],
      ['Double Choco Loaded Brownie', 150],
      ['Triple Choco Loaded Brownie', 150],
      ['Mutrella Loaded Brownie', 150],
    ],
  },
]

/* ──────────────────────────────────────────
   WHATSAPP ICON
────────────────────────────────────────── */
const WhatsAppIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.122 1.526 5.854L0 24l6.306-1.504A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.001-1.369l-.36-.213-3.727.888.924-3.618-.234-.372A9.818 9.818 0 0112 2.182c5.423 0 9.818 4.395 9.818 9.818s-4.395 9.818-9.818 9.818z"/>
  </svg>
)

/* ──────────────────────────────────────────
   CAKE CARD  (smaller, cleaner)
────────────────────────────────────────── */
function CakeCard({ cake, index, onSelect }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-6px)`
  }
  const handleMouseLeave = () => {
    const el = cardRef.current
    if (!el) return
    el.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) translateY(0px)'
    el.style.transition = 'transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)'
  }
  const handleMouseEnter = () => {
    const el = cardRef.current
    if (el) el.style.transition = 'transform 0.08s ease'
  }

  return (
    <motion.div
      ref={cardRef}
      className="cake-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={() => onSelect(cake)}
      style={{ cursor: 'pointer' }}
    >
      {/* Image */}
      <div className="cake-card-img">
        <img src={cake.image} alt={cake.name} />
        {cake.badge && <span className="cake-card-badge">{cake.badge}</span>}
        <div className="cake-card-tap-hint">Tap for prices</div>
      </div>

      {/* Body */}
      <div className="cake-card-body">
        <div className="cake-card-category">{cake.category}</div>
        <h3 className="cake-card-name">{cake.name}</h3>

        {/* Price pills — ½ kg & 1 kg */}
        <div className="cake-card-price-row">
          <div className="cake-price-pill-sm">
            <span className="cake-price-wt">½ kg</span>
            <span className="cake-price-amt">₹{cake.halfKg}</span>
          </div>
          <div className="cake-price-divider-sm">|</div>
          <div className="cake-price-pill-sm">
            <span className="cake-price-wt">1 kg</span>
            <span className="cake-price-amt">₹{cake.oneKg}</span>
          </div>
        </div>

        {/* Stars */}
        <div className="cake-card-rating">
          <span className="stars">{'★'.repeat(Math.floor(cake.rating))}{'☆'.repeat(5 - Math.floor(cake.rating))}</span>
          <span className="cake-card-rating-val">{cake.rating}</span>
          <span className="cake-card-reviews">({cake.reviews})</span>
        </div>

        <motion.button
          className="cake-card-order-btn"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={(e) => { e.stopPropagation(); onSelect(cake) }}
        >
          View Prices &amp; Order
        </motion.button>
      </div>
    </motion.div>
  )
}

/* ──────────────────────────────────────────
   CAKE DETAIL MODAL
────────────────────────────────────────── */
function CakeDetailModal({ cake, onClose }) {
  const whatsappHalf = encodeURIComponent(`Hi! I'd like to order a ${cake.name} (½ kg - ₹${cake.halfKg}) from The Cake Bite 🎂`)
  const whatsappOne  = encodeURIComponent(`Hi! I'd like to order a ${cake.name} (1 kg - ₹${cake.oneKg}) from The Cake Bite 🎂`)

  return (
    <motion.div
      className="menu-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="cake-detail-modal"
        initial={{ opacity: 0, y: 60, scale: 0.93 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="menu-modal-close" onClick={onClose}>✕</button>

        <div className="cake-detail-img-wrap">
          <img src={cake.image} alt={cake.name} className="cake-detail-img" />
          {cake.badge && <span className="cake-card-badge">{cake.badge}</span>}
        </div>

        <div className="cake-detail-body">
          <div className="cake-card-category">{cake.category}</div>
          <h3 className="cake-detail-name">{cake.name}</h3>
          <p className="cake-detail-desc">{cake.desc}</p>

          <div className="cake-detail-price-box">
            <div className="cake-detail-price-label">📋 Price Details</div>
            <div className="cake-detail-prices">
              <div className="cake-price-big-pill">
                <span className="cake-price-big-wt">½ kg</span>
                <span className="cake-price-big-val">₹{cake.halfKg}</span>
                <a
                  href={`https://wa.me/916381665877?text=${whatsappHalf}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cake-price-order-btn"
                  onClick={(e) => e.stopPropagation()}
                >Order ½ kg</a>
              </div>
              <div className="cake-price-big-pill">
                <span className="cake-price-big-wt">1 kg</span>
                <span className="cake-price-big-val">₹{cake.oneKg}</span>
                <a
                  href={`https://wa.me/916381665877?text=${whatsappOne}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cake-price-order-btn"
                  onClick={(e) => e.stopPropagation()}
                >Order 1 kg</a>
              </div>
            </div>
            <p className="cake-detail-note">* Custom sizes & designs available. WhatsApp for quote.</p>
          </div>

          <a
            href={`https://wa.me/916381665877?text=${whatsappHalf}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-cta"
            style={{ display: 'inline-flex', width: '100%', justifyContent: 'center', marginTop: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <WhatsAppIcon size={18} />
            Order on WhatsApp
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ──────────────────────────────────────────
   CUSTOMIZED CAKE MODAL
────────────────────────────────────────── */
function CustomCakeModal({ images, onClose }) {
  const [preview, setPreview] = useState(null)

  const waGeneral = encodeURIComponent(
    "Hi! I'd like to order a Customized Cake from The Cake Bite 🎂 I saw your custom cake designs and would like a quote."
  )

  return (
    <motion.div
      className="menu-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="customcake-modal"
        initial={{ opacity: 0, y: 60, scale: 0.93 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="fullmenu-header">
          <div className="fullmenu-title">🎂 Customized Cakes</div>
          <button className="menu-modal-close" onClick={onClose}>✕</button>
        </div>

        <p className="customcake-intro">
          Every custom cake is designed just for you — birthdays, weddings, anniversaries &amp; more.
          Tap any design below, or WhatsApp us your own idea for a free quote.
        </p>

        <div className="customcake-grid">
          {images.map((src, i) => (
            <motion.div
              key={i}
              className="customcake-thumb"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.03, 0.6) }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setPreview({ src, i })}
            >
              <img src={src} alt={`Customized cake design ${i + 1}`} loading="lazy" />
            </motion.div>
          ))}
        </div>

        <div className="fullmenu-footer">
          <a
            href={`https://wa.me/916381665877?text=${waGeneral}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-cta"
            style={{ display: 'inline-flex' }}
          >
            <WhatsAppIcon size={18} />
            Order a Customized Cake
          </a>
          <button className="btn-secondary" onClick={onClose}>Close</button>
        </div>
      </motion.div>

      {/* Tap-to-preview lightbox for a single design */}
      <AnimatePresence>
        {preview && (
          <motion.div
            className="gallery-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => { e.stopPropagation(); setPreview(null) }}
          >
            <motion.div
              className="gallery-lightbox"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="gallery-lightbox-close" onClick={() => setPreview(null)}>✕</button>
              <img src={preview.src} alt={`Customized cake design ${preview.i + 1}`} className="customcake-lightbox-img" />
              <div className="gallery-lightbox-info">
                <span className="cake-card-category">Customized Cake</span>
                <div className="cake-detail-name" style={{ fontSize: '1.1rem', marginTop: 6 }}>
                  Design #{preview.i + 1}
                </div>
                <a
                  href={`https://wa.me/916381665877?text=${encodeURIComponent(`Hi! I'd like to order a customized cake similar to Design #${preview.i + 1} from The Cake Bite 🎂`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-cta"
                  style={{ display: 'inline-flex', marginTop: 16 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <WhatsAppIcon size={16} />
                  Order This Design
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* ──────────────────────────────────────────
   FULL MENU MODAL
────────────────────────────────────────── */
function FullMenuModal({ onClose }) {
  const [mainTab, setMainTab] = useState('cakes')
  const [activeCakeSection, setActiveCakeSection] = useState('premium')
  const [activeBrownieSection, setActiveBrownieSection] = useState('classic')

  const activeCakeData    = CAKE_MENU.find(s => s.id === activeCakeSection) || CAKE_MENU[0]
  const activeBrownieData = BROWNIE_MENU.find(s => s.id === activeBrownieSection) || BROWNIE_MENU[0]

  const waAll     = encodeURIComponent("Hi! I'd like to order from The Cake Bite 🎂 Please share the full menu.")
  const waBrownie = encodeURIComponent("Hi! I'd like to order brownies from The Cake Bite 🍫 Please share the brownie menu.")

  return (
    <motion.div
      className="menu-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="fullmenu-modal"
        initial={{ opacity: 0, y: 60, scale: 0.93 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ duration: 0.42, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="fullmenu-header">
          <div className="fullmenu-title">🎂 Full Menu — The Cake Bite</div>
          <button className="menu-modal-close" onClick={onClose}>✕</button>
        </div>

        {/* Offer Banner */}
        <div className="fullmenu-offer-banner">
          <div className="fullmenu-offer-badge">🎁 OFFER</div>
          <div className="fullmenu-offer-text">
            <span className="fullmenu-offer-headline">BUY 1 KG GET ½ KG FREE</span>
            <span className="fullmenu-offer-sub">On select Blast cakes — Tap "BUY 1 GET ½ FREE" in Cakes menu</span>
          </div>
        </div>

        {/* Main Tabs */}
        <div className="fullmenu-main-tabs">
          <button
            className={`fullmenu-main-tab${mainTab === 'cakes' ? ' active' : ''}`}
            onClick={() => setMainTab('cakes')}
          >🎂 Cakes</button>
          <button
            className={`fullmenu-main-tab${mainTab === 'brownies' ? ' active' : ''}`}
            onClick={() => setMainTab('brownies')}
          >🍫 Brownies</button>
        </div>

        {/* Cakes Panel */}
        {mainTab === 'cakes' && (
          <div className="fullmenu-body">
            <div className="fullmenu-cat-tabs">
              {CAKE_MENU.map(sec => (
                <button
                  key={sec.id}
                  className={`fullmenu-cat-tab${activeCakeSection === sec.id ? ' active' : ''}${sec.isOffer ? ' offer-tab' : ''}`}
                  onClick={() => setActiveCakeSection(sec.id)}
                >
                  <span className="fullmenu-cat-emoji">{sec.emoji}</span>
                  <span className="fullmenu-cat-label">{sec.shortTitle}</span>
                  {sec.isOffer && <span className="fullmenu-offer-tag">FREE</span>}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCakeSection}
                className="fullmenu-table-wrap"
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.28 }}
              >
                <div className={`fullmenu-table-header${activeCakeData.isOffer ? ' offer-header' : ''}`}>
                  {activeCakeData.isOffer && (
                    <div className="fullmenu-table-offer-pill">🎁 BUY 1 KG → GET ½ KG FREE</div>
                  )}
                  <div className="fullmenu-table-title">{activeCakeData.title}</div>
                  <div className="fullmenu-weight-legend">
                    <span className="wt-pill half">½ kg = Half Kilogram</span>
                    <span className="wt-pill full">1 kg = One Kilogram</span>
                  </div>
                </div>

                <table className="fullmenu-table">
                  <thead>
                    <tr>
                      <th className="fullmenu-th-name">Cake Name</th>
                      <th className="fullmenu-th-price">½ kg</th>
                      <th className="fullmenu-th-price">1 kg</th>
                      <th className="fullmenu-th-order">Order</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeCakeData.rows.map(([name, half, one], i) => {
                      const wa = encodeURIComponent(`Hi! I'd like to order ${name} from The Cake Bite 🎂`)
                      return (
                        <motion.tr
                          key={name}
                          className={`fullmenu-row${activeCakeData.isOffer ? ' offer-row' : ''}`}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.04 }}
                        >
                          <td className="fullmenu-td-name">{name}</td>
                          <td className="fullmenu-td-price half-price">₹{half}</td>
                          <td className="fullmenu-td-price full-price">₹{one}</td>
                          <td className="fullmenu-td-order">
                            <a
                              href={`https://wa.me/916381665877?text=${wa}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="fullmenu-order-btn"
                            >
                              <WhatsAppIcon size={13} /> Order
                            </a>
                          </td>
                        </motion.tr>
                      )
                    })}
                  </tbody>
                </table>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* Brownies Panel */}
        {mainTab === 'brownies' && (
          <div className="fullmenu-body">
            <div className="fullmenu-cat-tabs">
              {BROWNIE_MENU.map(sec => (
                <button
                  key={sec.id}
                  className={`fullmenu-cat-tab${activeBrownieSection === sec.id ? ' active' : ''}`}
                  onClick={() => setActiveBrownieSection(sec.id)}
                >
                  <span className="fullmenu-cat-emoji">{sec.emoji}</span>
                  <span className="fullmenu-cat-label">{sec.shortTitle}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeBrownieSection}
                className="fullmenu-table-wrap"
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.28 }}
              >
                <div className="fullmenu-table-header">
                  <div className="fullmenu-table-title">{activeBrownieData.title}</div>
                  <p className="fullmenu-brownie-note">Each brownie is individually priced per piece</p>
                </div>

                <table className="fullmenu-table">
                  <thead>
                    <tr>
                      <th className="fullmenu-th-name">Brownie Name</th>
                      <th className="fullmenu-th-price">Price</th>
                      <th className="fullmenu-th-order">Order</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeBrownieData.rows.map(([name, price], i) => {
                      const wa = encodeURIComponent(`Hi! I'd like to order ${name} (₹${price}) from The Cake Bite 🍫`)
                      return (
                        <motion.tr
                          key={name}
                          className="fullmenu-row"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <td className="fullmenu-td-name">{name}</td>
                          <td className="fullmenu-td-price half-price">₹{price}</td>
                          <td className="fullmenu-td-order">
                            <a
                              href={`https://wa.me/916381665877?text=${wa}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="fullmenu-order-btn"
                            >
                              <WhatsAppIcon size={13} /> Order
                            </a>
                          </td>
                        </motion.tr>
                      )
                    })}
                  </tbody>
                </table>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* Footer */}
        <div className="fullmenu-footer">
          <a
            href={`https://wa.me/916381665877?text=${mainTab === 'brownies' ? waBrownie : waAll}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-cta"
            style={{ display: 'inline-flex' }}
          >
            <WhatsAppIcon size={18} />
            Order on WhatsApp
          </a>
          <button className="btn-secondary" onClick={onClose}>Close</button>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ──────────────────────────────────────────
   MAIN SECTION EXPORT
────────────────────────────────────────── */
export default function Cakes() {
  const sectionRef = useRef(null)
  const [selectedCake, setSelectedCake]   = useState(null)
  const [showFullMenu, setShowFullMenu]   = useState(false)
  const [showCustomCake, setShowCustomCake] = useState(false)

  return (
    <section id="cakes" className="cakes-section" ref={sectionRef}>

      {/* Offer Strip — original Special Offer, unchanged */}
      <motion.div
        className="cakes-offer-strip"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -8, scale: 1.015 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="offer-strip-badge">🎁 SPECIAL OFFER</span>
        <span className="offer-strip-text">
          <strong>BUY 1 KG GET ½ KG FREE</strong> — On Mango, Blue Berry, Pineapple, Truffle, Butter Scotch, Rasamalai &amp; Red Blast Cakes!
        </span>
        <motion.button
          className="offer-strip-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => setShowFullMenu(true)}
        >See Offer →</motion.button>
      </motion.div>

      {/* Extra Card — Customized Cakes (new, separate from the offer above) */}
      <motion.div
        className="cakes-offer-strip cakes-offer-strip--custom"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -8, scale: 1.015 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.08 }}
      >
        <span className="offer-strip-badge">🎂 CUSTOM ORDERS</span>
        <span className="offer-strip-text">
          <strong>Dreaming of a custom cake?</strong> — Birthdays, weddings &amp; anniversaries. Tell us your idea and we'll bake it to life!
        </span>
        <motion.button
          className="offer-strip-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => setShowCustomCake(true)}
        >See Designs →</motion.button>
      </motion.div>

      {/* Extra Card — Photo Print Cake (shop's signature speciality) */}
      <motion.div
        className="cakes-offer-strip cakes-offer-strip--photo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -8, scale: 1.015 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.16 }}
      >
        <span className="offer-strip-badge">📸 SHOP SPECIAL</span>
        <span className="offer-strip-text">
          <strong>Photo Print Cake</strong> — Your favourite photo, printed edible on the cake! Our signature speciality.
        </span>
        <motion.a
          href={`https://wa.me/916381665877?text=${encodeURIComponent("Hi! I'd like to order a Photo Print Cake from The Cake Bite 📸🎂")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="offer-strip-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
        >Order Now →</motion.a>
      </motion.div>


      {/* Section Header */}
      <div className="cakes-header">
        <div className="cakes-header-left">
          <motion.div
            className="section-eyebrow"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >Our Specialities</motion.div>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >Cakes That Make <em>Moments</em></motion.h2>

          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >Tap any cake to see exact ½ kg &amp; 1 kg prices. Handcrafted with finest ingredients.</motion.p>
        </div>

        <motion.button
          className="btn-secondary"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.04, y: -3 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => setShowFullMenu(true)}
        >View Full Menu →</motion.button>
      </div>

      {/* Cake Cards Grid */}
      <div className="cakes-grid">
        {cakes.map((cake, i) => (
          <CakeCard key={cake.id} cake={cake} index={i} onSelect={setSelectedCake} />
        ))}
      </div>

      {/* Modals */}
      <AnimatePresence>
        {selectedCake && (
          <CakeDetailModal cake={selectedCake} onClose={() => setSelectedCake(null)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showFullMenu && (
          <FullMenuModal onClose={() => setShowFullMenu(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showCustomCake && (
          <CustomCakeModal images={CUSTOM_CAKE_IMAGES} onClose={() => setShowCustomCake(false)} />
        )}
      </AnimatePresence>
    </section>
  )
}