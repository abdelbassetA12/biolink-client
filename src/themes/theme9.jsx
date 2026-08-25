import LinkRenderer from "../components/LinkRenderer";
import SocialRenderer from "../components/SocialRenderer";

export default function Theme9({ user, links }) {

  const theme = "theme9";

  return (

    <div className={`${theme}-container`}>

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className={`${theme}-background`} />

      <div className={`${theme}-orb theme9-orb-one`} />
      <div className={`${theme}-orb theme9-orb-two`} />
      <div className={`${theme}-orb theme9-orb-three`} />

      <div className={`${theme}-noise`} />


      {/* =====================================================
          MAIN PAGE
      ===================================================== */}

      <main className={`${theme}-page`}>


        {/* ===================================================
            TOP BAR
        =================================================== */}

        <header className={`${theme}-topbar`}>

          <div className={`${theme}-topbar-mark`}>
            <span />
            <span />
            <span />
          </div>

          <div className={`${theme}-topbar-line`} />

          <div className={`${theme}-topbar-dot`}>
            <span />
          </div>

        </header>


        {/* ===================================================
            HERO
        =================================================== */}

        <section className={`${theme}-hero`}>


          {/* Decorative number-like visual WITHOUT NUMBER */}

          <div className={`${theme}-hero-decoration`}>
            <span />
            <span />
            <span />
          </div>


          {/* IMAGE */}

          <div className={`${theme}-avatar-area`}>

            <div className={`${theme}-avatar-back`} />

            <div className={`${theme}-avatar-frame`}>

              <img
                src={user?.avatar || ""}
                alt={user?.username || "Profile"}
                className={`${theme}-avatar`}
              />

            </div>

            <div className={`${theme}-avatar-badge`}>
              <span>✦</span>
            </div>

          </div>


          {/* PROFILE INFO */}

          <div className={`${theme}-hero-info`}>

            <div className={`${theme}-eyebrow`}>
              <span />
              PROFILE
            </div>

            <h1 className={`${theme}-username`}>
              {user?.username || "Your Name"}
            </h1>

            {user?.bio && (

              <p className={`${theme}-bio`}>
                {user.bio}
              </p>

            )}

            <div className={`${theme}-socials`}>
              <SocialRenderer
                user={user}
                theme={theme}
              />
            </div>

          </div>


          {/* SIDE ARROW */}

          <div className={`${theme}-hero-arrow`}>
            ↓
          </div>

        </section>


        {/* ===================================================
            CONTENT INTRO
        =================================================== */}

        <section className={`${theme}-intro`}>

          <div className={`${theme}-intro-title`}>
            <span>EXPLORE</span>
            <div />
          </div>

          <div className={`${theme}-intro-copy`}>
            Links, content and everything shared on this page.
          </div>

        </section>


        {/* ===================================================
            FEATURED AREA
        =================================================== */}

        <section className={`${theme}-featured`}>

          <div className={`${theme}-featured-label`}>
            FEATURED
          </div>

          <div className={`${theme}-featured-card`}>

            <div className={`${theme}-featured-left`}>

              <div className={`${theme}-featured-symbol`}>
                ↗
              </div>

            </div>

            <div className={`${theme}-featured-content`}>

              <span>
                VISIT
              </span>

              <strong>
                Featured Link
              </strong>

              <small>
                Explore this page
              </small>

            </div>

            <div className={`${theme}-featured-button`}>
              →
            </div>

          </div>

        </section>


        {/* ===================================================
            LINKS
        =================================================== */}

        <section className={`${theme}-links-section`}>

          <div className={`${theme}-section-heading`}>

            <div className={`${theme}-section-index`}>
              <span />
            </div>

            <h2>
              LINKS
            </h2>

            <div className={`${theme}-section-line`} />

          </div>


          <div className={`${theme}-links`}>
            <LinkRenderer
              links={links || []}
              theme={theme}
            />
          </div>

        </section>


        {/* ===================================================
            BOTTOM VISUAL
        =================================================== */}

        <section className={`${theme}-visual-strip`}>

          <div className={`${theme}-visual-shape shape-a`} />
          <div className={`${theme}-visual-shape shape-b`} />
          <div className={`${theme}-visual-shape shape-c`} />

          <div className={`${theme}-visual-content`}>

            <span>
              CONNECT
            </span>

            <strong>
              Follow the journey
            </strong>

          </div>

          <div className={`${theme}-visual-arrow`}>
            ↗
          </div>

        </section>


        {/* ===================================================
            FOOTER
        =================================================== */}

        <footer className={`${theme}-footer`}>

          <div className={`${theme}-footer-line`} />

          <div className={`${theme}-footer-content`}>

            <span>
              QEVORA
            </span>

            <div className={`${theme}-footer-center`}>
              <span />
              LINK IN BIO
              <span />
            </div>

            <span>
              ✦
            </span>

          </div>

        </footer>


      </main>


      {/* =====================================================
          STYLE
      ===================================================== */}

      <style>{`

/* =========================================================
   RESET
========================================================= */

.theme9-container,
.theme9-container *,
.theme9-container *::before,
.theme9-container *::after{

  box-sizing:border-box;

}


/* =========================================================
   CONTAINER
========================================================= */

.theme9-container{

  position:relative;

  width:100%;

  min-height:100vh;

  overflow:hidden;

  isolation:isolate;

  background:#0c0b12;

  color:#ffffff;

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

.theme9-background{

  position:absolute;

  inset:0;

  z-index:-20;

  background:

    radial-gradient(
      circle at 15% 15%,
      rgba(255,77,109,.20),
      transparent 25%
    ),

    radial-gradient(
      circle at 85% 30%,
      rgba(118,86,255,.22),
      transparent 28%
    ),

    radial-gradient(
      circle at 50% 100%,
      rgba(255,174,0,.12),
      transparent 28%
    ),

    linear-gradient(
      135deg,
      #0c0b12,
      #11101a 45%,
      #0b0a10
    );

}


/* =========================================================
   NOISE
========================================================= */

.theme9-noise{

  position:absolute;

  inset:0;

  z-index:-10;

  pointer-events:none;

  opacity:.045;

  background-image:
    url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.7'/%3E%3C/svg%3E");

}


/* =========================================================
   FLOATING ORBS
========================================================= */

.theme9-orb{

  position:absolute;

  border-radius:50%;

  pointer-events:none;

  filter:blur(2px);

  z-index:-8;

}


.theme9-orb-one{

  width:330px;

  height:330px;

  left:-180px;

  top:18%;

  background:
    radial-gradient(
      circle,
      rgba(255,62,104,.30),
      transparent 70%
    );

  animation:
    theme9OrbOne
    12s
    ease-in-out
    infinite;

}


.theme9-orb-two{

  width:400px;

  height:400px;

  right:-220px;

  top:8%;

  background:
    radial-gradient(
      circle,
      rgba(103,75,255,.28),
      transparent 70%
    );

  animation:
    theme9OrbTwo
    15s
    ease-in-out
    infinite;

}


.theme9-orb-three{

  width:260px;

  height:260px;

  left:42%;

  bottom:-150px;

  background:
    radial-gradient(
      circle,
      rgba(255,174,0,.18),
      transparent 70%
    );

  animation:
    theme9OrbThree
    11s
    ease-in-out
    infinite;

}


@keyframes theme9OrbOne{

  0%,
  100%{
    transform:
      translate(0,0);
  }

  50%{
    transform:
      translate(55px,-35px);
  }

}


@keyframes theme9OrbTwo{

  0%,
  100%{
    transform:
      translate(0,0);
  }

  50%{
    transform:
      translate(-45px,45px);
  }

}


@keyframes theme9OrbThree{

  0%,
  100%{
    transform:
      translateY(0);
  }

  50%{
    transform:
      translateY(-45px);
  }

}


/* =========================================================
   PAGE
========================================================= */

.theme9-page{

  position:relative;

  width:
    min(
      calc(100% - 50px),
      1180px
    );

  margin:auto;

  padding:
    25px
    0
    45px;

}


/* =========================================================
   TOP BAR
========================================================= */

.theme9-topbar{

  height:55px;

  display:grid;

  grid-template-columns:
    auto
    1fr
    auto;

  align-items:center;

  gap:18px;

}


.theme9-topbar-mark{

  display:flex;

  gap:4px;

  transform:
    rotate(-8deg);

}


.theme9-topbar-mark span{

  width:6px;

  height:24px;

  border-radius:10px;

  background:#ffffff;

}


.theme9-topbar-mark span:nth-child(2){

  height:15px;

  margin-top:9px;

  background:#ff4d73;

}


.theme9-topbar-mark span:nth-child(3){

  height:20px;

  margin-top:4px;

  background:#7658ff;

}


.theme9-topbar-line{

  height:1px;

  background:
    rgba(255,255,255,.10);

}


.theme9-topbar-dot{

  width:34px;

  height:34px;

  display:flex;

  align-items:center;

  justify-content:center;

  border:
    1px
    solid
    rgba(255,255,255,.12);

  border-radius:50%;

}


.theme9-topbar-dot span{

  width:6px;

  height:6px;

  border-radius:50%;

  background:#35d47b;

  box-shadow:
    0
    0
    0
    5px
    rgba(53,212,123,.10);

}


/* =========================================================
   HERO
========================================================= */

.theme9-hero{

  position:relative;

  display:grid;

  grid-template-columns:
    minmax(320px, .9fr)
    1.1fr;

  align-items:center;

  min-height:590px;

  margin-top:30px;

  padding:
    70px
    75px;

  border:
    1px
    solid
    rgba(255,255,255,.09);

  border-radius:
    48px
    10px
    48px
    10px;

  background:
    linear-gradient(
      135deg,
      rgba(255,255,255,.065),
      rgba(255,255,255,.018)
    );

  backdrop-filter:
    blur(22px);

  -webkit-backdrop-filter:
    blur(22px);

  box-shadow:
    0
    35px
    100px
    rgba(0,0,0,.30);

  overflow:hidden;

  animation:
    theme9Hero
    .8s
    ease
    both;

}


@keyframes theme9Hero{

  from{

    opacity:0;

    transform:
      translateY(35px);

  }

  to{

    opacity:1;

    transform:
      translateY(0);

  }

}


/* =========================================================
   HERO DECORATION
========================================================= */

.theme9-hero-decoration{

  position:absolute;

  right:45px;

  top:40px;

  display:flex;

  align-items:flex-end;

  gap:6px;

  opacity:.35;

}


.theme9-hero-decoration span{

  display:block;

  width:4px;

  border-radius:10px;

  background:#ffffff;

}


.theme9-hero-decoration span:nth-child(1){

  height:18px;

}


.theme9-hero-decoration span:nth-child(2){

  height:34px;

}


.theme9-hero-decoration span:nth-child(3){

  height:25px;

}


/* =========================================================
   AVATAR AREA
========================================================= */

.theme9-avatar-area{

  position:relative;

  width:350px;

  height:390px;

  display:flex;

  align-items:center;

  justify-content:center;

  margin:auto;

}


.theme9-avatar-back{

  position:absolute;

  width:300px;

  height:350px;

  border-radius:
    48%
    18%
    48%
    18%;

  background:
    linear-gradient(
      145deg,
      #ff4d73,
      #7658ff
    );

  transform:
    rotate(-9deg);

  opacity:.9;

}


.theme9-avatar-frame{

  position:relative;

  width:285px;

  height:335px;

  padding:8px;

  background:#ffffff;

  border-radius:
    18%
    48%
    18%
    48%;

  transform:
    rotate(5deg);

  box-shadow:
    0
    30px
    60px
    rgba(0,0,0,.35);

  overflow:hidden;

}


.theme9-avatar{

  width:100%;

  height:100%;

  display:block;

  object-fit:cover;

  border-radius:
    15%
    44%
    15%
    44%;

  transform:
    rotate(-5deg)
    scale(1.04);

  transition:
    transform .6s ease;

}


.theme9-avatar-frame:hover
.theme9-avatar{

  transform:
    rotate(-5deg)
    scale(1.09);

}


/* =========================================================
   AVATAR BADGE
========================================================= */

.theme9-avatar-badge{

  position:absolute;

  right:15px;

  bottom:20px;

  width:68px;

  height:68px;

  display:flex;

  align-items:center;

  justify-content:center;

  border-radius:50%;

  background:#ffca28;

  color:#15121a;

  border:
    7px
    solid
    #0f0e15;

  font-size:20px;

  box-shadow:
    0
    12px
    35px
    rgba(0,0,0,.30);

  animation:
    theme9Badge
    4s
    ease-in-out
    infinite;

}


@keyframes theme9Badge{

  0%,
  100%{
    transform:
      rotate(0deg)
      translateY(0);
  }

  50%{
    transform:
      rotate(8deg)
      translateY(-8px);
  }

}


/* =========================================================
   HERO INFO
========================================================= */

.theme9-hero-info{

  position:relative;

  z-index:2;

  padding-left:25px;

}


.theme9-eyebrow{

  display:flex;

  align-items:center;

  gap:10px;

  margin-bottom:20px;

  font-size:8px;

  letter-spacing:4px;

  font-weight:900;

  color:#9f9aa8;

}


.theme9-eyebrow span{

  width:30px;

  height:2px;

  border-radius:99px;

  background:
    linear-gradient(
      90deg,
      #ff4d73,
      #7658ff
    );

}


.theme9-username{

  margin:0;

  max-width:650px;

  font-size:
    clamp(
      48px,
      7vw,
      94px
    );

  line-height:.88;

  letter-spacing:-6px;

  font-weight:950;

  overflow-wrap:anywhere;

}


.theme9-username::after{

  content:"";

  display:block;

  width:115px;

  height:8px;

  margin-top:28px;

  border-radius:99px;

  background:
    linear-gradient(
      90deg,
      #ff4d73,
      #7658ff,
      #ffca28
    );

}


.theme9-bio{

  max-width:580px;

  margin:
    32px
    0
    30px;

  color:#aaa5b3;

  font-size:15px;

  line-height:1.9;

}


.theme9-social{

  display:flex;

}


.theme9-socials{

  display:flex;

  flex-wrap:wrap;

  gap:10px;

}


.theme9-social-link{

  width:46px;

  height:46px;

  display:flex;

  align-items:center;

  justify-content:center;

  color:#ffffff;

  background:
    rgba(255,255,255,.055);

  border:
    1px
    solid
    rgba(255,255,255,.10);

  border-radius:14px;

  transition:
    transform .3s ease,
    background .3s ease,
    border-color .3s ease;

}


.theme9-social-link:hover{

  transform:
    translateY(-6px)
    rotate(-5deg);

  background:#7658ff;

  border-color:#7658ff;

}


/* =========================================================
   HERO ARROW
========================================================= */

.theme9-hero-arrow{

  position:absolute;

  left:45px;

  bottom:35px;

  width:40px;

  height:40px;

  display:flex;

  align-items:center;

  justify-content:center;

  border:
    1px
    solid
    rgba(255,255,255,.12);

  border-radius:50%;

  color:#aaa5b3;

  font-size:14px;

  animation:
    theme9Arrow
    2s
    ease-in-out
    infinite;

}


@keyframes theme9Arrow{

  0%,
  100%{
    transform:
      translateY(0);
  }

  50%{
    transform:
      translateY(7px);
  }

}


/* =========================================================
   INTRO
========================================================= */

.theme9-intro{

  display:grid;

  grid-template-columns:
    1fr
    1fr;

  gap:50px;

  align-items:end;

  padding:
    100px
    30px
    45px;

}


.theme9-intro-title{

  display:flex;

  align-items:center;

  gap:15px;

}


.theme9-intro-title span{

  font-size:10px;

  letter-spacing:4px;

  font-weight:950;

  color:#ffffff;

}


.theme9-intro-title div{

  width:55px;

  height:1px;

  background:
    rgba(255,255,255,.25);

}


.theme9-intro-copy{

  max-width:400px;

  color:#77727f;

  font-size:13px;

  line-height:1.8;

}


/* =========================================================
   FEATURED
========================================================= */

.theme9-featured{

  padding:
    0
    30px;

}


.theme9-featured-label{

  margin-bottom:14px;

  font-size:8px;

  letter-spacing:4px;

  font-weight:900;

  color:#77727f;

}


.theme9-featured-card{

  position:relative;

  min-height:145px;

  display:grid;

  grid-template-columns:
    110px
    1fr
    70px;

  align-items:center;

  overflow:hidden;

  border:
    1px
    solid
    rgba(255,255,255,.10);

  border-radius:
    28px
    8px
    28px
    8px;

  background:
    linear-gradient(
      110deg,
      rgba(255,255,255,.08),
      rgba(255,255,255,.025)
    );

  transition:
    transform .4s ease,
    box-shadow .4s ease;

}


.theme9-featured-card::before{

  content:"";

  position:absolute;

  width:300px;

  height:300px;

  right:-130px;

  top:-180px;

  border-radius:50%;

  background:
    rgba(118,86,255,.25);

}


.theme9-featured-card::after{

  content:"";

  position:absolute;

  width:180px;

  height:180px;

  left:-100px;

  bottom:-130px;

  border-radius:50%;

  background:
    rgba(255,77,109,.20);

}


.theme9-featured-card:hover{

  transform:
    translateY(-6px);

  box-shadow:
    0
    25px
    65px
    rgba(0,0,0,.25);

}


.theme9-featured-left{

  position:relative;

  z-index:2;

  display:flex;

  align-items:center;

  justify-content:center;

}


.theme9-featured-symbol{

  width:65px;

  height:65px;

  display:flex;

  align-items:center;

  justify-content:center;

  border-radius:
    18px
    18px
    18px
    5px;

  background:
    linear-gradient(
      135deg,
      #ff4d73,
      #7658ff
    );

  color:#ffffff;

  font-size:22px;

  transform:
    rotate(-5deg);

  box-shadow:
    0
    15px
    30px
    rgba(118,86,255,.20);

}


.theme9-featured-content{

  position:relative;

  z-index:2;

  display:flex;

  flex-direction:column;

  gap:7px;

}


.theme9-featured-content span{

  font-size:7px;

  letter-spacing:3px;

  color:#88828f;

  font-weight:900;

}


.theme9-featured-content strong{

  font-size:21px;

  font-weight:900;

}


.theme9-featured-content small{

  color:#77727f;

  font-size:11px;

}


.theme9-featured-button{

  position:relative;

  z-index:2;

  width:55px;

  height:55px;

  display:flex;

  align-items:center;

  justify-content:center;

  border:
    1px
    solid
    rgba(255,255,255,.13);

  border-radius:50%;

  font-size:20px;

  transition:
    transform .35s ease,
    background .35s ease;

}


.theme9-featured-card:hover
.theme9-featured-button{

  transform:
    rotate(45deg);

  background:#7658ff;

}


/* =========================================================
   LINKS SECTION
========================================================= */

.theme9-links-section{

  width:
    min(
      760px,
      100%
    );

  margin:
    100px
    auto
    0;

}


.theme9-section-heading{

  display:grid;

  grid-template-columns:
    auto
    auto
    1fr;

  align-items:center;

  gap:15px;

  margin-bottom:20px;

}


.theme9-section-index{

  width:28px;

  height:28px;

  display:flex;

  align-items:center;

  justify-content:center;

  border:
    1px
    solid
    rgba(255,255,255,.12);

  border-radius:9px;

}


.theme9-section-index span{

  width:7px;

  height:7px;

  border-radius:50%;

  background:#ff4d73;

}


.theme9-section-heading h2{

  margin:0;

  font-size:10px;

  letter-spacing:4px;

  font-weight:950;

}


.theme9-section-line{

  height:1px;

  background:
    rgba(255,255,255,.10);

}


/* =========================================================
   LINKS
========================================================= */

.theme9-links{

  width:100%;

}


.theme9-link{

  display:flex;

  flex-direction:column;

  gap:15px;

}


/* =========================================================
   DEFAULT LINK
========================================================= */

.theme9-default-link{

  position:relative;

  width:100%;

  min-height:78px;

  display:flex;

  align-items:center;

  justify-content:center;

  padding:
    16px
    70px;

  border:
    1px
    solid
    rgba(255,255,255,.08);

  border-radius:
    18px
    7px
    18px
    7px;

  background:
    rgba(255,255,255,.045);

  color:#ffffff;

  text-decoration:none;

  font-size:14px;

  font-weight:800;

  overflow:hidden;

  transition:
    transform .35s ease,
    background .35s ease,
    border-color .35s ease,
    box-shadow .35s ease;

}


.theme9-default-link::before{

  content:"";

  position:absolute;

  left:0;

  top:0;

  bottom:0;

  width:4px;

  background:
    linear-gradient(
      180deg,
      #ff4d73,
      #7658ff
    );

  transform:
    scaleY(.2);

  transition:
    transform .35s ease;

}


.theme9-default-link::after{

  content:"↗";

  position:absolute;

  right:18px;

  width:38px;

  height:38px;

  display:flex;

  align-items:center;

  justify-content:center;

  border:
    1px
    solid
    rgba(255,255,255,.10);

  border-radius:50%;

  color:#aaa5b3;

  transition:
    transform .35s ease,
    background .35s ease,
    color .35s ease;

}


.theme9-default-link:hover{

  transform:
    translateY(-6px);

  background:
    rgba(255,255,255,.08);

  border-color:
    rgba(118,86,255,.35);

  box-shadow:
    0
    18px
    45px
    rgba(0,0,0,.20);

}


.theme9-default-link:hover::before{

  transform:
    scaleY(1);

}


.theme9-default-link:hover::after{

  transform:
    rotate(45deg);

  background:#7658ff;

  color:#ffffff;

}


/* =========================================================
   WHATSAPP
========================================================= */

.theme9-whatsapp-link{

  display:block;

  width:100%;

  text-decoration:none;

}


.theme9-whatsapp{

  min-height:78px;

  display:flex;

  align-items:center;

  justify-content:center;

  border-radius:
    18px
    7px
    18px
    7px;

  background:
    linear-gradient(
      135deg,
      #20c96b,
      #07954a
    );

  color:#ffffff;

  font-size:14px;

  font-weight:900;

  box-shadow:
    0
    18px
    40px
    rgba(32,201,107,.12);

  transition:
    transform .35s ease;

}


.theme9-whatsapp:hover{

  transform:
    translateY(-6px);

}


/* =========================================================
   PRODUCT CARD
========================================================= */

.theme9-product-card{

  position:relative;

  display:grid;

  grid-template-columns:
    1.1fr
    .9fr;

  overflow:hidden;

  background:
    #14121c;

  color:#ffffff;

  border:
    1px
    solid
    rgba(255,255,255,.09);

  border-radius:
    25px
    8px
    25px
    8px;

  text-decoration:none;

  transition:
    transform .4s ease,
    box-shadow .4s ease;

}


.theme9-product-card:hover{

  transform:
    translateY(-8px);

  box-shadow:
    0
    25px
    55px
    rgba(0,0,0,.25);

}


.theme9-product-image{

  width:100%;

  height:310px;

  object-fit:cover;

  display:block;

  transition:
    transform .6s ease;

}


.theme9-product-card:hover
.theme9-product-image{

  transform:
    scale(1.06);

}


.theme9-product-content{

  display:flex;

  flex-direction:column;

  justify-content:center;

  padding:30px;

  gap:9px;

}


.theme9-product-title{

  font-size:19px;

  font-weight:950;

}


.theme9-product-price{

  color:#ff6686;

  font-size:17px;

  font-weight:900;

}


/* =========================================================
   PRODUCT LINK
========================================================= */

.theme9-product-link{

  display:flex;

  align-items:center;

  gap:14px;

  padding:10px;

  background:
    rgba(255,255,255,.045);

  border:
    1px
    solid
    rgba(255,255,255,.08);

  border-radius:18px;

  color:#ffffff;

  text-decoration:none;

  transition:
    transform .35s ease,
    background .35s ease;

}


.theme9-product-link:hover{

  transform:
    translateY(-5px);

  background:
    rgba(255,255,255,.08);

}


.theme9-product-link-image{

  width:72px;

  height:72px;

  flex-shrink:0;

  object-fit:cover;

  border-radius:14px;

}


.theme9-product-link-info{

  flex:1;

  min-width:0;

  display:flex;

  flex-direction:column;

  gap:6px;

}


.theme9-product-link .theme9-product-title{

  font-size:13px;

  white-space:nowrap;

  overflow:hidden;

  text-overflow:ellipsis;

}


.theme9-product-link .theme9-product-price{

  font-size:12px;

}


/* =========================================================
   VIDEO
========================================================= */

.theme9-video,
.theme9-youtube{

  overflow:hidden;

  border-radius:
    24px
    8px
    24px
    8px;

  background:#000;

  box-shadow:
    0
    20px
    50px
    rgba(0,0,0,.25);

}


.theme9-video iframe,
.theme9-youtube iframe{

  display:block;

  width:100%;

  aspect-ratio:16/9;

  border:0;

}


.theme9-youtube-playlist{

  height:520px;

  overflow:hidden;

  border-radius:
    24px
    8px
    24px
    8px;

}


.theme9-youtube-playlist iframe{

  width:100%;

  height:100%;

  border:0;

}


/* =========================================================
   FORM
========================================================= */

.theme9-form{

  display:flex;

  flex-direction:column;

  gap:18px;

  padding:26px;

  background:
    rgba(255,255,255,.045);

  border:
    1px
    solid
    rgba(255,255,255,.09);

  border-radius:
    24px
    8px
    24px
    8px;

}


.theme9-form-fields{

  display:flex;

  flex-direction:column;

  gap:12px;

}


.theme9-form-input{

  width:100%;

  padding:16px;

  border:
    1px
    solid
    rgba(255,255,255,.10);

  border-radius:14px;

  background:
    rgba(255,255,255,.04);

  color:#ffffff;

  outline:none;

  font-family:inherit;

  font-size:13px;

  transition:
    border-color .3s ease,
    background .3s ease,
    box-shadow .3s ease;

}


.theme9-form-input::placeholder{

  color:#77727f;

}


.theme9-form-input:focus{

  border-color:#7658ff;

  background:
    rgba(255,255,255,.07);

  box-shadow:
    0
    0
    0
    4px
    rgba(118,86,255,.10);

}


textarea.theme9-form-input{

  min-height:130px;

  resize:vertical;

}


.theme9-form-button{

  height:55px;

  border:0;

  border-radius:15px;

  background:
    linear-gradient(
      135deg,
      #ff4d73,
      #7658ff
    );

  color:#ffffff;

  font-size:13px;

  font-weight:900;

  cursor:pointer;

  transition:
    transform .3s ease,
    box-shadow .3s ease;

}


.theme9-form-button:hover{

  transform:
    translateY(-4px);

  box-shadow:
    0
    18px
    35px
    rgba(118,86,255,.20);

}


/* =========================================================
   VISUAL STRIP
========================================================= */

.theme9-visual-strip{

  position:relative;

  width:
    min(
      900px,
      100%
    );

  min-height:190px;

  display:flex;

  align-items:center;

  justify-content:space-between;

  margin:
    110px
    auto
    0;

  padding:
    35px
    45px;

  overflow:hidden;

  border-radius:
    35px
    8px
    35px
    8px;

  border:
    1px
    solid
    rgba(255,255,255,.08);

  background:
    linear-gradient(
      120deg,
      #181521,
      #211b32
    );

}


.theme9-visual-shape{

  position:absolute;

  border-radius:50%;

  pointer-events:none;

}


.shape-a{

  width:180px;

  height:180px;

  right:-50px;

  top:-100px;

  background:#7658ff;

  opacity:.45;

}


.shape-b{

  width:110px;

  height:110px;

  left:35%;

  bottom:-75px;

  background:#ff4d73;

  opacity:.40;

}


.shape-c{

  width:65px;

  height:65px;

  left:48%;

  top:25px;

  background:#ffca28;

  opacity:.70;

}


.theme9-visual-content{

  position:relative;

  z-index:2;

  display:flex;

  flex-direction:column;

  gap:8px;

}


.theme9-visual-content span{

  font-size:8px;

  letter-spacing:4px;

  color:#85808c;

  font-weight:900;

}


.theme9-visual-content strong{

  font-size:
    clamp(
      20px,
      4vw,
      34px
    );

  font-weight:950;

  letter-spacing:-1px;

}


.theme9-visual-arrow{

  position:relative;

  z-index:2;

  width:60px;

  height:60px;

  display:flex;

  align-items:center;

  justify-content:center;

  border:
    1px
    solid
    rgba(255,255,255,.15);

  border-radius:50%;

  font-size:20px;

  transition:
    transform .35s ease,
    background .35s ease;

}


.theme9-visual-strip:hover
.theme9-visual-arrow{

  transform:
    rotate(45deg);

  background:#7658ff;

}


/* =========================================================
   FOOTER
========================================================= */

.theme9-footer{

  margin-top:75px;

}


.theme9-footer-line{

  height:1px;

  background:
    rgba(255,255,255,.09);

}


.theme9-footer-content{

  min-height:75px;

  display:grid;

  grid-template-columns:
    1fr
    1fr
    auto;

  align-items:center;

  gap:20px;

  color:#6e6976;

  font-size:8px;

  letter-spacing:3px;

  font-weight:900;

}


.theme9-footer-center{

  display:flex;

  align-items:center;

  justify-content:center;

  gap:10px;

}


.theme9-footer-center span{

  width:4px;

  height:4px;

  border-radius:50%;

  background:#ff4d73;

}


.theme9-footer-content > span:last-child{

  color:#7658ff;

  font-size:14px;

}


/* =========================================================
   TABLET
========================================================= */

@media(max-width:900px){

  .theme9-page{

    width:
      calc(100% - 30px);

  }


  .theme9-hero{

    grid-template-columns:
      .8fr
      1.2fr;

    padding:
      55px
      45px;

    min-height:520px;

  }


  .theme9-avatar-area{

    width:280px;

    height:330px;

  }


  .theme9-avatar-back{

    width:240px;

    height:290px;

  }


  .theme9-avatar-frame{

    width:225px;

    height:275px;

  }


  .theme9-username{

    font-size:
      clamp(
        44px,
        8vw,
        75px
      );

  }

}


/* =========================================================
   MOBILE
========================================================= */

@media(max-width:650px){

  .theme9-page{

    width:
      calc(100% - 18px);

    padding:
      10px
      0
      30px;

  }


  .theme9-topbar{

    height:48px;

  }


  .theme9-hero{

    grid-template-columns:1fr;

    gap:45px;

    min-height:auto;

    margin-top:15px;

    padding:
      45px
      20px
      55px;

    text-align:center;

    border-radius:
      35px
      8px
      35px
      8px;

  }


  .theme9-avatar-area{

    width:240px;

    height:290px;

    margin:auto;

  }


  .theme9-avatar-back{

    width:210px;

    height:250px;

  }


  .theme9-avatar-frame{

    width:200px;

    height:245px;

  }


  .theme9-avatar-badge{

    width:55px;

    height:55px;

    right:5px;

    bottom:15px;

    font-size:16px;

    border-width:5px;

  }


  .theme9-hero-info{

    padding:0;

  }


  .theme9-eyebrow{

    justify-content:center;

  }


  .theme9-username{

    font-size:
      clamp(
        38px,
        13vw,
        65px
      );

    letter-spacing:-4px;

  }


  .theme9-username::after{

    width:80px;

    height:6px;

    margin:
      20px
      auto
      0;

  }


  .theme9-bio{

    margin:
      25px
      auto;

    max-width:500px;

    font-size:13px;

  }


  .theme9-social{

    justify-content:center;

  }


  .theme9-hero-arrow{

    left:50%;

    bottom:15px;

    transform:
      translateX(-50%);

  }


  .theme9-intro{

    grid-template-columns:1fr;

    gap:15px;

    padding:
      65px
      10px
      30px;

  }


  .theme9-intro-copy{

    font-size:12px;

  }


  .theme9-featured{

    padding:0 5px;

  }


  .theme9-featured-card{

    grid-template-columns:
      65px
      1fr
      55px;

    min-height:125px;

    border-radius:
      22px
      7px
      22px
      7px;

  }


  .theme9-featured-symbol{

    width:50px;

    height:50px;

    font-size:17px;

  }


  .theme9-featured-content strong{

    font-size:16px;

  }


  .theme9-featured-content small{

    font-size:10px;

  }


  .theme9-featured-button{

    width:45px;

    height:45px;

  }


  .theme9-links-section{

    margin-top:70px;

    padding:0 5px;

  }


  .theme9-default-link{

    min-height:65px;

    padding:
      13px
      55px;

    font-size:12px;

  }


  .theme9-default-link::after{

    right:13px;

    width:32px;

    height:32px;

  }


  .theme9-product-card{

    grid-template-columns:1fr;

  }


  .theme9-product-image{

    height:230px;

  }


  .theme9-product-content{

    padding:22px;

  }


  .theme9-product-title{

    font-size:17px;

  }


  .theme9-product-price{

    font-size:15px;

  }


  .theme9-product-link-image{

    width:62px;

    height:62px;

  }


  .theme9-youtube-playlist{

    height:340px;

  }


  .theme9-form{

    padding:18px;

  }


  .theme9-form-input{

    padding:13px;

    font-size:12px;

  }


  .theme9-form-button{

    height:50px;

    font-size:12px;

  }


  .theme9-visual-strip{

    min-height:150px;

    margin-top:75px;

    padding:
      28px
      25px;

  }


  .theme9-visual-arrow{

    width:48px;

    height:48px;

    font-size:16px;

  }


  .theme9-footer{

    margin-top:50px;

  }


  .theme9-footer-content{

    min-height:65px;

    grid-template-columns:
      1fr
      auto;

  }


  .theme9-footer-center{

    display:none;

  }

}


/* =========================================================
   SMALL MOBILE
========================================================= */

@media(max-width:380px){

  .theme9-hero{

    padding:
      38px
      15px
      50px;

  }


  .theme9-avatar-area{

    width:210px;

    height:255px;

  }


  .theme9-avatar-back{

    width:185px;

    height:220px;

  }


  .theme9-avatar-frame{

    width:175px;

    height:215px;

  }


  .theme9-username{

    font-size:34px;

    letter-spacing:-3px;

  }


  .theme9-bio{

    font-size:12px;

  }


  .theme9-featured-card{

    grid-template-columns:
      52px
      1fr
      45px;

  }


  .theme9-featured-symbol{

    width:43px;

    height:43px;

  }


  .theme9-featured-content strong{

    font-size:14px;

  }


  .theme9-default-link{

    min-height:60px;

    font-size:11px;

  }

}


/* =========================================================
   REDUCED MOTION
========================================================= */

@media(prefers-reduced-motion:reduce){

  .theme9-container *,
  .theme9-container *::before,
  .theme9-container *::after{

    animation:none !important;

    transition:none !important;

  }

}

      `}</style>

    </div>

  );

}