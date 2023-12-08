import React from 'react'
import './End.css'


const End = () => {
  return (
    <div>
 <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <img
              alt=""
              src="https://mymsi.co.id/wp-content/uploads/elementor/thumbs/Logo-MSI-baru_19Nov21-pj51x7a59nvi9993lx594j0ffu7cspeomm1e9kckeo.png"
              width="80"
              height="50"
              className="d-inline-block "
            />{' '}
          <h3>Megatechnet,Les spécialistes du Gaming en Tunisie ! Notre gamme de PC Gamer assemblés et testés en Tunisie pour des performances optimales dans vos jeux vidéos préférés avec des prix adaptés à toutes les bourses.</h3>
        </div>
        <div className="footer-section">
          <h2>Links</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contact Information</h2>
          <p>Email: Azizridane@gmail.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; . MEGATECHNET.</p>
      </div>
    </footer>

    </div>
  )
}

export default End