


import Hero from "./components/Hero";
import FeaturesRow from "./components/FeaturesRow";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="home">

      <Hero />
      <p>hhhhhh</p>

      <FeaturesRow />

      <CTASection />

      <Footer />

       <style>
        {`
        
        /* ==========================================================
   RESET
========================================================== */

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html{
  scroll-behavior:smooth;
}

body{
  font-family:Inter,Arial,sans-serif;
  background:#060816;
  color:#fff;
  overflow-x:hidden;
}

/* ==========================================================
   VARIABLES
========================================================== */

:root{

  --primary:#6D5DF6;
  --secondary:#8B5CF6;
  --blue:#4F8CFF;

  --text:#ffffff;
  --muted:#94A3B8;

  --card:rgba(255,255,255,.05);
  --border:rgba(255,255,255,.08);

  --radius:22px;

}

/* ==========================================================
   HOME
========================================================== */

.home{

  min-height:100vh;

  position:relative;

  overflow:hidden;

  background:
  radial-gradient(circle at 10% 10%,rgba(109,93,246,.18),transparent 25%),
  radial-gradient(circle at 90% 20%,rgba(59,130,246,.16),transparent 25%),
  radial-gradient(circle at 50% 100%,rgba(139,92,246,.12),transparent 40%),
  #060816;

}

/* ==========================================================
   HERO
========================================================== */

.hero{

  position:relative;

  min-height:100vh;
  

  display:flex;

  align-items:center;

  padding:30px 70px 120px;

}

/* ==========================================================
   BACKGROUND EFFECT
========================================================== */

.hero-bg{

  position:absolute;

  inset:0;

  overflow:hidden;

}

.glow{

  position:absolute;

  border-radius:50%;

  filter:blur(120px);

}

.glow1{

  width:380px;
  height:380px;

  background:#6D5DF6;

  top:-120px;
  left:-120px;

  opacity:.28;

}

.glow2{

  width:500px;
  height:500px;

  background:#3B82F6;

  right:-180px;
  top:120px;

  opacity:.20;

}

.glow3{

  width:350px;
  height:350px;

  background:#8B5CF6;

  bottom:-120px;
  left:40%;

  opacity:.18;

}

/* ==========================================================
   GRID
========================================================== */

.grid-overlay{

  position:absolute;

  inset:0;

  background-image:

  linear-gradient(
    rgba(255,255,255,.03) 1px,
    transparent 1px
  ),

  linear-gradient(
    90deg,
    rgba(255,255,255,.03) 1px,
    transparent 1px
  );

  background-size:70px 70px;

  opacity:.35;

}

/* ==========================================================
   HERO CONTAINER
========================================================== */

.hero-container{

  width:100%;

  max-width:1450px;

  margin:auto;

  display:grid;

  grid-template-columns:

  1.2fr
  .9fr
  .9fr;

  gap:60px;

  position:relative;

  z-index:5;

  align-items:center;

}

/* ==========================================================
   LEFT
========================================================== */

.hero-left{

  display:flex;

  flex-direction:column;

}
 

/* ==========================================================
   BADGE
========================================================== */

.hero-badge{

  display:inline-flex;

  align-items:center;

  gap:10px;

  width:max-content;

  padding:12px 18px;

  border-radius:999px;

  border:1px solid rgba(255,255,255,.08);

  background:rgba(255,255,255,.04);

  backdrop-filter:blur(16px);

  color:#CBD5E1;

  margin-bottom:30px;

  font-size:14px;

  font-weight:600;

}

/* ==========================================================
   TITLE
========================================================== */

.hero-title{

  font-size:72px;

  font-weight:800;

  line-height:1.05;

  letter-spacing:-2px;

  margin-bottom:28px;

}

.hero-title span{

  background:

  linear-gradient(
      90deg,
      #6D5DF6,
      #4F8CFF,
      #A855F7
  );

  -webkit-background-clip:text;

  -webkit-text-fill-color:transparent;

}

/* ==========================================================
   DESCRIPTION
========================================================== */

.hero-description{

  font-size:19px;

  color:var(--muted);

  line-height:1.9;

  max-width:620px;

  margin-bottom:40px;

}

/* ==========================================================
   BUTTONS
========================================================== */

.hero-buttons{

  display:flex;

  gap:18px;

  margin-bottom:45px;

}

.primary-btn{

  border:none;

  cursor:pointer;

  display:flex;

  align-items:center;

  gap:12px;

  padding:18px 28px;

  border-radius:18px;

  background:

  linear-gradient(
      135deg,
      #6D5DF6,
      #4F8CFF
  );

  color:white;

  font-size:15px;

  font-weight:700;

  transition:.35s;

  box-shadow:

  0 20px 50px rgba(79,140,255,.35);

}

.primary-btn:hover{

  transform:translateY(-4px);

}

.secondary-btn{

  display:flex;

  align-items:center;

  gap:12px;

  padding:18px 28px;

  border-radius:18px;

  border:1px solid rgba(255,255,255,.08);

  background:rgba(255,255,255,.04);

  color:white;

  cursor:pointer;

  font-weight:600;

  transition:.35s;

  backdrop-filter:blur(15px);

}

.secondary-btn:hover{

  transform:translateY(-4px);

  background:rgba(255,255,255,.08);

}

/* ==========================================================
   STATS
========================================================== */

.hero-stats{

  display:flex;

  gap:18px;

  flex-wrap:wrap;

}

.stat-card{

  min-width:170px;

  padding:22px;

  border-radius:22px;

  border:1px solid rgba(255,255,255,.08);

  background:rgba(255,255,255,.04);

  backdrop-filter:blur(18px);

  display:flex;

  align-items:center;

  gap:18px;

  transition:.35s;

}

 

.stat-card:hover{

  transform:translateY(-6px);

  border-color:#6D5DF6;

}

.stat-icon{

  width:55px;

  height:55px;

  border-radius:18px;

  display:flex;

  align-items:center;

  justify-content:center;

  background:

  linear-gradient(
      135deg,
      #6D5DF6,
      #4F8CFF
  );

  font-size:22px;

}
 
 

.stat-card:hover{

  transform:translateY(-6px);

  border-color:#6D5DF6;

}

.stat-icon{

  width:55px;

  height:55px;

  border-radius:18px;

  display:flex;

  align-items:center;

  justify-content:center;

  background:

  linear-gradient(
      135deg,
      #6D5DF6,
      #4F8CFF
  );

  font-size:22px;

}

.stat-card h2{

  font-size:26px;

  margin-bottom:4px;

}

.stat-card span{

  color:var(--muted);

  font-size:14px;

}


 


/* ==========================================================
   PHONE PREVIEW
========================================================== */

.hero-center{

    display:flex;

    justify-content:center;

    align-items:center;

    position:relative;

}

.phone{

    width:360px;

    min-height:720px;

    border-radius:42px;

    padding:22px;

    position:relative;

    overflow:hidden;

    background:
    linear-gradient(
        180deg,
        #111827,
        #0B1220
    );

    border:1px solid rgba(255,255,255,.08);

    box-shadow:

    0 35px 80px rgba(0,0,0,.55),

    0 0 80px rgba(109,93,246,.18);

    animation:phoneFloat 6s ease-in-out infinite;

}

.phone::before{

    content:"";

    position:absolute;

    inset:0;

    background:

    linear-gradient(

        180deg,

        rgba(255,255,255,.08),

        transparent 30%

    );

    pointer-events:none;

}

.phone-notch{

    width:130px;

    height:28px;

    background:black;

    border-radius:0 0 18px 18px;

    position:absolute;

    left:50%;

    transform:translateX(-50%);

    top:0;

    z-index:5;

}

.phone-content{

    margin-top:35px;

}

/* ==========================================================
   PROFILE
========================================================== */

.profile{

    text-align:center;

    margin-bottom:32px;

}

.profile-avatar{

    width:96px;

    height:96px;

    margin:auto;

    border-radius:50%;

    display:flex;

    align-items:center;

    justify-content:center;

    font-size:34px;

    font-weight:800;

    color:white;

    background:

    linear-gradient(
        135deg,
        #6D5DF6,
        #4F8CFF
    );

    border:4px solid rgba(255,255,255,.08);

    margin-bottom:18px;

}

.profile h3{

    font-size:23px;

    margin-bottom:8px;

}

.profile p{

    color:#94A3B8;

    font-size:14px;

    line-height:1.6;

    margin-bottom:20px;

}

/* ==========================================================
   SOCIALS
========================================================== */

.social-icons{

    display:flex;

    justify-content:center;

    gap:12px;

}

.social-btn{

    width:44px;

    height:44px;

    border-radius:14px;

    display:flex;

    align-items:center;

    justify-content:center;

    background:rgba(255,255,255,.05);

    border:1px solid rgba(255,255,255,.08);

    transition:.35s;

    cursor:pointer;

}

.social-btn:hover{

    transform:translateY(-4px);

    background:

    linear-gradient(
        135deg,
        #6D5DF6,
        #4F8CFF
    );

}

/* ==========================================================
   LINKS
========================================================== */

.phone-links{

    display:flex;

    flex-direction:column;

    gap:15px;

}

.phone-link{

    display:flex;

    justify-content:space-between;

    align-items:center;

    padding:18px;

    border-radius:20px;

    background:

    linear-gradient(
        135deg,
        rgba(109,93,246,.14),
        rgba(79,140,255,.08)
    );

    border:1px solid rgba(255,255,255,.08);

    backdrop-filter:blur(15px);

    transition:.35s;

    cursor:pointer;

}

.phone-link:hover{

    transform:translateY(-4px);

    border-color:#6D5DF6;

    box-shadow:

    0 15px 35px rgba(109,93,246,.20);

}

.phone-link .left{

    display:flex;

    align-items:center;

    gap:16px;

}

/* ==========================================================
   LINK ICON
========================================================== */

.icon{

    width:48px;

    height:48px;

    border-radius:16px;

    display:flex;

    align-items:center;

    justify-content:center;

    color:white;

    background:

    linear-gradient(
        135deg,
        #4F8CFF,
        #6D5DF6
    );

    font-size:20px;

}

.icon.youtube{

    background:
    linear-gradient(
        135deg,
        #FF3B30,
        #FF0000
    );

}

.icon.shop{

    background:
    linear-gradient(
        135deg,
        #10B981,
        #34D399
    );

}

.icon.mail{

    background:
    linear-gradient(
        135deg,
        #F59E0B,
        #FB923C
    );

}

/* ==========================================================
   LINK INFO
========================================================== */

.phone-link h4{

    font-size:15px;

    margin-bottom:5px;

    color:white;

}

.phone-link span{

    font-size:13px;

    color:#94A3B8;

}

.phone-link svg:last-child{

    color:#CBD5E1;

    font-size:15px;

}

/* ==========================================================
   FLOAT ANIMATION
========================================================== */

@keyframes phoneFloat{

    0%{

        transform:translateY(0px);

    }

    50%{

        transform:translateY(-12px);

    }

    100%{

        transform:translateY(0px);

    }

}



/* ==========================================================
   ANALYTICS PANEL
========================================================== */

.hero-right{

    display:flex;

    justify-content:center;

    align-items:center;

}

.analytics{

    width:100%;

    max-width:360px;

    display:flex;

    flex-direction:column;

    gap:22px;

}

/* ==========================================================
   ANALYTICS CARD
========================================================== */

.analytics-card{

    background:rgba(255,255,255,.05);

    backdrop-filter:blur(22px);

    border:1px solid rgba(255,255,255,.08);

    border-radius:26px;

    padding:22px;

    transition:.35s;

    overflow:hidden;

    position:relative;

}

.analytics-card:hover{

    transform:translateY(-6px);

    border-color:#6D5DF6;

    box-shadow:
    0 25px 45px rgba(109,93,246,.18);

}

.analytics-card.large{

    padding:26px;

}

/* ==========================================================
   HEADER
========================================================== */

.analytics-header{

    display:flex;

    justify-content:space-between;

    align-items:center;

    margin-bottom:22px;

}

.analytics-label{

    font-size:12px;

    color:#94A3B8;

}

.analytics-header h3{

    font-size:24px;

    margin-top:6px;

}

.analytics-header h4{

    font-size:18px;

}

.analytics-growth{

    padding:8px 12px;

    border-radius:999px;

    display:flex;

    align-items:center;

    gap:8px;

    font-size:13px;

    font-weight:700;

    color:#22C55E;

    background:rgba(34,197,94,.12);

}

/* ==========================================================
   CHART
========================================================== */

.chart{

    width:100%;

    height:170px;

    display:flex;

    align-items:flex-end;

    justify-content:center;

}

.chart-line{

    width:100%;

    height:120px;

    display:flex;

    justify-content:space-between;

    align-items:flex-end;

}

.chart-line span{

    width:36px;

    border-radius:20px 20px 0 0;

    background:
    linear-gradient(
        180deg,
        #6D5DF6,
        #4F8CFF
    );

    animation:bars 2.5s ease-in-out infinite;

}

.chart-line span:nth-child(1){

    height:40%;

}

.chart-line span:nth-child(2){

    height:58%;

}

.chart-line span:nth-child(3){

    height:72%;

}

.chart-line span:nth-child(4){

    height:90%;

}

.chart-line span:nth-child(5){

    height:65%;

}

.chart-line span:nth-child(6){

    height:100%;

}

/* ==========================================================
   MINI GRID
========================================================== */

.analytics-grid{

    display:grid;

    grid-template-columns:1fr 1fr;

    gap:18px;

}

.mini-card{

    background:rgba(255,255,255,.05);

    border:1px solid rgba(255,255,255,.08);

    backdrop-filter:blur(18px);

    border-radius:22px;

    padding:20px;

    transition:.35s;

}

.mini-card:hover{

    transform:translateY(-4px);

    border-color:#6D5DF6;

}

.mini-icon{

    width:46px;

    height:46px;

    border-radius:15px;

    display:flex;

    align-items:center;

    justify-content:center;

    margin-bottom:16px;

    background:
    linear-gradient(
        135deg,
        #4F8CFF,
        #6D5DF6
    );

}

.mini-icon.purple{

    background:
    linear-gradient(
        135deg,
        #8B5CF6,
        #EC4899
    );

}

.mini-card h4{

    font-size:26px;

    margin-bottom:5px;

}

.mini-card span{

    font-size:13px;

    color:#94A3B8;

}

/* ==========================================================
   MAP
========================================================== */

.map-card{

    text-align:center;

}

.world-map{

    font-size:90px;

    margin:20px 0;

    filter:drop-shadow(0 0 20px rgba(79,140,255,.35));

}

.countries{

    display:flex;

    flex-direction:column;

    gap:12px;

}

.countries div{

    display:flex;

    justify-content:space-between;

    color:#CBD5E1;

    font-size:14px;

}

.countries strong{

    color:white;

}

/* ==========================================================
   GROWTH
========================================================== */

.growth-number{

    font-size:48px;

    font-weight:800;

    margin:18px 0;

    background:
    linear-gradient(
        90deg,
        #4F8CFF,
        #8B5CF6
    );

    -webkit-background-clip:text;

    -webkit-text-fill-color:transparent;

}

.analytics-card p{

    color:#94A3B8;

    line-height:1.7;

}

/* ==========================================================
   ANIMATIONS
========================================================== */

@keyframes bars{

    0%{

        transform:scaleY(.9);

    }

    50%{

        transform:scaleY(1);

    }

    100%{

        transform:scaleY(.9);

    }

}



/*==================================================
FEATURES
==================================================*/

.features{
    padding:120px 70px;
    position:relative;
}

.features-header{
    text-align:center;
    max-width:760px;
    margin:auto auto 70px;
}

.features-badge{
    display:inline-flex;
    align-items:center;
    padding:10px 18px;
    border-radius:999px;
    border:1px solid rgba(255,255,255,.08);
    background:rgba(255,255,255,.04);
    color:#CBD5E1;
    margin-bottom:25px;
}

.features-header h2{
    font-size:54px;
    margin-bottom:20px;
}

.features-header p{
    color:#94A3B8;
    line-height:1.9;
    font-size:18px;
}

.features-grid{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:28px;
}

.feature-card{
    background:rgba(255,255,255,.04);
    border:1px solid rgba(255,255,255,.08);
    border-radius:26px;
    padding:35px;
    transition:.35s;
    backdrop-filter:blur(20px);
}

.feature-card:hover{
    transform:translateY(-8px);
    border-color:#6D5DF6;
    box-shadow:0 25px 45px rgba(109,93,246,.18);
}

.feature-icon{
    width:70px;
    height:70px;
    border-radius:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:28px;
    margin-bottom:25px;
    background:linear-gradient(135deg,#6D5DF6,#4F8CFF);
}

.feature-card h3{
    font-size:24px;
    margin-bottom:15px;
}

.feature-card p{
    color:#94A3B8;
    line-height:1.8;
}

/*==================================================
CTA
==================================================*/

.cta{
    padding:120px 70px;
}

.cta-container{
    max-width:1250px;
    margin:auto;
    position:relative;
    overflow:hidden;
    border-radius:40px;
    padding:90px 60px;
    text-align:center;
    background:linear-gradient(
        135deg,
        rgba(109,93,246,.16),
        rgba(79,140,255,.12)
    );
    border:1px solid rgba(255,255,255,.08);
    backdrop-filter:blur(25px);
}

.cta-glow{
    position:absolute;
    width:450px;
    height:450px;
    border-radius:50%;
    background:#6D5DF6;
    filter:blur(150px);
    opacity:.18;
    top:-180px;
    right:-120px;
}

.cta-badge{
    display:inline-flex;
    align-items:center;
    gap:10px;
    padding:12px 18px;
    border-radius:999px;
    background:rgba(255,255,255,.05);
    border:1px solid rgba(255,255,255,.08);
    margin-bottom:28px;
}

.cta-title{
    font-size:62px;
    line-height:1.1;
    margin-bottom:25px;
}

.cta-title span{
    background:linear-gradient(90deg,#6D5DF6,#4F8CFF);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
}

.cta-description{
    max-width:760px;
    margin:auto;
    color:#94A3B8;
    line-height:1.9;
    font-size:18px;
    margin-bottom:45px;
}

.cta-buttons{
    display:flex;
    justify-content:center;
    gap:18px;
    flex-wrap:wrap;
    margin-bottom:50px;
}

.cta-primary,
.cta-secondary{
    padding:18px 30px;
    border-radius:18px;
    font-size:15px;
    font-weight:700;
    cursor:pointer;
    transition:.3s;
}

.cta-primary{
    display:flex;
    align-items:center;
    gap:12px;
    border:none;
    color:white;
    background:linear-gradient(135deg,#6D5DF6,#4F8CFF);
}

.cta-secondary{
    background:rgba(255,255,255,.05);
    color:white;
    border:1px solid rgba(255,255,255,.08);
}

.cta-primary:hover,
.cta-secondary:hover{
    transform:translateY(-5px);
}

.cta-stats{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:35px;
    flex-wrap:wrap;
}

.cta-stat h3{
    font-size:36px;
    margin-bottom:6px;
}

.cta-stat span{
    color:#94A3B8;
}

.divider{
    width:1px;
    height:50px;
    background:rgba(255,255,255,.08);
}

/*==================================================
FOOTER
==================================================*/

.footer{
    padding:90px 70px 35px;
    border-top:1px solid rgba(255,255,255,.06);
}

.footer-container{
    max-width:1400px;
    margin:auto;
    display:grid;
    grid-template-columns:2fr repeat(4,1fr);
    gap:40px;
}

.footer-logo{
    display:flex;
    align-items:center;
    gap:15px;
    margin-bottom:25px;
}

.logo-icon{
    width:54px;
    height:54px;
    border-radius:18px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:24px;
    font-weight:bold;
    background:linear-gradient(135deg,#6D5DF6,#4F8CFF);
}

.footer-brand p{
    color:#94A3B8;
    line-height:1.9;
    margin-bottom:30px;
}

.footer-socials{
    display:flex;
    gap:12px;
}

.footer-socials a{
    width:44px;
    height:44px;
    border-radius:14px;
    display:flex;
    justify-content:center;
    align-items:center;
    text-decoration:none;
    color:white;
    background:rgba(255,255,255,.05);
    transition:.3s;
}

.footer-socials a:hover{
    background:#6D5DF6;
}

.footer-column h3{
    margin-bottom:22px;
}

.footer-column a{
    display:block;
    color:#94A3B8;
    text-decoration:none;
    margin-bottom:14px;
    transition:.3s;
}

.footer-column a:hover{
    color:white;
    transform:translateX(6px);
}

.footer-bottom{
    margin-top:70px;
    padding-top:30px;
    border-top:1px solid rgba(255,255,255,.06);
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    gap:20px;
    color:#94A3B8;
}

.heart{
    color:#EF4444;
}

/*==================================================
RESPONSIVE
==================================================*/

@media(max-width:1200px){

.hero-container{
grid-template-columns:1fr;
text-align:center;
}

.hero-left{
align-items:center;
}

.hero-right{
margin-top:50px;
}

.features-grid{
grid-template-columns:repeat(2,1fr);
}

.footer-container{
grid-template-columns:repeat(2,1fr);
}

}

@media(max-width:768px){

.hero,
.features,
.cta,
.footer{
padding:80px 22px;
}

.hero-title,
.cta-title{
font-size:42px;
}

.features-header h2{
font-size:40px;
}

.features-grid{
grid-template-columns:1fr;
}

.hero-buttons{
flex-direction:column;
width:100%;
}

.hero-buttons button{
width:100%;
justify-content:center;
}

.hero-stats{
flex-direction:column;
}

.phone{
width:100%;
max-width:360px;
min-height:auto;
}

.footer-container{
grid-template-columns:1fr;
}

.footer-bottom{
flex-direction:column;
text-align:center;
}

.cta-stats{
flex-direction:column;
}

.divider{
display:none;
}

}

@media(max-width:480px){

.hero-title{
font-size:34px;
}

.cta-title{
font-size:34px;
}

.features-header h2{
font-size:32px;
}

.feature-card{
padding:25px;
}

.phone{
padding:18px;
}

}`}
      </style>
     

    </main>
  );
}















 