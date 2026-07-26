import {
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaLinkedin,
  FaYoutube,
   
  
} from "react-icons/fa6";

import { FaHeart, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}

        <div className="footer-brand">

          <div className="footer-logo">

            <div className="logo-icon">
              Q
            </div>

            <h2>qevora</h2>

          </div>

          <p>
            Build your professional bio link page,
            share everything in one place,
            grow your audience and track every click.
          </p>

          <div className="footer-socials">

            <a href="https://www.instagram.com/qevora.sit/" 
             target="_blank"
  rel="noopener noreferrer">
              <FaInstagram />
            </a>

            <a href="https://www.facebook.com/profile.php?id=61591891105526"
             target="_blank"
  rel="noopener noreferrer">
              <FaFacebook />
            </a>

            <a href="#">
              <FaXTwitter />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

            <a href="#">
              <FaYoutube />
            </a>

            
            <a href="https://www.tiktok.com/@qevora.sit"
             target="_blank"
  rel="noopener noreferrer">
              <FaTiktok />
            </a>

          </div>

        </div>

        {/* PRODUCT */}

        <div className="footer-column">

          <h3>Product</h3>

          <a href="#">Features</a>

          <a href="#">Themes</a>

          <a href="#">Analytics</a>

          <a href="#">Pricing</a>

          <a href="#">Updates</a>

        </div>

        {/* COMPANY */}

        <div className="footer-column">

          <h3>Company</h3>

          <a href="#">About</a>

          <a href="#">Blog</a>

          <a href="#">Careers</a>

          <a href="#">Contact</a>

          <a href="#">Partners</a>

        </div>

        {/* SUPPORT */}

        <div className="footer-column">

          <h3>Support</h3>

          <a href="#">Help Center</a>

          <a href="#">Documentation</a>

          <a href="#">Community</a>

          <a href="#">Status</a>

          <a href="#">API</a>

        </div>

        {/* LEGAL */}

        <div className="footer-column">

          <h3>Legal</h3>

          <a href="#">Privacy Policy</a>

          <a href="#">Terms of Service</a>

          <a href="#">Cookies</a>

          <a href="#">Security</a>

          <a href="#">Licenses</a>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>

          © {new Date().getFullYear()} <strong>qevora</strong>.
          All Rights Reserved.

        </p>

        <p>

          Made with <FaHeart className="heart" /> for creators worldwide.

        </p>

      </div>

    </footer>
  );
}