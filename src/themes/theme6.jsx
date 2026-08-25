import LinkRenderer from "../components/LinkRenderer";
import SocialRenderer from "../components/SocialRenderer";

export default function Theme6({ user, links }) {

  const theme = "theme6";

  return (

    <div className={`${theme}-container`}>

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className={`${theme}-background`} />

      <div className={`${theme}-orb theme6-orb-one`} />
      <div className={`${theme}-orb theme6-orb-two`} />
      <div className={`${theme}-orb theme6-orb-three`} />

      <div className={`${theme}-noise`} />


      {/* =====================================================
          MAIN PAGE
      ===================================================== */}

      <main className={`${theme}-page`}>


        {/* ===================================================
            TOP NAV
        =================================================== */}

        <header className={`${theme}-nav`}>

          <div className={`${theme}-brand`}>

            <span className={`${theme}-brand-icon`}>
              Q
            </span>

            <span className={`${theme}-brand-name`}>
              QEVORA
            </span>

          </div>


          <div className={`${theme}-nav-center`}>

            <span className={`${theme}-nav-dot`} />

            <span>
              PERSONAL SPACE
            </span>

          </div>


          <div className={`${theme}-nav-number`}>
            06
          </div>

        </header>


        {/* ===================================================
            HERO
        =================================================== */}

        <section className={`${theme}-hero`}>


          {/* LEFT */}

          <div className={`${theme}-hero-left`}>

            <div className={`${theme}-hero-tag`}>
              <span />
              WELCOME
            </div>


            <h1 className={`${theme}-hero-title`}>

              <span>
                HELLO,
              </span>

              <span className={`${theme}-hero-name`}>
                {user?.username || "YOUR NAME"}
              </span>

            </h1>


            {user?.bio && (

              <p className={`${theme}-hero-bio`}>
                {user.bio}
              </p>

            )}


            <div className={`${theme}-hero-bottom`}>

              <div className={`${theme}-status`}>

                <span className={`${theme}-status-dot`} />

                <div>

                  <small>
                    STATUS
                  </small>

                  <strong>
                    AVAILABLE
                  </strong>

                </div>

              </div>


              <div className={`${theme}-scroll`}>
                SCROLL TO EXPLORE
                <span>↓</span>
              </div>

            </div>

          </div>


          {/* RIGHT IMAGE */}

          <div className={`${theme}-hero-right`}>

            <div className={`${theme}-image-decoration`}>
              ✦
            </div>

            <div className={`${theme}-image-card`}>

              <div className={`${theme}-image-label`}>
                PROFILE / 01
              </div>

              <img
                src={user?.avatar || ""}
                alt={user?.username || "Profile"}
                className={`${theme}-avatar`}
              />

              <div className={`${theme}-image-gradient`} />

              <div className={`${theme}-image-caption`}>

                <span>
                  THIS IS ME
                </span>

                <strong>
                  ✦
                </strong>

              </div>

            </div>


            <div className={`${theme}-floating-card`}>

              <span>
                ✦
              </span>

              <div>

                <small>
                  DIGITAL
                </small>

                <strong>
                  CREATOR
                </strong>

              </div>

            </div>

          </div>


        </section>


        {/* ===================================================
            SOCIALS
        =================================================== */}

        <section className={`${theme}-social-section`}>

          <div className={`${theme}-section-label`}>

            <span>
              01
            </span>

            <strong>
              CONNECT
            </strong>

          </div>


          <div className={`${theme}-social-wrapper`}>

            <SocialRenderer
              user={user}
              theme={theme}
            />

          </div>


          <div className={`${theme}-social-description`}>
            FIND ME ONLINE
          </div>

        </section>


        {/* ===================================================
            CONTENT INTRO
        =================================================== */}

        <section className={`${theme}-content-intro`}>

          <div className={`${theme}-intro-shape`}>
            ✦
          </div>

          <div>

            <span>
              02 / MY WORLD
            </span>

            <h2>
              Everything
              <br />
              <em>starts here.</em>
            </h2>

          </div>

          <p>
            Explore my links, projects,
            products and everything
            I want to share with you.
          </p>

        </section>


        {/* ===================================================
            LINKS AREA
        =================================================== */}

        <section className={`${theme}-links-area`}>


          <div className={`${theme}-links-heading`}>

            <span>
              FEATURED
            </span>

            <h3>
              LINKS
            </h3>

            <div>
              ↘
            </div>

          </div>


          <div className={`${theme}-links-container`}>

            <LinkRenderer
              links={links || []}
              theme={theme}
            />

          </div>


        </section>


        {/* ===================================================
            MARQUEE
        =================================================== */}

        <div className={`${theme}-marquee`}>

          <div className={`${theme}-marquee-track`}>

            <span>
              CREATE
            </span>

            <b>✦</b>

            <span>
              CONNECT
            </span>

            <b>✦</b>

            <span>
              EXPLORE
            </span>

            <b>✦</b>

            <span>
              CREATE
            </span>

            <b>✦</b>

            <span>
              CONNECT
            </span>

            <b>✦</b>

            <span>
              EXPLORE
            </span>

            <b>✦</b>

          </div>

        </div>


        {/* ===================================================
            BOTTOM
        =================================================== */}

        <section className={`${theme}-bottom-section`}>

          <div className={`${theme}-bottom-card`}>

            <div className={`${theme}-bottom-small`}>
              03 / LET'S CONNECT
            </div>

            <h2>
              LET'S
              <br />
              <span>TALK.</span>
            </h2>

            <p>
              Thanks for stopping by.
              Stay connected and come
              back anytime.
            </p>

            <div className={`${theme}-bottom-arrow`}>
              ↗
            </div>

          </div>


          <div className={`${theme}-bottom-side`}>

            <div className={`${theme}-side-circle`}>
              Q
            </div>

            <span>
              YOUR DIGITAL
              <br />
              SPACE
            </span>

          </div>

        </section>


        {/* ===================================================
            FOOTER
        =================================================== */}

        <footer className={`${theme}-footer`}>

          <div>
            QEVORA
          </div>

          <div>
            MADE FOR CREATORS
          </div>

          <div>
            © {new Date().getFullYear()}
          </div>

        </footer>


      </main>


      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

/* =========================================================
   RESET
========================================================= */

.theme6-container,
.theme6-container *,
.theme6-container *::before,
.theme6-container *::after{

  box-sizing:border-box;

}


/* =========================================================
   CONTAINER
========================================================= */

.theme6-container{

  position:relative;

  width:100%;

  min-height:100vh;

  overflow:hidden;

  isolation:isolate;

  background:#fff7ed;

  color:#151515;

  font-family:
    Inter,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

}


/* =========================================================
   BACKGROUND
========================================================= */

.theme6-background{

  position:absolute;

  inset:0;

  z-index:-20;

  pointer-events:none;

  background:

    radial-gradient(
      circle at 10% 5%,
      rgba(255,92,92,.18),
      transparent 22%
    ),

    radial-gradient(
      circle at 90% 15%,
      rgba(99,102,241,.20),
      transparent 25%
    ),

    radial-gradient(
      circle at 50% 55%,
      rgba(236,72,153,.10),
      transparent 30%
    ),

    linear-gradient(
      135deg,
      #fff7ed,
      #fff
    );

}


/* =========================================================
   ORBS
========================================================= */

.theme6-orb{

  position:absolute;

  border-radius:50%;

  filter:blur(1px);

  pointer-events:none;

  z-index:-15;

  animation:
    theme6Float
    10s
    ease-in-out
    infinite;

}


.theme6-orb-one{

  width:180px;

  height:180px;

  background:
    #ff4d6d;

  top:9%;

  left:-80px;

}


.theme6-orb-two{

  width:240px;

  height:240px;

  background:
    #6366f1;

  top:42%;

  right:-120px;

  animation-delay:-3s;

}


.theme6-orb-three{

  width:150px;

  height:150px;

  background:
    #facc15;

  bottom:8%;

  left:42%;

  animation-delay:-6s;

}


@keyframes theme6Float{

  0%,
  100%{

    transform:
      translate3d(0,0,0);

  }

  50%{

    transform:
      translate3d(
        20px,
        -30px,
        0
      );

  }

}


/* =========================================================
   NOISE
========================================================= */

.theme6-noise{

  position:absolute;

  inset:0;

  pointer-events:none;

  z-index:-10;

  opacity:.035;

  background-image:
    url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E");

}


/* =========================================================
   PAGE
========================================================= */

.theme6-page{

  width:100%;

  max-width:1500px;

  margin:auto;

  padding:
    0
    55px;

}


/* =========================================================
   NAV
========================================================= */

.theme6-nav{

  height:90px;

  display:grid;

  grid-template-columns:
    1fr
    1fr
    1fr;

  align-items:center;

  border-bottom:
    1px
    solid
    rgba(21,21,21,.12);

}


.theme6-brand{

  display:flex;

  align-items:center;

  gap:10px;

}


.theme6-brand-icon{

  width:38px;

  height:38px;

  display:flex;

  align-items:center;

  justify-content:center;

  border-radius:12px;

  background:#151515;

  color:#fff;

  font-size:16px;

  font-weight:950;

  transform:rotate(-6deg);

}


.theme6-brand-name{

  font-size:11px;

  letter-spacing:3px;

  font-weight:950;

}


.theme6-nav-center{

  display:flex;

  justify-content:center;

  align-items:center;

  gap:8px;

  font-size:8px;

  letter-spacing:2px;

  font-weight:800;

  color:#777;

}


.theme6-nav-dot{

  width:6px;

  height:6px;

  background:#22c55e;

  border-radius:50%;

  box-shadow:
    0 0 0 5px
    rgba(34,197,94,.12);

}


.theme6-nav-number{

  text-align:right;

  font-size:10px;

  font-weight:900;

  color:#777;

}


/* =========================================================
   HERO
========================================================= */

.theme6-hero{

  min-height:
    calc(100vh - 90px);

  display:grid;

  grid-template-columns:
    54%
    46%;

  align-items:center;

  gap:30px;

  padding:
    80px
    0
    120px;

}


/* =========================================================
   HERO LEFT
========================================================= */

.theme6-hero-left{

  position:relative;

  z-index:2;

}


.theme6-hero-tag{

  display:flex;

  align-items:center;

  gap:10px;

  margin-bottom:30px;

  font-size:9px;

  letter-spacing:3px;

  font-weight:950;

  color:#666;

}


.theme6-hero-tag span{

  width:28px;

  height:3px;

  border-radius:10px;

  background:#ff4d6d;

}


.theme6-hero-title{

  display:flex;

  flex-direction:column;

  margin:0;

  font-size:
    clamp(
      65px,
      9vw,
      145px
    );

  line-height:.78;

  letter-spacing:-8px;

  font-weight:950;

}


.theme6-hero-title > span:first-child{

  color:#151515;

}


.theme6-hero-name{

  position:relative;

  width:max-content;

  max-width:100%;

  color:#ff416c;

  overflow-wrap:anywhere;

}


.theme6-hero-name::after{

  content:"";

  position:absolute;

  left:3px;

  right:-10px;

  bottom:-5px;

  height:13px;

  background:#facc15;

  z-index:-1;

  transform:
    rotate(-2deg);

}


/* =========================================================
   BIO
========================================================= */

.theme6-hero-bio{

  max-width:550px;

  margin:
    50px
    0
    0;

  font-size:15px;

  line-height:1.9;

  color:#666;

}


/* =========================================================
   HERO BOTTOM
========================================================= */

.theme6-hero-bottom{

  display:flex;

  align-items:center;

  gap:80px;

  margin-top:50px;

}


.theme6-status{

  display:flex;

  align-items:center;

  gap:12px;

}


.theme6-status-dot{

  width:10px;

  height:10px;

  border-radius:50%;

  background:#22c55e;

  box-shadow:
    0 0 0 7px
    rgba(34,197,94,.12);

}


.theme6-status div{

  display:flex;

  flex-direction:column;

  gap:3px;

}


.theme6-status small{

  font-size:7px;

  letter-spacing:2px;

  color:#999;

  font-weight:900;

}


.theme6-status strong{

  font-size:10px;

  letter-spacing:1px;

}


.theme6-scroll{

  display:flex;

  align-items:center;

  gap:10px;

  font-size:7px;

  letter-spacing:2px;

  font-weight:900;

  color:#888;

}


.theme6-scroll span{

  display:flex;

  align-items:center;

  justify-content:center;

  width:30px;

  height:30px;

  border:
    1px
    solid
    rgba(0,0,0,.15);

  border-radius:50%;

}


/* =========================================================
   IMAGE
========================================================= */

.theme6-hero-right{

  position:relative;

  display:flex;

  align-items:center;

  justify-content:center;

}


.theme6-image-card{

  position:relative;

  width:
    min(
      100%,
      430px
    );

  aspect-ratio:
    4 / 5;

  overflow:hidden;

  border-radius:
    160px
    160px
    30px
    30px;

  background:#111;

  box-shadow:
    25px
    35px
    80px
    rgba(0,0,0,.16);

  transform:
    rotate(3deg);

  transition:
    transform .6s ease;

}


.theme6-image-card:hover{

  transform:
    rotate(0deg)
    scale(1.025);

}


.theme6-avatar{

  width:100%;

  height:100%;

  object-fit:cover;

  display:block;

  filter:
    saturate(1.15)
    contrast(1.04);

}


.theme6-image-gradient{

  position:absolute;

  inset:0;

  background:

    linear-gradient(
      180deg,
      transparent 45%,
      rgba(0,0,0,.65)
    );

  pointer-events:none;

}


.theme6-image-label{

  position:absolute;

  z-index:3;

  top:20px;

  left:20px;

  padding:
    8px
    12px;

  background:
    rgba(255,255,255,.9);

  backdrop-filter:
    blur(10px);

  font-size:7px;

  letter-spacing:2px;

  font-weight:950;

}


.theme6-image-caption{

  position:absolute;

  left:25px;

  right:25px;

  bottom:25px;

  z-index:3;

  display:flex;

  align-items:center;

  justify-content:space-between;

  color:#fff;

}


.theme6-image-caption span{

  font-size:10px;

  letter-spacing:3px;

  font-weight:950;

}


.theme6-image-caption strong{

  width:42px;

  height:42px;

  display:flex;

  align-items:center;

  justify-content:center;

  background:#facc15;

  color:#151515;

  border-radius:50%;

  font-size:16px;

}


/* =========================================================
   IMAGE DECORATION
========================================================= */

.theme6-image-decoration{

  position:absolute;

  top:-35px;

  right:-10px;

  width:85px;

  height:85px;

  display:flex;

  align-items:center;

  justify-content:center;

  border-radius:50%;

  background:#facc15;

  color:#151515;

  font-size:30px;

  z-index:5;

  animation:
    theme6Spin
    12s
    linear
    infinite;

}


@keyframes theme6Spin{

  from{

    transform:
      rotate(0deg);

  }

  to{

    transform:
      rotate(360deg);

  }

}


/* =========================================================
   FLOATING CARD
========================================================= */

.theme6-floating-card{

  position:absolute;

  left:-50px;

  bottom:55px;

  display:flex;

  align-items:center;

  gap:12px;

  padding:
    13px
    18px;

  background:#151515;

  color:#fff;

  border-radius:15px;

  box-shadow:
    0
    15px
    35px
    rgba(0,0,0,.15);

  z-index:5;

  transform:
    rotate(-5deg);

}


.theme6-floating-card > span{

  width:30px;

  height:30px;

  display:flex;

  align-items:center;

  justify-content:center;

  background:#ff4d6d;

  border-radius:50%;

}


.theme6-floating-card div{

  display:flex;

  flex-direction:column;

  gap:2px;

}


.theme6-floating-card small{

  font-size:6px;

  letter-spacing:2px;

  color:#aaa;

}


.theme6-floating-card strong{

  font-size:10px;

  letter-spacing:1px;

}


/* =========================================================
   SOCIAL SECTION
========================================================= */

.theme6-social-section{

  display:grid;

  grid-template-columns:
    180px
    1fr
    180px;

  align-items:center;

  min-height:115px;

  padding:
    15px
    0;

  border-top:
    1px
    solid
    rgba(21,21,21,.12);

  border-bottom:
    1px
    solid
    rgba(21,21,21,.12);

}


.theme6-section-label{

  display:flex;

  align-items:center;

  gap:15px;

}


.theme6-section-label span{

  font-size:9px;

  font-weight:950;

  color:#ff416c;

}


.theme6-section-label strong{

  font-size:8px;

  letter-spacing:3px;

}


.theme6-social-wrapper{

  display:flex;

  justify-content:center;

}


.theme6-socials{

  display:flex;

  align-items:center;

  justify-content:center;

  gap:12px;

  flex-wrap:wrap;

}


.theme6-social-link{

  width:48px;

  height:48px;

  display:flex;

  align-items:center;

  justify-content:center;

  border:
    1px
    solid
    rgba(0,0,0,.12);

  background:#fff;

  border-radius:14px;

  color:#151515;

  transition:
    transform .35s ease,
    background .35s ease,
    color .35s ease;

}


.theme6-social-link:hover{

  transform:
    translateY(-7px)
    rotate(-5deg);

  background:#ff416c;

  color:#fff;

  border-color:#ff416c;

}


.theme6-social-description{

  text-align:right;

  font-size:7px;

  letter-spacing:2px;

  color:#999;

}


/* =========================================================
   CONTENT INTRO
========================================================= */

.theme6-content-intro{

  display:grid;

  grid-template-columns:
    100px
    1fr
    300px;

  align-items:end;

  gap:40px;

  padding:
    140px
    0
    65px;

}


.theme6-intro-shape{

  width:65px;

  height:65px;

  display:flex;

  align-items:center;

  justify-content:center;

  background:#6366f1;

  color:#fff;

  border-radius:
    20px
    20px
    20px
    50%;

  font-size:25px;

  transform:
    rotate(-15deg);

}


.theme6-content-intro > div:nth-child(2) span{

  display:block;

  margin-bottom:18px;

  font-size:8px;

  letter-spacing:3px;

  font-weight:950;

  color:#999;

}


.theme6-content-intro h2{

  margin:0;

  font-size:
    clamp(
      55px,
      7vw,
      100px
    );

  line-height:.8;

  letter-spacing:-6px;

  font-weight:950;

}


.theme6-content-intro h2 em{

  color:#6366f1;

  font-style:normal;

}


.theme6-content-intro p{

  margin:0;

  max-width:260px;

  font-size:11px;

  line-height:1.8;

  color:#777;

}


/* =========================================================
   LINKS AREA
========================================================= */

.theme6-links-area{

  display:grid;

  grid-template-columns:
    280px
    1fr;

  gap:55px;

  align-items:start;

}


/* =========================================================
   LINKS HEADING
========================================================= */

.theme6-links-heading{

  position:sticky;

  top:30px;

  padding:
    30px;

  background:#151515;

  color:#fff;

  border-radius:
    30px
    10px
    30px
    10px;

  overflow:hidden;

}


.theme6-links-heading::after{

  content:"";

  position:absolute;

  width:100px;

  height:100px;

  right:-30px;

  bottom:-40px;

  border-radius:50%;

  background:#ff416c;

}


.theme6-links-heading span{

  font-size:7px;

  letter-spacing:3px;

  color:#aaa;

}


.theme6-links-heading h3{

  margin:
    15px
    0
    30px;

  font-size:48px;

  line-height:.8;

  letter-spacing:-3px;

}


.theme6-links-heading > div{

  width:45px;

  height:45px;

  display:flex;

  align-items:center;

  justify-content:center;

  border:
    1px
    solid
    rgba(255,255,255,.2);

  border-radius:50%;

}


/* =========================================================
   LINKS CONTAINER
========================================================= */

.theme6-links-container{

  width:100%;

}


.theme6-link{

  display:flex;

  flex-direction:column;

  gap:14px;

}


/* =========================================================
   DEFAULT LINK
========================================================= */

.theme6-default-link{

  position:relative;

  min-height:95px;

  display:flex;

  align-items:center;

  padding:
    0
    30px
    0
    75px;

  background:#fff;

  color:#151515;

  border:
    1px
    solid
    rgba(0,0,0,.09);

  border-radius:22px;

  text-decoration:none;

  font-size:15px;

  font-weight:900;

  overflow:hidden;

  transition:
    transform .4s ease,
    background .4s ease,
    color .4s ease;

}


.theme6-default-link::before{

  content:"↗";

  position:absolute;

  left:20px;

  width:38px;

  height:38px;

  display:flex;

  align-items:center;

  justify-content:center;

  border-radius:50%;

  background:#facc15;

  color:#151515;

  font-size:14px;

  transition:
    transform .4s ease;

}


.theme6-default-link::after{

  content:"";

  position:absolute;

  width:200px;

  height:200px;

  right:-100px;

  top:-100px;

  border-radius:50%;

  background:#ff416c;

  opacity:0;

  transition:
    opacity .4s ease;

}


.theme6-default-link:hover{

  transform:
    translateX(8px);

  background:#151515;

  color:#fff;

}


.theme6-default-link:hover::before{

  transform:
    rotate(45deg);

}


.theme6-default-link:hover::after{

  opacity:.15;

}


/* =========================================================
   WHATSAPP
========================================================= */

.theme6-whatsapp-link{

  display:block;

  text-decoration:none;

}


.theme6-whatsapp{

  min-height:95px;

  display:flex;

  align-items:center;

  justify-content:center;

  background:
    linear-gradient(
      135deg,
      #22c55e,
      #16a34a
    );

  color:#fff;

  border-radius:22px;

  font-size:14px;

  font-weight:950;

  box-shadow:
    0
    15px
    35px
    rgba(34,197,94,.18);

  transition:
    transform .4s ease;

}


.theme6-whatsapp:hover{

  transform:
    translateY(-6px)
    rotate(-1deg);

}


/* =========================================================
   PRODUCT CARD
========================================================= */

.theme6-product-card{

  position:relative;

  display:grid;

  grid-template-columns:
    1fr
    1fr;

  overflow:hidden;

  background:#fff;

  border:
    1px
    solid
    rgba(0,0,0,.08);

  border-radius:28px;

  color:#151515;

  text-decoration:none;

  transition:
    transform .5s ease;

}


.theme6-product-card:hover{

  transform:
    translateY(-8px);

}


.theme6-product-image{

  width:100%;

  height:360px;

  object-fit:cover;

  display:block;

  transition:
    transform .7s ease;

}


.theme6-product-card:hover
.theme6-product-image{

  transform:
    scale(1.06);

}


.theme6-product-content{

  display:flex;

  flex-direction:column;

  justify-content:center;

  padding:40px;

  gap:10px;

}


.theme6-product-title{

  font-size:22px;

  font-weight:950;

}


.theme6-product-price{

  font-size:19px;

  color:#ff416c;

  font-weight:950;

}


/* =========================================================
   PRODUCT LINK
========================================================= */

.theme6-product-link{

  display:flex;

  align-items:center;

  gap:18px;

  padding:12px;

  background:#fff;

  border:
    1px
    solid
    rgba(0,0,0,.08);

  border-radius:22px;

  color:#151515;

  text-decoration:none;

  transition:
    transform .4s ease;

}


.theme6-product-link:hover{

  transform:
    translateY(-6px)
    rotate(.5deg);

}


.theme6-product-link-image{

  width:90px;

  height:90px;

  flex-shrink:0;

  object-fit:cover;

  border-radius:16px;

}


.theme6-product-link-info{

  flex:1;

  min-width:0;

  display:flex;

  flex-direction:column;

  gap:7px;

}


.theme6-product-link .theme6-product-title{

  font-size:15px;

  white-space:nowrap;

  overflow:hidden;

  text-overflow:ellipsis;

}


.theme6-product-link .theme6-product-price{

  font-size:13px;

}


/* =========================================================
   VIDEO
========================================================= */

.theme6-video,
.theme6-youtube{

  overflow:hidden;

  background:#111;

  border-radius:28px;

  box-shadow:
    0
    20px
    50px
    rgba(0,0,0,.15);

}


.theme6-video iframe,
.theme6-youtube iframe{

  display:block;

  width:100%;

  aspect-ratio:16/9;

  border:0;

}


.theme6-youtube-playlist{

  height:560px;

  overflow:hidden;

  border-radius:28px;

}


.theme6-youtube-playlist iframe{

  width:100%;

  height:100%;

  border:0;

}


/* =========================================================
   FORM
========================================================= */

.theme6-form{

  display:flex;

  flex-direction:column;

  gap:18px;

  padding:30px;

  background:#fff;

  border:
    1px
    solid
    rgba(0,0,0,.08);

  border-radius:28px;

}


.theme6-form-fields{

  display:flex;

  flex-direction:column;

  gap:12px;

}


.theme6-form-input{

  width:100%;

  padding:17px;

  border:
    1px
    solid
    rgba(0,0,0,.12);

  border-radius:15px;

  background:#fff7ed;

  color:#151515;

  outline:none;

  font-family:inherit;

  font-size:14px;

  transition:
    border .3s ease,
    box-shadow .3s ease;

}


.theme6-form-input:focus{

  border-color:#6366f1;

  box-shadow:
    0
    0
    0
    4px
    rgba(99,102,241,.10);

}


textarea.theme6-form-input{

  min-height:140px;

  resize:vertical;

}


.theme6-form-button{

  height:58px;

  border:0;

  border-radius:16px;

  background:
    linear-gradient(
      135deg,
      #ff416c,
      #f97316
    );

  color:#fff;

  font-size:14px;

  font-weight:950;

  cursor:pointer;

  transition:
    transform .3s ease,
    box-shadow .3s ease;

}


.theme6-form-button:hover{

  transform:
    translateY(-4px);

  box-shadow:
    0
    18px
    35px
    rgba(255,65,108,.22);

}


/* =========================================================
   MARQUEE
========================================================= */

.theme6-marquee{

  margin:
    140px
    calc(
      -1 * 55px
    )
    0;

  overflow:hidden;

  padding:
    25px
    0;

  background:#151515;

  color:#fff;

  transform:
    rotate(-2deg);

}


.theme6-marquee-track{

  width:max-content;

  display:flex;

  align-items:center;

  gap:40px;

  animation:
    theme6Marquee
    25s
    linear
    infinite;

}


.theme6-marquee-track span{

  font-size:
    clamp(
      35px,
      5vw,
      70px
    );

  letter-spacing:-3px;

  font-weight:950;

}


.theme6-marquee-track b{

  color:#facc15;

  font-size:30px;

}


@keyframes theme6Marquee{

  from{

    transform:
      translateX(0);

  }

  to{

    transform:
      translateX(-35%);

  }

}


/* =========================================================
   BOTTOM SECTION
========================================================= */

.theme6-bottom-section{

  display:grid;

  grid-template-columns:
    1fr
    280px;

  gap:35px;

  padding:
    140px
    0
    100px;

}


.theme6-bottom-card{

  position:relative;

  overflow:hidden;

  min-height:450px;

  padding:50px;

  display:flex;

  flex-direction:column;

  justify-content:center;

  background:
    linear-gradient(
      135deg,
      #6366f1,
      #7c3aed
    );

  color:#fff;

  border-radius:
    35px
    12px
    35px
    12px;

}


.theme6-bottom-card::after{

  content:"";

  position:absolute;

  width:350px;

  height:350px;

  right:-100px;

  top:-100px;

  border-radius:50%;

  border:
    70px
    solid
    rgba(255,255,255,.08);

}


.theme6-bottom-small{

  font-size:8px;

  letter-spacing:3px;

  font-weight:900;

  opacity:.7;

}


.theme6-bottom-card h2{

  margin:
    25px
    0;

  font-size:
    clamp(
      65px,
      9vw,
      130px
    );

  line-height:.75;

  letter-spacing:-7px;

  font-weight:950;

}


.theme6-bottom-card h2 span{

  color:#facc15;

}


.theme6-bottom-card p{

  max-width:390px;

  margin:0;

  font-size:13px;

  line-height:1.8;

  opacity:.8;

}


.theme6-bottom-arrow{

  position:absolute;

  right:45px;

  bottom:40px;

  width:70px;

  height:70px;

  display:flex;

  align-items:center;

  justify-content:center;

  border:
    1px
    solid
    rgba(255,255,255,.3);

  border-radius:50%;

  font-size:25px;

}


.theme6-bottom-side{

  display:flex;

  flex-direction:column;

  align-items:center;

  justify-content:center;

  gap:25px;

}


.theme6-side-circle{

  width:180px;

  height:180px;

  display:flex;

  align-items:center;

  justify-content:center;

  background:#facc15;

  color:#151515;

  border-radius:
    50%
    20%
    50%
    20%;

  font-size:55px;

  font-weight:950;

  transform:
    rotate(12deg);

  transition:
    transform .5s ease;

}


.theme6-side-circle:hover{

  transform:
    rotate(-12deg)
    scale(1.05);

}


.theme6-bottom-side > span{

  text-align:center;

  font-size:8px;

  letter-spacing:3px;

  line-height:1.8;

  font-weight:900;

  color:#888;

}


/* =========================================================
   FOOTER
========================================================= */

.theme6-footer{

  min-height:90px;

  display:grid;

  grid-template-columns:
    1fr
    1fr
    1fr;

  align-items:center;

  border-top:
    1px
    solid
    rgba(21,21,21,.12);

  font-size:8px;

  letter-spacing:2px;

  font-weight:800;

  color:#888;

}


.theme6-footer div:first-child{

  color:#151515;

}


.theme6-footer div:nth-child(2){

  text-align:center;

}


.theme6-footer div:last-child{

  text-align:right;

}


/* =========================================================
   TABLET
========================================================= */

@media(max-width:1050px){

  .theme6-page{

    padding:
      0
      30px;

  }


  .theme6-hero{

    grid-template-columns:
      52%
      48%;

    gap:20px;

  }


  .theme6-hero-title{

    font-size:
      clamp(
        60px,
        9vw,
        100px
      );

  }


  .theme6-floating-card{

    left:-20px;

  }


  .theme6-links-area{

    grid-template-columns:
      220px
      1fr;

    gap:30px;

  }


  .theme6-marquee{

    margin-left:-30px;

    margin-right:-30px;

  }

}


/* =========================================================
   TABLET PORTRAIT
========================================================= */

@media(max-width:768px){

  .theme6-page{

    padding:
      0
      20px;

  }


  .theme6-nav{

    height:75px;

  }


  .theme6-nav-center{

    display:none;

  }


  .theme6-nav{

    grid-template-columns:
      1fr
      auto;

  }


  .theme6-hero{

    min-height:auto;

    grid-template-columns:
      1fr;

    gap:70px;

    padding:
      80px
      0
      100px;

  }


  .theme6-hero-left{

    text-align:center;

  }


  .theme6-hero-tag{

    justify-content:center;

  }


  .theme6-hero-title{

    align-items:center;

    font-size:
      clamp(
        60px,
        13vw,
        100px
      );

  }


  .theme6-hero-name{

    max-width:100%;

  }


  .theme6-hero-bio{

    margin:
      45px
      auto
      0;

    max-width:600px;

  }


  .theme6-hero-bottom{

    justify-content:center;

  }


  .theme6-image-card{

    width:
      min(
        70vw,
        380px
      );

  }


  .theme6-social-section{

    grid-template-columns:
      100px
      1fr
      100px;

  }


  .theme6-content-intro{

    grid-template-columns:
      70px
      1fr;

    gap:25px;

    padding:
      100px
      0
      55px;

  }


  .theme6-content-intro p{

    grid-column:2;

    margin-top:15px;

  }


  .theme6-links-area{

    grid-template-columns:
      1fr;

  }


  .theme6-links-heading{

    position:relative;

    top:auto;

  }


  .theme6-links-heading h3{

    font-size:55px;

  }


  .theme6-marquee{

    margin-left:-20px;

    margin-right:-20px;

  }


  .theme6-bottom-section{

    grid-template-columns:
      1fr;

  }


  .theme6-bottom-side{

    padding:
      30px;

  }

}


/* =========================================================
   MOBILE
========================================================= */

@media(max-width:480px){

  .theme6-page{

    padding:
      0
      12px;

  }


  .theme6-nav{

    height:65px;

  }


  .theme6-brand-icon{

    width:32px;

    height:32px;

    font-size:13px;

  }


  .theme6-brand-name{

    font-size:8px;

    letter-spacing:2px;

  }


  .theme6-nav-number{

    font-size:8px;

  }


  .theme6-hero{

    padding:
      65px
      0
      80px;

    gap:55px;

  }


  .theme6-hero-title{

    font-size:
      clamp(
        48px,
        14vw,
        70px
      );

    letter-spacing:-5px;

  }


  .theme6-hero-bio{

    margin-top:35px;

    font-size:12px;

    line-height:1.8;

  }


  .theme6-hero-bottom{

    flex-direction:column;

    gap:25px;

    margin-top:35px;

  }


  .theme6-image-card{

    width:
      min(
        80vw,
        310px
      );

    border-radius:
      110px
      110px
      25px
      25px;

  }


  .theme6-image-decoration{

    width:65px;

    height:65px;

    top:-25px;

    right:-5px;

    font-size:22px;

  }


  .theme6-floating-card{

    left:-10px;

    bottom:35px;

    padding:
      10px
      13px;

  }


  .theme6-floating-card > span{

    width:25px;

    height:25px;

    font-size:10px;

  }


  .theme6-floating-card small{

    font-size:5px;

  }


  .theme6-floating-card strong{

    font-size:8px;

  }


  .theme6-social-section{

    grid-template-columns:
      55px
      1fr
      45px;

    min-height:85px;

  }


  .theme6-section-label{

    gap:5px;

  }


  .theme6-section-label span{

    font-size:7px;

  }


  .theme6-section-label strong{

    font-size:6px;

    letter-spacing:1px;

  }


  .theme6-socials{

    gap:5px;

  }


  .theme6-social-link{

    width:35px;

    height:35px;

    border-radius:10px;

  }


  .theme6-social-description{

    font-size:5px;

    letter-spacing:1px;

  }


  .theme6-content-intro{

    grid-template-columns:
      35px
      1fr;

    gap:15px;

    padding:
      75px
      0
      40px;

  }


  .theme6-intro-shape{

    width:40px;

    height:40px;

    font-size:16px;

    border-radius:
      13px
      13px
      13px
      50%;

  }


  .theme6-content-intro > div:nth-child(2) span{

    font-size:6px;

    letter-spacing:2px;

  }


  .theme6-content-intro h2{

    font-size:48px;

    letter-spacing:-4px;

  }


  .theme6-content-intro p{

    font-size:9px;

  }


  .theme6-links-heading{

    padding:25px;

    border-radius:
      25px
      8px
      25px
      8px;

  }


  .theme6-links-heading h3{

    margin:
      12px
      0
      20px;

    font-size:45px;

  }


  .theme6-default-link{

    min-height:75px;

    padding:
      0
      20px
      0
      65px;

    font-size:12px;

    border-radius:17px;

  }


  .theme6-default-link::before{

    left:15px;

    width:32px;

    height:32px;

    font-size:11px;

  }


  .theme6-whatsapp{

    min-height:75px;

    font-size:12px;

    border-radius:17px;

  }


  .theme6-product-card{

    grid-template-columns:
      1fr;

    border-radius:22px;

  }


  .theme6-product-image{

    height:240px;

  }


  .theme6-product-content{

    padding:22px;

  }


  .theme6-product-title{

    font-size:17px;

  }


  .theme6-product-price{

    font-size:15px;

  }


  .theme6-product-link{

    padding:9px;

    gap:11px;

    border-radius:17px;

  }


  .theme6-product-link-image{

    width:65px;

    height:65px;

    border-radius:12px;

  }


  .theme6-product-link .theme6-product-title{

    font-size:12px;

  }


  .theme6-product-link .theme6-product-price{

    font-size:11px;

  }


  .theme6-form{

    padding:17px;

    border-radius:20px;

  }


  .theme6-form-input{

    padding:13px;

    font-size:12px;

  }


  .theme6-form-button{

    height:50px;

    font-size:12px;

  }


  .theme6-youtube-playlist{

    height:310px;

    border-radius:20px;

  }


  .theme6-marquee{

    margin:
      90px
      -12px
      0;

    padding:
      18px
      0;

  }


  .theme6-marquee-track{

    gap:25px;

  }


  .theme6-marquee-track span{

    font-size:38px;

  }


  .theme6-marquee-track b{

    font-size:18px;

  }


  .theme6-bottom-section{

    padding:
      90px
      0
      60px;

  }


  .theme6-bottom-card{

    min-height:380px;

    padding:30px;

    border-radius:
      28px
      9px
      28px
      9px;

  }


  .theme6-bottom-card h2{

    font-size:65px;

    letter-spacing:-5px;

  }


  .theme6-bottom-card p{

    font-size:11px;

  }


  .theme6-bottom-arrow{

    right:25px;

    bottom:25px;

    width:55px;

    height:55px;

  }


  .theme6-side-circle{

    width:140px;

    height:140px;

    font-size:42px;

  }


  .theme6-footer{

    min-height:65px;

    grid-template-columns:
      1fr
      1fr;

    font-size:6px;

    letter-spacing:1px;

  }


  .theme6-footer div:nth-child(2){

    display:none;

  }


  .theme6-footer div:last-child{

    text-align:right;

  }

}


/* =========================================================
   SMALL MOBILE
========================================================= */

@media(max-width:360px){

  .theme6-hero-title{

    font-size:44px;

  }


  .theme6-image-card{

    width:250px;

  }


  .theme6-content-intro h2{

    font-size:42px;

  }


  .theme6-default-link{

    min-height:68px;

    font-size:11px;

  }


  .theme6-product-image{

    height:200px;

  }


  .theme6-bottom-card h2{

    font-size:55px;

  }

}


/* =========================================================
   REDUCED MOTION
========================================================= */

@media(prefers-reduced-motion:reduce){

  .theme6-container *,
  .theme6-container *::before,
  .theme6-container *::after{

    animation:none !important;

    transition:none !important;

  }

}

`}</style>

    </div>

  );
}



 