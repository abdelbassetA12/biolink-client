 
import LinkRenderer from "../components/LinkRenderer";
import SocialRenderer from "../components/SocialRenderer";

export default function Theme7({ user, links }) {

  const theme = "theme7";

  return (
    <div className={`${theme}-container`}>

      {/* Background Decorative Elements */}
      <div className={`${theme}-shape theme7-shape-one`}></div>
      <div className={`${theme}-shape theme7-shape-two`}></div>

      <main className={`${theme}-card`}>

        {/* Profile Header */}
        <div className={`${theme}-profile`}>

          <div className={`${theme}-avatar-wrapper`}>
            <img
              className={`${theme}-avatar`}
              src={user.avatar || ""}
              alt={user.username || "Profile"}
            />
          </div>

          <h1 className={`${theme}-username`}>
            {user.username}
          </h1>

          {user.bio && (
            <p className={`${theme}-bio`}>
              {user.bio}
            </p>
          )}

        </div>

        {/* Social Icons */}
        <SocialRenderer
          user={user}
          theme={theme}
        />

        {/* Links */}
        <div className={`${theme}-links-wrapper`}>
          <LinkRenderer
            links={links}
            theme={theme}
          />
        </div>

        {/* Footer */}
        <div className={`${theme}-footer`}>
          <span>Powered by</span>
          <strong>Qevora</strong>
        </div>

      </main>

      <style>
{`

/* =========================================================
   THEME 7
   MODERN LIGHT / CLEAN / PROFESSIONAL
   ========================================================= */


/* =========================================================
   GLOBAL / CONTAINER
   ========================================================= */

.theme7-container,
.theme7-container * {
  box-sizing: border-box;
}

.theme7-container {
  position: relative;

  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  padding: 60px 20px;

  overflow: hidden;

  background:
    radial-gradient(
      circle at 10% 10%,
      rgba(99, 102, 241, 0.12),
      transparent 30%
    ),
    radial-gradient(
      circle at 90% 90%,
      rgba(14, 165, 233, 0.10),
      transparent 30%
    ),
    linear-gradient(
      135deg,
      #f8fafc 0%,
      #eef6ff 45%,
      #fdfcff 100%
    );

  color: #0f172a;

  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Arial,
    sans-serif;
}


/* =========================================================
   DECORATIVE BACKGROUND SHAPES
   ========================================================= */

.theme7-shape {
  position: absolute;

  border-radius: 50%;

  pointer-events: none;

  z-index: 0;

  filter: blur(5px);
}

.theme7-shape-one {
  width: 380px;
  height: 380px;

  top: -150px;
  left: -120px;

  background:
    radial-gradient(
      circle,
      rgba(96, 165, 250, 0.20),
      rgba(96, 165, 250, 0)
    );
}

.theme7-shape-two {
  width: 420px;
  height: 420px;

  bottom: -200px;
  right: -160px;

  background:
    radial-gradient(
      circle,
      rgba(167, 139, 250, 0.18),
      rgba(167, 139, 250, 0)
    );
}


/* =========================================================
   MAIN CARD
   ========================================================= */

.theme7-card {
  position: relative;

  z-index: 2;

  width: 100%;
  max-width: 520px;

  padding: 42px 34px 28px;

  text-align: center;

  background:
    rgba(255, 255, 255, 0.82);

  border:
    1px solid rgba(255, 255, 255, 0.8);

  border-radius: 30px;

  box-shadow:
    0 25px 70px rgba(15, 23, 42, 0.10),
    0 8px 25px rgba(59, 130, 246, 0.06);

  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}


/* =========================================================
   PROFILE
   ========================================================= */

.theme7-profile {
  width: 100%;

  display: flex;

  flex-direction: column;

  align-items: center;

  text-align: center;
}


/* =========================================================
   AVATAR WRAPPER
   ========================================================= */

.theme7-avatar-wrapper {
  position: relative;

  width: 118px;
  height: 118px;

  padding: 4px;

  margin-bottom: 20px;

  border-radius: 50%;

  background:
    linear-gradient(
      135deg,
      #60a5fa,
      #818cf8,
      #c084fc
    );

  box-shadow:
    0 12px 30px rgba(99, 102, 241, 0.22);
}


/* =========================================================
   AVATAR
   ========================================================= */

.theme7-avatar {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;

  border-radius: 50%;

  border: 4px solid #ffffff;

  background: #f1f5f9;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.theme7-avatar:hover {
  transform:
    translateY(-5px)
    scale(1.03);

  box-shadow:
    0 18px 40px rgba(15, 23, 42, 0.20);
}


/* =========================================================
   USERNAME
   ========================================================= */

.theme7-username {
  margin: 0;

  color: #0f172a;

  font-size: 28px;

  font-weight: 800;

  line-height: 1.3;

  letter-spacing: -0.5px;
}


/* =========================================================
   BIO
   ========================================================= */

.theme7-bio {
  width: 100%;
  max-width: 460px;

  margin:
    10px auto 22px;

  color: #64748b;

  font-size: 15px;

  font-weight: 400;

  line-height: 1.7;

  overflow-wrap: break-word;
}


/* =========================================================
   SOCIAL ICONS
   ========================================================= */

.theme7-socials {
  width: 100%;

  display: flex;

  justify-content: center;

  align-items: center;

  flex-wrap: wrap;

  gap: 12px;

  margin:
    0 0 28px;
}


.theme7-social-link {
  width: 44px;
  height: 44px;

  display: flex;

  justify-content: center;

  align-items: center;

  border-radius: 50%;

  background: #ffffff;

  border:
    1px solid #e2e8f0;

  color: #475569;

  text-decoration: none;

  box-shadow:
    0 5px 18px rgba(15, 23, 42, 0.07);

  transition:
    transform 0.25s ease,
    background 0.25s ease,
    color 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}


.theme7-social-link:hover {
  transform:
    translateY(-4px);

  background:
    linear-gradient(
      135deg,
      #3bf6f6,
      #c963f1c5
    );

  color: #ffffff;

  border-color:
    transparent;

  box-shadow:
    0 10px 25px rgba(59, 130, 246, 0.25);
}


.theme7-social-icon {
  display: flex;

  justify-content: center;

  align-items: center;

  font-size: 21px;

  color: #64748b;

  transition:
    color 0.25s ease,
    transform 0.25s ease;
}


.theme7-social-link:hover
.theme7-social-icon {
  color: #ffffff;

  transform:
    scale(1.08);
}


/* =========================================================
   LINKS WRAPPER
   ========================================================= */

.theme7-links-wrapper {
  width: 100%;

  margin-top: 5px;
}


/* =========================================================
   LINKS CONTAINER
   ========================================================= */

.theme7-link {
  width: 100%;

  display: flex;

  flex-direction: column;

  gap: 15px;

  margin-top: 5px;
}


/* =========================================================
   DEFAULT LINK
   ========================================================= */

.theme7-default-link {
  position: relative;

  width: 100%;
  min-height: 58px;

  display: flex;

  justify-content: center;

  align-items: center;

  padding:
    15px 20px;

  border-radius: 15px;

  background: #ffffff;

  border:
    1px solid #e2e8f0;

  color: #0f172a;

  text-decoration: none;

  font-size: 15px;

  font-weight: 700;

  line-height: 1.4;

  box-shadow:
    0 6px 18px rgba(15, 23, 42, 0.05);

  transition:
    transform 0.25s ease,
    background 0.25s ease,
    color 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}


/* Decorative Side Line */

.theme7-default-link::before {
  content: "";

  position: absolute;

  left: 0;

  top: 10px;
  bottom: 10px;

  width: 4px;

  border-radius:
    0 5px 5px 0;

  background:
    linear-gradient(
      180deg,
      #64748b,
      #a2a4a7
    );

  opacity: 0;

  transform:
    scaleY(0.5);

  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}


.theme7-default-link:hover {
  transform:
    translateY(-3px);

  background: #ffffff;

  color: #0f172a;

  border-color:
    #6366f1;

  box-shadow:
    0 12px 28px rgba(99, 102, 241, 0.14);
}


.theme7-default-link:hover::before {
  opacity: 1;

  transform:
    scaleY(1);
}


/* =========================================================
   WHATSAPP LINK
   ========================================================= */

.theme7-whatsapp-link {
  width: 100%;

  display: block;

  text-decoration: none;
}


.theme7-whatsapp {
  width: 100%;
  min-height: 58px;

  display: flex;

  justify-content: center;

  align-items: center;

  padding:
    15px 20px;

  border-radius: 15px;

  background: #22c55e;

  color: #ffffff;

  font-size: 15px;

  font-weight: 700;

  box-shadow:
    0 8px 20px rgba(34, 197, 94, 0.20);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}


.theme7-whatsapp:hover {
  transform:
    translateY(-3px);

  box-shadow:
    0 14px 30px rgba(34, 197, 94, 0.30);
}


/* =========================================================
   IMAGE LINKS
   ========================================================= */

.theme7-link a img {
  max-width: 100%;

  object-fit: cover;
}


/* =========================================================
   VIDEO
   ========================================================= */

.theme7-video,
.theme7-youtube,
.theme7-youtube-playlist {
  width: 100%;

  overflow: hidden;

  border-radius: 16px;

  background: #000000;

  box-shadow:
    0 10px 30px rgba(15, 23, 42, 0.12);
}


.theme7-video iframe,
.theme7-youtube iframe,
.theme7-youtube-playlist iframe {
  width: 100%;

  display: block;

  border: none;
}


.theme7-video iframe,
.theme7-youtube iframe {
  height: 280px;
}


.theme7-youtube-playlist iframe {
  height: 320px;
}


/* =========================================================
   FORM
   ========================================================= */

.theme7-form {
  width: 100%;

  display: flex;

  flex-direction: column;

  gap: 14px;

  padding: 20px;

  border-radius: 18px;

  background: #ffffff;

  border:
    1px solid #e2e8f0;

  box-shadow:
    0 8px 25px rgba(15, 23, 42, 0.06);

  text-align: left;
}


.theme7-form-fields {
  width: 100%;

  display: flex;

  flex-direction: column;

  gap: 12px;
}


.theme7-form-field {
  width: 100%;

  display: flex;

  flex-direction: column;

  gap: 6px;
}


.theme7-form-label {
  color: #334155;

  font-size: 13px;

  font-weight: 600;
}


/* =========================================================
   FORM INPUTS
   ========================================================= */

.theme7-form-input,
.theme7-link input,
.theme7-link textarea {
  width: 100%;

  box-sizing: border-box;

  padding:
    12px 14px;

  border-radius: 10px;

  border:
    1px solid #e2e8f0;

  background: #f8fafc;

  color: #0f172a;

  outline: none;

  font-family: inherit;

  font-size: 14px;

  line-height: 1.5;

  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease;
}


.theme7-form-input {
  min-height: 48px;
}


.theme7-link input,
.theme7-link textarea {
  border-radius: 12px;
}


.theme7-form-input:hover {
  border-color:
    #cbd5e1;
}


.theme7-form-input:focus,
.theme7-link input:focus,
.theme7-link textarea:focus {
  background: #ffffff;

  border-color:
    #6366f1;

  box-shadow:
    0 0 0 3px rgba(99, 102, 241, 0.12);
}


.theme7-form-input::placeholder,
.theme7-link input::placeholder,
.theme7-link textarea::placeholder {
  color:
    #94a3b8;
}


.theme7-form textarea,
.theme7-link textarea {
  min-height: 110px;

  resize: vertical;
}


/* =========================================================
   FORM BUTTON
   ========================================================= */

.theme7-form-button {
  width: 100%;

  min-height: 50px;

  padding:
    13px 18px;

  border: none;

  border-radius: 10px;

  background:
    #6366f1;

  color: #ffffff;

  font-family: inherit;

  font-size: 14px;

  font-weight: 700;

  cursor: pointer;

  transition:
    transform 0.25s ease,
    background 0.25s ease,
    box-shadow 0.25s ease;
}


.theme7-form-button:hover {
  transform:
    translateY(-2px);

  background:
    #4f46e5;

  box-shadow:
    0 10px 22px rgba(99, 102, 241, 0.25);
}


.theme7-form-button:active {
  transform:
    translateY(0);
}


/* =========================================================
   PRODUCT LINK MODE
   ========================================================= */

.theme7-product-link {
  width: 100%;

  display: flex;

  align-items: center;

  gap: 14px;

  padding: 12px;

  border-radius: 16px;

  background: #ffffff;

  border:
    1px solid #e2e8f0;

  color: #0f172a;

  text-decoration: none;

  box-shadow:
    0 6px 20px rgba(15, 23, 42, 0.06);

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}


.theme7-product-link:hover {
  transform:
    translateY(-3px);

  border-color:
    #6366f1;

  box-shadow:
    0 12px 28px rgba(99, 102, 241, 0.15);
}


.theme7-product-link img {
  width: 65px;
  height: 65px;

  flex-shrink: 0;

  object-fit: cover;

  border-radius: 12px;

  background:
    #f1f5f9;
}


.theme7-product-link-content {
  flex: 1;

  min-width: 0;

  text-align: left;
}


.theme7-product-link-title {
  margin: 0;

  color:
    #0f172a;

  font-size: 15px;

  font-weight: 700;

  line-height: 1.4;

  overflow: hidden;

  text-overflow: ellipsis;

  white-space: nowrap;
}


.theme7-product-link-price {
  margin-top: 6px;

  color:
    #10b981;

  font-size: 14px;

  font-weight: 800;
}


/* =========================================================
   PRODUCT CARD
   ========================================================= */

.theme7-product-card {
  width: 100%;

  display: block;

  overflow: hidden;

  border-radius: 18px;

  background: #ffffff;

  border:
    1px solid #e2e8f0;

  color:
    #0f172a;

  text-decoration: none;

  box-shadow:
    0 8px 25px rgba(15, 23, 42, 0.07);

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}


.theme7-product-card:hover {
  transform:
    translateY(-4px);

  border-color:
    #6366f1;

  box-shadow:
    0 15px 35px rgba(99, 102, 241, 0.16);
}


.theme7-product-card img {
  display: block;

  width: 100%;

  height: 240px;

  object-fit: cover;

  background:
    #f1f5f9;
}


.theme7-product-content {
  padding: 16px;

  text-align: left;
}


.theme7-product-title {
  margin: 0;

  color:
    #0f172a;

  font-size: 16px;

  font-weight: 700;

  line-height: 1.5;
}


.theme7-product-price {
  margin:
    10px 0 0;

  color:
    #10b981;

  font-size: 16px;

  font-weight: 800;
}


.theme7-product-description {
  margin:
    8px 0 0;

  color:
    #64748b;

  font-size: 13px;

  line-height: 1.6;
}


/* =========================================================
   EMPTY CONTENT
   ========================================================= */

.theme7-empty {
  width: 100%;

  padding: 25px;

  text-align: center;

  color:
    #94a3b8;

  font-size: 14px;
}


/* =========================================================
   FOOTER
   ========================================================= */

.theme7-footer {
  display: flex;

  justify-content: center;

  align-items: center;

  gap: 5px;

  margin-top: 30px;

  color:
    #94a3b8;

  font-size: 11px;

  letter-spacing: 0.3px;
}


.theme7-footer strong {
  color:
    #64748b;

  font-weight: 700;
}


/* =========================================================
   ACCESSIBILITY
   ========================================================= */

.theme7-default-link:focus-visible,
.theme7-whatsapp-link:focus-visible,
.theme7-social-link:focus-visible,
.theme7-product-link:focus-visible,
.theme7-product-card:focus-visible,
.theme7-form-button:focus-visible {
  outline:
    3px solid rgba(99, 102, 241, 0.30);

  outline-offset:
    3px;
}


/* =========================================================
   TABLET
   ========================================================= */

@media (max-width: 768px) {

  .theme7-container {
    padding:
      40px 16px;
  }

  .theme7-card {
    max-width:
      500px;

    padding:
      36px 26px 25px;

    border-radius:
      26px;
  }

  .theme7-avatar-wrapper {
    width:
      105px;

    height:
      105px;
  }

  .theme7-username {
    font-size:
      26px;
  }

  .theme7-bio {
    font-size:
      14px;
  }

  .theme7-socials {
    margin-bottom:
      25px;
  }

  .theme7-video iframe,
  .theme7-youtube iframe {
    height:
      250px;
  }

  .theme7-youtube-playlist iframe {
    height:
      290px;
  }

}


/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 480px) {

  .theme7-container {
    min-height:
      100dvh;

    padding:
      20px 12px;
  }

  .theme7-card {
    padding:
      30px 18px 22px;

    border-radius:
      22px;
  }

  .theme7-avatar-wrapper {
    width:
      92px;

    height:
      92px;

    margin-bottom:
      16px;
  }

  .theme7-avatar {
    border-width:
      4px;
  }

  .theme7-username {
    font-size:
      23px;
  }

  .theme7-bio {
    font-size:
      14px;

    line-height:
      1.6;

    margin-bottom:
      20px;
  }

  .theme7-socials {
    gap:
      9px;

    margin-bottom:
      22px;
  }

  .theme7-social-link {
    width:
      40px;

    height:
      40px;
  }

  .theme7-social-icon {
    font-size:
      18px;
  }

  .theme7-link {
    gap:
      11px;
  }

  .theme7-default-link,
  .theme7-whatsapp {
    min-height:
      54px;

    padding:
      13px 15px;

    font-size:
      14px;
  }

  .theme7-video iframe,
  .theme7-youtube iframe {
    height:
      210px;
  }

  .theme7-youtube-playlist iframe {
    height:
      240px;
  }

  .theme7-form {
    padding:
      16px;

    border-radius:
      15px;
  }

  .theme7-link form {
    padding:
      16px;

    border-radius:
      16px;
  }

  .theme7-product-card img {
    height:
      210px;
  }

  .theme7-product-link img {
    width:
      58px;

    height:
      58px;
  }

  .theme7-footer {
    margin-top:
      24px;
  }

}


/* =========================================================
   VERY SMALL DEVICES
   ========================================================= */

@media (max-width: 360px) {

  .theme7-container {
    padding:
      15px 10px;
  }

  .theme7-card {
    padding:
      25px 14px 20px;
  }

  .theme7-avatar-wrapper {
    width:
      82px;

    height:
      82px;
  }

  .theme7-username {
    font-size:
      20px;
  }

  .theme7-social-link {
    width:
      37px;

    height:
      37px;
  }

  .theme7-social-icon {
    font-size:
      16px;
  }

  .theme7-default-link,
  .theme7-whatsapp {
    font-size:
      13px;

    padding:
      12px;
  }

  .theme7-form {
    padding:
      13px;
  }

}

`}
</style>
      
     

     

    </div>
  );
}
 
