// components/Footer.jsx
import { motion } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import location from '../assets/location.png'
import whatsapp from '../assets/WhatsApp.png'
import gmail from '../assets/gmail.png'
import instgram from '../assets/Instagram.png'

const footerLinks = {
  Explore: [
    { label: 'Home',      href: '#home' },
    { label: 'Our Cakes', href: '#cakes' },
    { label: 'Brownies',  href: '#brownies-section' },
    { label: 'About Us',  href: '#about' },
    { label: 'Gallery',   href: '/gallery', route: true },
    { label: 'Contact',   href: '#contact' },
  ],
  Order: [
    { label: 'Birthday Cakes', href: '#cakes' },
    { label: 'Wedding Cakes',  href: '#cakes' },
    { label: 'Custom Cakes',   href: '#cakes' },
    { label: 'Brownies',       href: '#brownies-section' },
    { label: 'Bulk Orders',    href: '#contact' },
  ],
  Contact: [
    { label: 'WhatsApp Us',                    href: 'https://wa.me/916381665877' },
    { label: 'Instagram',                      href: 'https://www.instagram.com/the_cake_bite_loveatfirstbite/' },
    { label: 'thecakebite1627@gmail.com',      href: 'mailto:thecakebite1627@gmail.com' },
    { label: 'Dharmapuri — 8072411032',        href: 'tel:+918072411032' },
    { label: 'Kaveripattinam — 9626033182',    href: 'tel:+919626033182' },
  ],
}

const socialLinks = [
  { icon: instgram, href: 'https://www.instagram.com/the_cake_bite_loveatfirstbite/', label: 'Instagram' },
  { icon: whatsapp, href: 'https://wa.me/916381665877',                               label: 'WhatsApp'  },
  { icon: gmail,    href: 'mailto:thecakebite1627@gmail.com',                         label: 'Email'     },
  { icon: location, href: 'https://maps.app.goo.gl/A99Hm6Uisnqna1ux8?g_st=aw',        label: 'Location'  },
]

export default function Footer() {
  const navigate = useNavigate()
  const location_ = useLocation()

  const handleNav = (href) => {
    if (href.startsWith('#')) {
      if (location_.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          const el = document.querySelector(href)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 80)
        return
      }
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8 }}
    >
      <div className="footer-inner">

        {/* Brand column */}
        <div className="footer-brand">
          <div className="footer-logo">The Cake Bite</div>
          <div className="footer-tagline">Love At First Bite</div>

          <p className="footer-desc">
            Premium artisan bakery proudly serving Dharmapuri &amp; Kaveripattinam
            with freshly baked cakes, brownies, and custom celebration cakes since 2025.
          </p>

          {/* Timings */}
          <div className="footer-timings">
            <div className="footer-timings-title">🕐 Open Hours</div>
            <div className="footer-timings-row">
              <span>Mon – Sun</span><span>9:00 AM – 11:00 PM</span>
            </div>
            <div className="footer-timings-row">
              <span>Orders</span><span>Advance booking available</span>
            </div>
          </div>

          {/* Addresses */}
          <div className="footer-addresses">
            <a
              href="https://maps.app.goo.gl/A99Hm6Uisnqna1ux8?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-addr-link"
            >
              <img src={location} alt="" className="footer-icon-img" />
              Dharmapuri Main Road, 635701
            </a>
            <a
              href="https://maps.app.goo.gl/ZSVceK5oXSANrZ5U7?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-addr-link"
            >
              <img src={location} alt="" className="footer-icon-img" />
              No.30 Panakal Street, Kaveripattinam
            </a>
          </div>

          <div className="footer-social">
            {socialLinks.map(({ icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') || href.startsWith('mailto') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="social-link"
                aria-label={label}
                whileHover={{ scale: 1.12, y: -3 }}
                whileTap={{ scale: 0.94 }}
              >
                <img src={icon} alt={label} className="social-link-img" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([title, links], colIdx) => (
          <motion.div
            key={title}
            className="footer-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + colIdx * 0.08, duration: 0.6 }}
          >
            <div className="footer-col-title">{title}</div>
            <ul>
              {links.map(({ label, href, route }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => {
                      if (route) { e.preventDefault(); navigate('/gallery') }
                      else if (href.startsWith('#')) { e.preventDefault(); handleNav(href) }
                    }}
                    target={href.startsWith('http') || href.startsWith('mailto') ? '_blank' : undefined}
                    rel={href.startsWith('http') || href.startsWith('mailto') ? 'noopener noreferrer' : undefined}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Bottom bar */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <div className="footer-copy">
          © 2025 <span>The Cake Bite</span>. All rights reserved.
        </div>
        <div className="footer-made">
          Made with <span>♥</span> by <strong>AD Shadow Solution</strong>
        </div>
      </motion.div>
    </motion.footer>
  )
}