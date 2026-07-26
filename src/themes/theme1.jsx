import LinkRenderer from "../components/LinkRenderer";
import SocialRenderer from "../components/SocialRenderer";

export default function Theme1({ user, links }) {

  const theme = "theme1";

  return (

    <div className={`${theme}-container`}>

      {/* ===============================
          BACKGROUND
      =============================== */}

      <div className={`${theme}-gradient`} />

      <div className={`${theme}-circle circle-one`} />
      <div className={`${theme}-circle circle-two`} />
      <div className={`${theme}-circle circle-three`} />

      {/* ===============================
          MAIN CARD
      =============================== */}

      <main className={`${theme}-card`}>

        {/* ===============================
            PROFILE
        =============================== */}

        <section className={`${theme}-profile`}>

          <div className={`${theme}-avatar-wrapper`}>

            <div className={`${theme}-avatar-glow`} />

            <img
              src={user?.avatar || ""}
              alt={user?.username || "Profile"}
              className={`${theme}-avatar`}
            />

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

        {/* ===============================
            SOCIALS
        =============================== */}

        <section className={`${theme}-social-section`}>

          <SocialRenderer
            user={user}
            theme={theme}
          />

        </section>

        {/* ===============================
            LINKS
        =============================== */}

        <section className={`${theme}-links`}>

          <LinkRenderer
            links={links || []}
            theme={theme}
          />

        </section>

        {/* ===============================
            FOOTER
        =============================== */}

        <footer className={`${theme}-footer`}>

          <span>Made with</span>

          <strong>Qevora</strong>

        </footer>

      </main>

      <style>

        {`

/* =====================================================
   RESET
===================================================== */

.theme1-container,
.theme1-container *,
.theme1-container *::before,
.theme1-container *::after{

box-sizing:border-box;

}

/* =====================================================
   CONTAINER
===================================================== */

.theme1-container{

position:relative;

width:100%;

min-height:100vh;

padding:70px 20px;

display:flex;

justify-content:center;

align-items:flex-start;

overflow:hidden;

background:#f8fafc;

font-family:

Inter,

system-ui,

sans-serif;

}

/* =====================================================
   BACKGROUND
===================================================== */

.theme1-gradient{

position:fixed;

inset:0;

background:

linear-gradient(
180deg,
#ffffff,
#f8fafc
);

z-index:-5;

}

/* =====================================================
   FLOATING CIRCLES
===================================================== */

.theme1-circle{

position:fixed;

border-radius:50%;

filter:blur(80px);

opacity:.45;

z-index:-4;

animation:

theme1Float 12s ease-in-out infinite;

}

.circle-one{

width:300px;

height:300px;

background:#818cf8;

top:-120px;

left:-120px;

}

.circle-two{

width:260px;

height:260px;

background:#c084fc;

right:-80px;

top:120px;

}

.circle-three{

width:350px;

height:350px;

background:#f9a8d4;

bottom:-160px;

left:30%;

}

@keyframes theme1Float{

0%{

transform:translateY(0);

}

50%{

transform:translateY(40px);

}

100%{

transform:translateY(0);

}

}

/* =====================================================
   CARD
===================================================== */

.theme1-card{

width:100%;

max-width:560px;

background:#ffffff;

border-radius:34px;

padding:50px 30px;

box-shadow:

0 30px 80px rgba(15,23,42,.08);

border:1px solid #e2e8f0;

position:relative;

overflow:hidden;

}

/* =====================================================
   PROFILE
===================================================== */

.theme1-profile{

display:flex;

flex-direction:column;

align-items:center;

text-align:center;

}

/* =====================================================
   AVATAR
===================================================== */

.theme1-avatar-wrapper{

position:relative;

width:130px;

height:130px;

margin-bottom:24px;

}

.theme1-avatar-glow{

position:absolute;

inset:-8px;

border-radius:50%;

background:

linear-gradient(

135deg,

#4f46e5,

#8b5cf6,

#ec4899

);

filter:blur(20px);

opacity:.30;

}

.theme1-avatar{

position:relative;

width:130px;

height:130px;

object-fit:cover;

border-radius:50%;

border:6px solid #ffffff;

box-shadow:

0 15px 40px rgba(0,0,0,.12);

transition:.4s;

}

.theme1-avatar:hover{

transform:scale(1.05);

}

/* =====================================================
   USERNAME
===================================================== */

.theme1-username{

margin:0;

font-size:32px;

font-weight:800;

color:#0f172a;

}

/* =====================================================
   BIO
===================================================== */

.theme1-bio{

margin-top:12px;

max-width:430px;

font-size:15px;

line-height:1.8;

color:#64748b;

}

/* =====================================================
   SOCIAL
===================================================== */

.theme1-social-section{

margin-top:35px;

margin-bottom:35px;

}

.theme1-socials{

display:flex;

justify-content:center;

gap:14px;

flex-wrap:wrap;

}

.theme1-social-link{

width:52px;

height:52px;

border-radius:50%;

background:#ffffff;

border:1px solid #e2e8f0;

display:flex;

align-items:center;

justify-content:center;

transition:.35s;

box-shadow:

0 10px 25px rgba(15,23,42,.05);

}

.theme1-social-link:hover{

transform:translateY(-5px) scale(1.08);

background:#4f46e5;

color:#fff;

}

/* باقي CSS في الجزء الثاني */
/* =========================================================
   LINKS
========================================================= */

.theme1-links{

width:100%;

display:flex;

flex-direction:column;

gap:18px;

}

/* container */

.theme1-link{

display:flex;

flex-direction:column;

gap:18px;

width:100%;

}

/* =========================================================
   DEFAULT LINK
========================================================= */

.theme1-default-link{

position:relative;

display:flex;

align-items:center;

justify-content:center;

width:100%;

min-height:72px;

padding:18px 24px;

background:#fff;

border:1px solid #E2E8F0;

border-radius:22px;

color:#0F172A;

font-weight:700;

font-size:15px;

text-decoration:none;

overflow:hidden;

transition:.35s;

box-shadow:

0 10px 25px rgba(15,23,42,.05);

}

.theme1-default-link::after{

content:"→";

position:absolute;

right:24px;

font-size:18px;

transition:.35s;

color:#64748B;

}

.theme1-default-link:hover{

transform:translateY(-6px);

border-color:#6366F1;

box-shadow:

0 18px 40px rgba(79,70,229,.15);

}

.theme1-default-link:hover::after{

right:18px;

color:#4F46E5;

}

/* =========================================================
   WHATSAPP
========================================================= */

.theme1-whatsapp-link{

display:block;

text-decoration:none;

width:100%;

}

.theme1-whatsapp{

display:flex;

align-items:center;

justify-content:center;

min-height:72px;

border-radius:22px;

font-weight:700;

font-size:15px;

background:linear-gradient(
135deg,
#22C55E,
#16A34A
);

color:#fff;

transition:.35s;

box-shadow:

0 15px 35px rgba(34,197,94,.20);

}

.theme1-whatsapp:hover{

transform:translateY(-5px);

}

/* =========================================================
   PRODUCT CARD
========================================================= */

.theme1-product-card{

display:flex;

flex-direction:column;

overflow:hidden;

background:#fff;

border-radius:24px;

border:1px solid #E2E8F0;

text-decoration:none;

transition:.4s;

box-shadow:

0 15px 40px rgba(15,23,42,.06);

}

.theme1-product-card:hover{

transform:translateY(-8px);

box-shadow:

0 25px 60px rgba(15,23,42,.12);

}

.theme1-product-image{

width:100%;

height:320px;

object-fit:cover;

transition:.6s;

}

.theme1-product-card:hover
.theme1-product-image{

transform:scale(1.06);

}

.theme1-product-content{

padding:22px;

display:flex;

flex-direction:column;

gap:8px;

}

.theme1-product-title{

font-size:18px;

font-weight:800;

color:#0F172A;

}

.theme1-product-price{

font-size:18px;

font-weight:800;

color:#4F46E5;

}

/* =========================================================
   PRODUCT LINK
========================================================= */

.theme1-product-link{

display:flex;

align-items:center;

gap:18px;

padding:14px;

border-radius:22px;

background:#fff;

border:1px solid #E2E8F0;

text-decoration:none;

transition:.35s;

box-shadow:

0 12px 28px rgba(15,23,42,.05);

}

.theme1-product-link:hover{

transform:translateY(-5px);

}

.theme1-product-link-image{

width:82px;

height:82px;

border-radius:18px;

object-fit:cover;

flex-shrink:0;

}

.theme1-product-link-info{

display:flex;

flex-direction:column;

gap:8px;

min-width:0;

flex:1;

}

.theme1-product-link
.theme1-product-title{

font-size:16px;

white-space:nowrap;

overflow:hidden;

text-overflow:ellipsis;

}

.theme1-product-link
.theme1-product-price{

font-size:15px;

}

/* =========================================================
   VIDEO
========================================================= */

.theme1-video,
.theme1-youtube{

overflow:hidden;

border-radius:24px;

background:#000;

box-shadow:

0 20px 45px rgba(15,23,42,.15);

}

.theme1-video iframe,
.theme1-youtube iframe{

width:100%;

height:100%;

border:none;

aspect-ratio:16/9;

}

.theme1-youtube-playlist{

height:520px;

overflow:hidden;

border-radius:24px;

}

.theme1-youtube-playlist iframe{

width:100%;

height:100%;

border:none;

}

/* =========================================================
   FORM
========================================================= */

.theme1-form{

display:flex;

flex-direction:column;

gap:18px;

padding:26px;

background:#fff;

border-radius:24px;

border:1px solid #E2E8F0;

box-shadow:

0 15px 35px rgba(15,23,42,.05);

}

.theme1-form-fields{

display:flex;

flex-direction:column;

gap:14px;

}

.theme1-form-input{

width:100%;

padding:16px;

border-radius:16px;

border:1px solid #CBD5E1;

background:#F8FAFC;

outline:none;

font-size:15px;

transition:.3s;

}

.theme1-form-input:focus{

border-color:#6366F1;

background:#fff;

box-shadow:

0 0 0 4px rgba(99,102,241,.10);

}

textarea.theme1-form-input{

resize:vertical;

min-height:130px;

}

.theme1-form-button{

height:56px;

border:none;

border-radius:18px;

background:linear-gradient(
135deg,
#4F46E5,
#7C3AED
);

color:#fff;

font-size:15px;

font-weight:700;

cursor:pointer;

transition:.35s;

}

.theme1-form-button:hover{

transform:translateY(-3px);

box-shadow:

0 20px 40px rgba(79,70,229,.20);

}

/* =========================================================
   FOOTER
========================================================= */

.theme1-footer{

margin-top:36px;

display:flex;

justify-content:center;

gap:6px;

font-size:12px;

color:#64748B;

}

.theme1-footer strong{

color:#4F46E5;

}


/* =========================================================
   ANIMATIONS
========================================================= */

.theme1-card{
    animation:theme1Card .8s ease;
}

@keyframes theme1Card{

from{

opacity:0;

transform:translateY(35px);

}

to{

opacity:1;

transform:translateY(0);

}

}

.theme1-profile{

animation:theme1Fade .8s ease .15s both;

}

.theme1-social-section{

animation:theme1Fade .8s ease .3s both;

}

.theme1-links{

animation:theme1Fade .8s ease .45s both;

}

.theme1-footer{

animation:theme1Fade .8s ease .6s both;

}

@keyframes theme1Fade{

from{

opacity:0;

transform:translateY(20px);

}

to{

opacity:1;

transform:translateY(0);

}

}

/* =========================================================
   CARD HOVER
========================================================= */

.theme1-card::before{

content:"";

position:absolute;

top:0;

left:0;

width:100%;

height:8px;

background:linear-gradient(
90deg,
#4F46E5,
#8B5CF6,
#EC4899
);

}

.theme1-card::after{

content:"";

position:absolute;

right:-120px;

top:-120px;

width:220px;

height:220px;

border-radius:50%;

background:rgba(99,102,241,.05);

pointer-events:none;

}

/* =========================================================
   SCROLLBAR
========================================================= */

.theme1-container::-webkit-scrollbar{

width:8px;

}

.theme1-container::-webkit-scrollbar-thumb{

background:#CBD5E1;

border-radius:999px;

}

.theme1-container::-webkit-scrollbar-track{

background:transparent;

}

/* =========================================================
   TABLET
========================================================= */

@media(max-width:768px){

.theme1-container{

padding:40px 16px;

}

.theme1-card{

padding:40px 22px;

border-radius:28px;

}

.theme1-avatar{

width:110px;

height:110px;

}

.theme1-avatar-wrapper{

width:110px;

height:110px;

}

.theme1-username{

font-size:28px;

}

.theme1-bio{

font-size:14px;

}

.theme1-product-image{

height:260px;

}

.theme1-youtube-playlist{

height:420px;

}

}

/* =========================================================
   MOBILE
========================================================= */

@media(max-width:480px){

.theme1-container{

padding:18px 10px;

}

.theme1-card{

padding:28px 16px;

border-radius:24px;

}

.theme1-avatar{

width:90px;

height:90px;

border-width:4px;

}

.theme1-avatar-wrapper{

width:90px;

height:90px;

margin-bottom:18px;

}

.theme1-username{

font-size:23px;

}

.theme1-bio{

font-size:13px;

line-height:1.7;

}

.theme1-social-link{

width:44px;

height:44px;

}

.theme1-default-link{

min-height:60px;

padding:14px 18px;

font-size:14px;

border-radius:18px;

}

.theme1-default-link::after{

right:18px;

}

.theme1-whatsapp{

min-height:60px;

border-radius:18px;

font-size:14px;

}

.theme1-product-image{

height:220px;

}

.theme1-product-content{

padding:16px;

}

.theme1-product-title{

font-size:16px;

}

.theme1-product-price{

font-size:16px;

}

.theme1-product-link{

padding:10px;

gap:12px;

border-radius:18px;

}

.theme1-product-link-image{

width:68px;

height:68px;

border-radius:14px;

}

.theme1-product-link .theme1-product-title{

font-size:14px;

}

.theme1-product-link .theme1-product-price{

font-size:13px;

}

.theme1-form{

padding:18px;

border-radius:20px;

}

.theme1-form-input{

padding:14px;

font-size:14px;

}

.theme1-form-button{

height:52px;

font-size:14px;

}

.theme1-youtube-playlist{

height:360px;

}

}

/* =========================================================
   SMALL MOBILE
========================================================= */

@media(max-width:360px){

.theme1-card{

padding:22px 12px;

}

.theme1-avatar{

width:78px;

height:78px;

}

.theme1-avatar-wrapper{

width:78px;

height:78px;

}

.theme1-username{

font-size:20px;

}

.theme1-social-link{

width:40px;

height:40px;

}

.theme1-default-link{

min-height:54px;

font-size:13px;

padding:12px;

}

.theme1-product-image{

height:190px;

}

.theme1-product-content{

padding:14px;

}

.theme1-product-title{

font-size:14px;

}

.theme1-product-price{

font-size:14px;

}

.theme1-form{

padding:14px;

}

}

/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce){

.theme1-card,
.theme1-profile,
.theme1-social-section,
.theme1-links,
.theme1-footer{

animation:none;

}

.theme1-container *,
.theme1-container *::before,
.theme1-container *::after{

transition:none !important;

}

}

`}

      </style>

    </div>

  );

}