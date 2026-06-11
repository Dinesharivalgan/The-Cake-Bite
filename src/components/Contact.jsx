// components/Contact.jsx
import { motion } from 'framer-motion'
import location from '../assets/location.png'

const contactCards = [
  {
    icon: '📞',
    label: 'Dharmapuri',
    value: '+91 8072411032',
    href: 'tel:+916381665877',
  },
  {
    icon: '📞',
    label: 'Kaveripattinam',
    value: '+91 96260 33182',
    href: 'tel:+919626033182',
  },
  {
    icon: '✉️',
    label: 'Email Us',
    value: 'thecakebite1627@gmail.com',
    href: 'mailto:thecakebite1627@gmail.com',
  },
  {
    icon: '📸',
    label: 'Instagram',
    value: '@THE_CAKE_BITE_LOVEATFIRSTBITE',
    href: 'https://www.instagram.com/the_cake_bite_loveatfirstbite/',
  },
]

const branchDetails = [
  {
    name: 'Dharmapuri Branch',
    address: 'Krishnagiri to Dharmapuri Main Road, DHARMAPURI - 635701',
    phones: ['8072411032', '63816 65877'],
    mapUrl: 'https://maps.app.goo.gl/A99Hm6Uisnqna1ux8?g_st=aw',
  },
  {
    name: 'Kaveripattinam Branch',
    address: 'No.30, Panakal Street, KAVERIPATTINAM, Krishnagiri - 635112',
    phones: ['96260 33182', '77087 92435'],
    mapUrl: 'https://maps.app.goo.gl/ZSVceK5oXSANrZ5U7?g_st=aw',
  },
]

/* Pre-encode WhatsApp message once — avoids encoding on every click */
const WA_URL = `https://wa.me/916381665877?text=${encodeURIComponent("Hi! I'd like to order a cake from The Cake Bite 🎂")}`

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">

        {/* ── Left column ── */}
        <div className="contact-left">
          <motion.div
            className="section-eyebrow"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >Get In Touch</motion.div>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >Order Your <em>Dream Cake</em></motion.h2>

          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >WhatsApp us for the fastest response. We confirm orders within 30 minutes.</motion.p>

          {/* WhatsApp CTA — pre-built URL, no encoding on click */}
          <motion.a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-cta"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.32 }}
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.122 1.526 5.854L0 24l6.306-1.504A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.001-1.369l-.36-.213-3.727.888.924-3.618-.234-.372A9.818 9.818 0 0112 2.182c5.423 0 9.818 4.395 9.818 9.818s-4.395 9.818-9.818 9.818z"/>
            </svg>
            Chat on WhatsApp
          </motion.a>

          {/* Contact cards */}
          <div className="contact-cards">
            {contactCards.map((card, i) => (
              <motion.a
                key={card.label}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="contact-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.55 }}
              >
                <div className="contact-card-icon">{card.icon}</div>
                <div className="contact-card-info">
                  <div className="contact-card-label">{card.label}</div>
                  <div className="contact-card-value">{card.value}</div>
                </div>
                <span className="contact-card-arrow">→</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* ── Right column ── */}
        <div className="contact-right">

          {/* Branch cards with exact map links */}
          {branchDetails.map((branch, i) => (
            <motion.div
              key={branch.name}
              className="branch-location-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
            >
              <div className="branch-location-top">
                <div className="branch-location-info">
                  <div className="branch-location-name">{branch.name}</div>
                  <div className="branch-location-addr">{branch.address}</div>
                  <div className="branch-location-phones">
                    {branch.phones.map(p => (
                      <a key={p} href={`tel:+91${p.replace(/\s/g, '')}`} className="branch-phone-link">
                        📞 {p}
                      </a>
                    ))}
                  </div>
                </div>
                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="branch-map-btn"
                  aria-label={`Open ${branch.name} on Google Maps`}
                >
                  <img src={location} alt="" className="branch-map-icon-img" />
                  <span>Get Directions</span>
                </a>
              </div>
            </motion.div>
          ))}

          {/* Shop Details */}
          <motion.div
            className="contact-hours"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <div className="hours-title">🏪 Shop Details</div>
            {[
              { day: 'Branch 1', time: 'Krishnagiri to Dharmapuri Main Road, DHARMAPURI - 635701' },
              { day: 'Branch 2', time: 'No.30, Panakal Street, KAVERIPATTINAM - 635112' },
              { day: 'Dharmapuri', time: '8072411032 / 63816 65877' },
              { day: 'Kaveripattinam', time: '96260 33182 / 77087 92435' },
              { day: 'Email', time: 'thecakebite1627@gmail.com' },
            ].map(({ day, time }) => (
              <div key={day} className="hours-row">
                <span className="hours-day">{day}</span>
                <span className="hours-time">{time}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}