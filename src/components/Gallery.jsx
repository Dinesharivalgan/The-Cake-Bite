// components/Gallery.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import blackForest from '../assets/black forest.png'
import redVelvet from '../assets/red.jpg'
import blackcurrent from '../assets/black current.png'
import butterscartch from '../assets/butter scratch.png'
import blueberry from '../assets/blue berry.png'
import mango from '../assets/mango cake.png'
import rainbow from '../assets/rainbow cake.png'
import chocoCashew from '../assets/Choco  Cashewnuts.jpg'
import chocoAlmond from '../assets/Choco Almond.jpg'
import chocoChip from '../assets/Choco Chip.jpg'
import chocoOreo from '../assets/Choco Oreo.jpg'
import butterscartchBlast from '../assets/Butter scotch blast.jpg'
import chocoPista from '../assets/Choco Pista.jpg'
import chocoTruffle from '../assets/choco truffle.jpg'
import chocoWalnut from '../assets/Choco Walnut.jpg'
import ferror from '../assets/ferror racho.jpg'
import mangoBlast from '../assets/Mango blast.jpg'
import pinapple from '../assets/pinaple cake.jpg'
import naturalFruit from '../assets/Natural Fruit Forest.jpg'
import rasamalai from '../assets/Rasamalai blast.jpg'
import whiteforest from '../assets/white forest.jpg'
import { label } from 'framer-motion/client'
const items = [
  { img: blackForest, label: 'Black Forest Cake', size: 'tall', cat: 'Classic' },
  { img: redVelvet, label: 'Red Velvet Cake', size: 'short', cat: 'Premium' },
  { img: blackcurrent, label: 'Black Currant Cake', size: 'medium', cat: 'Classic' },
  { img: butterscartch, label: 'Butterscotch Cake', size: 'tall', cat: 'Special' },
  { img: blueberry, label: 'Blueberry Cake', size: 'medium', cat: 'Fruit' },
  { img: mango, label: 'Mango Cake', size: 'short', cat: 'Fruit' },
  { img: rainbow, label: 'Rainbow Cake', size: 'tall', cat: 'Kids' },
  { img: chocoCashew, label: 'Custom chocoCashew', size: 'medium', cat: 'Custom' },
  { img: chocoAlmond, label: 'Wedding chocoAlmond ', size: 'short', cat: 'Wedding' },
  { img: chocoChip, label: 'chocoChip Special', size: 'medium', cat: 'Special' },
  { img: chocoOreo, label: 'chocoOreo', size: 'tall', cat: 'OREO' },
  { img: butterscartchBlast, label: 'butterscartchBlast Cake', size: 'tall', cat: 'Classic' },
  { img: chocoPista, label: 'chocoPista Cake', size: 'short', cat: 'Premium' },
  { img: whiteforest, label: 'whiteforestCake', size: 'medium', cat: 'Classic' },
  { img: rasamalai, label: 'rasamalaiCake', size: 'tall', cat: 'Special' },
  { img: naturalFruit, label: 'naturalFruit Cake', size: 'medium', cat: 'Fruit' },
  {img: pinapple,label:' pinapple cake',size:'medium',cat:'fruit'},
  { img: ferror , label: 'ferror  Cake', size: 'tall', cat: 'Special' },
  { img: mangoBlast, label: 'mangoBlast Cake', size: 'medium', cat: 'Fruit' },
  { img: chocoTruffle , label: 'chocoTruffle  Cake', size: 'tall', cat: 'Special' },
  {img: chocoWalnut , label: 'chocoWalnut  Cake', size: 'tall', cat: 'Special' },
]

function Lightbox({ item, onClose }) {
  return (
    <motion.div
      className="gallery-lightbox-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="gallery-lightbox"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.88, opacity: 0 }}
        transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="gallery-lightbox-close" onClick={onClose}>✕</button>
        <img src={item.img} alt={item.label} className="gallery-lightbox-img" />
        <div className="gallery-lightbox-info">
          <span className="cake-card-category">{item.cat}</span>
          <div className="cake-detail-name" style={{ fontSize: '1.2rem', marginTop: 6 }}>{item.label}</div>
          <a
            href={`https://wa.me/918072411032?text=${encodeURIComponent(`Hi! I'd like to order a ${item.label} from The Cake Bite 🎂`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-cta"
            style={{ display: 'inline-flex', marginTop: 18 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.122 1.526 5.854L0 24l6.306-1.504A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.001-1.369l-.36-.213-3.727.888.924-3.618-.234-.372A9.818 9.818 0 0112 2.182c5.423 0 9.818 4.395 9.818 9.818s-4.395 9.818-9.818 9.818z" />
            </svg>
            Order This Cake
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="gallery" className="gallery-section">
      {/* Header */}
      <div className="gallery-header">
        <motion.div
          className="section-eyebrow"
          style={{ justifyContent: 'center' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

        </motion.div>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Edible <em>Art</em>
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A glimpse into the moments we've made sweeter. Click any cake to order.
        </motion.p>
      </div>

      {/* Masonry grid */}
      <div className="gallery-masonry">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className={`gallery-item ${item.size}`}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.55,
              delay: (i % 4) * 0.09,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            onClick={() => setLightbox(item)}
            style={{ cursor: 'pointer' }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="gallery-item-inner">
              <img
                src={item.img}
                alt={item.label}
                className="gallery-real-img"
              />
            </div>

            <div className="gallery-overlay">
              <span className="gallery-overlay-cat">{item.cat}</span>
              <span className="gallery-overlay-text">{item.label}</span>
              <span className="gallery-overlay-cta">Tap to Order →</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View more CTA */}
      <motion.div
        style={{ textAlign: 'center', marginTop: 52 }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.a
          href="https://www.instagram.com/the_cake_bite_loveatfirstbite/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
          style={{ display: 'inline-flex' }}
          whileHover={{ scale: 1.04, y: -3 }}
          whileTap={{ scale: 0.97 }}
        >
          📸 View Full Gallery on Instagram
        </motion.a>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox item={lightbox} onClose={() => setLightbox(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}