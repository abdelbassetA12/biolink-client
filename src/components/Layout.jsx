import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout({ children }) {
  return (
    <>
      <Topbar />

      <Sidebar />

      <main className="content">
        {children}
      </main>

      <style>{`
        
        .content{
          margin-left:240px;
          padding:80px 24px 24px;
          min-height: 100vh;

          transition:0.3s;
        }

        /* =========================
           LARGE DESKTOP
        ========================= */

        @media (max-width:1400px){

          .content{
            margin-left:220px;
          }

        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width:900px){

          .content{
            margin-left:0;
            padding:80px 16px 90px;
          }

        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width:600px){

          .content{
            padding:75px 12px 85px;
          }

        }

      `}</style>
    </>
  );
}

/*
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout({ children }) {
  return (

    <>
    
  
      <Topbar />

       <Sidebar />
       
      

      <main className="content">
       
        {children}
      </main>

    
      

      <style>{`
        .content {
          margin-left: 200px;
          padding: 80px 24px 24px;
          min-height: 100vh;

        
        }
      `}</style>
    </>
  );
}
  */