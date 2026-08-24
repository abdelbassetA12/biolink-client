
import LinkRenderer from "../components/LinkRenderer";
import SocialRenderer from "../components/SocialRenderer";

export default function Theme8({ user, links }) {
  const theme = "theme8";

  return (
    <div className={`${theme}-container`}>

      {/* Decorative Background */}
      <div className={`${theme}-orb theme8-orb-one`} />
      <div className={`${theme}-orb theme8-orb-two`} />
      <div className={`${theme}-grid`} />

      <main className={`${theme}-card`}>

        {/* ================================
            PROFILE
        ================================= */}

        <section className={`${theme}-profile`}>

          <div className={`${theme}-avatar-wrapper`}>

            <div className={`${theme}-avatar-ring`} />

            <img
              className={`${theme}-avatar`}
              src={user?.avatar || ""}
              alt={user?.username || "Profile"}
            />

            <span className={`${theme}-online-dot`} />

          </div>

          <h1 className={`${theme}-username`}>
            {user?.username || "Your Name"}
          </h1>

          {user?.bio && (
            <p className={`${theme}-bio`}>
              {user.bio}
            </p>
          )}

        </section>


        {/* ================================
            SOCIAL MEDIA
        ================================= */}

        <div className={`${theme}-social-wrapper`}>

          <SocialRenderer
            user={user}
            theme={theme}
          />

        </div>


        {/* ================================
            LINKS
        ================================= */}

        <section className={`${theme}-links-wrapper`}>

          <LinkRenderer
            links={links || []}
            theme={theme}
          />

        </section>


        {/* ================================
            FOOTER
        ================================= */}

        <footer className={`${theme}-footer`}>

          <span>Created with</span>

          <strong>Qevora</strong>

        </footer>

      </main>
      <style>
        {`
        /* =========================================================
   THEME 8
   FUTURISTIC GLASS / NEON LUXURY
   FULL RESPONSIVE CSS
========================================================= */


/* =========================================================
   RESET
========================================================= */

.theme8-container,
.theme8-container *,
.theme8-container *::before,
.theme8-container *::after {
  box-sizing: border-box;
}


/* =========================================================
   MAIN CONTAINER
========================================================= */

.theme8-container {
  position: relative;

  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  padding: 60px 20px;

  overflow: hidden;

  color: #ffffff;

  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Helvetica,
    Arial,
    sans-serif;

  background:
    radial-gradient(
      circle at 10% 5%,
      rgba(124, 58, 237, 0.22),
      transparent 28%
    ),
    radial-gradient(
      circle at 90% 25%,
      rgba(6, 182, 212, 0.16),
      transparent 30%
    ),
    radial-gradient(
      circle at 50% 100%,
      rgba(236, 72, 153, 0.14),
      transparent 35%
    ),
    #07080d;

  isolation: isolate;
}


/* =========================================================
   BACKGROUND ORBS
========================================================= */

.theme8-orb {
  position: fixed;

  width: 360px;
  height: 360px;

  border-radius: 50%;

  pointer-events: none;

  filter: blur(90px);

  opacity: 0.55;

  z-index: -1;
}


.theme8-orb-one {
  top: -160px;
  left: -120px;

  background:
    rgba(124, 58, 237, 0.32);

  animation:
    theme8FloatOne 12s ease-in-out infinite;
}


.theme8-orb-two {
  right: -160px;
  bottom: -150px;

  background:
    rgba(6, 182, 212, 0.24);

  animation:
    theme8FloatTwo 15s ease-in-out infinite;
}


@keyframes theme8FloatOne {

  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }

  50% {
    transform: translate3d(40px, 30px, 0);
  }

}


@keyframes theme8FloatTwo {

  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }

  50% {
    transform: translate3d(-35px, -25px, 0);
  }

}


/* =========================================================
   BACKGROUND GRID
========================================================= */

.theme8-grid {
  position: fixed;

  inset: 0;

  z-index: -1;

  pointer-events: none;

  opacity: 0.16;

  background-image:
    linear-gradient(
      rgba(255, 255, 255, 0.035) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.035) 1px,
      transparent 1px
    );

  background-size: 45px 45px;

  mask-image:
    linear-gradient(
      to bottom,
      black 0%,
      black 40%,
      transparent 100%
    );

  -webkit-mask-image:
    linear-gradient(
      to bottom,
      black 0%,
      black 40%,
      transparent 100%
    );
}


/* =========================================================
   MAIN CARD
========================================================= */

.theme8-card {
  position: relative;

  width: 100%;
  max-width: 560px;

  padding:
    48px
    30px
    28px;

  border-radius: 30px;

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.075),
      rgba(255, 255, 255, 0.025)
    );

  border:
    1px solid
    rgba(255, 255, 255, 0.10);

  box-shadow:
    0 35px 100px
    rgba(0, 0, 0, 0.60),

    inset 0 1px 0
    rgba(255, 255, 255, 0.08);

  backdrop-filter:
    blur(25px);

  -webkit-backdrop-filter:
    blur(25px);

  z-index: 2;

  overflow: hidden;
}


/* =========================================================
   CARD TOP LIGHT
========================================================= */

.theme8-card::before {
  content: "";

  position: absolute;

  top: 0;
  left: 10%;

  width: 80%;
  height: 1px;

  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(139, 92, 246, 0.9),
      rgba(6, 182, 212, 0.7),
      transparent
    );

  pointer-events: none;
}


/* =========================================================
   CARD INNER GLOW
========================================================= */

.theme8-card::after {
  content: "";

  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  pointer-events: none;

  background:
    radial-gradient(
      circle at 50% 0%,
      rgba(139, 92, 246, 0.07),
      transparent 35%
    );

  z-index: -1;
}


/* =========================================================
   PROFILE
========================================================= */

.theme8-profile {
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
}


/* =========================================================
   AVATAR WRAPPER
========================================================= */

.theme8-avatar-wrapper {
  position: relative;

  width: 130px;
  height: 130px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 22px;
}


/* =========================================================
   AVATAR RING
========================================================= */

.theme8-avatar-ring {
  position: absolute;

  inset: 0;

  border-radius: 50%;

  background:
    conic-gradient(
      from 0deg,
      #8b5cf6,
      #06b6d4,
      #ec4899,
      #8b5cf6
    );

  animation:
    theme8Spin 7s linear infinite;

  box-shadow:
    0 0 25px
    rgba(139, 92, 246, 0.25);
}


.theme8-avatar-ring::after {
  content: "";

  position: absolute;

  inset: 3px;

  border-radius: 50%;

  background:
    #07080d;
}


@keyframes theme8Spin {

  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }

}


/* =========================================================
   AVATAR
========================================================= */

.theme8-avatar {
  position: relative;

  z-index: 2;

  width: 114px;
  height: 114px;

  display: block;

  object-fit: cover;

  border-radius: 50%;

  border:
    4px solid
    #07080d;

  background:
    #11131b;

  box-shadow:
    0 15px 40px
    rgba(0, 0, 0, 0.45);
}


/* =========================================================
   ONLINE DOT
========================================================= */

.theme8-online-dot {
  position: absolute;

  z-index: 5;

  right: 2px;
  bottom: 8px;

  width: 21px;
  height: 21px;

  border-radius: 50%;

  background:
    #22c55e;

  border:
    4px solid
    #07080d;

  box-shadow:
    0 0 0 4px
    rgba(34, 197, 94, 0.14),

    0 0 22px
    rgba(34, 197, 94, 0.65);
}


/* =========================================================
   USERNAME
========================================================= */

.theme8-username {
  max-width: 100%;

  margin: 0;

  color: #ffffff;

  font-size: 29px;

  line-height: 1.25;

  font-weight: 800;

  letter-spacing: -0.7px;

  overflow-wrap: anywhere;
}


/* =========================================================
   BIO
========================================================= */

.theme8-bio {
  width: 100%;
  max-width: 440px;

  margin:
    12px auto
    0;

  color:
    rgba(255, 255, 255, 0.58);

  font-size: 15px;

  line-height: 1.75;

  overflow-wrap: anywhere;
}


/* =========================================================
   SOCIAL WRAPPER
========================================================= */

.theme8-social-wrapper {
  width: 100%;

  margin:
    28px
    0
    30px;
}


/* =========================================================
   SOCIAL CONTAINER
========================================================= */

.theme8-socials {
  width: 100%;

  display: flex;

  align-items: center;

  justify-content: center;

  flex-wrap: wrap;

  gap: 10px;
}


/* =========================================================
   SOCIAL LINK
========================================================= */

.theme8-social-link {
  width: 46px;
  height: 46px;

  display: flex;

  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  color:
    rgba(255, 255, 255, 0.65);

  background:
    rgba(255, 255, 255, 0.045);

  border:
    1px solid
    rgba(255, 255, 255, 0.09);

  border-radius: 14px;

  text-decoration: none;

  transition:
    transform 0.3s ease,
    color 0.3s ease,
    background 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}


.theme8-social-link:hover {
  transform:
    translateY(-5px);

  color:
    #ffffff;

  background:
    linear-gradient(
      135deg,
      #8b5cf6,
      #ec4899
    );

  border-color:
    transparent;

  box-shadow:
    0 12px 30px
    rgba(139, 92, 246, 0.35);
}


.theme8-social-icon {
  color: inherit;

  font-size: 20px;

  transition:
    transform 0.3s ease;
}


.theme8-social-link:hover
.theme8-social-icon {
  transform:
    scale(1.1);
}


/* =========================================================
   LINKS WRAPPER
========================================================= */

.theme8-links-wrapper {
  width: 100%;
}


/* =========================================================
   LINKS CONTAINER
========================================================= */

.theme8-link {
  width: 100%;

  display: flex;

  flex-direction: column;

  gap: 14px;
}


/* =========================================================
   DEFAULT LINKS
========================================================= */

.theme8-container
.theme8-default-link {
  position: relative;

  width: 100%;
  min-height: 62px;

  display: flex;

  align-items: center;

  justify-content: center;

  padding:
    16px
    22px;

  overflow: hidden;

  color:
    #ffffff;

  text-decoration: none;

  font-size: 15px;

  font-weight: 650;

  line-height: 1.4;

  text-align: center;

  background:
    rgba(255, 255, 255, 0.045);

  border:
    1px solid
    rgba(255, 255, 255, 0.10);

  border-radius: 17px;

  box-shadow:
    0 10px 30px
    rgba(0, 0, 0, 0.18);

  transition:
    transform 0.3s ease,
    background 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}


.theme8-default-link::before {
  content: "";

  position: absolute;

  top: 0;
  left: -120%;

  width: 80%;
  height: 100%;

  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.12),
      transparent
    );

  transform:
    skewX(-25deg);

  transition:
    left 0.7s ease;

  pointer-events: none;
}


.theme8-default-link:hover {
  transform:
    translateY(-4px);

  background:
    linear-gradient(
      135deg,
      rgba(139, 92, 246, 0.16),
      rgba(236, 72, 153, 0.08)
    );

  border-color:
    rgba(139, 92, 246, 0.45);

  box-shadow:
    0 18px 40px
    rgba(0, 0, 0, 0.30),

    0 0 25px
    rgba(139, 92, 246, 0.10);
}


.theme8-default-link:hover::before {
  left: 140%;
}


/* =========================================================
   WHATSAPP
========================================================= */

.theme8-container
.theme8-whatsapp-link {
  display: block;

  width: 100%;

  color: inherit;

  text-decoration: none;
}


.theme8-container
.theme8-whatsapp {
  width: 100%;
  min-height: 62px;

  display: flex;

  align-items: center;
  justify-content: center;

  padding:
    16px
    22px;

  border-radius: 17px;

  color:
    #ffffff;

  font-size: 15px;

  font-weight: 700;

  background:
    linear-gradient(
      135deg,
      #16a34a,
      #22c55e
    );

  box-shadow:
    0 12px 30px
    rgba(34, 197, 94, 0.20);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}


.theme8-whatsapp:hover {
  transform:
    translateY(-4px);

  box-shadow:
    0 18px 40px
    rgba(34, 197, 94, 0.35);
}


/* =========================================================
   VIDEO
========================================================= */

.theme8-container
.theme8-video,

.theme8-container
.theme8-youtube {
  position: relative;

  width: 100%;

  aspect-ratio: 16 / 9;

  overflow: hidden;

  border-radius: 20px;

  background:
    #000000;

  border:
    1px solid
    rgba(255, 255, 255, 0.10);

  box-shadow:
    0 20px 45px
    rgba(0, 0, 0, 0.35);
}


.theme8-container
.theme8-video-iframe,

.theme8-container
.theme8-youtube-iframe {
  width: 100%;
  height: 100%;

  display: block;

  border: none;
}


/* =========================================================
   YOUTUBE PLAYLIST
========================================================= */

.theme8-container
.theme8-youtube-playlist {
  width: 100%;

  height: 500px;

  overflow: hidden;

  border-radius: 20px;

  background:
    #000000;

  border:
    1px solid
    rgba(255, 255, 255, 0.10);

  box-shadow:
    0 20px 45px
    rgba(0, 0, 0, 0.35);
}


.theme8-container
.theme8-youtube-playlist
.theme8-youtube-iframe {
  width: 100%;
  height: 100%;

  display: block;

  border: none;
}


/* =========================================================
   PRODUCT CARD
========================================================= */

.theme8-container
.theme8-product-card {
  position: relative;

  width: 100%;

  display: flex;

  flex-direction: column;

  overflow: hidden;

  margin: 0;
  padding: 0;

  color:
    #ffffff;

  text-decoration: none;

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.075),
      rgba(255, 255, 255, 0.025)
    );

  border:
    1px solid
    rgba(255, 255, 255, 0.10);

  border-radius: 22px;

  box-shadow:
    0 15px 40px
    rgba(0, 0, 0, 0.25);

  transition:
    transform 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease;
}


.theme8-product-card:hover {
  transform:
    translateY(-7px);

  border-color:
    rgba(139, 92, 246, 0.45);

  box-shadow:
    0 25px 60px
    rgba(0, 0, 0, 0.40),

    0 0 35px
    rgba(139, 92, 246, 0.10);
}


/* =========================================================
   PRODUCT IMAGE
========================================================= */

.theme8-container
.theme8-product-image {
  width: 100%;

  height: 310px;

  min-height: 310px;

  display: block;

  margin: 0;
  padding: 0;

  object-fit: cover;

  object-position: center;

  border: none;

  outline: none;

  background:
    #11131b;

  transition:
    transform 0.6s ease;
}


.theme8-product-card:hover
.theme8-product-image {
  transform:
    scale(1.045);
}


/* =========================================================
   PRODUCT CONTENT
========================================================= */

.theme8-container
.theme8-product-content {
  width: 100%;

  display: flex;

  flex-direction: column;

  align-items: flex-start;

  gap: 8px;

  padding:
    20px
    20px
    22px;

  text-align: left;

  background:
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.035),
      rgba(255, 255, 255, 0.015)
    );
}


/* =========================================================
   PRODUCT TITLE
========================================================= */

.theme8-container
.theme8-product-card
.theme8-product-title {
  width: 100%;

  margin: 0;
  padding: 0;

  color:
    #ffffff;

  font-size: 17px;

  line-height: 1.45;

  font-weight: 700;

  overflow: hidden;

  display: -webkit-box;

  -webkit-box-orient: vertical;

  -webkit-line-clamp: 2;
}


/* =========================================================
   PRODUCT PRICE
========================================================= */

.theme8-container
.theme8-product-card
.theme8-product-price {
  width: 100%;

  margin: 0;
  padding: 0;

  color:
    #a78bfa;

  font-size: 17px;

  line-height: 1.4;

  font-weight: 800;
}


/* =========================================================
   PRODUCT LINK MODE
========================================================= */

.theme8-container
.theme8-product-link {
  position: relative;

  width: 100%;

  min-height: 100px;

  display: flex;

  align-items: center;

  gap: 16px;

  margin: 0;

  padding: 12px;

  overflow: hidden;

  color:
    #ffffff;

  text-decoration: none;

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.065),
      rgba(255, 255, 255, 0.025)
    );

  border:
    1px solid
    rgba(255, 255, 255, 0.10);

  border-radius: 18px;

  box-shadow:
    0 10px 30px
    rgba(0, 0, 0, 0.20);

  transition:
    transform 0.3s ease,
    background 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}


.theme8-product-link:hover {
  transform:
    translateY(-5px);

  background:
    linear-gradient(
      135deg,
      rgba(139, 92, 246, 0.12),
      rgba(236, 72, 153, 0.05)
    );

  border-color:
    rgba(139, 92, 246, 0.40);

  box-shadow:
    0 18px 40px
    rgba(0, 0, 0, 0.30);
}


/* =========================================================
   PRODUCT LINK IMAGE
========================================================= */

.theme8-container
.theme8-product-link-image {
  width: 76px;
  height: 76px;

  min-width: 76px;
  min-height: 76px;

  display: block;

  flex-shrink: 0;

  object-fit: cover;

  object-position: center;

  margin: 0;
  padding: 0;

  border-radius: 14px;

  background:
    #11131b;

  border:
    1px solid
    rgba(255, 255, 255, 0.08);
}


/* =========================================================
   PRODUCT LINK INFO
========================================================= */

.theme8-container
.theme8-product-link-info {
  min-width: 0;

  flex: 1;

  display: flex;

  flex-direction: column;

  align-items: flex-start;

  gap: 7px;

  overflow: hidden;

  text-align: left;
}


/* =========================================================
   PRODUCT LINK TITLE
========================================================= */

.theme8-container
.theme8-product-link
.theme8-product-title {
  width: 100%;

  margin: 0;
  padding: 0;

  color:
    #ffffff;

  font-size: 15px;

  line-height: 1.45;

  font-weight: 700;

  overflow: hidden;

  text-overflow: ellipsis;

  white-space: nowrap;
}


/* =========================================================
   PRODUCT LINK PRICE
========================================================= */

.theme8-container
.theme8-product-link
.theme8-product-price {
  width: 100%;

  margin: 0;
  padding: 0;

  color:
    #a78bfa;

  font-size: 14px;

  line-height: 1.4;

  font-weight: 800;
}


/* =========================================================
   FORM
========================================================= */

.theme8-container
.theme8-form {
  width: 100%;

  display: flex;

  flex-direction: column;

  gap: 18px;

  padding:
    22px;

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.065),
      rgba(255, 255, 255, 0.025)
    );

  border:
    1px solid
    rgba(255, 255, 255, 0.10);

  border-radius: 20px;

  box-shadow:
    0 15px 35px
    rgba(0, 0, 0, 0.20);
}


/* =========================================================
   FORM FIELDS
========================================================= */

.theme8-container
.theme8-form-fields {
  width: 100%;

  display: flex;

  flex-direction: column;

  gap: 13px;
}


.theme8-container
.theme8-form-field {
  width: 100%;
}


/* =========================================================
   FORM INPUT
========================================================= */

.theme8-container
.theme8-form-input {
  width: 100%;

  min-height: 52px;

  display: block;

  padding:
    14px
    15px;

  color:
    #ffffff;

  background:
    rgba(0, 0, 0, 0.22);

  border:
    1px solid
    rgba(255, 255, 255, 0.10);

  border-radius: 13px;

  outline: none;

  font-family: inherit;

  font-size: 14px;

  line-height: 1.5;

  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease;
}


.theme8-container
.theme8-form-input::placeholder {
  color:
    rgba(255, 255, 255, 0.40);
}


.theme8-container
.theme8-form-input:focus {
  background:
    rgba(139, 92, 246, 0.08);

  border-color:
    #8b5cf6;

  box-shadow:
    0 0 0 4px
    rgba(139, 92, 246, 0.10);
}


.theme8-container
textarea.theme8-form-input {
  min-height: 120px;

  resize: vertical;
}


/* =========================================================
   FORM BUTTON
========================================================= */

.theme8-container
.theme8-form-button {
  width: 100%;

  min-height: 54px;

  padding:
    14px
    20px;

  border: none;

  border-radius: 14px;

  color:
    #ffffff;

  background:
    linear-gradient(
      135deg,
      #7c3aed,
      #ec4899
    );

  font-family: inherit;

  font-size: 15px;

  font-weight: 700;

  cursor: pointer;

  box-shadow:
    0 12px 30px
    rgba(139, 92, 246, 0.25);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    filter 0.3s ease;
}


.theme8-form-button:hover {
  transform:
    translateY(-3px);

  filter:
    brightness(1.08);

  box-shadow:
    0 18px 40px
    rgba(139, 92, 246, 0.40);
}


.theme8-form-button:active {
  transform:
    translateY(0);
}


/* =========================================================
   FOOTER
========================================================= */

.theme8-footer {
  display: flex;

  align-items: center;

  justify-content: center;

  gap: 5px;

  margin-top:
    30px;

  color:
    rgba(255, 255, 255, 0.35);

  font-size: 11px;

  line-height: 1.5;
}


.theme8-footer strong {
  color:
    #a78bfa;

  font-weight:
    700;
}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 768px) {

  .theme8-container {
    padding:
      40px
      16px;
  }


  .theme8-card {
    max-width:
      540px;

    padding:
      40px
      25px
      25px;

    border-radius:
      26px;
  }


  .theme8-avatar-wrapper {
    width:
      112px;

    height:
      112px;
  }


  .theme8-avatar {
    width:
      98px;

    height:
      98px;
  }


  .theme8-username {
    font-size:
      26px;
  }


  .theme8-bio {
    font-size:
      14px;
  }


  .theme8-product-image {
    height:
      280px;

    min-height:
      280px;
  }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 480px) {

  .theme8-container {
    min-height:
      100dvh;

    padding:
      15px
      10px;
  }


  .theme8-card {
    width:
      100%;

    padding:
      32px
      16px
      22px;

    border-radius:
      23px;
  }


  .theme8-avatar-wrapper {
    width:
      96px;

    height:
      96px;

    margin-bottom:
      18px;
  }


  .theme8-avatar {
    width:
      86px;

    height:
      86px;

    border-width:
      3px;
  }


  .theme8-online-dot {
    width:
      17px;

    height:
      17px;

    right:
      1px;

    bottom:
      5px;

    border-width:
      3px;
  }


  .theme8-username {
    font-size:
      22px;
  }


  .theme8-bio {
    font-size:
      13px;

    line-height:
      1.65;
  }


  .theme8-social-wrapper {
    margin:
      22px
      0
      24px;
  }


  .theme8-social-link {
    width:
      41px;

    height:
      41px;

    border-radius:
      12px;
  }


  .theme8-social-icon {
    font-size:
      18px;
  }


  .theme8-link {
    gap:
      11px;
  }


  .theme8-default-link {
    min-height:
      55px;

    padding:
      14px
      16px;

    border-radius:
      14px;

    font-size:
      14px;
  }


  .theme8-whatsapp {
    min-height:
      55px;

    padding:
      14px
      16px;

    border-radius:
      14px;

    font-size:
      14px;
  }


  /* PRODUCT CARD */

  .theme8-product-card {
    border-radius:
      18px;
  }


  .theme8-product-image {
    height:
      230px;

    min-height:
      230px;
  }


  .theme8-product-content {
    padding:
      16px;
  }


  .theme8-product-title {
    font-size:
      15px;
  }


  .theme8-product-price {
    font-size:
      15px;
  }


  /* PRODUCT LINK */

  .theme8-product-link {
    min-height:
      85px;

    gap:
      12px;

    padding:
      10px;

    border-radius:
      15px;
  }


  .theme8-product-link-image {
    width:
      62px;

    height:
      62px;

    min-width:
      62px;

    min-height:
      62px;

    border-radius:
      11px;
  }


  .theme8-product-link
  .theme8-product-title {
    font-size:
      14px;
  }


  .theme8-product-link
  .theme8-product-price {
    font-size:
      13px;
  }


  .theme8-youtube-playlist {
    height:
      380px;
  }


  .theme8-form {
    padding:
      17px;

    border-radius:
      17px;
  }

}


/* =========================================================
   SMALL MOBILE
========================================================= */

@media (max-width: 360px) {

  .theme8-container {
    padding:
      10px
      7px;
  }


  .theme8-card {
    padding:
      26px
      13px
      20px;

    border-radius:
      20px;
  }


  .theme8-avatar-wrapper {
    width:
      86px;

    height:
      86px;
  }


  .theme8-avatar {
    width:
      77px;

    height:
      77px;
  }


  .theme8-username {
    font-size:
      20px;
  }


  .theme8-social-link {
    width:
      38px;

    height:
      38px;
  }


  .theme8-default-link {
    min-height:
      52px;

    padding:
      13px
      12px;

    font-size:
      13px;
  }


  .theme8-product-image {
    height:
      200px;

    min-height:
      200px;
  }


  .theme8-product-content {
    padding:
      14px;
  }


  .theme8-product-title {
    font-size:
      14px;
  }


  .theme8-product-price {
    font-size:
      14px;
  }


  .theme8-form {
    padding:
      14px;
  }

}


/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {

  .theme8-avatar-ring,
  .theme8-orb-one,
  .theme8-orb-two {
    animation:
      none;
  }


  .theme8-container *,
  .theme8-container *::before,
  .theme8-container *::after {
    transition:
      none !important;
  }

}`}
      </style>


    

    </div>
  );
}
