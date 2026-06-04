import './Footer.css'
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
  FaXTwitter,
  FaFacebookF,
} from 'react-icons/fa6'
import footerlogo from "../assets/image/logo.png.bv.webp"
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
            <li><a href="/">Home</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">NRI</a></li>
            <li><a href="/">Joint Development</a></li>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">Blogs</a></li>
            <li><a href="/">Careers</a></li>
            <li><a href="/">Awards</a></li>
            {/* <li><a href="/">News & Media</a></li>
            <li><a href="/">Disclaimer</a></li>
            <li><a href="/">Privacy Policy</a></li> */}
          </ul>
        </div>

        {/* CENTER LOGO */}
        <div className="footer-center">

          <div className="footer-logo-box">
          <img
              src={footerlogo}
              alt="Voora Logo"
              className="footer-logo"
            />

            

            <h4>CREDAI</h4>
          </div>

          <div className="follow-section">
            <h3>FOLLOW US</h3>

            <div className="social-icons">
              <a href="/"><FaFacebookF /></a>
              <a href="/"><FaInstagram /></a>
              <a href="/"><FaXTwitter /></a>
              <a href="/"><FaLinkedinIn /></a>
              <a href="/"><FaYoutube /></a>
              <a href="/"><FaPinterestP /></a>
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
            <li><a href="/">Voora One Sea</a></li>
            <li><a href="/">Voora Westside</a></li>
            <li><a href="/">Voora Beckford</a></li>
            <li><a href="/">Voora Highway Haven</a></li>
            <li><a href="/">Voora Vidyasagar Oswal Gardens T-Block</a></li>
            <li><a href="/">Voora Ocean's27</a></li>
            <li><a href="/">Voora Techedge</a></li>
          </ul>
        </div>

        {/* COMPLETED PROJECTS */}
        <div className="footer-col">
          <h3>COMPLETED PROJECTS</h3>

          <ul>
            <li><a href="/">Voora Narayana</a></li>
            <li><a href="/">Voora Prakash</a></li>
            <li><a href="/">Voora Villa 96</a></li>
            <li><a href="/">Voora Vidyasagar Oswal</a></li>
            <li><a href="/">Voora Saraswathi</a></li>
            <li><a href="/">Voora Gitanjali</a></li>
            <li><a href="/">Voora Vijayasree</a></li>
            <li><a href="/">Voora Pritvi</a></li>
            <li><a href="/">Voora Radha Homes</a></li>
            {/* <li><a href="/">Voora J.K. Tower</a></li>
            <li><a href="/">Voora Sreela Terrace</a></li>
            <li><a href="/">Voora Ashwin</a></li> */}
          </ul>
        </div>

      </div>
    </footer>
  )
}
