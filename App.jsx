import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Shop from '../src/pages/Shop';
import Contact from '../src/pages/Contact';
import Cart from '../src/pages/Cart';
import Checkout from '../src/pages/Checkout';
import AdminDashboard from '../src/pages/AdminDashboard';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [lumeMode, setLumeMode] = useState(false);

  const toggleLumeMode = () => {
    setLumeMode(!lumeMode);
    document.body.classList.toggle('lume-active');
  };

  return (
    <Router>
      <div className="app-wrapper">
        <Routes>
          {/* Checkout & Admin have separate standalone layouts */}
          <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />
          <Route path="/admin" element={<AdminDashboard />} />

          {/* Main Storefront Layout with Header & Footer */}
          <Route
            path="/*"
            element={
              <>
                {/* TOP ANNOUNCEMENT BAR */}
                <div className="top-announcement">
                  <marquee behavior="scroll" direction="left" scrollamount="5" onMouseOver={(e) => e.currentTarget.stop()} onMouseOut={(e) => e.currentTarget.start()}>
                    <span>Welcome to CHRONO STORE Online</span> &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>100% AUTHENTIC WATCHES</span> &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>OVER THOUSANDS OF SATISFIED CUSTOMERS</span> &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>FREE NATIONWIDE SHIPPING ON ALL ORDERS</span>
                  </marquee>
                </div>

                {/* LUXURY NAVBAR */}
                <nav className="navbar">
                  <Link to="/" className="brand">CHRONO STORE</Link>
                  <div className="nav-links">
                    <NavLink to="/" end>HOME</NavLink>
                    <NavLink to="/about">ABOUT US</NavLink>
                    <NavLink to="/shop">SHOP</NavLink>
                    <NavLink to="/contact">CONTACT US</NavLink>
                    <NavLink to="/cart" className="cart-pill">CART ({cart.length})</NavLink>
                  </div>
                </nav>

                {/* DYNAMIC PAGE CONTENT */}
                <main className="main-content">
                  <Routes>
                    <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/shop" element={<Shop cart={cart} setCart={setCart} />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
                  </Routes>
                </main>

                {/* GUARANTEE BAR */}
                <div className="guarantee-bar">
                  <div className="guarantee-item">
                    <span className="g-icon">🛡️</span>
                    <div>
                      <strong>Official Warranty</strong>
                      <p>100% authentic watches with official brand warranty.</p>
                    </div>
                  </div>
                  <div className="guarantee-item">
                    <span className="g-icon">📦</span>
                    <div>
                      <strong>Free Nationwide Shipping</strong>
                      <p>Secure door-to-door delivery across the country.</p>
                    </div>
                  </div>
                  <div className="guarantee-item">
                    <span className="g-icon">🔄</span>
                    <div>
                      <strong>Easy Exchange</strong>
                      <p>Hassle-free 7-day return and exchange policy.</p>
                    </div>
                  </div>
                  <div className="guarantee-item">
                    <span className="g-icon">🔒</span>
                    <div>
                      <strong>Secure Checkout</strong>
                      <p>Encrypted online payments and Cash on Delivery.</p>
                    </div>
                  </div>
                </div>

                {/* MULTI-COLUMN FOOTER */}
                <footer className="luxury-footer">
                  <div className="footer-grid">
                    <div>
                      <h3 className="footer-brand">CHRONO STORE</h3>
                      <p className="footer-text">Curating world-class Swiss and Japanese timepieces for the modern connoisseur of luxury.</p>
                    </div>
                    <div>
                      <h4>QUICK LINKS</h4>
                      <Link to="/">Home</Link>
                      <Link to="/shop">Collection</Link>
                      <Link to="/about">Our Heritage</Link>
                      <Link to="/contact">Support</Link>
                    </div>
                    <div>
                      <h4>CUSTOMER CARE</h4>
                      <a href="#shipping">Shipping Policy</a>
                      <a href="#returns">Returns & Exchanges</a>
                      <a href="#warranty">Watch Care Guide</a>
                      <a href="#faq">FAQs</a>
                    </div>
                    <div>
                      <h4>BOUTIQUE HOURS</h4>
                      <p className="footer-text">Monday – Saturday: 10:00 AM – 8:00 PM</p>
                      <p className="footer-text">Email: support@chronostore.com</p>
                    </div>
                  </div>
                  <div className="footer-bottom">
                    <p>&copy; 2026 CHRONO STORE. All Rights Reserved. Designed with Luxury Aesthetics.</p>
                  </div>
                </footer>

                {/* FLOATING NIGHT-VISION LUME MODE BUTTON */}
                <button className="lume-toggle-btn" onClick={toggleLumeMode}>
                  {lumeMode ? '☀️ DAYLIGHT DIAL' : '🌙 NIGHT LUME MODE'}
                </button>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;