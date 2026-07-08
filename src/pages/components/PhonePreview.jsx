import {
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaLinkedin,
  FaGlobe,
  FaShoppingBag,
  FaEnvelope,
  FaArrowRight
} from "react-icons/fa";

export default function PhonePreview() {
  return (
    <div className="phone">

      <div className="phone-notch"></div>

      <div className="phone-content">

        {/* PROFILE */}

        <div className="profile">

          <div className="profile-avatar">
            Q
          </div>

          <h3>@yourname</h3>

          <p>
            Content Creator • Designer • Developer
          </p>

          <div className="social-icons">

            <div className="social-btn">
              <FaInstagram />
            </div>

            <div className="social-btn">
              <FaYoutube />
            </div>

            <div className="social-btn">
              <FaTiktok />
            </div>

            <div className="social-btn">
              <FaLinkedin />
            </div>

          </div>

        </div>

        {/* LINKS */}

        <div className="phone-links">

          <div className="phone-link">

            <div className="left">

              <div className="icon">
                <FaGlobe />
              </div>

              <div>

                <h4>My Website</h4>

                <span>
                  Visit my official website
                </span>

              </div>

            </div>

            <FaArrowRight />

          </div>

          <div className="phone-link">

            <div className="left">

              <div className="icon youtube">
                <FaYoutube />
              </div>

              <div>

                <h4>YouTube Channel</h4>

                <span>
                  Watch my latest videos
                </span>

              </div>

            </div>

            <FaArrowRight />

          </div>

          <div className="phone-link">

            <div className="left">

              <div className="icon shop">
                <FaShoppingBag />
              </div>

              <div>

                <h4>My Products</h4>

                <span>
                  Check out my digital store
                </span>

              </div>

            </div>

            <FaArrowRight />

          </div>

          <div className="phone-link">

            <div className="left">

              <div className="icon mail">
                <FaEnvelope />
              </div>

              <div>

                <h4>Contact Me</h4>

                <span>
                  Work and collaborations
                </span>

              </div>

            </div>

            <FaArrowRight />

          </div>

        </div>

      </div>

    </div>
  );
}