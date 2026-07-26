 
import { socialPlatforms } from "../components/socialPlatforms";
import LinkRenderer from "../components/LinkRenderer";
import SocialRenderer from "../components/SocialRenderer";
import axios from 'axios';
import API_BASE from "../config/api";
export default function Theme5({ user, links }) {

  const theme = "theme5";

  return (
    <div className={`${theme}-container`}>

      <div className={`${theme}-card`}>

        <img
          className={`${theme}-avatar`}
          src={user.avatar || ""}
          alt=""
        />

        <h2 className={`${theme}-username`}>
          {user.username}
        </h2>

        <p className={`${theme}-bio`}>
          {user.bio}
        </p>

        
        <SocialRenderer
  user={user}
  theme={theme}
/>

        <LinkRenderer
          links={links}
          theme={theme}
        />

      </div>
      <style>
        {`
        .theme5-container{
    min-height:100vh;
    background:#0f172a;
    color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:20px;
    font-family:Arial,sans-serif;
}

.theme5-card{
    width:100%;
    max-width:400px;
    text-align:center;
}

.theme5-avatar{
    width:120px;
    height:120px;
    border-radius:50%;
    object-fit:cover;
    border:3px solid #38bdf8;
    box-shadow:0 0 20px rgba(56,189,248,.5);
    margin-bottom:15px;
}

.theme5-username{
    margin:0;
    font-size:28px;
    font-weight:700;
}

.theme5-bio{
    color:#cbd5f5;
    margin:15px 0 25px;
    line-height:1.6;
}

.theme5-socials{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:15px;
    margin:15px 0 20px;
    flex-wrap:wrap;
}

.theme5-social-link{
    display:flex;
    align-items:center;
    justify-content:center;
    text-decoration:none;
    transition:.3s;
}

.theme5-social-link:hover{
    transform:scale(1.15);
}

.theme5-social-icon{
    font-size:30px;
    color:#38bdf8;
    transition:.3s;
}

.theme5-social-link:hover .theme6-social-icon{
    color:#7dd3fc;
}

.theme5-link{
    display:flex;
    flex-direction:column;
    gap:15px;
}

@media (max-width:768px){

    .theme5-card{
        max-width:100%;
    }

    .theme5-avatar{
        width:100px;
        height:100px;
    }

    .theme5-username{
        font-size:24px;
    }

}

@media (max-width:480px){

    .theme5-container{
        padding:15px;
    }

    .theme5-avatar{
        width:90px;
        height:90px;
    }

    .theme5-username{
        font-size:22px;
    }

    .theme5-bio{
        font-size:14px;
    }

    .theme5-social-icon{
        font-size:26px;
    }

}`}
      </style>

    </div>
  );
}

 