import './Footer.css'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
=======
>>>>>>> VOORA-Rakshana
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
  FaXTwitter,
  FaFacebookF,
} from 'react-icons/fa6'
<<<<<<< HEAD
=======

>>>>>>> VOORA-Rakshana
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ADDRESS */}
        <div className="footer-col">
          <h3>ADDRESS</h3>

          <p className="address-title">
            Voora Group Corporate Office
          </p>

          <p>
            139, Dr. Radha Krishnan Salai,
            <br />
            Mylapore, Chennai,
            <br />
            Tamil Nadu 600004
          </p>

          <div className="footer-contact">
            <h4>Email</h4>
            <a href="mailto:vpd@voora.co.in">
              vpd@voora.co.in
            </a>
          </div>

          <div className="footer-contact">
            <h4>Phone</h4>
            <a href="tel:+914440419999">
              +91 44 4041 9999
            </a>

            <a href="tel:+917299222115">
              +91 72 9922 2115
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h3>QUICK LINK</h3>

          <ul>
<<<<<<< HEAD
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><a href="/#top">NRI</a></li>
            <li><a href="/#top">Joint Development</a></li>
            <li><a href="/#top">Contact Us</a></li>
            <li><a href="/#top">Blogs</a></li>
            <li><a href="/#top">Careers</a></li>
            <li><a href="/#top">Awards</a></li>
=======
            <li><a href="/">Home</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">NRI</a></li>
            <li><a href="/">Joint Development</a></li>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">Blogs</a></li>
            <li><a href="/">Careers</a></li>
            <li><a href="/">Awards</a></li>
            <li><a href="/">News & Media</a></li>
            <li><a href="/">Disclaimer</a></li>
            <li><a href="/">Privacy Policy</a></li>
>>>>>>> VOORA-Rakshana
          </ul>
        </div>

        {/* CENTER LOGO */}
        <div className="footer-center">

          <div className="footer-logo-box">
            <img
<<<<<<< HEAD
              src="data:image/png;base64,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"
              alt="Voora Logo"
              className="footer-logo"
            />

=======
            src="https://voora.co.in/wp-content/uploads/al_opt_content/IMAGE/voora.co.in/wp-content/uploads/2024/10/logo.png.bv.webp?bv_host=voora.co.in"              alt="Voora Logo"
              className="footer-logo"
            />

            

>>>>>>> VOORA-Rakshana
            <h4>CREDAI</h4>
          </div>

          <div className="follow-section">
            <h3>FOLLOW US</h3>

            <div className="social-icons">
<<<<<<< HEAD
              <a href="https://www.facebook.com/voora" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://www.instagram.com/voora" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://twitter.com/voora" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
              <a href="https://www.linkedin.com/company/voora" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href="https://www.youtube.com/@voora" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              <a href="https://in.pinterest.com/voora" target="_blank" rel="noopener noreferrer"><FaPinterestP /></a>
=======
              <a href="/"><FaFacebookF /></a>
              <a href="/"><FaInstagram /></a>
              <a href="/"><FaXTwitter /></a>
              <a href="/"><FaLinkedinIn /></a>
              <a href="/"><FaYoutube /></a>
              <a href="/"><FaPinterestP /></a>
>>>>>>> VOORA-Rakshana
            </div>
          </div>

          <p className="copyright">
            Copyright 2025 © Voora – All rights Reserved.
          </p>
        </div>

        {/* ONGOING PROJECTS */}
        <div className="footer-col">
          <h3>ONGOING PROJECTS</h3>

          <ul>
<<<<<<< HEAD
            <li><Link to="/voora-one-sea">Voora One Sea</Link></li>
            <li><Link to="/voora-westside">Voora Westside</Link></li>
            <li><Link to="/voora-beckford">Voora Beckford</Link></li>
            <li><Link to="/voora-highway-haven">Voora Highway Haven</Link></li>
            <li><Link to="/voora-vidyasagar-t-block">Voora Vidyasagar T-Block</Link></li>
            <li><Link to="/voora-oceans-27">Voora Ocean's 27</Link></li>
            <li><Link to="/voora-tech-edge">Voora Tech Edge</Link></li>
=======
            <li><a href="/">Voora One Sea</a></li>
            <li><a href="/">Voora Westside</a></li>
            <li><a href="/">Voora Beckford</a></li>
            <li><a href="/">Voora Highway Haven</a></li>
            <li><a href="/">Voora Vidyasagar Oswal Gardens T-Block</a></li>
            <li><a href="/">Voora Ocean's27</a></li>
            <li><a href="/">Voora Techedge</a></li>
>>>>>>> VOORA-Rakshana
          </ul>
        </div>

        {/* COMPLETED PROJECTS */}
        <div className="footer-col">
          <h3>COMPLETED PROJECTS</h3>

          <ul>
<<<<<<< HEAD
            <li><Link to="/completed">Voora Narayana</Link></li>
            <li><Link to="/completed">Voora Prakash</Link></li>
            <li><Link to="/completed">Voora Villa 96</Link></li>
            <li><Link to="/completed">Voora Vidyasagar Oswal</Link></li>
            <li><Link to="/completed">Voora Saraswathi</Link></li>
            <li><Link to="/completed">Voora Gitanjali</Link></li>
            <li><Link to="/completed">Voora Vijayasree</Link></li>
            <li><Link to="/completed">Voora Pritvi</Link></li>
            <li><Link to="/completed">Voora Radha Homes</Link></li>
=======
            <li><a href="/">Voora Narayana</a></li>
            <li><a href="/">Voora Prakash</a></li>
            <li><a href="/">Voora Villa 96</a></li>
            <li><a href="/">Voora Vidyasagar Oswal</a></li>
            <li><a href="/">Voora Saraswathi</a></li>
            <li><a href="/">Voora Gitanjali</a></li>
            <li><a href="/">Voora Vijayasree</a></li>
            <li><a href="/">Voora Pritvi</a></li>
            <li><a href="/">Voora Radha Homes</a></li>
            <li><a href="/">Voora J.K. Tower</a></li>
            <li><a href="/">Voora Sreela Terrace</a></li>
            <li><a href="/">Voora Ashwin</a></li>
>>>>>>> VOORA-Rakshana
          </ul>
        </div>

      </div>
    </footer>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> VOORA-Rakshana
