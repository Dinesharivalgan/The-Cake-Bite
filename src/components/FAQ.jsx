// components/FAQ.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'Do you offer free delivery?',
    a: 'Yes! We offer FREE delivery within 4–5 km of both our branches — Dharmapuri and Kaveripattinam. For locations beyond that, a small delivery charge may apply. Contact us on WhatsApp for details.',
  },
  {
    q: 'What is the minimum order quantity?',
    a: 'Our minimum order starts from ½ kg (half kilogram) for cakes. For brownies, you can order as few as 1 piece. Bulk orders for events and parties are also welcome!',
  },
  {
    q: 'Do you take advance orders? How early?',
    a: 'Yes, we strongly recommend booking at least 1–2 days in advance, especially for custom and wedding cakes. For urgent orders, WhatsApp us and we will do our best to fulfill same-day.',
  },
  {
    q: 'Can I get a fully custom cake design?',
    a: 'Absolutely! We accept custom designs — photo prints, themed cakes, name writing, custom flavours and shapes. Share your idea on WhatsApp and we will bring it to life.',
  },
  {
    q: 'What is the "Buy 1 kg Get ½ kg FREE" offer?',
    a: 'When you order 1 kg of any Blast cake (Mango Blast, Truffle Blast, Blue Berry Blast, Pineapple Blast, Butter Scotch Blast, Rasamalai Blast, Red Blast), you get a FREE ½ kg cake along with it!',
  },
  {
    q: 'How do I place an order?',
    a: 'The easiest way is to WhatsApp us at +91 84898 47578. Tell us the cake name, size (½ kg or 1 kg), date needed, and delivery address. We will confirm your order within 30 minutes.',
  },
  {
    q: 'Do you use fresh and natural ingredients?',
    a: 'Yes! We use 100% natural ingredients — real butter, fresh cream, and no artificial preservatives. Every cake is baked fresh on order for the best taste and quality.',
  },
  {
    q: 'Where are your branches located?',
    a: 'We have two branches: Branch 1 — Krishnagiri to Dharmapuri Main Road, Dharmapuri 635701. Branch 2 — No.30, Panakal Street, Kaveripattinam, Krishnagiri 635112.',
  },
]

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className={`faq-item${open ? ' open' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <button
        className="faq-question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{faq.q}</span>
        <motion.span
          className="faq-icon"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
        >+</motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p>{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="faq-section">
      <div className="faq-inner">
        {/* Header */}
        <div className="faq-header">
          <motion.div
            className="section-eyebrow"
            style={{ justifyContent: 'center' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Got Questions?
          </motion.div>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Frequently Asked <em>Questions</em>
          </motion.h2>

          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything you need to know about ordering from The Cake Bite.
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          className="faq-cta"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="faq-cta-text">Still have questions?</div>
          <a
            href={`https://wa.me/916381665877?text=${encodeURIComponent("Hi! I have a question about ordering from The Cake Bite.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-cta"
            style={{ display: 'inline-flex' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.122 1.526 5.854L0 24l6.306-1.504A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.001-1.369l-.36-.213-3.727.888.924-3.618-.234-.372A9.818 9.818 0 0112 2.182c5.423 0 9.818 4.395 9.818 9.818s-4.395 9.818-9.818 9.818z"/>
            </svg>
            Ask on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}