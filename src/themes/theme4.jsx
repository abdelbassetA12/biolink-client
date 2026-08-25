import LinkRenderer from "../components/LinkRenderer";
import SocialRenderer from "../components/SocialRenderer";

export default function Theme4({ user, links }) {

  const theme = "theme4";

  return (

    <div className={`${theme}-container`}>

      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div className={`${theme}-background`} />

      <div className={`${theme}-noise`} />

      <div className={`${theme}-orb theme4-orb-one`} />
      <div className={`${theme}-orb theme4-orb-two`} />


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className={`${theme}-page`}>


        {/* ===================================================
            TOP NAV
        =================================================== */}

        <header className={`${theme}-topbar`}>

          <div className={`${theme}-brand`}>
            QEVORA<span>.</span>
          </div>

          <div className={`${theme}-top-center`}>
            DIGITAL IDENTITY
          </div>

          <div className={`${theme}-top-index`}>
            004 / 004
          </div>

        </header>


        {/* ===================================================
            HERO
        =================================================== */}

        <section className={`${theme}-hero`}>


          {/* LEFT DECORATION */}

          <div className={`${theme}-hero-side theme4-side-left`}>

            <span>PROFILE</span>

            <div className={`${theme}-vertical-line`} />

            <span>01</span>

          </div>


          {/* CENTER */}

          <div className={`${theme}-hero-center`}>


            <div className={`${theme}-orbit orbit-one`} />
            <div className={`${theme}-orbit orbit-two`} />
            <div className={`${theme}-orbit orbit-three`} />


            <div className={`${theme}-hero-photo`}>

              <div className={`${theme}-photo-corner corner-tl`} />
              <div className={`${theme}-photo-corner corner-tr`} />
              <div className={`${theme}-photo-corner corner-bl`} />
              <div className={`${theme}-photo-corner corner-br`} />

              <img
                src={user?.avatar || ""}
                alt={user?.username || "Profile"}
                className={`${theme}-avatar`}
              />

              <div className={`${theme}-photo-label`}>
                <span>IMG</span>
                <strong>001</strong>
              </div>

            </div>


            <div className={`${theme}-hero-name`}>

              <span className={`${theme}-name-small`}>
                HELLO, I'M
              </span>

              <h1>
                {user?.username || "Your Name"}
              </h1>

            </div>


            {user?.bio && (

              <p className={`${theme}-bio`}>
                {user.bio}
              </p>

            )}


            <div className={`${theme}-hero-status`}>

              <span className={`${theme}-status-dot`} />

              AVAILABLE FOR CONNECTIONS

            </div>

          </div>


          {/* RIGHT DECORATION */}

          <div className={`${theme}-hero-side theme4-side-right`}>

            <span>SCROLL</span>

            <div className={`${theme}-scroll-line`} />

            <span>↓</span>

          </div>

        </section>


        {/* ===================================================
            SOCIALS
        =================================================== */}

        <section className={`${theme}-social-zone`}>

          <div className={`${theme}-section-label`}>
            FIND ME
          </div>

          <div className={`${theme}-social-wrapper`}>

            <SocialRenderer
              user={user}
              theme={theme}
            />

          </div>

          <div className={`${theme}-section-index`}>
            02
          </div>

        </section>


        {/* ===================================================
            LINKS INTRO
        =================================================== */}

        <section className={`${theme}-links-header`}>

          <div className={`${theme}-links-index`}>
            03
          </div>

          <div>

            <span className={`${theme}-eyebrow`}>
              MY DIGITAL UNIVERSE
            </span>

            <h2>
              Explore
              <em> more.</em>
            </h2>

          </div>

          <div className={`${theme}-links-description`}>
            Everything important,
            gathered in one place.
          </div>

        </section>


        {/* ===================================================
            LINKS
        =================================================== */}

        <section className={`${theme}-links-zone`}>

          <div className={`${theme}-links`}>

            <LinkRenderer
              links={links || []}
              theme={theme}
            />

          </div>

        </section>


        {/* ===================================================
            FINAL MESSAGE
        =================================================== */}

        <section className={`${theme}-final`}>

          <div className={`${theme}-final-ring`}>

            <span>
              THANK YOU
            </span>

          </div>

          <div className={`${theme}-final-text`}>

            <span>
              KEEP IN TOUCH
            </span>

            <strong>
              SEE YOU
              <br />
              AROUND.
            </strong>

          </div>

        </section>


        {/* ===================================================
            FOOTER
        =================================================== */}

        <footer className={`${theme}-footer`}>

          <div>
            © {new Date().getFullYear()} QEVORA
          </div>

          <div>
            PERSONAL DIGITAL SPACE
          </div>

          <div>
            004
          </div>

        </footer>


      </main>


      {/* =====================================================
          CSS
      ===================================================== */}

      <style>

{`

/* =========================================================
   RESET
========================================================= */

.theme4-container,
.theme4-container *,
.theme4-container *::before,
.theme4-container *::after{

  box-sizing:border-box;

}


/* =========================================================
   CONTAINER
========================================================= */

.theme4-container{

  position:relative;

  width:100%;

  min-height:100vh;

  overflow:hidden;

  isolation:isolate;

  background:#0c0c0f;

  color:#f5f3ef;

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

.theme4-background{

  position:absolute;

  inset:0;

  z-index:-10;

  pointer-events:none;

  background:

    radial-gradient(
      circle at 50% 35%,
      rgba(255,255,255,.055),
      transparent 28%
    ),

    radial-gradient(
      circle at 10% 80%,
      rgba(217,70,239,.08),
      transparent 25%
    ),

    radial-gradient(
      circle at 90% 15%,
      rgba(59,130,246,.08),
      transparent 25%
    ),

    #0c0c0f;

}


/* =========================================================
   NOISE
========================================================= */

.theme4-noise{

  position:absolute;

  inset:0;

  z-index:-9;

  pointer-events:none;

  opacity:.045;

  background-image:

    url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.6'/%3E%3C/svg%3E");

}


/* =========================================================
   ORBS
========================================================= */

.theme4-orb{

  position:absolute;

  border-radius:50%;

  pointer-events:none;

  filter:blur(80px);

  z-index:-8;

}


.theme4-orb-one{

  width:320px;

  height:320px;

  left:-180px;

  top:25%;

  background:#7c3aed;

  opacity:.12;

}


.theme4-orb-two{

  width:260px;

  height:260px;

  right:-150px;

  bottom:15%;

  background:#2563eb;

  opacity:.10;

}


/* =========================================================
   PAGE
========================================================= */

.theme4-page{

  position:relative;

  width:100%;

  max-width:1500px;

  margin:0 auto;

  padding:
    0
    42px;

}


/* =========================================================
   TOPBAR
========================================================= */

.theme4-topbar{

  height:82px;

  display:grid;

  grid-template-columns:
    1fr
    1fr
    1fr;

  align-items:center;

  border-bottom:
    1px solid
    rgba(255,255,255,.09);

}


.theme4-brand{

  font-size:13px;

  font-weight:900;

  letter-spacing:3px;

}


.theme4-brand span{

  color:#c084fc;

}


.theme4-top-center{

  text-align:center;

  font-size:8px;

  letter-spacing:3px;

  color:#77777f;

  font-weight:800;

}


.theme4-top-index{

  text-align:right;

  font-size:8px;

  letter-spacing:2px;

  color:#77777f;

}


/* =========================================================
   HERO
========================================================= */

.theme4-hero{

  position:relative;

  min-height:
    calc(100vh - 82px);

  display:flex;

  align-items:center;

  justify-content:center;

  padding:
    90px
    0
    120px;

}


/* =========================================================
   SIDE ELEMENTS
========================================================= */

.theme4-hero-side{

  position:absolute;

  top:50%;

  transform:translateY(-50%);

  display:flex;

  flex-direction:column;

  align-items:center;

  gap:20px;

  color:#5e5e66;

  font-size:7px;

  letter-spacing:3px;

  font-weight:900;

}


.theme4-side-left{

  left:0;

}


.theme4-side-right{

  right:0;

}


.theme4-vertical-line{

  width:1px;

  height:90px;

  background:
    linear-gradient(
      to bottom,
      transparent,
      #55555d,
      transparent
    );

}


.theme4-scroll-line{

  width:1px;

  height:90px;

  background:
    linear-gradient(
      to bottom,
      #55555d,
      transparent
    );

}


/* =========================================================
   HERO CENTER
========================================================= */

.theme4-hero-center{

  position:relative;

  width:
    min(
      800px,
      80vw
    );

  display:flex;

  flex-direction:column;

  align-items:center;

  text-align:center;

}


/* =========================================================
   ORBITS
========================================================= */

.theme4-orbit{

  position:absolute;

  border:
    1px solid
    rgba(255,255,255,.075);

  border-radius:50%;

  pointer-events:none;

}


.orbit-one{

  width:560px;

  height:560px;

}


.orbit-two{

  width:720px;

  height:720px;

  border-color:
    rgba(192,132,252,.055);

}


.orbit-three{

  width:880px;

  height:880px;

  border-color:
    rgba(255,255,255,.035);

}


/* =========================================================
   PHOTO
========================================================= */

.theme4-hero-photo{

  position:relative;

  width:
    clamp(
      190px,
      25vw,
      310px
    );

  height:
    clamp(
      250px,
      32vw,
      400px
    );

  margin-bottom:48px;

}


.theme4-avatar{

  width:100%;

  height:100%;

  object-fit:cover;

  display:block;

  filter:
    grayscale(100%)
    contrast(1.08);

  background:#202024;

  transition:
    filter .6s ease,
    transform .6s ease;

}


.theme4-hero-photo:hover
.theme4-avatar{

  filter:
    grayscale(0%)
    contrast(1.05);

  transform:
    scale(1.025);

}


/* =========================================================
   PHOTO CORNERS
========================================================= */

.theme4-photo-corner{

  position:absolute;

  width:22px;

  height:22px;

  z-index:3;

}


.corner-tl{

  left:-10px;

  top:-10px;

  border-left:
    2px solid #c084fc;

  border-top:
    2px solid #c084fc;

}


.corner-tr{

  right:-10px;

  top:-10px;

  border-right:
    2px solid #c084fc;

  border-top:
    2px solid #c084fc;

}


.corner-bl{

  left:-10px;

  bottom:-10px;

  border-left:
    2px solid #c084fc;

  border-bottom:
    2px solid #c084fc;

}


.corner-br{

  right:-10px;

  bottom:-10px;

  border-right:
    2px solid #c084fc;

  border-bottom:
    2px solid #c084fc;

}


/* =========================================================
   PHOTO LABEL
========================================================= */

.theme4-photo-label{

  position:absolute;

  right:-42px;

  bottom:25px;

  display:flex;

  flex-direction:column;

  align-items:flex-start;

  gap:3px;

  font-size:7px;

  letter-spacing:2px;

}


.theme4-photo-label span{

  color:#66666e;

}


.theme4-photo-label strong{

  color:#c084fc;

}


/* =========================================================
   NAME
========================================================= */

.theme4-hero-name{

  position:relative;

  z-index:2;

}


.theme4-name-small{

  display:block;

  margin-bottom:12px;

  font-size:8px;

  letter-spacing:4px;

  color:#77777f;

  font-weight:900;

}


.theme4-hero-name h1{

  max-width:100%;

  margin:0;

  font-size:
    clamp(
      48px,
      8vw,
      105px
    );

  line-height:.85;

  letter-spacing:-5px;

  font-weight:950;

  overflow-wrap:anywhere;

  color:#f5f3ef;

}


/* =========================================================
   BIO
========================================================= */

.theme4-bio{

  max-width:550px;

  margin:
    30px
    auto
    0;

  font-size:13px;

  line-height:1.9;

  color:#8d8d95;

}


/* =========================================================
   STATUS
========================================================= */

.theme4-hero-status{

  margin-top:28px;

  display:flex;

  align-items:center;

  gap:9px;

  font-size:7px;

  letter-spacing:2px;

  font-weight:900;

  color:#6e6e76;

}


.theme4-status-dot{

  width:6px;

  height:6px;

  border-radius:50%;

  background:#a7f3d0;

  box-shadow:
    0 0 0 5px
    rgba(167,243,208,.05);

}


/* =========================================================
   SOCIAL ZONE
========================================================= */

.theme4-social-zone{

  min-height:105px;

  display:grid;

  grid-template-columns:
    120px
    1fr
    50px;

  align-items:center;

  border-top:
    1px solid
    rgba(255,255,255,.09);

  border-bottom:
    1px solid
    rgba(255,255,255,.09);

}


.theme4-section-label{

  font-size:8px;

  letter-spacing:3px;

  font-weight:900;

  color:#77777f;

}


.theme4-social-wrapper{

  display:flex;

  justify-content:center;

}


.theme4-socials{

  display:flex;

  align-items:center;

  justify-content:center;

  gap:12px;

  flex-wrap:wrap;

}


.theme4-social-link{

  width:45px;

  height:45px;

  display:flex;

  align-items:center;

  justify-content:center;

  border:
    1px solid
    rgba(255,255,255,.10);

  border-radius:50%;

  background:
    rgba(255,255,255,.025);

  color:#d5d5da;

  transition:
    transform .35s ease,
    background .35s ease,
    color .35s ease,
    border-color .35s ease;

}


.theme4-social-link:hover{

  transform:
    translateY(-5px);

  background:#c084fc;

  color:#0c0c0f;

  border-color:#c084fc;

}


.theme4-section-index{

  text-align:right;

  font-size:9px;

  color:#66666e;

  letter-spacing:2px;

}


/* =========================================================
   LINKS HEADER
========================================================= */

.theme4-links-header{

  display:grid;

  grid-template-columns:
    90px
    1fr
    280px;

  gap:35px;

  align-items:end;

  padding:
    130px
    0
    55px;

}


.theme4-links-index{

  font-size:9px;

  color:#c084fc;

  letter-spacing:2px;

  font-weight:900;

}


.theme4-eyebrow{

  display:block;

  margin-bottom:15px;

  font-size:8px;

  letter-spacing:3px;

  font-weight:900;

  color:#676770;

}


.theme4-links-header h2{

  margin:0;

  font-size:
    clamp(
      45px,
      6vw,
      80px
    );

  line-height:.8;

  letter-spacing:-4px;

  font-weight:950;

}


.theme4-links-header h2 em{

  color:#c084fc;

  font-style:normal;

}


.theme4-links-description{

  max-width:260px;

  justify-self:end;

  font-size:11px;

  line-height:1.8;

  color:#74747c;

}


/* =========================================================
   LINKS
========================================================= */

.theme4-links-zone{

  width:100%;

}


.theme4-links{

  width:100%;

}


.theme4-link{

  width:100%;

  display:grid;

  grid-template-columns:
    repeat(
      12,
      1fr
    );

  gap:14px;

}


/* =========================================================
   DEFAULT LINK
========================================================= */

.theme4-default-link{

  position:relative;

  grid-column:
    span 4;

  min-height:210px;

  display:flex;

  align-items:flex-end;

  padding:24px;

  overflow:hidden;

  text-decoration:none;

  color:#f5f3ef;

  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,.055),
      rgba(255,255,255,.015)
    );

  border:
    1px solid
    rgba(255,255,255,.09);

  transition:
    transform .45s ease,
    background .45s ease,
    border-color .45s ease;

}


.theme4-default-link:nth-child(4n){

  grid-column:
    span 8;

}


.theme4-default-link:nth-child(7n){

  grid-column:
    span 6;

}


.theme4-default-link:nth-child(3n){

  min-height:270px;

}


.theme4-default-link::before{

  content:"";

  position:absolute;

  width:160px;

  height:160px;

  border-radius:50%;

  right:-70px;

  top:-70px;

  background:#c084fc;

  opacity:.08;

  transition:
    transform .6s ease;

}


.theme4-default-link::after{

  content:"↗";

  position:absolute;

  right:20px;

  top:20px;

  width:34px;

  height:34px;

  display:flex;

  align-items:center;

  justify-content:center;

  border:
    1px solid
    rgba(255,255,255,.10);

  border-radius:50%;

  color:#85858d;

  transition:
    transform .4s ease,
    background .4s ease,
    color .4s ease;

}


.theme4-default-link:hover{

  transform:
    translateY(-8px);

  background:
    linear-gradient(
      145deg,
      rgba(192,132,252,.13),
      rgba(255,255,255,.025)
    );

  border-color:
    rgba(192,132,252,.35);

}


.theme4-default-link:hover::before{

  transform:
    scale(2.4);

}


.theme4-default-link:hover::after{

  transform:
    rotate(45deg);

  background:#c084fc;

  color:#0c0c0f;

  border-color:#c084fc;

}


/* =========================================================
   WHATSAPP
========================================================= */

.theme4-whatsapp-link{

  grid-column:
    span 12;

  display:block;

  text-decoration:none;

}


.theme4-whatsapp{

  min-height:130px;

  display:flex;

  align-items:center;

  justify-content:center;

  background:
    linear-gradient(
      135deg,
      #064e3b,
      #047857
    );

  color:#ffffff;

  font-size:14px;

  font-weight:900;

  border:
    1px solid
    rgba(52,211,153,.2);

  transition:
    transform .4s ease;

}


.theme4-whatsapp:hover{

  transform:
    translateY(-7px);

}


/* =========================================================
   PRODUCT CARD
========================================================= */

.theme4-product-card{

  grid-column:
    span 6;

  display:flex;

  flex-direction:column;

  overflow:hidden;

  background:
    rgba(255,255,255,.035);

  border:
    1px solid
    rgba(255,255,255,.09);

  color:#ffffff;

  text-decoration:none;

  transition:
    transform .45s ease,
    border-color .45s ease;

}


.theme4-product-card:hover{

  transform:
    translateY(-8px);

  border-color:
    rgba(192,132,252,.35);

}


.theme4-product-image{

  width:100%;

  height:340px;

  object-fit:cover;

  display:block;

  transition:
    transform .7s ease;

}


.theme4-product-card:hover
.theme4-product-image{

  transform:
    scale(1.045);

}


.theme4-product-content{

  padding:22px;

  display:flex;

  flex-direction:column;

  gap:8px;

}


.theme4-product-title{

  font-size:17px;

  font-weight:900;

}


.theme4-product-price{

  font-size:15px;

  font-weight:900;

  color:#c084fc;

}


/* =========================================================
   PRODUCT LINK
========================================================= */

.theme4-product-link{

  grid-column:
    span 6;

  display:flex;

  align-items:center;

  gap:18px;

  padding:14px;

  background:
    rgba(255,255,255,.035);

  border:
    1px solid
    rgba(255,255,255,.09);

  color:#ffffff;

  text-decoration:none;

  transition:
    transform .4s ease;

}


.theme4-product-link:hover{

  transform:
    translateY(-6px);

}


.theme4-product-link-image{

  width:90px;

  height:90px;

  object-fit:cover;

  flex-shrink:0;

}


.theme4-product-link-info{

  flex:1;

  min-width:0;

  display:flex;

  flex-direction:column;

  gap:7px;

}


.theme4-product-link .theme4-product-title{

  font-size:14px;

  white-space:nowrap;

  overflow:hidden;

  text-overflow:ellipsis;

}


.theme4-product-link .theme4-product-price{

  font-size:13px;

}


/* =========================================================
   VIDEO
========================================================= */

.theme4-video,
.theme4-youtube{

  grid-column:
    span 12;

  overflow:hidden;

  background:#000;

  border:
    1px solid
    rgba(255,255,255,.08);

}


.theme4-video iframe,
.theme4-youtube iframe{

  display:block;

  width:100%;

  aspect-ratio:16/9;

  border:0;

}


.theme4-youtube-playlist{

  grid-column:
    span 12;

  height:560px;

  overflow:hidden;

}


.theme4-youtube-playlist iframe{

  width:100%;

  height:100%;

  border:0;

}


/* =========================================================
   FORM
========================================================= */

.theme4-form{

  grid-column:
    span 12;

  padding:30px;

  display:flex;

  flex-direction:column;

  gap:18px;

  background:
    rgba(255,255,255,.035);

  border:
    1px solid
    rgba(255,255,255,.09);

}


.theme4-form-fields{

  display:flex;

  flex-direction:column;

  gap:12px;

}


.theme4-form-input{

  width:100%;

  padding:17px;

  border:
    1px solid
    rgba(255,255,255,.10);

  background:
    rgba(255,255,255,.025);

  color:#ffffff;

  outline:none;

  font-family:inherit;

  font-size:14px;

}


.theme4-form-input::placeholder{

  color:#686871;

}


.theme4-form-input:focus{

  border-color:
    rgba(192,132,252,.65);

  background:
    rgba(192,132,252,.045);

}


textarea.theme4-form-input{

  min-height:140px;

  resize:vertical;

}


.theme4-form-button{

  height:58px;

  border:0;

  background:#c084fc;

  color:#0c0c0f;

  font-size:14px;

  font-weight:900;

  cursor:pointer;

  transition:
    transform .3s ease,
    background .3s ease;

}


.theme4-form-button:hover{

  transform:
    translateY(-3px);

  background:#d8b4fe;

}


/* =========================================================
   FINAL
========================================================= */

.theme4-final{

  min-height:620px;

  display:grid;

  grid-template-columns:
    1fr
    1fr;

  align-items:center;

  gap:70px;

  padding:
    140px
    0;

}


.theme4-final-ring{

  width:
    min(
      35vw,
      430px
    );

  aspect-ratio:1;

  display:flex;

  align-items:center;

  justify-content:center;

  border:
    1px solid
    rgba(255,255,255,.10);

  border-radius:50%;

  justify-self:center;

  position:relative;

}


.theme4-final-ring::before{

  content:"";

  position:absolute;

  inset:35px;

  border:
    1px dashed
    rgba(192,132,252,.30);

  border-radius:50%;

}


.theme4-final-ring span{

  font-size:9px;

  letter-spacing:5px;

  font-weight:900;

  color:#77777f;

}


.theme4-final-text{

  display:flex;

  flex-direction:column;

  gap:20px;

}


.theme4-final-text span{

  font-size:8px;

  letter-spacing:3px;

  font-weight:900;

  color:#77777f;

}


.theme4-final-text strong{

  font-size:
    clamp(
      48px,
      7vw,
      95px
    );

  line-height:.82;

  letter-spacing:-5px;

  font-weight:950;

}


.theme4-final-text strong::first-line{

  color:#ffffff;

}


/* =========================================================
   FOOTER
========================================================= */

.theme4-footer{

  min-height:85px;

  display:grid;

  grid-template-columns:
    1fr
    1fr
    1fr;

  align-items:center;

  border-top:
    1px solid
    rgba(255,255,255,.09);

  font-size:8px;

  letter-spacing:2px;

  color:#64646c;

}


.theme4-footer div:first-child{

  color:#ffffff;

}


.theme4-footer div:nth-child(2){

  text-align:center;

}


.theme4-footer div:last-child{

  text-align:right;

}


/* =========================================================
   TABLET
========================================================= */

@media(max-width:1000px){

  .theme4-page{

    padding:
      0
      25px;

  }


  .theme4-hero{

    min-height:
      calc(100vh - 82px);

  }


  .orbit-two{

    width:600px;

    height:600px;

  }


  .orbit-three{

    width:730px;

    height:730px;

  }


  .theme4-default-link{

    grid-column:
      span 6;

  }


  .theme4-default-link:nth-child(4n){

    grid-column:
      span 6;

  }


  .theme4-default-link:nth-child(7n){

    grid-column:
      span 6;

  }


  .theme4-final{

    gap:40px;

  }

}


/* =========================================================
   TABLET PORTRAIT
========================================================= */

@media(max-width:768px){

  .theme4-page{

    padding:
      0
      18px;

  }


  .theme4-topbar{

    height:70px;

  }


  .theme4-hero{

    min-height:auto;

    padding:
      90px
      0
      100px;

  }


  .theme4-hero-side{

    display:none;

  }


  .theme4-hero-center{

    width:100%;

  }


  .orbit-one{

    width:430px;

    height:430px;

  }


  .orbit-two{

    width:540px;

    height:540px;

  }


  .orbit-three{

    width:650px;

    height:650px;

  }


  .theme4-social-zone{

    grid-template-columns:
      80px
      1fr
      35px;

  }


  .theme4-links-header{

    grid-template-columns:
      55px
      1fr;

    gap:20px;

    padding:
      90px
      0
      45px;

  }


  .theme4-links-description{

    grid-column:
      2;

    justify-self:start;

  }


  .theme4-default-link,
  .theme4-default-link:nth-child(4n),
  .theme4-default-link:nth-child(7n){

    grid-column:
      span 12;

    min-height:150px;

  }


  .theme4-product-card{

    grid-column:
      span 12;

  }


  .theme4-product-link{

    grid-column:
      span 12;

  }


  .theme4-final{

    grid-template-columns:
      1fr;

    padding:
      100px
      0;

  }


  .theme4-final-ring{

    width:320px;

  }


  .theme4-footer{

    grid-template-columns:
      1fr
      1fr;

    padding:
      20px
      0;

  }


  .theme4-footer div:nth-child(2){

    display:none;

  }


  .theme4-footer div:last-child{

    text-align:right;

  }

}


/* =========================================================
   MOBILE
========================================================= */

@media(max-width:480px){

  .theme4-page{

    padding:
      0
      12px;

  }


  .theme4-topbar{

    height:62px;

    grid-template-columns:
      1fr
      auto;

  }


  .theme4-top-center{

    display:none;

  }


  .theme4-top-index{

    font-size:7px;

  }


  .theme4-brand{

    font-size:10px;

    letter-spacing:2px;

  }


  .theme4-hero{

    padding:
      70px
      0
      80px;

  }


  .theme4-hero-photo{

    width:210px;

    height:275px;

    margin-bottom:40px;

  }


  .orbit-one{

    width:300px;

    height:300px;

  }


  .orbit-two{

    width:390px;

    height:390px;

  }


  .orbit-three{

    width:480px;

    height:480px;

  }


  .theme4-photo-corner{

    width:17px;

    height:17px;

  }


  .theme4-photo-label{

    right:-28px;

    bottom:15px;

  }


  .theme4-hero-name h1{

    font-size:
      clamp(
        42px,
        13vw,
        62px
      );

    letter-spacing:-3px;

  }


  .theme4-name-small{

    font-size:7px;

    letter-spacing:3px;

  }


  .theme4-bio{

    font-size:11px;

    line-height:1.8;

    margin-top:22px;

  }


  .theme4-hero-status{

    font-size:6px;

    letter-spacing:1.4px;

  }


  .theme4-social-zone{

    min-height:78px;

    grid-template-columns:
      60px
      1fr
      25px;

  }


  .theme4-section-label{

    font-size:6px;

    letter-spacing:2px;

  }


  .theme4-socials{

    gap:6px;

  }


  .theme4-social-link{

    width:34px;

    height:34px;

  }


  .theme4-links-header{

    grid-template-columns:
      35px
      1fr;

    padding:
      70px
      0
      35px;

  }


  .theme4-eyebrow{

    font-size:6px;

    letter-spacing:2px;

  }


  .theme4-links-header h2{

    font-size:48px;

    letter-spacing:-3px;

  }


  .theme4-links-description{

    font-size:9px;

    line-height:1.7;

  }


  .theme4-default-link,
  .theme4-default-link:nth-child(4n),
  .theme4-default-link:nth-child(7n){

    min-height:105px;

    padding:17px;

    font-size:12px;

  }


  .theme4-default-link::after{

    width:29px;

    height:29px;

    right:13px;

    top:13px;

    font-size:11px;

  }


  .theme4-whatsapp{

    min-height:105px;

    font-size:12px;

  }


  .theme4-product-image{

    height:230px;

  }


  .theme4-product-content{

    padding:17px;

  }


  .theme4-product-title{

    font-size:15px;

  }


  .theme4-product-price{

    font-size:13px;

  }


  .theme4-product-link{

    min-height:85px;

    padding:9px;

    gap:11px;

  }


  .theme4-product-link-image{

    width:62px;

    height:62px;

  }


  .theme4-product-link .theme4-product-title{

    font-size:12px;

  }


  .theme4-product-link .theme4-product-price{

    font-size:11px;

  }


  .theme4-form{

    padding:18px;

  }


  .theme4-form-input{

    padding:13px;

    font-size:12px;

  }


  .theme4-form-button{

    height:50px;

    font-size:12px;

  }


  .theme4-youtube-playlist{

    height:320px;

  }


  .theme4-final{

    padding:
      80px
      0;

    gap:55px;

  }


  .theme4-final-ring{

    width:250px;

  }


  .theme4-final-ring::before{

    inset:25px;

  }


  .theme4-final-ring span{

    font-size:7px;

    letter-spacing:3px;

  }


  .theme4-final-text strong{

    font-size:58px;

    letter-spacing:-4px;

  }


  .theme4-footer{

    min-height:65px;

    font-size:6px;

    letter-spacing:1.2px;

  }

}


/* =========================================================
   SMALL MOBILE
========================================================= */

@media(max-width:360px){

  .theme4-hero-photo{

    width:185px;

    height:245px;

  }


  .orbit-one{

    width:260px;

    height:260px;

  }


  .orbit-two{

    width:340px;

    height:340px;

  }


  .orbit-three{

    width:410px;

    height:410px;

  }


  .theme4-hero-name h1{

    font-size:37px;

  }


  .theme4-links-header h2{

    font-size:42px;

  }


  .theme4-default-link,
  .theme4-default-link:nth-child(4n),
  .theme4-default-link:nth-child(7n){

    min-height:92px;

    font-size:11px;

  }


  .theme4-product-image{

    height:195px;

  }


  .theme4-final-ring{

    width:210px;

  }


  .theme4-final-text strong{

    font-size:50px;

  }

}


/* =========================================================
   REDUCED MOTION
========================================================= */

@media(prefers-reduced-motion:reduce){

  .theme4-container *,
  .theme4-container *::before,
  .theme4-container *::after{

    animation:none !important;

    transition:none !important;

  }

}

`}

      </style>

    </div>

  );
}


