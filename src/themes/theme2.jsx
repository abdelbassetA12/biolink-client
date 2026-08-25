import LinkRenderer from "../components/LinkRenderer";
import SocialRenderer from "../components/SocialRenderer";

export default function Theme2({ user, links }) {

  const theme = "theme2";

  return (

    <div className={`${theme}-container`}>

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className={`${theme}-background`} />

      <div className={`${theme}-noise`} />

      <div className={`${theme}-orb theme2-orb-one`} />
      <div className={`${theme}-orb theme2-orb-two`} />
      <div className={`${theme}-orb theme2-orb-three`} />

      {/* =====================================================
          MAIN WRAPPER
      ===================================================== */}

      <main className={`${theme}-page`}>

        {/* =====================================================
            TOP BAR
        ===================================================== */}

        <header className={`${theme}-topbar`}>

          <div className={`${theme}-brand`}>
            <span className={`${theme}-brand-dot`} />
            <span>PROFILE</span>
          </div>

          <div className={`${theme}-topbar-line`} />

          <div className={`${theme}-topbar-status`}>
            <span className={`${theme}-status-dot`} />
            <span>ONLINE</span>
          </div>

        </header>


        {/* =====================================================
            PROFILE HERO
        ===================================================== */}

        <section className={`${theme}-hero`}>

          {/* Decorative number */}

          <div className={`${theme}-hero-number`}>
            01
          </div>


          {/* Avatar */}

          <div className={`${theme}-avatar-area`}>

            <div className={`${theme}-avatar-ring`} />

            <div className={`${theme}-avatar-ring-two`} />

            <div className={`${theme}-avatar-wrapper`}>

              <img
                src={user?.avatar || ""}
                alt={user?.username || "Profile"}
                className={`${theme}-avatar`}
              />

            </div>

            <div className={`${theme}-avatar-badge`}>
              <span />
            </div>

          </div>


          {/* Profile content */}

          <div className={`${theme}-profile-content`}>

            <div className={`${theme}-eyebrow`}>
              <span />
              DIGITAL IDENTITY
            </div>

            <h1 className={`${theme}-username`}>
              {user?.username || "Your Name"}
            </h1>

            {user?.bio && (

              <p className={`${theme}-bio`}>
                {user.bio}
              </p>

            )}

          </div>

        </section>


        {/* =====================================================
            SOCIALS
        ===================================================== */}

        <section className={`${theme}-social-section`}>

          <div className={`${theme}-section-label`}>
            <span>CONNECT</span>
            <div />
          </div>

          <div className={`${theme}-social-wrapper`}>

            <SocialRenderer
              user={user}
              theme={theme}
            />

          </div>

        </section>


        {/* =====================================================
            LINKS
        ===================================================== */}

        <section className={`${theme}-links-section`}>

          <div className={`${theme}-section-heading`}>

            <div>

              <span className={`${theme}-section-number`}>
                02
              </span>

              <h2>
                Explore
              </h2>

            </div>

            <span className={`${theme}-section-count`}>
              {links?.length || 0} LINKS
            </span>

          </div>


          <div className={`${theme}-links`}>

            <LinkRenderer
              links={links || []}
              theme={theme}
            />

          </div>

        </section>


        {/* =====================================================
            FOOTER
        ===================================================== */}

        <footer className={`${theme}-footer`}>

          <div className={`${theme}-footer-line`} />

          <div className={`${theme}-footer-content`}>

            <span>
              Designed with intention
            </span>

            <strong>
              Qevora
            </strong>

            <span>
              © {new Date().getFullYear()}
            </span>

          </div>

        </footer>

      </main>


      {/* =====================================================
          STYLES
      ===================================================== */}

      <style>

        {`

/* =========================================================
   RESET
========================================================= */

.theme2-container,
.theme2-container *,
.theme2-container *::before,
.theme2-container *::after{

  box-sizing:border-box;

}


/* =========================================================
   CONTAINER
========================================================= */

.theme2-container{
 

  position:relative;

  width:100%;

  min-height:100vh;

  padding:32px 24px 50px;

  display:flex;

  justify-content:center;

  overflow:hidden;

  isolation:isolate;

  color:#ffffff;

  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

}


/* =========================================================
   BACKGROUND
========================================================= */
.theme2-background{

  position:absolute;

  inset:0;

  z-index:-2;

  pointer-events:none;

  background:

    radial-gradient(
      circle at 15% 10%,
      rgba(99,102,241,.18),
      transparent 28%
    ),

    radial-gradient(
      circle at 85% 25%,
      rgba(139,92,246,.13),
      transparent 28%
    ),

    radial-gradient(
      circle at 50% 100%,
      rgba(236,72,153,.08),
      transparent 35%
    ),

    #07080d;

}




/* =========================================================
   NOISE
========================================================= */

.theme2-noise{

  position:fixed;

  inset:0;

  z-index:-8;

  opacity:.035;

  pointer-events:none;

  background-image:

    url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.7'/%3E%3C/svg%3E");

}


/* =========================================================
   FLOATING ORBS
========================================================= */

.theme2-orb{

  position:fixed;

  border-radius:50%;

  filter:blur(100px);

  pointer-events:none;

  z-index:-6;

  animation:theme2OrbFloat 14s ease-in-out infinite;

}


.theme2-orb-one{

  width:320px;

  height:320px;

  background:rgba(99,102,241,.13);

  top:-160px;

  left:-120px;

}


.theme2-orb-two{

  width:280px;

  height:280px;

  background:rgba(168,85,247,.10);

  right:-120px;

  top:35%;

  animation-delay:-4s;

}


.theme2-orb-three{

  width:350px;

  height:350px;

  background:rgba(236,72,153,.08);

  bottom:-220px;

  left:40%;

  animation-delay:-8s;

}


@keyframes theme2OrbFloat{

  0%,
  100%{

    transform:translate3d(0,0,0);

  }

  50%{

    transform:translate3d(0,35px,0);

  }

}


/* =========================================================
   PAGE
========================================================= */

.theme2-page{

  width:100%;

  max-width:760px;

  position:relative;

}


/* =========================================================
   TOP BAR
========================================================= */

.theme2-topbar{

  width:100%;

  display:flex;

  align-items:center;

  gap:18px;

  margin-bottom:70px;

  animation:theme2FadeDown .7s ease both;

}


.theme2-brand{

  display:flex;

  align-items:center;

  gap:9px;

  font-size:10px;

  letter-spacing:2px;

  font-weight:800;

  color:#a1a1aa;

  white-space:nowrap;

}


.theme2-brand-dot{

  width:7px;

  height:7px;

  border-radius:50%;

  background:#a78bfa;

  box-shadow:

    0 0 15px rgba(167,139,250,.9);

}


.theme2-topbar-line{

  height:1px;

  flex:1;

  background:

    linear-gradient(
      90deg,
      rgba(255,255,255,.14),
      rgba(255,255,255,.03)
    );

}


.theme2-topbar-status{

  display:flex;

  align-items:center;

  gap:7px;

  font-size:9px;

  letter-spacing:1.8px;

  color:#71717a;

  font-weight:700;

}


.theme2-status-dot{

  width:5px;

  height:5px;

  border-radius:50%;

  background:#4ade80;

  box-shadow:

    0 0 10px rgba(74,222,128,.8);

}


/* =========================================================
   HERO
========================================================= */

.theme2-hero{

  position:relative;

  display:flex;

  flex-direction:column;

  align-items:center;

  text-align:center;

  padding-bottom:65px;

}


.theme2-hero-number{

  position:absolute;

  top:-35px;

  right:0;

  font-size:10px;

  letter-spacing:3px;

  color:#3f3f46;

  font-weight:800;

}


/* =========================================================
   AVATAR AREA
========================================================= */

.theme2-avatar-area{

  position:relative;

  width:190px;

  height:190px;

  display:flex;

  justify-content:center;

  align-items:center;

  margin-bottom:35px;

}


.theme2-avatar-ring{

  position:absolute;

  inset:0;

  border-radius:50%;

  border:1px solid rgba(255,255,255,.12);

  animation:theme2Spin 20s linear infinite;

}


.theme2-avatar-ring::before{

  content:"";

  position:absolute;

  width:8px;

  height:8px;

  border-radius:50%;

  background:#a78bfa;

  box-shadow:

    0 0 20px rgba(167,139,250,.9);

  top:12px;

  left:50%;

}


.theme2-avatar-ring-two{

  position:absolute;

  inset:13px;

  border-radius:50%;

  border:1px dashed rgba(255,255,255,.10);

  animation:theme2SpinReverse 16s linear infinite;

}


@keyframes theme2Spin{

  to{

    transform:rotate(360deg);

  }

}


@keyframes theme2SpinReverse{

  to{

    transform:rotate(-360deg);

  }

}


.theme2-avatar-wrapper{

  position:relative;

  width:142px;

  height:142px;

  padding:5px;

  border-radius:50%;

  background:

    linear-gradient(
      135deg,
      rgba(255,255,255,.28),
      rgba(167,139,250,.3),
      rgba(255,255,255,.05)
    );

  box-shadow:

    0 25px 70px rgba(0,0,0,.45);

}


.theme2-avatar{

  width:100%;

  height:100%;

  display:block;

  object-fit:cover;

  border-radius:50%;

  border:4px solid #0d0e14;

  background:#111218;

  transition:

    transform .5s ease,
    filter .5s ease;

}


.theme2-avatar-wrapper:hover
.theme2-avatar{

  transform:scale(1.04);

  filter:saturate(1.1);

}


.theme2-avatar-badge{

  position:absolute;

  right:8px;

  bottom:13px;

  width:24px;

  height:24px;

  border-radius:50%;

  display:flex;

  justify-content:center;

  align-items:center;

  background:#0d0e14;

  border:1px solid rgba(255,255,255,.15);

}


.theme2-avatar-badge span{

  width:8px;

  height:8px;

  border-radius:50%;

  background:#4ade80;

  box-shadow:

    0 0 12px rgba(74,222,128,.9);

}


/* =========================================================
   PROFILE CONTENT
========================================================= */

.theme2-profile-content{

  width:100%;

  display:flex;

  flex-direction:column;

  align-items:center;

}


.theme2-eyebrow{

  display:flex;

  align-items:center;

  gap:8px;

  margin-bottom:15px;

  font-size:9px;

  letter-spacing:3px;

  color:#71717a;

  font-weight:800;

}


.theme2-eyebrow span{

  width:18px;

  height:1px;

  background:#8b5cf6;

}


.theme2-username{

  margin:0;

  max-width:100%;

  font-size:clamp(38px,7vw,66px);

  line-height:.98;

  letter-spacing:-3px;

  font-weight:900;

  color:#ffffff;

  overflow-wrap:anywhere;

}


.theme2-bio{

  width:100%;

  max-width:570px;

  margin:22px auto 0;

  font-size:14px;

  line-height:1.9;

  color:#8f9099;

}


/* =========================================================
   SOCIAL SECTION
========================================================= */

.theme2-social-section{

  width:100%;

  margin-bottom:70px;

  animation:theme2FadeUp .8s ease .2s both;

}


.theme2-section-label{

  display:flex;

  align-items:center;

  gap:14px;

  margin-bottom:15px;

  font-size:9px;

  letter-spacing:2px;

  color:#52525b;

  font-weight:800;

}


.theme2-section-label div{

  flex:1;

  height:1px;

  background:rgba(255,255,255,.07);

}


.theme2-social-wrapper{

  padding:16px 18px;

  border-radius:18px;

  border:1px solid rgba(255,255,255,.08);

  background:

    linear-gradient(
      135deg,
      rgba(255,255,255,.055),
      rgba(255,255,255,.015)
    );

  backdrop-filter:blur(20px);

  box-shadow:

    0 20px 60px rgba(0,0,0,.20);

}


/* =========================================================
   SOCIAL RENDERER OVERRIDES
========================================================= */

.theme2-socials{

  display:flex;

  justify-content:center;

  align-items:center;

  gap:10px;

  flex-wrap:wrap;

}


.theme2-social-link{

  width:46px;

  height:46px;

  display:flex;

  align-items:center;

  justify-content:center;

  border-radius:13px;

  color:#a1a1aa;

  background:rgba(255,255,255,.035);

  border:1px solid rgba(255,255,255,.07);

  transition:

    transform .3s ease,
    color .3s ease,
    background .3s ease,
    border-color .3s ease;

}


.theme2-social-link:hover{

  transform:translateY(-4px);

  color:#ffffff;

  background:rgba(139,92,246,.18);

  border-color:rgba(167,139,250,.35);

}


/* =========================================================
   LINKS SECTION
========================================================= */

.theme2-links-section{

  width:100%;

  animation:theme2FadeUp .8s ease .35s both;

}


.theme2-section-heading{

  display:flex;

  align-items:flex-end;

  justify-content:space-between;

  margin-bottom:24px;

}


.theme2-section-heading > div{

  display:flex;

  align-items:center;

  gap:14px;

}


.theme2-section-number{

  font-size:10px;

  letter-spacing:2px;

  color:#8b5cf6;

  font-weight:900;

}


.theme2-section-heading h2{

  margin:0;

  font-size:28px;

  letter-spacing:-1px;

  font-weight:850;

  color:#ffffff;

}


.theme2-section-count{

  font-size:9px;

  letter-spacing:1.5px;

  color:#52525b;

  font-weight:800;

}


/* =========================================================
   LINKS CONTAINER
========================================================= */

.theme2-links{

  width:100%;

  display:flex;

  flex-direction:column;

  gap:13px;

}


/* =========================================================
   LINK RENDERER BASE
========================================================= */

.theme2-link{

  width:100%;

  display:flex;

  flex-direction:column;

  gap:13px;

}


/* =========================================================
   DEFAULT LINK
========================================================= */

.theme2-default-link{

  position:relative;

  width:100%;

  min-height:82px;

  display:flex;

  align-items:center;

  justify-content:center;

  padding:20px 60px 20px 24px;

  border-radius:18px;

  text-decoration:none;

  color:#f4f4f5;

  background:

    linear-gradient(
      110deg,
      rgba(255,255,255,.075),
      rgba(255,255,255,.025)
    );

  border:1px solid rgba(255,255,255,.08);

  box-shadow:

    0 15px 35px rgba(0,0,0,.16);

  overflow:hidden;

  transition:

    transform .35s ease,
    border-color .35s ease,
    background .35s ease,
    box-shadow .35s ease;

}


.theme2-default-link::before{

  content:"";

  position:absolute;

  left:0;

  top:0;

  bottom:0;

  width:3px;

  background:

    linear-gradient(
      180deg,
      #8b5cf6,
      #ec4899
    );

  transform:scaleY(.25);

  transform-origin:center;

  transition:transform .35s ease;

}


.theme2-default-link::after{

  content:"↗";

  position:absolute;

  right:23px;

  top:50%;

  transform:

    translateY(-50%)
    translateX(0);

  width:30px;

  height:30px;

  display:flex;

  align-items:center;

  justify-content:center;

  border-radius:50%;

  color:#a1a1aa;

  background:rgba(255,255,255,.05);

  font-size:14px;

  transition:

    transform .35s ease,
    background .35s ease,
    color .35s ease;

}


.theme2-default-link:hover{

  transform:translateY(-4px);

  border-color:rgba(167,139,250,.30);

  background:

    linear-gradient(
      110deg,
      rgba(139,92,246,.13),
      rgba(255,255,255,.035)
    );

  box-shadow:

    0 22px 45px rgba(0,0,0,.28);

}


.theme2-default-link:hover::before{

  transform:scaleY(1);

}


.theme2-default-link:hover::after{

  transform:

    translateY(-50%)
    translateX(3px);

  color:#ffffff;

  background:rgba(139,92,246,.25);

}


/* =========================================================
   WHATSAPP
========================================================= */

.theme2-whatsapp-link{

  display:block;

  width:100%;

  text-decoration:none;

}


.theme2-whatsapp{

  position:relative;

  min-height:82px;

  display:flex;

  align-items:center;

  justify-content:center;

  padding:20px 25px;

  border-radius:18px;

  overflow:hidden;

  background:

    linear-gradient(
      110deg,
      #075e3c,
      #128c5c
    );

  color:#ffffff;

  font-size:15px;

  font-weight:800;

  border:1px solid rgba(74,222,128,.22);

  box-shadow:

    0 20px 45px rgba(0,0,0,.20);

  transition:

    transform .35s ease,
    box-shadow .35s ease;

}


.theme2-whatsapp::before{

  content:"";

  position:absolute;

  width:180px;

  height:180px;

  border-radius:50%;

  right:-70px;

  top:-100px;

  background:rgba(255,255,255,.08);

}


.theme2-whatsapp:hover{

  transform:translateY(-4px);

  box-shadow:

    0 25px 55px rgba(0,0,0,.30);

}


/* =========================================================
   PRODUCT CARD
========================================================= */

.theme2-product-card{

  position:relative;

  display:flex;

  flex-direction:column;

  overflow:hidden;

  background:#101116;

  border:1px solid rgba(255,255,255,.08);

  border-radius:20px;

  text-decoration:none;

  color:#ffffff;

  box-shadow:

    0 20px 45px rgba(0,0,0,.20);

  transition:

    transform .4s ease,
    border-color .4s ease,
    box-shadow .4s ease;

}


.theme2-product-card:hover{

  transform:translateY(-7px);

  border-color:rgba(167,139,250,.25);

  box-shadow:

    0 30px 65px rgba(0,0,0,.32);

}


.theme2-product-image{

  width:100%;

  height:330px;

  object-fit:cover;

  display:block;

  transition:

    transform .7s ease;

}


.theme2-product-card:hover
.theme2-product-image{

  transform:scale(1.05);

}


.theme2-product-content{

  padding:22px;

  display:flex;

  flex-direction:column;

  gap:8px;

  background:

    linear-gradient(
      180deg,
      rgba(255,255,255,.02),
      rgba(255,255,255,.06)
    );

}


.theme2-product-title{

  font-size:18px;

  font-weight:800;

  color:#f4f4f5;

}


.theme2-product-price{

  font-size:17px;

  font-weight:900;

  color:#a78bfa;

}


/* =========================================================
   PRODUCT LINK
========================================================= */

.theme2-product-link{

  display:flex;

  align-items:center;

  gap:17px;

  padding:13px;

  min-height:105px;

  border-radius:18px;

  background:

    linear-gradient(
      110deg,
      rgba(255,255,255,.07),
      rgba(255,255,255,.025)
    );

  border:1px solid rgba(255,255,255,.08);

  text-decoration:none;

  color:#ffffff;

  transition:

    transform .35s ease,
    border-color .35s ease,
    background .35s ease;

}


.theme2-product-link:hover{

  transform:translateY(-4px);

  border-color:rgba(167,139,250,.3);

  background:

    linear-gradient(
      110deg,
      rgba(139,92,246,.12),
      rgba(255,255,255,.035)
    );

}


.theme2-product-link-image{

  width:82px;

  height:82px;

  border-radius:14px;

  object-fit:cover;

  flex-shrink:0;

}


.theme2-product-link-info{

  min-width:0;

  flex:1;

  display:flex;

  flex-direction:column;

  gap:7px;

}


.theme2-product-link .theme2-product-title{

  font-size:15px;

  white-space:nowrap;

  overflow:hidden;

  text-overflow:ellipsis;

}


.theme2-product-link .theme2-product-price{

  font-size:14px;

}


/* =========================================================
   VIDEO
========================================================= */

.theme2-video,
.theme2-youtube{

  overflow:hidden;

  border-radius:20px;

  background:#000;

  border:1px solid rgba(255,255,255,.08);

  box-shadow:

    0 25px 55px rgba(0,0,0,.28);

}


.theme2-video iframe,
.theme2-youtube iframe{

  display:block;

  width:100%;

  height:100%;

  aspect-ratio:16/9;

  border:none;

}


.theme2-youtube-playlist{

  height:520px;

  overflow:hidden;

  border-radius:20px;

  border:1px solid rgba(255,255,255,.08);

}


.theme2-youtube-playlist iframe{

  width:100%;

  height:100%;

  border:none;

}


/* =========================================================
   FORM
========================================================= */

.theme2-form{

  display:flex;

  flex-direction:column;

  gap:18px;

  padding:24px;

  border-radius:20px;

  background:

    linear-gradient(
      135deg,
      rgba(255,255,255,.065),
      rgba(255,255,255,.025)
    );

  border:1px solid rgba(255,255,255,.08);

  box-shadow:

    0 20px 50px rgba(0,0,0,.20);

}


.theme2-form-fields{

  display:flex;

  flex-direction:column;

  gap:13px;

}


.theme2-form-input{

  width:100%;

  padding:16px 17px;

  border-radius:14px;

  border:1px solid rgba(255,255,255,.09);

  outline:none;

  background:rgba(0,0,0,.22);

  color:#ffffff;

  font-size:14px;

  font-family:inherit;

  transition:

    border-color .3s ease,
    background .3s ease,
    box-shadow .3s ease;

}


.theme2-form-input::placeholder{

  color:#52525b;

}


.theme2-form-input:focus{

  border-color:rgba(139,92,246,.55);

  background:rgba(139,92,246,.06);

  box-shadow:

    0 0 0 4px rgba(139,92,246,.08);

}


textarea.theme2-form-input{

  resize:vertical;

  min-height:130px;

}


.theme2-form-button{

  height:56px;

  border:1px solid rgba(167,139,250,.25);

  border-radius:15px;

  background:

    linear-gradient(
      135deg,
      #7c3aed,
      #9333ea
    );

  color:#ffffff;

  font-size:14px;

  font-weight:800;

  cursor:pointer;

  transition:

    transform .3s ease,
    box-shadow .3s ease;

}


.theme2-form-button:hover{

  transform:translateY(-3px);

  box-shadow:

    0 18px 35px rgba(124,58,237,.25);

}


/* =========================================================
   FOOTER
========================================================= */

.theme2-footer{

  margin-top:70px;

  animation:theme2FadeUp .8s ease .5s both;

}


.theme2-footer-line{

  width:100%;

  height:1px;

  background:

    linear-gradient(
      90deg,
      transparent,
      rgba(255,255,255,.10),
      transparent
    );

}


.theme2-footer-content{

  padding-top:20px;

  display:flex;

  justify-content:center;

  align-items:center;

  gap:9px;

  flex-wrap:wrap;

  font-size:9px;

  letter-spacing:1px;

  color:#52525b;

}


.theme2-footer-content strong{

  color:#8b5cf6;

  font-weight:900;

}


/* =========================================================
   ANIMATIONS
========================================================= */

@keyframes theme2FadeDown{

  from{

    opacity:0;

    transform:translateY(-15px);

  }

  to{

    opacity:1;

    transform:translateY(0);

  }

}


@keyframes theme2FadeUp{

  from{

    opacity:0;

    transform:translateY(25px);

  }

  to{

    opacity:1;

    transform:translateY(0);

  }

}


/* =========================================================
   TABLET
========================================================= */

@media(max-width:768px){

  .theme2-container{

    padding:25px 18px 40px;

  }


  .theme2-topbar{

    margin-bottom:55px;

  }


  .theme2-hero{

    padding-bottom:50px;

  }


  .theme2-avatar-area{

    width:170px;

    height:170px;

  }


  .theme2-avatar-wrapper{

    width:128px;

    height:128px;

  }


  .theme2-username{

    font-size:clamp(36px,9vw,52px);

  }


  .theme2-social-section{

    margin-bottom:55px;

  }


  .theme2-product-image{

    height:280px;

  }


  .theme2-youtube-playlist{

    height:430px;

  }

}


/* =========================================================
   MOBILE
========================================================= */

@media(max-width:480px){

  .theme2-container{

    padding:

      18px
      11px
      30px;

  }


  .theme2-page{

    width:100%;

  }


  .theme2-topbar{

    margin-bottom:48px;

    gap:10px;

  }


  .theme2-brand{

    font-size:8px;

    letter-spacing:1.5px;

  }


  .theme2-topbar-status{

    font-size:7px;

    letter-spacing:1.2px;

  }


  .theme2-hero{

    padding-bottom:42px;

  }


  .theme2-hero-number{

    top:-20px;

    font-size:8px;

  }


  .theme2-avatar-area{

    width:145px;

    height:145px;

    margin-bottom:27px;

  }


  .theme2-avatar-ring-two{

    inset:10px;

  }


  .theme2-avatar-wrapper{

    width:108px;

    height:108px;

    padding:4px;

  }


  .theme2-avatar{

    border-width:3px;

  }


  .theme2-avatar-badge{

    width:21px;

    height:21px;

    right:5px;

    bottom:9px;

  }


  .theme2-avatar-badge span{

    width:7px;

    height:7px;

  }


  .theme2-eyebrow{

    font-size:7px;

    letter-spacing:2.2px;

    margin-bottom:12px;

  }


  .theme2-username{

    font-size:31px;

    letter-spacing:-1.7px;

  }


  .theme2-bio{

    margin-top:16px;

    font-size:12px;

    line-height:1.75;

    padding:0 8px;

  }


  .theme2-social-section{

    margin-bottom:45px;

  }


  .theme2-social-wrapper{

    padding:12px;

    border-radius:15px;

  }


  .theme2-socials{

    gap:7px;

  }


  .theme2-social-link{

    width:41px;

    height:41px;

    border-radius:11px;

  }


  .theme2-section-heading{

    align-items:center;

    margin-bottom:18px;

  }


  .theme2-section-heading h2{

    font-size:23px;

  }


  .theme2-section-number{

    font-size:8px;

  }


  .theme2-section-count{

    font-size:7px;

  }


  .theme2-default-link{

    min-height:64px;

    padding:

      15px
      52px
      15px
      18px;

    border-radius:15px;

    font-size:13px;

  }


  .theme2-default-link::after{

    right:15px;

    width:26px;

    height:26px;

    font-size:12px;

  }


  .theme2-whatsapp{

    min-height:64px;

    border-radius:15px;

    font-size:13px;

  }


  .theme2-product-image{

    height:220px;

  }


  .theme2-product-content{

    padding:17px;

  }


  .theme2-product-title{

    font-size:16px;

  }


  .theme2-product-price{

    font-size:15px;

  }


  .theme2-product-link{

    min-height:86px;

    padding:10px;

    gap:12px;

    border-radius:15px;

  }


  .theme2-product-link-image{

    width:65px;

    height:65px;

    border-radius:11px;

  }


  .theme2-product-link .theme2-product-title{

    font-size:13px;

  }


  .theme2-product-link .theme2-product-price{

    font-size:12px;

  }


  .theme2-form{

    padding:17px;

    border-radius:16px;

  }


  .theme2-form-input{

    padding:14px;

    font-size:13px;

  }


  .theme2-form-button{

    height:51px;

    font-size:13px;

  }


  .theme2-youtube-playlist{

    height:350px;

    border-radius:16px;

  }


  .theme2-footer{

    margin-top:50px;

  }


  .theme2-footer-content{

    font-size:8px;

  }

}


/* =========================================================
   SMALL MOBILE
========================================================= */

@media(max-width:360px){

  .theme2-container{

    padding-left:8px;

    padding-right:8px;

  }


  .theme2-topbar{

    margin-bottom:40px;

  }


  .theme2-avatar-area{

    width:125px;

    height:125px;

  }


  .theme2-avatar-wrapper{

    width:94px;

    height:94px;

  }


  .theme2-username{

    font-size:27px;

  }


  .theme2-bio{

    font-size:11px;

  }


  .theme2-social-link{

    width:37px;

    height:37px;

  }


  .theme2-default-link{

    min-height:58px;

    font-size:12px;

  }


  .theme2-section-heading h2{

    font-size:21px;

  }


  .theme2-product-image{

    height:190px;

  }


  .theme2-product-content{

    padding:14px;

  }


  .theme2-product-title{

    font-size:14px;

  }


  .theme2-product-price{

    font-size:13px;

  }


  .theme2-product-link-image{

    width:57px;

    height:57px;

  }


  .theme2-youtube-playlist{

    height:300px;

  }

}


/* =========================================================
   LANDSCAPE MOBILE
========================================================= */

@media(
  max-width:768px
)
and
(
  orientation:landscape
){

  .theme2-container{

    padding-top:15px;

  }


  .theme2-topbar{

    margin-bottom:30px;

  }


  .theme2-hero{

    padding-bottom:30px;

  }


  .theme2-avatar-area{

    width:120px;

    height:120px;

    margin-bottom:20px;

  }


  .theme2-avatar-wrapper{

    width:88px;

    height:88px;

  }


  .theme2-username{

    font-size:30px;

  }

}


/* =========================================================
   VERY LARGE SCREENS
========================================================= */

@media(min-width:1400px){

  .theme2-page{

    max-width:800px;

  }


  .theme2-container{

    padding-top:55px;

  }


  .theme2-topbar{

    margin-bottom:80px;

  }


  .theme2-avatar-area{

    width:210px;

    height:210px;

  }


  .theme2-avatar-wrapper{

    width:158px;

    height:158px;

  }


  .theme2-default-link{

    min-height:88px;

  }

}


/* =========================================================
   REDUCED MOTION
========================================================= */

@media(prefers-reduced-motion:reduce){

  .theme2-container *,
  .theme2-container *::before,
  .theme2-container *::after{

    animation:none !important;

    transition:none !important;

    scroll-behavior:auto !important;

  }

}

        `}

      </style>

    </div>

  );

}

