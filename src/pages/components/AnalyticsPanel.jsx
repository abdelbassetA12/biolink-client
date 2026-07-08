import {
  FaArrowTrendUp,
  FaEye,
 FaComputerMouse,
  FaGlobe,
  FaChartLine
} from "react-icons/fa6";

export default function AnalyticsPanel() {
  return (
    <div className="analytics">

      {/* TOP CARD */}

      <div className="analytics-card large">

        <div className="analytics-header">

          <div>

            <span className="analytics-label">
              Monthly Performance
            </span>

            <h3>Analytics</h3>

          </div>

          <div className="analytics-growth">
            <FaArrowTrendUp />
            +28%
          </div>

        </div>

        {/* Fake Chart */}

        <div className="chart">

          <div className="chart-line">

            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

          </div>

        </div>

      </div>

      {/* SMALL STATS */}

      <div className="analytics-grid">

        <div className="mini-card">

          <div className="mini-icon">
            <FaEye />
          </div>

          <h4>84K</h4>

          <span>Total Views</span>

        </div>

        <div className="mini-card">

          <div className="mini-icon purple">
            <FaComputerMouse />
          </div>

          <h4>12.8K</h4>

          <span>Clicks</span>

        </div>

      </div>

      {/* MAP */}

      <div className="analytics-card map-card">

        <div className="analytics-header">

          <h4>Audience</h4>

          <FaGlobe />

        </div>

        <div className="world-map">

          🌍

        </div>

        <div className="countries">

          <div>
            <span>USA</span>
            <strong>42%</strong>
          </div>

          <div>
            <span>Europe</span>
            <strong>31%</strong>
          </div>

          <div>
            <span>Asia</span>
            <strong>27%</strong>
          </div>

        </div>

      </div>

      {/* LAST CARD */}

      <div className="analytics-card">

        <div className="analytics-header">

          <h4>Growth</h4>

          <FaChartLine />

        </div>

        <div className="growth-number">

          +154%

        </div>

        <p>
          More engagement than last month
        </p>

      </div>

    </div>
  );
}