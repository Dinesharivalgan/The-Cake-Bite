// components/Reviews.jsx
import { motion } from 'framer-motion'
import dineshImg from '../assets/dinesh.jpeg'

const reviews = [
  {
    name: 'Dinesh A.',
    location: 'Dharmapuri',
    rating: 5,
    text: 'Best birthday cake I have ever tasted! The Red Velvet was super soft and the fresh cream was rich and delicious. Delivered right on time. Will definitely order again! 🎂',
    cake: 'Red Velvet Cake',
    img: dineshImg,
  },
  {
    name: 'Priya S.',
    location: 'Dharmapuri',
    rating: 5,
    text: "Ordered a custom cake for my sister's birthday — they completed it in just 2 hours! The design was exactly what I wanted. Amazing quality and super fresh cream. 100% recommend!",
    cake: 'Custom Birthday Cake',
    img: null,
  },
  {
    name: 'Mathesh A.',
    location: 'Kaveripattinam',
    rating: 5,
    text: 'Ordered the Truffle Blast and got a full ½ kg free on top. The taste was absolutely amazing. My whole family loved it. Best deal in Kaveripattinam!',
    cake: 'Truffle Blast',
    img: null,
  },
  {
    name: 'Kavya M.',
    location: 'Dharmapuri',
    rating: 5,
    text: 'The Black Forest cake was delivered within 30 minutes! So fresh and creamy. The icing was perfect and the sponge was so soft. Thank you The Cake Bite! ❤️',
    cake: 'Black Forest Cake',
    img: null,
  },
  {
    name: 'Prakash R.',
    location: 'Dharmapuri',
    rating: 5,
    text: 'Ordered the Triple Choco Loaded Brownie — absolutely fudgy and rich. The WhatsApp response was instant and the delivery was super fast. Love this shop!',
    cake: 'Triple Choco Loaded Brownie',
    img: null,
  },
  {
    name: 'Anjali N.',
    location: 'Kaveripattinam',
    rating: 5,
    text: 'Wedding cake turned out perfect — exactly the custom design I asked for! Very professional team. Guests kept asking where we ordered from. 10/10! 💍',
    cake: 'Custom Wedding Cake',
    img: null,
  },
  {
    name: 'Gokul V.',
    location: 'Dharmapuri',
    rating: 5,
    text: "Tried the Rainbow Cake for my son's birthday. The colors inside were so beautiful and the kids went crazy! Fresh cream, good quality, great price. Highly recommend!",
    cake: 'Rainbow Cake',
    img: null,
  },
  {
    name: 'Gopi R.',
    location: 'Kaveripattinam',
    rating: 5,
    text: 'Starting at ₹350 for 1 kg is unbelievable value. I ordered the Butterscotch Cake and it was restaurant quality. FREE delivery within 5 km is a huge bonus!',
    cake: 'Butterscotch Cake',
    img: null,
  },
  {
    name: 'Jose P.',
    location: 'Kaveripattinam',
    rating: 5,
    text: 'Very hygienic and freshly made. I could taste the difference from other shops immediately. The Choco Oreo cake was rich, creamy and absolutely worth every rupee!',
    cake: 'Choco Oreo Cake',
    img: null,
  },
]

/* Initial letter avatar — no emoji, clean text */
function InitialAvatar({ name }) {
  const initials = name
    .split(' ')
    .slice(0, 2)
    .map(n => n[0])
    .join('')
    .toUpperCase()
  return (
    <div className="review-avatar review-avatar-initial" aria-hidden="true">
      {initials}
    </div>
  )
}

function Stars({ count = 5 }) {
  return (
    <div className="review-stars" aria-label={`${count} out of 5 stars`}>
      {'★'.repeat(count)}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="reviews-section">
      <div className="reviews-bg-orb" />

      <div className="reviews-inner">
        <div className="reviews-header">
          <motion.div
            className="section-eyebrow"
            style={{ justifyContent: 'center' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Customer Love
          </motion.div>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            What Our <em>Customers Say</em>
          </motion.h2>

          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Real stories from Dharmapuri &amp; Kaveripattinam — our happiness is their smile.
          </motion.p>

          <motion.div
            className="reviews-overall"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="reviews-overall-num">4.9</span>
            <div>
              <div className="reviews-overall-stars">★★★★★</div>
              <div className="reviews-overall-label">Average Rating · 1000+ Happy Customers</div>
            </div>
          </motion.div>
        </div>

        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              className="review-card"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -5 }}
            >
              <div className="review-card-top">
                {/* Photo if available, else clean initial-letter avatar */}
                {r.img ? (
                  <img
                    src={r.img}
                    alt={r.name}
                    className="review-avatar review-avatar-photo"
                  />
                ) : (
                  <InitialAvatar name={r.name} />
                )}

                <div className="review-meta">
                  <div className="review-name">{r.name}</div>
                  <div className="review-location">
                    {/* SVG map pin — replaces emoji */}
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0, color:'#a66a38' }}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {r.location}
                  </div>
                </div>
                <Stars count={r.rating} />
              </div>
              <p className="review-text">"{r.text}"</p>
              <div className="review-cake-tag">
                {/* Simple cake icon — no emoji */}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink:0 }}>
                  <path d="M12 2C10.3 2 9 3.3 9 5s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zM4 9v2h16V9H4zm-2 4v9h20v-9H2zm2 2h4v5H4v-5zm6 0h4v5h-4v-5zm6 0h4v5h-4v-5z"/>
                </svg>
                {r.cake}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{ textAlign: 'center', marginTop: 52 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            href={`https://wa.me/916381665877?text=${encodeURIComponent("Hi! I'd like to order a cake from The Cake Bite 🎂")}`}
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
            Be Our Next Happy Customer
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}