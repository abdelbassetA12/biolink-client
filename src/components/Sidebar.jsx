import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import {
  FaTachometerAlt,
  FaPalette,
  FaChartBar,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa";

export default function Sidebar() {
  const location = useLocation();
  const { logout, user } = useAuth();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <aside className="sidebar">

        {/* PROFILE */}
        <div className="profile">
          <div className="avatar">
            {user?.username?.charAt(0)?.toUpperCase() || "U"}
          </div>
          <div>
            <div className="name">{user?.username}</div>
            <div className="tag">BioLink Creator</div>
          </div>
        </div>

        {/* NAV */}
        <nav className="nav">
          <Link className={isActive("/") ? "active" : ""} to="/">
          <FaTachometerAlt />
             Dashboard
          </Link>

          <Link className={isActive("/themes") ? "active" : ""} to="/themes">
          <FaPalette />
            Themes
          </Link>
       

          <Link className={isActive("/analytics") ? "active" : ""} to="/analytics">
          <FaChartBar />
            Analytics
          </Link>
         

          <Link className={isActive("/settings") ? "active" : ""} to="/settings">
          <FaCog />
            Settings
          </Link>
         
        </nav>

        {/* LOGOUT */}
        <button className="logout" onClick={logout}>
          <FaSignOutAlt />
          Logout
        </button>
      </aside>

   

      <style>{`
        

       
          .sidebar {
  width: 200px;
 
  height: calc(100vh - 90px);
  position: fixed;
  left: 0;
  top: 60px;
   

  background: #2f3749; /* 👈 solid */
  border-right: 1px solid #1e293b;

  display: flex;
  flex-direction: column;
  padding: 18px;
  justify-content: space-between;
}

        /* PROFILE */
        .profile {
          display: flex;
          gap: 12px;
          align-items: center;
          padding: 10px;
          background: rgba(255,255,255,0.04);
          border-radius: 14px;
        }

        .avatar {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          background: linear-gradient(135deg,#60a5fa,#a78bfa);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
        }

        .name {
          color: white;
          font-size: 14px;
        }

        .tag {
          font-size: 11px;
          color: #94a3b8;
        }

        /* NAV */
        .nav {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 20px;
        }

        .nav a {
          text-decoration: none;
          color: #94a3b8;
          padding: 10px 12px;
          border-radius: 12px;
          transition: 0.2s;
          font-size: 14px;

          display: flex;              /* 👈 */
  align-items: center;        /* 👈 */
  gap: 12px;                  /* 👈 */

        }

        .nav a svg {
  font-size: 17px;            /* 👈 */
  min-width: 18px;            /* 👈 */
  flex-shrink: 0;             /* 👈 */
}

        .nav a:hover {
          background: rgba(255,255,255,0.06);
          color: white;
        }

        .nav a.active {
          background: linear-gradient(135deg, rgba(96,165,250,0.2), rgba(167,139,250,0.2));
          color: white;
          border: 1px solid rgba(96,165,250,0.3);
        }

        /* LOGOUT */
        .logout {
          background: rgba(239,68,68,0.12);
          border: 1px solid rgba(239,68,68,0.3);
          color: #f87171;
          padding: 10px;
          border-radius: 12px;
          cursor: pointer;
          transition: 0.2s;

          display: flex;             /* 👈 */
  align-items: center;       /* 👈 */
  justify-content: center;   /* 👈 */
  gap: 10px;  
        
        }

        .logout:hover {
          transform: translateY(-2px);
        }



















@media (max-width:900px){

  .sidebar{
    width:100%;
    height:auto;

    position:fixed;
    bottom:0;
    top:auto;
    left:0;

    flex-direction:row;
    align-items:center;
    justify-content:space-around;

    padding:10px;

    z-index:9999;
  }

  .profile{
    display:none;
  }

  .logout{
    display:none;
  }

  .nav{
    flex-direction:row;
    margin-top:0;
    width:100%;
    justify-content:space-around;
  }

  .nav a{
    padding:10px;
    font-size:12px;
    flex-direction:column;   /* 👈 */
  }

}
      `}</style>
    </>
  );
}