import LinkRenderer from "../components/LinkRenderer";
import SocialRenderer from "../components/SocialRenderer";

export default function Theme3({ user, links }) {

  const theme = "theme3";

  return (

    <div className={`${theme}-container`}>

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className={`${theme}-background`} />

      <div className={`${theme}-grid`} />

      <div className={`${theme}-shape theme3-shape-one`} />
      <div className={`${theme}-shape theme3-shape-two`} />


      {/* =====================================================
          MAIN PAGE
      ===================================================== */}

      <main className={`${theme}-page`}>


        {/* ===================================================
            HEADER
        =================================================== */}

        <header className={`${theme}-header`}>

          <div className={`${theme}-logo`}>
            Q
          </div>

          <div className={`${theme}-header-center`}>
            <span>PERSONAL SPACE</span>
          </div>

          <div className={`${theme}-header-number`}>
            003
          </div>

        </header>


        {/* ===================================================
            HERO
        =================================================== */}

        <section className={`${theme}-hero`}>


          {/* LEFT */}

          <div className={`${theme}-hero-info`}>

            <div className={`${theme}-hero-label`}>
              <span className={`${theme}-label-line`} />
              CREATIVE PROFILE
            </div>


            <h1 className={`${theme}-username`}>
              {user?.username || "Your Name"}
            </h1>


            {user?.bio && (

              <p className={`${theme}-bio`}>
                {user.bio}
              </p>

            )}


            <div className={`${theme}-hero-meta`}>

              <div className={`${theme}-meta-item`}>
                <span className={`${theme}-meta-dot`} />
                AVAILABLE ONLINE
              </div>

              <div className={`${theme}-meta-item`}>
                DIGITAL PRESENCE
              </div>

            </div>

          </div>


          {/* RIGHT */}

          <div className={`${theme}-hero-visual`}>

            <div className={`${theme}-visual-number`}>
              01
            </div>


            <div className={`${theme}-avatar-frame`}>

              <div className={`${theme}-avatar-accent`} />

              <img
                src={user?.avatar || ""}
                alt={user?.username || "Profile"}
                className={`${theme}-avatar`}
              />

              <div className={`${theme}-avatar-tag`}>
                <span />
                ONLINE
              </div>

            </div>


            <div className={`${theme}-visual-caption`}>
              <span>EST.</span>
              <strong>2026</strong>
            </div>

          </div>

        </section>


        {/* ===================================================
            SOCIAL BAR
        =================================================== */}

        <section className={`${theme}-social-section`}>

          <div className={`${theme}-social-title`}>
            CONNECT
          </div>

          <div className={`${theme}-social-content`}>

            <SocialRenderer
              user={user}
              theme={theme}
            />

          </div>

          <div className={`${theme}-social-arrow`}>
            ↓
          </div>

        </section>


        {/* ===================================================
            CONTENT INTRO
        =================================================== */}

        <section className={`${theme}-content-intro`}>

          <div className={`${theme}-content-number`}>
            02
          </div>

          <div className={`${theme}-content-title`}>
            <span>SELECTED</span>
            <strong>LINKS</strong>
          </div>

          <div className={`${theme}-content-description`}>
            A collection of important destinations,
            projects and digital spaces.
          </div>

        </section>


        {/* ===================================================
            LINKS
        =================================================== */}

        <section className={`${theme}-links-section`}>

          <div className={`${theme}-links`}>

            <LinkRenderer
              links={links || []}
              theme={theme}
            />

          </div>

        </section>


        {/* ===================================================
            BOTTOM
        =================================================== */}

        <section className={`${theme}-bottom-section`}>

          <div className={`${theme}-bottom-large`}>
            <span>THANK</span>
            <strong>YOU.</strong>
          </div>

          <div className={`${theme}-bottom-side`}>

            <span>
              KEEP EXPLORING
            </span>

            <div className={`${theme}-bottom-circle`}>
              ↗
            </div>

          </div>

        </section>


        {/* ===================================================
            FOOTER
        =================================================== */}

        <footer className={`${theme}-footer`}>

          <div className={`${theme}-footer-left`}>
            QEVORA
          </div>

          <div className={`${theme}-footer-middle`}>
            DIGITAL IDENTITY / {new Date().getFullYear()}
          </div>

          <div className={`${theme}-footer-right`}>
            003
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

.theme3-container,
.theme3-container *,
.theme3-container *::before,
.theme3-container *::after{

  box-sizing:border-box;

}


/* =========================================================
   CONTAINER
========================================================= */

.theme3-container{

  position:relative;

  width:100%;

  min-height:100vh;

  overflow:hidden;

  isolation:isolate;

  color:#111111;

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

.theme3-background{

  position:absolute;

  inset:0;

  z-index:-5;

  pointer-events:none;

  background:

    radial-gradient(
      circle at 85% 10%,
      rgba(255,90,95,.12),
      transparent 22%
    ),

    radial-gradient(
      circle at 15% 65%,
      rgba(255,184,77,.10),
      transparent 25%
    ),

    #f4f2ed;

}


/* =========================================================
   GRID
========================================================= */

.theme3-grid{

  position:absolute;

  inset:0;

  z-index:-4;

  pointer-events:none;

  opacity:.32;

  background-image:

    linear-gradient(
      rgba(17,17,17,.045) 1px,
      transparent 1px
    ),

    linear-gradient(
      90deg,
      rgba(17,17,17,.045) 1px,
      transparent 1px
    );

  background-size:
    70px 70px;

}


/* =========================================================
   DECORATIVE SHAPES
========================================================= */

.theme3-shape{

  position:absolute;

  pointer-events:none;

  z-index:-3;

}


.theme3-shape-one{

  width:300px;

  height:300px;

  right:-150px;

  top:220px;

  border-radius:50%;

  border:1px solid rgba(17,17,17,.08);

}


.theme3-shape-two{

  width:180px;

  height:180px;

  left:-90px;

  bottom:420px;

  border-radius:50%;

  background:

    linear-gradient(
      135deg,
      rgba(255,91,95,.14),
      transparent
    );

}


/* =========================================================
   PAGE
========================================================= */

.theme3-page{

  position:relative;

  width:100%;

  max-width:1500px;

  margin:0 auto;

  padding:
    0
    45px;

}


/* =========================================================
   HEADER
========================================================= */

.theme3-header{

  width:100%;

  height:82px;

  display:grid;

  grid-template-columns:
    60px
    1fr
    60px;

  align-items:center;

  border-bottom:
    1px solid rgba(17,17,17,.12);

}


.theme3-logo{

  width:42px;

  height:42px;

  display:flex;

  align-items:center;

  justify-content:center;

  border-radius:50%;

  background:#111111;

  color:#ffffff;

  font-size:17px;

  font-weight:900;

}


.theme3-header-center{

  text-align:center;

  font-size:9px;

  letter-spacing:3px;

  font-weight:800;

  color:#77736c;

}


.theme3-header-number{

  text-align:right;

  font-size:10px;

  font-weight:900;

  color:#77736c;

  letter-spacing:1px;

}


/* =========================================================
   HERO
========================================================= */

.theme3-hero{

  min-height:
    calc(100vh - 82px);

  display:grid;

  grid-template-columns:
    1.2fr
    .8fr;

  align-items:center;

  gap:70px;

  padding:
    90px
    0
    100px;

}


/* =========================================================
   HERO INFO
========================================================= */

.theme3-hero-info{

  position:relative;

}


.theme3-hero-label{

  display:flex;

  align-items:center;

  gap:12px;

  margin-bottom:28px;

  font-size:10px;

  letter-spacing:3px;

  color:#77736c;

  font-weight:900;

}


.theme3-label-line{

  width:38px;

  height:2px;

  background:#ff5b5f;

}


.theme3-username{

  max-width:850px;

  margin:0;

  font-size:
    clamp(
      55px,
      8vw,
      125px
    );

  line-height:.84;

  letter-spacing:
    clamp(
      -6px,
      -.5vw,
      -2px
    );

  font-weight:950;

  color:#111111;

  overflow-wrap:anywhere;

}


.theme3-bio{

  max-width:620px;

  margin:
    38px
    0
    0;

  font-size:16px;

  line-height:1.9;

  color:#66625b;

}


.theme3-hero-meta{

  display:flex;

  align-items:center;

  gap:28px;

  margin-top:45px;

  flex-wrap:wrap;

}


.theme3-meta-item{

  display:flex;

  align-items:center;

  gap:8px;

  font-size:9px;

  letter-spacing:1.7px;

  font-weight:900;

  color:#77736c;

}


.theme3-meta-dot{

  width:7px;

  height:7px;

  border-radius:50%;

  background:#38a169;

  box-shadow:

    0 0 0 5px rgba(56,161,105,.08);

}


/* =========================================================
   HERO VISUAL
========================================================= */

.theme3-hero-visual{

  position:relative;

  min-height:520px;

  display:flex;

  align-items:center;

  justify-content:center;

}


.theme3-visual-number{

  position:absolute;

  top:0;

  left:0;

  font-size:11px;

  font-weight:900;

  letter-spacing:3px;

  color:#aaa59d;

}


.theme3-avatar-frame{

  position:relative;

  width:
    min(
      34vw,
      430px
    );

  height:
    min(
      34vw,
      430px
    );

}


.theme3-avatar-accent{

  position:absolute;

  width:100%;

  height:100%;

  right:-28px;

  top:28px;

  border:
    2px solid
    #ff5b5f;

  z-index:0;

}


.theme3-avatar{

  position:relative;

  z-index:1;

  width:100%;

  height:100%;

  object-fit:cover;

  display:block;

  filter:
    grayscale(15%)
    contrast(1.04);

  background:#dedbd4;

  transition:

    transform .5s ease,
    filter .5s ease;

}


.theme3-avatar-frame:hover
.theme3-avatar{

  transform:
    translate(
      -8px,
      -8px
    );

  filter:
    grayscale(0%)
    contrast(1.05);

}


.theme3-avatar-tag{

  position:absolute;

  z-index:2;

  left:-25px;

  bottom:30px;

  display:flex;

  align-items:center;

  gap:8px;

  padding:
    11px
    15px;

  background:#111111;

  color:#ffffff;

  font-size:8px;

  letter-spacing:1.5px;

  font-weight:900;

}


.theme3-avatar-tag span{

  width:6px;

  height:6px;

  border-radius:50%;

  background:#72d18c;

}


.theme3-visual-caption{

  position:absolute;

  right:0;

  bottom:10px;

  display:flex;

  flex-direction:column;

  align-items:flex-end;

  gap:2px;

}


.theme3-visual-caption span{

  font-size:8px;

  letter-spacing:2px;

  color:#99958e;

}


.theme3-visual-caption strong{

  font-size:15px;

  color:#111111;

}


/* =========================================================
   SOCIAL SECTION
========================================================= */

.theme3-social-section{

  width:100%;

  display:grid;

  grid-template-columns:
    130px
    1fr
    50px;

  align-items:center;

  border-top:
    1px solid rgba(17,17,17,.12);

  border-bottom:
    1px solid rgba(17,17,17,.12);

  min-height:92px;

}


.theme3-social-title{

  font-size:9px;

  letter-spacing:2px;

  font-weight:900;

  color:#77736c;

}


.theme3-social-content{

  display:flex;

  justify-content:center;

}


.theme3-socials{

  display:flex;

  align-items:center;

  justify-content:center;

  flex-wrap:wrap;

  gap:10px;

}


.theme3-social-link{

  width:42px;

  height:42px;

  display:flex;

  align-items:center;

  justify-content:center;

  border-radius:50%;

  background:#ffffff;

  border:
    1px solid
    rgba(17,17,17,.12);

  color:#111111;

  transition:

    transform .3s ease,
    background .3s ease,
    color .3s ease;

}


.theme3-social-link:hover{

  transform:
    translateY(-5px);

  background:#111111;

  color:#ffffff;

}


.theme3-social-arrow{

  width:40px;

  height:40px;

  display:flex;

  align-items:center;

  justify-content:center;

  border-left:
    1px solid
    rgba(17,17,17,.10);

  color:#77736c;

  font-size:15px;

}


/* =========================================================
   CONTENT INTRO
========================================================= */

.theme3-content-intro{

  display:grid;

  grid-template-columns:
    130px
    1fr
    1fr;

  gap:40px;

  align-items:end;

  padding:
    120px
    0
    50px;

}


.theme3-content-number{

  font-size:11px;

  font-weight:900;

  color:#ff5b5f;

  letter-spacing:2px;

}


.theme3-content-title{

  display:flex;

  flex-direction:column;

  line-height:.82;

}


.theme3-content-title span{

  font-size:
    clamp(
      30px,
      4vw,
      58px
    );

  font-weight:300;

  letter-spacing:-2px;

  color:#77736c;

}


.theme3-content-title strong{

  font-size:
    clamp(
      45px,
      6vw,
      85px
    );

  font-weight:950;

  letter-spacing:-4px;

  color:#111111;

}


.theme3-content-description{

  max-width:350px;

  justify-self:end;

  font-size:12px;

  line-height:1.8;

  color:#77736c;

}


/* =========================================================
   LINKS SECTION
========================================================= */

.theme3-links-section{

  width:100%;

}


.theme3-links{

  width:100%;

}


/* =========================================================
   LINK RENDERER
========================================================= */

.theme3-link{

  width:100%;

  display:grid;

  grid-template-columns:
    repeat(
      12,
      1fr
    );

  gap:16px;

}


/* =========================================================
   DEFAULT LINK
========================================================= */

.theme3-default-link{

  position:relative;

  min-height:150px;

  display:flex;

  align-items:flex-end;

  justify-content:space-between;

  padding:25px;

  grid-column:
    span 6;

  border-radius:0;

  border:
    1px solid
    rgba(17,17,17,.12);

  background:#ffffff;

  color:#111111;

  text-decoration:none;

  font-size:17px;

  font-weight:900;

  overflow:hidden;

  transition:

    transform .4s ease,
    background .4s ease,
    color .4s ease,
    border-color .4s ease;

}


.theme3-default-link:nth-child(3n){

  grid-column:
    span 12;

  min-height:210px;

}


.theme3-default-link:nth-child(4n){

  grid-column:
    span 5;

  min-height:180px;

}


.theme3-default-link:nth-child(5n){

  grid-column:
    span 7;

  min-height:180px;

}


.theme3-default-link::before{

  content:"";

  position:absolute;

  width:120px;

  height:120px;

  border-radius:50%;

  right:-40px;

  top:-40px;

  background:#ff5b5f;

  opacity:.12;

  transition:

    transform .5s ease;

}


.theme3-default-link::after{

  content:"↗";

  position:absolute;

  right:24px;

  top:22px;

  width:36px;

  height:36px;

  display:flex;

  align-items:center;

  justify-content:center;

  border:
    1px solid
    rgba(17,17,17,.14);

  border-radius:50%;

  font-size:15px;

  transition:

    transform .4s ease,
    background .4s ease,
    color .4s ease;

}


.theme3-default-link:hover{

  transform:
    translateY(-7px);

  background:#111111;

  color:#ffffff;

  border-color:#111111;

}


.theme3-default-link:hover::before{

  transform:
    scale(2.5);

}


.theme3-default-link:hover::after{

  transform:
    rotate(45deg);

  background:#ff5b5f;

  color:#ffffff;

  border-color:#ff5b5f;

}


/* =========================================================
   WHATSAPP
========================================================= */

.theme3-whatsapp-link{

  grid-column:
    span 12;

  display:block;

  text-decoration:none;

}


.theme3-whatsapp{

  position:relative;

  min-height:150px;

  display:flex;

  align-items:center;

  justify-content:center;

  overflow:hidden;

  background:#111111;

  color:#ffffff;

  border:
    1px solid
    #111111;

  font-size:16px;

  font-weight:900;

  transition:

    transform .4s ease;

}


.theme3-whatsapp::before{

  content:"";

  position:absolute;

  width:300px;

  height:300px;

  border-radius:50%;

  background:#34d399;

  right:-150px;

  top:-180px;

  opacity:.12;

}


.theme3-whatsapp:hover{

  transform:
    translateY(-7px);

}


/* =========================================================
   PRODUCT CARD
========================================================= */

.theme3-product-card{

  grid-column:
    span 6;

  display:flex;

  flex-direction:column;

  overflow:hidden;

  background:#ffffff;

  color:#111111;

  text-decoration:none;

  border:
    1px solid
    rgba(17,17,17,.12);

  transition:

    transform .4s ease;

}


.theme3-product-card:hover{

  transform:
    translateY(-7px);

}


.theme3-product-image{

  width:100%;

  height:330px;

  object-fit:cover;

  display:block;

  transition:

    transform .7s ease;

}


.theme3-product-card:hover
.theme3-product-image{

  transform:
    scale(1.04);

}


.theme3-product-content{

  padding:22px;

  display:flex;

  flex-direction:column;

  gap:8px;

}


.theme3-product-title{

  font-size:18px;

  font-weight:900;

}


.theme3-product-price{

  font-size:16px;

  font-weight:900;

  color:#ff5b5f;

}


/* =========================================================
   PRODUCT LINK
========================================================= */

.theme3-product-link{

  grid-column:
    span 6;

  display:flex;

  align-items:center;

  gap:18px;

  min-height:120px;

  padding:14px;

  background:#ffffff;

  color:#111111;

  border:
    1px solid
    rgba(17,17,17,.12);

  text-decoration:none;

  transition:

    transform .4s ease;

}


.theme3-product-link:hover{

  transform:
    translateY(-6px);

}


.theme3-product-link-image{

  width:90px;

  height:90px;

  flex-shrink:0;

  object-fit:cover;

}


.theme3-product-link-info{

  min-width:0;

  flex:1;

  display:flex;

  flex-direction:column;

  gap:8px;

}


.theme3-product-link .theme3-product-title{

  font-size:15px;

  white-space:nowrap;

  overflow:hidden;

  text-overflow:ellipsis;

}


.theme3-product-link .theme3-product-price{

  font-size:14px;

}


/* =========================================================
   VIDEO
========================================================= */

.theme3-video,
.theme3-youtube{

  grid-column:
    span 12;

  overflow:hidden;

  background:#111111;

}


.theme3-video iframe,
.theme3-youtube iframe{

  display:block;

  width:100%;

  aspect-ratio:16 / 9;

  border:0;

}


.theme3-youtube-playlist{

  grid-column:
    span 12;

  height:550px;

  overflow:hidden;

}


.theme3-youtube-playlist iframe{

  width:100%;

  height:100%;

  border:0;

}


/* =========================================================
   FORM
========================================================= */

.theme3-form{

  grid-column:
    span 12;

  display:flex;

  flex-direction:column;

  gap:18px;

  padding:30px;

  background:#ffffff;

  border:
    1px solid
    rgba(17,17,17,.12);

}


.theme3-form-fields{

  display:flex;

  flex-direction:column;

  gap:12px;

}


.theme3-form-input{

  width:100%;

  padding:17px;

  border:
    1px solid
    rgba(17,17,17,.14);

  background:#f4f2ed;

  color:#111111;

  outline:none;

  font-family:inherit;

  font-size:14px;

  transition:

    border-color .3s ease,
    background .3s ease;

}


.theme3-form-input::placeholder{

  color:#99958e;

}


.theme3-form-input:focus{

  border-color:#ff5b5f;

  background:#ffffff;

}


textarea.theme3-form-input{

  resize:vertical;

  min-height:140px;

}


.theme3-form-button{

  height:58px;

  border:0;

  background:#111111;

  color:#ffffff;

  font-size:14px;

  font-weight:900;

  cursor:pointer;

  transition:

    transform .3s ease,
    background .3s ease;

}


.theme3-form-button:hover{

  transform:
    translateY(-3px);

  background:#ff5b5f;

}


/* =========================================================
   BOTTOM
========================================================= */

.theme3-bottom-section{

  display:grid;

  grid-template-columns:
    1fr
    280px;

  align-items:end;

  gap:50px;

  padding:
    140px
    0
    100px;

}


.theme3-bottom-large{

  display:flex;

  flex-direction:column;

  line-height:.78;

}


.theme3-bottom-large span{

  font-size:
    clamp(
      50px,
      9vw,
      125px
    );

  font-weight:250;

  letter-spacing:-6px;

  color:#77736c;

}


.theme3-bottom-large strong{

  font-size:
    clamp(
      70px,
      12vw,
      175px
    );

  font-weight:950;

  letter-spacing:-9px;

  color:#111111;

}


.theme3-bottom-side{

  display:flex;

  flex-direction:column;

  align-items:flex-end;

  gap:25px;

}


.theme3-bottom-side span{

  font-size:9px;

  letter-spacing:2px;

  font-weight:900;

  color:#77736c;

}


.theme3-bottom-circle{

  width:90px;

  height:90px;

  display:flex;

  align-items:center;

  justify-content:center;

  border-radius:50%;

  background:#ff5b5f;

  color:#ffffff;

  font-size:25px;

  transition:

    transform .4s ease;

}


.theme3-bottom-circle:hover{

  transform:
    rotate(45deg)
    scale(1.08);

}


/* =========================================================
   FOOTER
========================================================= */

.theme3-footer{

  min-height:85px;

  display:grid;

  grid-template-columns:
    1fr
    1fr
    1fr;

  align-items:center;

  border-top:
    1px solid
    rgba(17,17,17,.12);

  font-size:9px;

  letter-spacing:1.8px;

  font-weight:900;

  color:#77736c;

}


.theme3-footer-left{

  text-align:left;

  color:#111111;

}


.theme3-footer-middle{

  text-align:center;

}


.theme3-footer-right{

  text-align:right;

}


/* =========================================================
   TABLET
========================================================= */

@media(max-width:1000px){

  .theme3-page{

    padding:
      0
      25px;

  }


  .theme3-hero{

    grid-template-columns:
      1fr
      .75fr;

    gap:40px;

    padding:
      70px
      0
      80px;

  }


  .theme3-avatar-frame{

    width:
      min(
        38vw,
        350px
      );

    height:
      min(
        38vw,
        350px
      );

  }


  .theme3-content-intro{

    grid-template-columns:
      80px
      1fr
      1fr;

    gap:25px;

  }


  .theme3-default-link{

    grid-column:
      span 6;

  }


  .theme3-default-link:nth-child(3n){

    grid-column:
      span 12;

  }


  .theme3-product-card{

    grid-column:
      span 6;

  }

}


/* =========================================================
   TABLET PORTRAIT
========================================================= */

@media(max-width:768px){

  .theme3-page{

    padding:
      0
      18px;

  }


  .theme3-header{

    height:70px;

    grid-template-columns:
      45px
      1fr
      45px;

  }


  .theme3-logo{

    width:36px;

    height:36px;

    font-size:14px;

  }


  .theme3-hero{

    min-height:auto;

    grid-template-columns:1fr;

    gap:55px;

    padding:
      65px
      0
      65px;

  }


  .theme3-hero-info{

    order:1;

  }


  .theme3-hero-visual{

    order:2;

    min-height:430px;

  }


  .theme3-username{

    font-size:
      clamp(
        52px,
        12vw,
        82px
      );

  }


  .theme3-avatar-frame{

    width:
      min(
        58vw,
        390px
      );

    height:
      min(
        58vw,
        390px
      );

  }


  .theme3-social-section{

    grid-template-columns:
      100px
      1fr
      45px;

  }


  .theme3-content-intro{

    grid-template-columns:
      60px
      1fr;

    padding:
      90px
      0
      40px;

  }


  .theme3-content-description{

    grid-column:
      2;

    justify-self:start;

    margin-top:15px;

  }


  .theme3-default-link,
  .theme3-default-link:nth-child(3n),
  .theme3-default-link:nth-child(4n),
  .theme3-default-link:nth-child(5n){

    grid-column:
      span 12;

    min-height:135px;

  }


  .theme3-product-card{

    grid-column:
      span 12;

  }


  .theme3-product-link{

    grid-column:
      span 12;

  }


  .theme3-bottom-section{

    grid-template-columns:
      1fr;

    padding:
      100px
      0
      80px;

  }


  .theme3-bottom-side{

    align-items:flex-start;

  }


  .theme3-footer{

    grid-template-columns:
      1fr
      1fr;

    row-gap:15px;

    padding:
      22px
      0;

  }


  .theme3-footer-middle{

    display:none;

  }


  .theme3-footer-right{

    text-align:right;

  }

}


/* =========================================================
   MOBILE
========================================================= */

@media(max-width:480px){

  .theme3-page{

    padding:
      0
      12px;

  }


  .theme3-header{

    height:62px;

  }


  .theme3-header-center{

    font-size:7px;

    letter-spacing:2px;

  }


  .theme3-header-number{

    font-size:8px;

  }


  .theme3-hero{

    gap:38px;

    padding:
      50px
      0
      50px;

  }


  .theme3-hero-label{

    margin-bottom:20px;

    font-size:8px;

    letter-spacing:2px;

  }


  .theme3-label-line{

    width:25px;

  }


  .theme3-username{

    font-size:
      clamp(
        42px,
        14vw,
        64px
      );

    letter-spacing:-3px;

  }


  .theme3-bio{

    margin-top:25px;

    font-size:12px;

    line-height:1.75;

  }


  .theme3-hero-meta{

    margin-top:30px;

    gap:14px;

  }


  .theme3-meta-item{

    font-size:7px;

    letter-spacing:1px;

  }


  .theme3-hero-visual{

    min-height:310px;

  }


  .theme3-avatar-frame{

    width:
      min(
        72vw,
        300px
      );

    height:
      min(
        72vw,
        300px
      );

  }


  .theme3-avatar-accent{

    right:-16px;

    top:16px;

  }


  .theme3-avatar-tag{

    left:-10px;

    bottom:18px;

    padding:
      8px
      10px;

    font-size:6px;

  }


  .theme3-visual-caption{

    bottom:-2px;

  }


  .theme3-visual-number{

    font-size:8px;

  }


  .theme3-social-section{

    min-height:75px;

    grid-template-columns:
      65px
      1fr
      35px;

  }


  .theme3-social-title{

    font-size:7px;

    letter-spacing:1.3px;

  }


  .theme3-socials{

    gap:6px;

  }


  .theme3-social-link{

    width:34px;

    height:34px;

  }


  .theme3-social-arrow{

    width:30px;

    height:30px;

    font-size:12px;

  }


  .theme3-content-intro{

    grid-template-columns:
      40px
      1fr;

    gap:15px;

    padding:
      70px
      0
      30px;

  }


  .theme3-content-number{

    font-size:8px;

  }


  .theme3-content-title span{

    font-size:27px;

  }


  .theme3-content-title strong{

    font-size:43px;

    letter-spacing:-3px;

  }


  .theme3-content-description{

    font-size:10px;

    line-height:1.7;

  }


  .theme3-default-link,
  .theme3-default-link:nth-child(3n),
  .theme3-default-link:nth-child(4n),
  .theme3-default-link:nth-child(5n){

    min-height:110px;

    padding:18px;

    font-size:13px;

  }


  .theme3-default-link::after{

    right:15px;

    top:15px;

    width:30px;

    height:30px;

    font-size:12px;

  }


  .theme3-whatsapp{

    min-height:110px;

    font-size:13px;

  }


  .theme3-product-image{

    height:240px;

  }


  .theme3-product-content{

    padding:17px;

  }


  .theme3-product-title{

    font-size:16px;

  }


  .theme3-product-price{

    font-size:14px;

  }


  .theme3-product-link{

    min-height:90px;

    gap:12px;

    padding:10px;

  }


  .theme3-product-link-image{

    width:65px;

    height:65px;

  }


  .theme3-product-link .theme3-product-title{

    font-size:13px;

  }


  .theme3-product-link .theme3-product-price{

    font-size:12px;

  }


  .theme3-form{

    padding:18px;

  }


  .theme3-form-input{

    padding:14px;

    font-size:13px;

  }


  .theme3-form-button{

    height:52px;

  }


  .theme3-youtube-playlist{

    height:340px;

  }


  .theme3-bottom-section{

    padding:
      80px
      0
      60px;

  }


  .theme3-bottom-large span{

    font-size:48px;

    letter-spacing:-4px;

  }


  .theme3-bottom-large strong{

    font-size:72px;

    letter-spacing:-5px;

  }


  .theme3-bottom-circle{

    width:70px;

    height:70px;

  }


  .theme3-footer{

    min-height:70px;

    font-size:7px;

    letter-spacing:1px;

  }

}


/* =========================================================
   SMALL MOBILE
========================================================= */

@media(max-width:360px){

  .theme3-page{

    padding:
      0
      9px;

  }


  .theme3-username{

    font-size:38px;

  }


  .theme3-avatar-frame{

    width:240px;

    height:240px;

  }


  .theme3-hero-visual{

    min-height:265px;

  }


  .theme3-social-section{

    grid-template-columns:
      55px
      1fr
      25px;

  }


  .theme3-social-link{

    width:30px;

    height:30px;

  }


  .theme3-content-title span{

    font-size:23px;

  }


  .theme3-content-title strong{

    font-size:36px;

  }


  .theme3-default-link,
  .theme3-default-link:nth-child(3n),
  .theme3-default-link:nth-child(4n),
  .theme3-default-link:nth-child(5n){

    min-height:95px;

    font-size:12px;

  }


  .theme3-product-image{

    height:200px;

  }


  .theme3-youtube-playlist{

    height:290px;

  }

}


/* =========================================================
   REDUCED MOTION
========================================================= */

@media(prefers-reduced-motion:reduce){

  .theme3-container *,
  .theme3-container *::before,
  .theme3-container *::after{

    animation:none !important;

    transition:none !important;

  }

}

`}

      </style>

    </div>

  );

}


