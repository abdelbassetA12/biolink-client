import {
  FaBolt,
  FaPalette,
  FaChartLine,
  FaMobileAlt,
  FaShieldAlt,
  FaRocket
} from "react-icons/fa";

const features = [
  {
    icon: <FaBolt />,
    title: "Fast Setup",
    description:
      "Create your professional bio link page in less than a minute with a smooth and intuitive experience."
  },
  {
    icon: <FaPalette />,
    title: "Custom Themes",
    description:
      "Beautiful modern themes fully optimized for all devices and designed to increase engagement."
  },
  {
    icon: <FaChartLine />,
    title: "Advanced Analytics",
    description:
      "Track clicks, audience behavior and performance with real-time detailed analytics."
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile First",
    description:
      "Optimized perfectly for smartphones, tablets and desktops without breaking layouts."
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Platform",
    description:
      "Your data and links are protected with modern security standards and reliable infrastructure."
  },
  {
    icon: <FaRocket />,
    title: "Grow Faster",
    description:
      "Increase conversions and direct your audience exactly where you want with smart tools."
  }
];

export default function FeaturesRow() {
  return (
    <section className="features">

      <div className="features-header">

        <span className="features-badge">
          Powerful Features
        </span>

        <h2>
          Everything You Need
        </h2>

        <p>
          Powerful tools to build your personal brand,
          grow your audience and manage your online presence
          professionally.
        </p>

      </div>

      <div className="features-grid">

        {features.map((feature, index) => (
          <div
            className="feature-card"
            key={index}
          >
            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>
              {feature.title}
            </h3>

            <p>
              {feature.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}