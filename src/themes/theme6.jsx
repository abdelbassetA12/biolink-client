 
import { socialPlatforms } from "../components/socialPlatforms";
import LinkRenderer from "../components/LinkRenderer";
import axios from 'axios';
import API_BASE from "../config/api";
export default function Theme6({ user, links }) {

  const theme = "theme6";

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

        <div className={`${theme}-socials`}>
          {user.socialIcons
            ?.filter((s) => s.active)
            .map((s, idx) => {

              const IconComp = socialPlatforms.find(
                (p) => p.name === s.platform
              )?.icon;

              return (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`${theme}-social-link`}
                >
                  {IconComp ? (
                    <IconComp className={`${theme}-social-icon`} />
                  ) : (
                    <span>{s.platform}</span>
                  )}
                </a>
              );
            })}
        </div>

        <LinkRenderer
          links={links}
          theme={theme}
        />

      </div>
      <style>
        {`
        .theme6-container{
    min-height:100vh;
    background:#0f172a;
    color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:20px;
    font-family:Arial,sans-serif;
}

.theme6-card{
    width:100%;
    max-width:400px;
    text-align:center;
}

.theme6-avatar{
    width:120px;
    height:120px;
    border-radius:50%;
    object-fit:cover;
    border:3px solid #38bdf8;
    box-shadow:0 0 20px rgba(56,189,248,.5);
    margin-bottom:15px;
}

.theme6-username{
    margin:0;
    font-size:28px;
    font-weight:700;
}

.theme6-bio{
    color:#cbd5f5;
    margin:15px 0 25px;
    line-height:1.6;
}

.theme6-socials{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:15px;
    margin:15px 0 20px;
    flex-wrap:wrap;
}

.theme6-social-link{
    display:flex;
    align-items:center;
    justify-content:center;
    text-decoration:none;
    transition:.3s;
}

.theme6-social-link:hover{
    transform:scale(1.15);
}

.theme6-social-icon{
    font-size:30px;
    color:#38bdf8;
    transition:.3s;
}

.theme6-social-link:hover .theme6-social-icon{
    color:#7dd3fc;
}

.theme6-link{
    display:flex;
    flex-direction:column;
    gap:15px;
}

@media (max-width:768px){

    .theme6-card{
        max-width:100%;
    }

    .theme6-avatar{
        width:100px;
        height:100px;
    }

    .theme6-username{
        font-size:24px;
    }

}

@media (max-width:480px){

    .theme6-container{
        padding:15px;
    }

    .theme6-avatar{
        width:90px;
        height:90px;
    }

    .theme6-username{
        font-size:22px;
    }

    .theme6-bio{
        font-size:14px;
    }

    .theme6-social-icon{
        font-size:26px;
    }

}`}
      </style>

    </div>
  );
}

 