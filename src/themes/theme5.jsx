import LinkRenderer from "../components/LinkRenderer";
import SocialRenderer from "../components/SocialRenderer";

export default function Theme5({ user, links }) {

  const theme = "theme5";

  return (

    <div className={`${theme}-container`}>

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className={`${theme}-background`} />

      <div className={`${theme}-grid`} />


      {/* =====================================================
          PAGE
      ===================================================== */}

      <main className={`${theme}-page`}>


        {/* ===================================================
            HEADER
        =================================================== */}

        <header className={`${theme}-header`}>

          <div className={`${theme}-logo`}>
            Q
          </div>

          <div className={`${theme}-header-line`} />

          <span className={`${theme}-header-label`}>
            PERSONAL PROFILE
          </span>

          <span className={`${theme}-header-number`}>
            05
          </span>

        </header>


        {/* ===================================================
            HERO
        =================================================== */}

        <section className={`${theme}-hero`}>


          {/* IMAGE */}

          <div className={`${theme}-image-column`}>

            <div className={`${theme}-image-frame`}>

              <img
                src={user?.avatar || ""}
                alt={user?.username || "Profile"}
                className={`${theme}-avatar`}
              />

              <div className={`${theme}-image-number`}>
                01
              </div>

              <div className={`${theme}-image-status`}>
                <span />
                ONLINE
              </div>

            </div>

          </div>


          {/* CONTENT */}

          <div className={`${theme}-hero-content`}>

            <span className={`${theme}-eyebrow`}>
              WELCOME TO MY SPACE
            </span>

            <h1 className={`${theme}-username`}>
              {user?.username || "Your Name"}
            </h1>

            <div className={`${theme}-hero-divider`} />

            {user?.bio && (

              <p className={`${theme}-bio`}>
                {user.bio}
              </p>

            )}

            <div className={`${theme}-hero-meta`}>

              <div>

                <span>
                  PROFILE
                </span>

                <strong>
                  PERSONAL
                </strong>

              </div>

              <div>

                <span>
                  CONNECT
                </span>

                <strong>
                  ONLINE
                </strong>

              </div>

            </div>

          </div>


        </section>


        {/* ===================================================
            SOCIAL BAR
        =================================================== */}

        <section className={`${theme}-social-bar`}>

          <div className={`${theme}-social-title`}>
            CONNECT
          </div>

          <div className={`${theme}-social-content`}>

            <SocialRenderer
              user={user}
              theme={theme}
            />

          </div>

          <div className={`${theme}-social-index`}>
            02 / SOCIAL
          </div>

        </section>


        {/* ===================================================
            LINKS HEADER
        =================================================== */}

        <section className={`${theme}-links-intro`}>

          <div className={`${theme}-intro-number`}>
            03
          </div>

          <div className={`${theme}-intro-content`}>

            <span>
              MY LINKS
            </span>

            <h2>
              Everything
              <br />
              <strong>in one place.</strong>
            </h2>

          </div>

          <p>
            Discover my latest work,
            projects, social profiles
            and everything else worth
            sharing.
          </p>

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
            BOTTOM CTA
        =================================================== */}

        <section className={`${theme}-bottom`}>

          <div className={`${theme}-bottom-left`}>

            <span>
              THANK YOU FOR VISITING
            </span>

            <h3>
              Stay
              <br />
              connected.
            </h3>

          </div>

          <div className={`${theme}-bottom-right`}>

            <div className={`${theme}-circle-arrow`}>
              ↗
            </div>

          </div>

        </section>


        {/* ===================================================
            FOOTER
        =================================================== */}

        <footer className={`${theme}-footer`}>

          <span>
            QEVORA
          </span>

          <span>
            PERSONAL DIGITAL PROFILE
          </span>

          <span>
            © {new Date().getFullYear()}
          </span>

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

.theme5-container,
.theme5-container *,
.theme5-container *::before,
.theme5-container *::after{

  box-sizing:border-box;

}


/* =========================================================
   CONTAINER
========================================================= */

.theme5-container{

  position:relative;

  width:100%;

  min-height:100vh;

  overflow:hidden;

  isolation:isolate;

  background:#f4f4f1;

  color:#171717;

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

.theme5-background{

  position:absolute;

  inset:0;

  z-index:-10;

  pointer-events:none;

  background:

    radial-gradient(
      circle at 85% 8%,
      rgba(37,99,235,.10),
      transparent 25%
    ),

    radial-gradient(
      circle at 5% 70%,
      rgba(16,185,129,.07),
      transparent 25%
    ),

    #f4f4f1;

}


/* =========================================================
   GRID
========================================================= */

.theme5-grid{

  position:absolute;

  inset:0;

  z-index:-9;

  pointer-events:none;

  opacity:.35;

  background-image:

    linear-gradient(
      rgba(0,0,0,.035) 1px,
      transparent 1px
    ),

    linear-gradient(
      90deg,
      rgba(0,0,0,.035) 1px,
      transparent 1px
    );

  background-size:
    70px 70px;

}


/* =========================================================
   PAGE
========================================================= */

.theme5-page{

  width:100%;

  max-width:1440px;

  margin:0 auto;

  padding:
    0
    50px;

}


/* =========================================================
   HEADER
========================================================= */

.theme5-header{

  height:90px;

  display:flex;

  align-items:center;

  gap:18px;

  border-bottom:
    1px solid
    rgba(0,0,0,.10);

}


.theme5-logo{

  width:38px;

  height:38px;

  display:flex;

  align-items:center;

  justify-content:center;

  background:#171717;

  color:#ffffff;

  font-size:16px;

  font-weight:900;

  border-radius:10px;

}


.theme5-header-line{

  width:80px;

  height:1px;

  background:#171717;

}


.theme5-header-label{

  font-size:9px;

  font-weight:800;

  letter-spacing:3px;

  color:#777;

}


.theme5-header-number{

  margin-left:auto;

  font-size:10px;

  font-weight:900;

  letter-spacing:2px;

}


/* =========================================================
   HERO
========================================================= */

.theme5-hero{

  min-height:
    calc(100vh - 90px);

  display:grid;

  grid-template-columns:
    44%
    56%;

  align-items:center;

  gap:70px;

  padding:
    100px
    0
    120px;

}


/* =========================================================
   IMAGE COLUMN
========================================================= */

.theme5-image-column{

  display:flex;

  justify-content:center;

}


.theme5-image-frame{

  position:relative;

  width:
    min(
      100%,
      430px
    );

  aspect-ratio:
    4 / 5;

  background:#deded9;

}


.theme5-avatar{

  width:100%;

  height:100%;

  display:block;

  object-fit:cover;

  filter:
    grayscale(100%)
    contrast(1.05);

  transition:
    filter .6s ease,
    transform .6s ease;

}


.theme5-image-frame:hover
.theme5-avatar{

  filter:
    grayscale(0%)
    contrast(1);

  transform:
    scale(1.02);

}


/* =========================================================
   IMAGE DECORATION
========================================================= */

.theme5-image-frame::before{

  content:"";

  position:absolute;

  left:-18px;

  top:18px;

  width:100%;

  height:100%;

  border:
    1px solid
    rgba(0,0,0,.18);

  z-index:-1;

}


.theme5-image-frame::after{

  content:"";

  position:absolute;

  right:-18px;

  bottom:-18px;

  width:90px;

  height:90px;

  background:
    #171717;

  z-index:-1;

}


/* =========================================================
   IMAGE NUMBER
========================================================= */

.theme5-image-number{

  position:absolute;

  left:18px;

  top:18px;

  width:38px;

  height:38px;

  display:flex;

  align-items:center;

  justify-content:center;

  background:#ffffff;

  color:#171717;

  font-size:9px;

  font-weight:900;

  border-radius:50%;

}


/* =========================================================
   IMAGE STATUS
========================================================= */

.theme5-image-status{

  position:absolute;

  right:18px;

  bottom:18px;

  display:flex;

  align-items:center;

  gap:8px;

  padding:
    9px
    12px;

  background:
    rgba(255,255,255,.92);

  backdrop-filter:
    blur(10px);

  font-size:8px;

  letter-spacing:2px;

  font-weight:900;

}


.theme5-image-status span{

  width:6px;

  height:6px;

  border-radius:50%;

  background:#16a34a;

}


/* =========================================================
   HERO CONTENT
========================================================= */

.theme5-hero-content{

  max-width:650px;

}


.theme5-eyebrow{

  display:block;

  margin-bottom:22px;

  font-size:9px;

  letter-spacing:4px;

  font-weight:900;

  color:#777;

}


.theme5-username{

  margin:0;

  font-size:
    clamp(
      58px,
      8vw,
      115px
    );

  line-height:.84;

  letter-spacing:
    -6px;

  font-weight:950;

  overflow-wrap:anywhere;

}


.theme5-hero-divider{

  width:100%;

  height:1px;

  margin:
    38px
    0
    28px;

  background:
    rgba(0,0,0,.14);

}


.theme5-bio{

  max-width:560px;

  margin:0;

  font-size:15px;

  line-height:1.9;

  color:#666;

}


.theme5-hero-meta{

  display:flex;

  gap:60px;

  margin-top:50px;

}


.theme5-hero-meta div{

  display:flex;

  flex-direction:column;

  gap:7px;

}


.theme5-hero-meta span{

  font-size:7px;

  letter-spacing:2px;

  color:#999;

  font-weight:900;

}


.theme5-hero-meta strong{

  font-size:11px;

  letter-spacing:1px;

}


/* =========================================================
   SOCIAL BAR
========================================================= */

.theme5-social-bar{

  min-height:105px;

  display:grid;

  grid-template-columns:
    120px
    1fr
    120px;

  align-items:center;

  border-top:
    1px solid
    rgba(0,0,0,.12);

  border-bottom:
    1px solid
    rgba(0,0,0,.12);

}


.theme5-social-title{

  font-size:8px;

  letter-spacing:3px;

  font-weight:900;

}


.theme5-social-content{

  display:flex;

  justify-content:center;

}


.theme5-socials{

  display:flex;

  align-items:center;

  justify-content:center;

  gap:10px;

  flex-wrap:wrap;

}


.theme5-social-link{

  width:44px;

  height:44px;

  display:flex;

  align-items:center;

  justify-content:center;

  border:
    1px solid
    rgba(0,0,0,.13);

  border-radius:50%;

  background:#ffffff;

  color:#171717;

  transition:
    transform .35s ease,
    background .35s ease,
    color .35s ease;

}


.theme5-social-link:hover{

  transform:
    translateY(-5px);

  background:#171717;

  color:#ffffff;

}


.theme5-social-index{

  text-align:right;

  font-size:8px;

  letter-spacing:2px;

  color:#999;

}


/* =========================================================
   LINKS INTRO
========================================================= */

.theme5-links-intro{

  display:grid;

  grid-template-columns:
    100px
    1fr
    300px;

  gap:40px;

  align-items:end;

  padding:
    130px
    0
    55px;

}


.theme5-intro-number{

  font-size:10px;

  font-weight:900;

  color:#2563eb;

}


.theme5-intro-content span{

  display:block;

  margin-bottom:16px;

  font-size:8px;

  letter-spacing:3px;

  font-weight:900;

  color:#888;

}


.theme5-intro-content h2{

  margin:0;

  font-size:
    clamp(
      48px,
      6vw,
      82px
    );

  line-height:.85;

  letter-spacing:-5px;

  font-weight:950;

}


.theme5-intro-content h2 strong{

  font-weight:400;

  color:#777;

}


.theme5-links-intro p{

  margin:0;

  max-width:260px;

  justify-self:end;

  font-size:11px;

  line-height:1.8;

  color:#777;

}


/* =========================================================
   LINKS
========================================================= */

.theme5-links-section{

  width:100%;

}


.theme5-links{

  width:100%;

}


.theme5-link{

  width:100%;

  display:flex;

  flex-direction:column;

  gap:14px;

}


/* =========================================================
   DEFAULT LINK
========================================================= */

.theme5-default-link{

  position:relative;

  min-height:100px;

  display:flex;

  align-items:center;

  padding:
    0
    30px;

  border-top:
    1px solid
    rgba(0,0,0,.15);

  color:#171717;

  background:
    transparent;

  text-decoration:none;

  font-size:16px;

  font-weight:800;

  transition:
    padding .45s ease,
    background .45s ease,
    color .45s ease;

}


.theme5-default-link:last-child{

  border-bottom:
    1px solid
    rgba(0,0,0,.15);

}


.theme5-default-link::before{

  content:"";

  width:0;

  height:100%;

  position:absolute;

  left:0;

  top:0;

  background:#171717;

  transition:
    width .45s ease;

  z-index:-1;

}


.theme5-default-link::after{

  content:"↗";

  position:absolute;

  right:30px;

  width:38px;

  height:38px;

  display:flex;

  align-items:center;

  justify-content:center;

  border:
    1px solid
    rgba(0,0,0,.15);

  border-radius:50%;

  font-size:14px;

  transition:
    transform .4s ease,
    background .4s ease,
    color .4s ease;

}


.theme5-default-link:hover{

  padding-left:45px;

  color:#ffffff;

}


.theme5-default-link:hover::before{

  width:100%;

}


.theme5-default-link:hover::after{

  transform:
    rotate(45deg);

  background:#ffffff;

  color:#171717;

  border-color:#ffffff;

}


/* =========================================================
   WHATSAPP
========================================================= */

.theme5-whatsapp-link{

  display:block;

  text-decoration:none;

}


.theme5-whatsapp{

  min-height:100px;

  display:flex;

  align-items:center;

  justify-content:center;

  background:#171717;

  color:#ffffff;

  font-size:14px;

  font-weight:900;

  transition:
    transform .4s ease,
    background .4s ease;

}


.theme5-whatsapp:hover{

  transform:
    translateY(-5px);

  background:#16a34a;

}


/* =========================================================
   PRODUCT CARD
========================================================= */

.theme5-product-card{

  display:grid;

  grid-template-columns:
    55%
    45%;

  overflow:hidden;

  background:#ffffff;

  border:
    1px solid
    rgba(0,0,0,.10);

  text-decoration:none;

  color:#171717;

  transition:
    transform .45s ease;

}


.theme5-product-card:hover{

  transform:
    translateY(-7px);

}


.theme5-product-image{

  width:100%;

  height:380px;

  object-fit:cover;

  display:block;

  transition:
    transform .7s ease;

}


.theme5-product-card:hover
.theme5-product-image{

  transform:
    scale(1.04);

}


.theme5-product-content{

  padding:35px;

  display:flex;

  flex-direction:column;

  justify-content:center;

  gap:12px;

}


.theme5-product-title{

  font-size:22px;

  font-weight:900;

}


.theme5-product-price{

  font-size:18px;

  color:#2563eb;

  font-weight:900;

}


/* =========================================================
   PRODUCT LINK
========================================================= */

.theme5-product-link{

  display:flex;

  align-items:center;

  gap:20px;

  padding:15px;

  background:#ffffff;

  border:
    1px solid
    rgba(0,0,0,.10);

  color:#171717;

  text-decoration:none;

  transition:
    transform .4s ease;

}


.theme5-product-link:hover{

  transform:
    translateY(-6px);

}


.theme5-product-link-image{

  width:95px;

  height:95px;

  object-fit:cover;

  flex-shrink:0;

}


.theme5-product-link-info{

  min-width:0;

  flex:1;

  display:flex;

  flex-direction:column;

  gap:7px;

}


.theme5-product-link .theme5-product-title{

  font-size:15px;

  white-space:nowrap;

  overflow:hidden;

  text-overflow:ellipsis;

}


.theme5-product-link .theme5-product-price{

  font-size:13px;

}


/* =========================================================
   VIDEO
========================================================= */

.theme5-video,
.theme5-youtube{

  overflow:hidden;

  background:#111;

}


.theme5-video iframe,
.theme5-youtube iframe{

  display:block;

  width:100%;

  aspect-ratio:16/9;

  border:0;

}


.theme5-youtube-playlist{

  height:560px;

  overflow:hidden;

}


.theme5-youtube-playlist iframe{

  width:100%;

  height:100%;

  border:0;

}


/* =========================================================
   FORM
========================================================= */

.theme5-form{

  padding:30px;

  display:flex;

  flex-direction:column;

  gap:18px;

  background:#ffffff;

  border:
    1px solid
    rgba(0,0,0,.10);

}


.theme5-form-fields{

  display:flex;

  flex-direction:column;

  gap:12px;

}


.theme5-form-input{

  width:100%;

  padding:17px;

  border:
    1px solid
    rgba(0,0,0,.14);

  background:#f7f7f4;

  color:#171717;

  outline:none;

  font-family:inherit;

  font-size:14px;

}


.theme5-form-input:focus{

  border-color:#171717;

  background:#ffffff;

}


textarea.theme5-form-input{

  min-height:140px;

  resize:vertical;

}


.theme5-form-button{

  height:58px;

  border:0;

  background:#171717;

  color:#ffffff;

  font-size:14px;

  font-weight:900;

  cursor:pointer;

  transition:
    transform .3s ease,
    background .3s ease;

}


.theme5-form-button:hover{

  transform:
    translateY(-3px);

  background:#2563eb;

}


/* =========================================================
   BOTTOM
========================================================= */

.theme5-bottom{

  min-height:500px;

  display:grid;

  grid-template-columns:
    1fr
    1fr;

  align-items:center;

  gap:50px;

  padding:
    140px
    0;

}


.theme5-bottom-left{

  display:flex;

  flex-direction:column;

  gap:20px;

}


.theme5-bottom-left span{

  font-size:8px;

  letter-spacing:3px;

  color:#888;

  font-weight:900;

}


.theme5-bottom-left h3{

  margin:0;

  font-size:
    clamp(
      55px,
      7vw,
      95px
    );

  line-height:.82;

  letter-spacing:-6px;

  font-weight:950;

}


.theme5-bottom-right{

  display:flex;

  justify-content:flex-end;

}


.theme5-circle-arrow{

  width:
    clamp(
      180px,
      25vw,
      300px
    );

  aspect-ratio:1;

  display:flex;

  align-items:center;

  justify-content:center;

  border:
    1px solid
    rgba(0,0,0,.18);

  border-radius:50%;

  font-size:50px;

  transition:
    transform .5s ease,
    background .5s ease,
    color .5s ease;

}


.theme5-circle-arrow:hover{

  transform:
    rotate(45deg);

  background:#171717;

  color:#ffffff;

}


/* =========================================================
   FOOTER
========================================================= */

.theme5-footer{

  min-height:90px;

  display:grid;

  grid-template-columns:
    1fr
    1fr
    1fr;

  align-items:center;

  border-top:
    1px solid
    rgba(0,0,0,.12);

  font-size:8px;

  letter-spacing:2px;

  color:#888;

}


.theme5-footer span:first-child{

  color:#171717;

  font-weight:900;

}


.theme5-footer span:nth-child(2){

  text-align:center;

}


.theme5-footer span:last-child{

  text-align:right;

}


/* =========================================================
   TABLET
========================================================= */

@media(max-width:1000px){

  .theme5-page{

    padding:
      0
      30px;

  }


  .theme5-hero{

    grid-template-columns:
      40%
      60%;

    gap:40px;

  }


  .theme5-username{

    font-size:
      clamp(
        52px,
        8vw,
        85px
      );

  }


  .theme5-links-intro{

    grid-template-columns:
      70px
      1fr
      220px;

    gap:25px;

  }

}


/* =========================================================
   TABLET PORTRAIT
========================================================= */

@media(max-width:768px){

  .theme5-page{

    padding:
      0
      20px;

  }


  .theme5-header{

    height:72px;

  }


  .theme5-hero{

    min-height:auto;

    grid-template-columns:
      1fr;

    gap:65px;

    padding:
      80px
      0
      100px;

  }


  .theme5-image-column{

    justify-content:center;

  }


  .theme5-image-frame{

    width:
      min(
        70vw,
        380px
      );

  }


  .theme5-hero-content{

    max-width:none;

    text-align:center;

  }


  .theme5-hero-divider{

    width:100%;

  }


  .theme5-bio{

    margin-left:auto;

    margin-right:auto;

  }


  .theme5-hero-meta{

    justify-content:center;

  }


  .theme5-social-bar{

    grid-template-columns:
      90px
      1fr
      70px;

  }


  .theme5-links-intro{

    grid-template-columns:
      50px
      1fr;

    padding:
      90px
      0
      45px;

  }


  .theme5-links-intro p{

    grid-column:2;

    justify-self:start;

  }


  .theme5-product-card{

    grid-template-columns:
      1fr;

  }


  .theme5-product-image{

    height:300px;

  }


  .theme5-bottom{

    grid-template-columns:
      1fr;

    padding:
      100px
      0;

  }


  .theme5-bottom-right{

    justify-content:center;

  }


  .theme5-footer{

    grid-template-columns:
      1fr
      1fr;

  }


  .theme5-footer span:nth-child(2){

    display:none;

  }

}


/* =========================================================
   MOBILE
========================================================= */

@media(max-width:480px){

  .theme5-page{

    padding:
      0
      13px;

  }


  .theme5-header{

    height:62px;

  }


  .theme5-logo{

    width:32px;

    height:32px;

    font-size:13px;

    border-radius:8px;

  }


  .theme5-header-line{

    width:35px;

  }


  .theme5-header-label{

    font-size:7px;

    letter-spacing:2px;

  }


  .theme5-header-number{

    font-size:7px;

  }


  .theme5-hero{

    padding:
      65px
      0
      75px;

    gap:50px;

  }


  .theme5-image-frame{

    width:
      min(
        78vw,
        300px
      );

  }


  .theme5-image-frame::before{

    left:-10px;

    top:10px;

  }


  .theme5-image-frame::after{

    right:-10px;

    bottom:-10px;

    width:60px;

    height:60px;

  }


  .theme5-image-number{

    width:32px;

    height:32px;

    left:12px;

    top:12px;

    font-size:8px;

  }


  .theme5-image-status{

    right:12px;

    bottom:12px;

    padding:
      7px
      9px;

    font-size:6px;

    letter-spacing:1.5px;

  }


  .theme5-eyebrow{

    font-size:7px;

    letter-spacing:2.5px;

    margin-bottom:18px;

  }


  .theme5-username{

    font-size:
      clamp(
        45px,
        14vw,
        65px
      );

    letter-spacing:-4px;

  }


  .theme5-hero-divider{

    margin:
      28px
      0
      22px;

  }


  .theme5-bio{

    font-size:12px;

    line-height:1.8;

  }


  .theme5-hero-meta{

    gap:35px;

    margin-top:35px;

  }


  .theme5-hero-meta span{

    font-size:6px;

  }


  .theme5-hero-meta strong{

    font-size:9px;

  }


  .theme5-social-bar{

    min-height:80px;

    grid-template-columns:
      60px
      1fr
      45px;

  }


  .theme5-social-title{

    font-size:7px;

    letter-spacing:2px;

  }


  .theme5-social-index{

    font-size:6px;

    letter-spacing:1px;

  }


  .theme5-socials{

    gap:5px;

  }


  .theme5-social-link{

    width:34px;

    height:34px;

  }


  .theme5-links-intro{

    grid-template-columns:
      30px
      1fr;

    gap:15px;

    padding:
      70px
      0
      35px;

  }


  .theme5-intro-number{

    font-size:8px;

  }


  .theme5-intro-content span{

    font-size:6px;

    letter-spacing:2px;

  }


  .theme5-intro-content h2{

    font-size:48px;

    letter-spacing:-3px;

  }


  .theme5-links-intro p{

    font-size:9px;

    line-height:1.7;

  }


  .theme5-default-link{

    min-height:78px;

    padding:
      0
      18px;

    font-size:12px;

  }


  .theme5-default-link:hover{

    padding-left:25px;

  }


  .theme5-default-link::after{

    right:15px;

    width:30px;

    height:30px;

    font-size:11px;

  }


  .theme5-whatsapp{

    min-height:80px;

    font-size:12px;

  }


  .theme5-product-image{

    height:230px;

  }


  .theme5-product-content{

    padding:22px;

  }


  .theme5-product-title{

    font-size:17px;

  }


  .theme5-product-price{

    font-size:15px;

  }


  .theme5-product-link{

    padding:9px;

    gap:12px;

  }


  .theme5-product-link-image{

    width:65px;

    height:65px;

  }


  .theme5-product-link .theme5-product-title{

    font-size:12px;

  }


  .theme5-product-link .theme5-product-price{

    font-size:11px;

  }


  .theme5-form{

    padding:18px;

  }


  .theme5-form-input{

    padding:13px;

    font-size:12px;

  }


  .theme5-form-button{

    height:50px;

    font-size:12px;

  }


  .theme5-youtube-playlist{

    height:320px;

  }


  .theme5-bottom{

    min-height:420px;

    padding:
      80px
      0;

  }


  .theme5-bottom-left h3{

    font-size:58px;

    letter-spacing:-4px;

  }


  .theme5-circle-arrow{

    width:190px;

    font-size:38px;

  }


  .theme5-footer{

    min-height:65px;

    font-size:6px;

    letter-spacing:1px;

  }

}


/* =========================================================
   SMALL MOBILE
========================================================= */

@media(max-width:360px){

  .theme5-hero{

    padding-top:50px;

  }


  .theme5-image-frame{

    width:250px;

  }


  .theme5-username{

    font-size:41px;

    letter-spacing:-3px;

  }


  .theme5-intro-content h2{

    font-size:41px;

  }


  .theme5-default-link{

    min-height:70px;

    font-size:11px;

  }


  .theme5-product-image{

    height:195px;

  }


  .theme5-bottom-left h3{

    font-size:50px;

  }


  .theme5-circle-arrow{

    width:160px;

  }

}


/* =========================================================
   REDUCED MOTION
========================================================= */

@media(prefers-reduced-motion:reduce){

  .theme5-container *,
  .theme5-container *::before,
  .theme5-container *::after{

    transition:none !important;

    animation:none !important;

  }

}

`}

      </style>

    </div>

  );
} 





 