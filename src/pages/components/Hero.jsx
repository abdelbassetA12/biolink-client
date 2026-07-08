 

import {
  FaRocket,
  FaPlayCircle,
  FaArrowRight,
  FaUsers,
  FaMousePointer,
  FaMobileAlt
} from "react-icons/fa";

import PhonePreview from "./PhonePreview";
import AnalyticsPanel from "./AnalyticsPanel";
 

export default function Hero() {
  return (
    <section className="hero">

      {/* Background Effects */}
      <div className="hero-bg">
        <div className="glow glow1"></div>
        <div className="glow glow2"></div>
        <div className="glow glow3"></div>

        <div className="grid-overlay"></div>
      </div>

      <div className="hero-container">

        {/* ================= LEFT ================= */}

        <div className="hero-left">

          <div className="hero-logo">

            <img
              src="/Qevora.log.png"
              alt="Qevora"
            />

          </div>

          <div className="hero-badge">

            <FaRocket />

            <span>
              The Modern qevora Platform
            </span>

          </div>

          <h1 className="hero-title">

            One Link For Your

            <br />

            <span>Entire Digital World</span>

          </h1>

          <p className="hero-description">

            Create a beautiful and professional bio link page,

            share all your content in one place,

            grow your audience and track every click

            with powerful analytics.

          </p>

          <div className="hero-buttons">

            <button className="primary-btn">

              Get Started Free

              <FaArrowRight />

            </button>

            <button className="secondary-btn">

              <FaPlayCircle />

              Watch Demo

            </button>

          </div>

          <div className="hero-stats">

            <div className="stat-card">

              <div className="stat-icon">

                <FaUsers />

              </div>

              <div>

                <h2>50K+</h2>

                <span>Active Users</span>

              </div>

            </div>

            <div className="stat-card">

              <div className="stat-icon">

                <FaMousePointer />

              </div>

              <div>

                <h2>12M+</h2>

                <span>Monthly Clicks</span>

              </div>

            </div>

            <div className="stat-card">

              <div className="stat-icon">

                <FaMobileAlt />

              </div>

              <div>

                <h2>99%</h2>

                <span>Mobile Optimized</span>

              </div>

            </div>

          </div>

        </div>

        {/* ================= CENTER ================= */}

        <div className="hero-center">

          <PhonePreview />

        </div>

        {/* ================= RIGHT ================= */}

        <div className="hero-right">

          <AnalyticsPanel />

        </div>

      </div>

    </section>
  );
}