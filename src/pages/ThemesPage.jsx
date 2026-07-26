import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import API_BASE from "../config/api";
import ThemeRenderer from "../components/ThemeRenderer";
import axios from "axios";

import Theme1 from "../themes/theme1";
import Theme2 from "../themes/theme2";
import Theme3 from "../themes/theme3";
import Theme4 from "../themes/theme4";
import Theme5 from "../themes/theme5";
import Theme6 from "../themes/theme6";
import Theme7 from '../themes/theme7';
import Theme8 from '../themes/theme8';

const themes = {
  theme1: Theme1,
  theme2: Theme2,
  theme3: Theme3,
  theme4: Theme4,
  theme5: Theme5,
  theme6: Theme6,
   theme7:Theme7,
   theme8:Theme8
};

export default function ThemesPage() {
  const { user, setUser } = useAuth();

  const [selected, setSelected] = useState(user?.theme || "theme1");
  const [links, setLinks] = useState([]);
  const [socialIcons, setSocialIcons] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${API_BASE}/api/profile/${user.username}`
        );

        setLinks(res.data.links || []);
        setSocialIcons(res.data.user.socialIcons || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [user]);

  const saveTheme = async () => {
    try {
      setLoading(true);

      const res = await axios.post(
        `${API_BASE}/api/profile/update`,
        {
          oldUsername: user.username,
          theme: selected,
        },
        {
          withCredentials: true,
        }
      );

      setUser(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));

      alert("Theme updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Error updating theme");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="themes-page">

     

      

      {/* GRID */}
      <div className="grid">
        {Object.keys(themes).map((themeKey) => {
          const isActive = selected === themeKey;

          return (
            <div
              key={themeKey}
              className={`card ${isActive ? "active" : ""}`}
           
              onClick={async () => {
  if (selected === themeKey || loading) return;

  setSelected(themeKey);

  try {
    setLoading(true);

    const res = await axios.post(
      `${API_BASE}/api/profile/update`,
      {
        oldUsername: user.username,
        theme: themeKey,
      },
      {
        withCredentials: true,
      }
    );

    setUser(res.data);
    localStorage.setItem("user", JSON.stringify(res.data));
  } catch (err) {
    console.error(err);
    alert("Error updating theme");
  } finally {
    setLoading(false);
  }
}}
            >

              {/* ACTIVE BADGE */}
              {isActive && (
                <div className="activeBadge">
                  ✓ Active
                </div>
              )}

              {/* PREVIEW */}
              <div className="preview">
                <ThemeRenderer
                  user={{ ...user, socialIcons }}
                  links={links}
                  previewOnly
                  themeOverride={themeKey}
                  
                />
              </div>

              {/* FOOTER */}
              <div className="footer">
                <span className="themeName">
                  {themeKey.toUpperCase()}
                </span>

                {isActive && (
                  <span className="selectedText">
                    Selected
                  </span>
                )}
              </div>

            </div>
          );
        })}
      </div>

      <style>{`
  

  .themes-page {
    min-height: 100vh;
    padding: 32px;
    background:
      radial-gradient(circle at top left, rgba(99,102,241,0.12), transparent 30%),
      radial-gradient(circle at bottom right, rgba(168,85,247,0.10), transparent 30%),
      #0f172a;
    color: white;
    font-family: Inter, sans-serif;
    overflow-x: hidden;
  }

 

 

  /* ========================= */
  /* GRID */
  /* ========================= */

  .grid {
    display: grid;
    grid-template-columns:
      repeat(auto-fit, minmax(360px, 1fr));
    gap: 26px;
    
  }

  /* ========================= */
  /* CARD */
  /* ========================= */

  .card {
  
    position: relative;

    border-radius: 30px;

    overflow: hidden;

    cursor: pointer;

    background:
      linear-gradient(
        180deg,
        rgba(255,255,255,0.05),
        rgba(255,255,255,0.02)
      );

    backdrop-filter: blur(20px);

    border:
      1px solid rgba(255,255,255,0.08);

    box-shadow:
      0 10px 40px rgba(0,0,0,0.35);

    transition:
      transform 0.35s ease,
      border 0.35s ease,
      box-shadow 0.35s ease;
  }

  .card:hover {
    transform:
      translateY(-8px)
      scale(1.01);

    border:
      1px solid rgba(99,102,241,0.45);

    box-shadow:
      0 30px 60px rgba(0,0,0,0.45);
  }

  .card.active {
    border:
      1px solid rgba(99,102,241,0.7);

    box-shadow:
      0 0 0 2px rgba(99,102,241,0.15),
      0 30px 70px rgba(99,102,241,0.25);
  }

  /* ========================= */
  /* ACTIVE BADGE */
  /* ========================= */

  .activeBadge {
    position: absolute;
    top: 18px;
    right: 18px;
    z-index: 30;

    padding: 9px 15px;

    border-radius: 999px;

    background:
      rgba(99,102,241,0.95);

    backdrop-filter: blur(12px);

    color: white;

    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.3px;

    box-shadow:
      0 10px 25px rgba(99,102,241,0.35);
  }

  /* ========================= */
  /* PREVIEW */
  /* ========================= */

  .preview {
   overflow: scroll;
    position: relative;

    height: 560px;

    overflow: hidden;

    background: #020617;
  }

  .preview::before {
    content: "";

    position: absolute;
    inset: 0;

    background:
      linear-gradient(
        to bottom,
        transparent 65%,
        rgba(2,6,23,0.95)
      );

    z-index: 10;
    pointer-events: none;
  }

  .preview > * {
    transform: scale(0.88);
    transform-origin: top center;
    pointer-events: none;
  }

  /* ========================= */
  /* FOOTER */
  /* ========================= */

  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    z-index: 20;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 22px;

    background:
      linear-gradient(
        to top,
        rgba(2,6,23,0.95),
        rgba(2,6,23,0.65)
      );

    backdrop-filter: blur(12px);
  }

  .themeName {
    font-size: 16px;
    font-weight: 800;
    letter-spacing: 0.4px;
  }

  .selectedText {
    color: #818cf8;
    font-size: 13px;
    font-weight: 700;
  }

  /* ========================= */
  /* TABLET */
  /* ========================= */

  @media (max-width: 992px) {

    .themes-page {
      padding: 22px;
    }

    .grid {
      grid-template-columns:
        repeat(auto-fit, minmax(300px, 1fr));
    }

    .preview {
      height: 520px;
    }
  }

  /* ========================= */
  /* MOBILE */
  /* ========================= */

  @media (max-width: 640px) {

    .themes-page {
      padding: 14px;
    }

    .hero {
      flex-direction: column;
      align-items: stretch;
      margin-bottom: 24px;
    }

    .heroLeft p {
      font-size: 14px;
    }

    .saveBtn {
      width: 100%;
      min-width: unset;
    }

    .grid {
      grid-template-columns: 1fr;
      gap: 18px;
    }

    .card {
      border-radius: 24px;
    }

    .preview {
      height: 460px;
    }

    .footer {
      padding: 18px;
    }
  }

  /* ========================= */
  /* VERY SMALL */
  /* ========================= */

  @media (max-width: 420px) {

    .preview {
      height: 400px;
    }

    .preview > * {
      transform: scale(0.8);
    }

    .heroLeft h1 {
      font-size: 2rem;
    }

    .saveBtn {
      padding: 15px;
      font-size: 14px;
    }
  }
`}</style>
    </div>
  );
}








/*
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import API_BASE from "../config/api";
import ThemeRenderer from "../components/ThemeRenderer";
import axios from "axios";
import Theme1 from "../themes/theme1";
import Theme2 from "../themes/theme2";
import Theme3 from "../themes/theme3";
import Theme4 from "../themes/theme4";
import Theme5 from "../themes/theme5";
import Theme6 from "../themes/theme6";

const themes = {
  theme1: Theme1,
  theme2: Theme2,
  theme3: Theme3,
  theme4: Theme4,
  theme5: Theme5,
  theme6: Theme6,
};

export default function ThemesPage() {
  const { user, setUser } = useAuth();
  const [selected, setSelected] = useState(user?.theme || "theme1");





const [links, setLinks] = useState([]);
const [socialIcons, setSocialIcons] = useState([]);

useEffect(() => {
  if (!user) return;

  const fetchData = async () => {
    const res = await axios.get(
      `${API_BASE}/api/profile/${user.username}`
    );
    setLinks(res.data.links || []);
    setSocialIcons(res.data.user.socialIcons || []);
  };

  fetchData();
}, [user]);

 const saveTheme = async () => {
  try {
    const res = await axios.post(
      `${API_BASE}/api/profile/update`,
      {
        oldUsername: user.username,
        theme: selected,
      },
      {
        withCredentials: true,
      }
    );

    setUser(res.data);
    localStorage.setItem("user", JSON.stringify(res.data));
    alert("Theme updated!");
  } catch (err) {
    console.error(err);
    alert("Error updating theme");
  }
};

  return (
    <div className="themes-page">
      <div className="header">
        <h2>Choose Your Theme</h2>
        <button onClick={saveTheme}>Save</button>
      </div>

      <div className="grid">
        {Object.keys(themes).map((themeKey) => {
          const isActive = selected === themeKey;

          return (
            <div
              key={themeKey}
              className={`card ${isActive ? "active" : ""}`}
              onClick={() => setSelected(themeKey)}
            >
              <ThemeRenderer
  user={{ ...user, socialIcons }}
  links={links}
  previewOnly
  themeOverride={themeKey}
/>

             
            </div>
          );
        })}
      </div>
      <style>{`
        .themes-page {
          padding: 20px;
          color: white;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .header button {
          background: linear-gradient(135deg,#60a5fa,#a78bfa);
          border: none;
          padding: 10px 16px;
          border-radius: 10px;
          color: white;
          cursor: pointer;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }

        .card {
          cursor: pointer;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #1e293b;
          background: #020617;
          transition: 0.25s;
        }

        .card:hover {
          transform: scale(1.03);
        }

        .card.active {
          border: 2px solid #6366f1;
          box-shadow: 0 0 20px rgba(99,102,241,0.4);
        }

        .label {
          text-align: center;
          padding: 8px;
          background: #020617;
          font-size: 13px;
        }
      `}</style>
      
    </div>
  );
}
  */