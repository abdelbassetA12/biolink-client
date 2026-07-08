import { FaArrowRight, FaRocket } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="cta">

      <div className="cta-container">

        {/* Background Glow */}
        <div className="cta-glow"></div>

        <span className="cta-badge">
          <FaRocket />
          Join 50,000+ Creators
        </span>

        <h2 className="cta-title">
          Start Building Your
          <br />
          <span>Bio Link Today</span>
        </h2>

        <p className="cta-description">
          Join thousands of creators, developers and businesses using
          <strong> qevora </strong>
          to grow their online presence professionally with one beautiful link.
        </p>

        <div className="cta-buttons">

          <button className="cta-primary">

            Create Your Page Now

            <FaArrowRight />

          </button>

          <button className="cta-secondary">
            View Live Demo
          </button>

        </div>

        <div className="cta-stats">

          <div className="cta-stat">
            <h3>50K+</h3>
            <span>Creators</span>
          </div>

          <div className="divider"></div>

          <div className="cta-stat">
            <h3>12M+</h3>
            <span>Monthly Clicks</span>
          </div>

          <div className="divider"></div>

          <div className="cta-stat">
            <h3>99.9%</h3>
            <span>Uptime</span>
          </div>

        </div>

      </div>

    </section>
  );
}