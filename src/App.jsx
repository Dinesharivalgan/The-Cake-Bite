// App.jsx
import { useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './Global.css'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Cakes    from './components/Cakes'
import Brownies from './components/Brownies'
import About    from './components/About'
import Gallery  from './components/Gallery'
import Reviews  from './components/Reviews'
import FAQ      from './components/FAQ'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

/* ── Custom Cursor ── */
function CustomCursor() {
  const dotRef      = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    const dot      = dotRef.current
    const follower = followerRef.current
    if (!dot || !follower) return

    let fx = 0, fy = 0, mx = 0, my = 0

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      dot.style.left = mx + 'px'
      dot.style.top  = my + 'px'
    }

    let rafId
    const lerp = (a, b, t) => a + (b - a) * t
    const tick = () => {
      fx = lerp(fx, mx, 0.14)
      fy = lerp(fy, my, 0.14)
      follower.style.left = fx + 'px'
      follower.style.top  = fy + 'px'
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}      className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  )
}

/* ── Floating WhatsApp Button ── */
const WA_URL = `https://wa.me/916381665877?text=${encodeURIComponent("Hi! I'd like to order a cake from The Cake Bite 🎂")}`

function FloatingWhatsApp() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-wa"
      aria-label="Order on WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.122 1.526 5.854L0 24l6.306-1.504A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.001-1.369l-.36-.213-3.727.888.924-3.618-.234-.372A9.818 9.818 0 0112 2.182c5.423 0 9.818 4.395 9.818 9.818s-4.395 9.818-9.818 9.818z"/>
      </svg>
      <span className="floating-wa-label">Order Now</span>
    </a>
  )
}

/* ── Home Page ── */
function HomePage() {
  return (
    <>
      <Hero     />
      <Cakes    />
      <Brownies />
      <About    />
      <FAQ      />
    </>
  )
}

/* ── Gallery Page ── */
function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return <Gallery />
}

/* ── Reviews Page ── */
function ReviewsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return <Reviews />
}

/* ── Contact Page ── */
function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return <Contact />
}

/* ── About Page ── */
function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return <About />
}

export default function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <FloatingWhatsApp />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}