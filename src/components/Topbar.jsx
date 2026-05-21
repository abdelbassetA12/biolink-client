import { useState, useEffect } from 'react';
import { useAuth } from "../context/AuthContext";
import QRCodeBox from "./QRCodeBox";
export default function Topbar() {

   const { user } = useAuth();
   const [showShare, setShowShare] = useState(false);

  const handlePreview = () => {
    if (!user) return;
    window.open(`/u/${user.username}`, "_blank");
  };

  const downloadQR = () => {
  const canvas = document.querySelector("canvas");
  const url = canvas.toDataURL("image/png");

  const a = document.createElement("a");
  a.href = url;
  a.download = "qr-code.png";
  a.click();
};


  return (
    <>
      <div className="topbar">
        <div className="title">BioLink</div>

        <div className="actions">
          <button onClick={handlePreview}>Preview</button>
          
          <button className="primary" onClick={() => setShowShare(true)}>
  Share
</button>
        </div>
      </div>




       {showShare && (
  <div className="share-overlay">
    <div className="share-modal">

      <h3>Share your page</h3>

      <div className="share-url">
        <input
          value={`${window.location.origin}/${user.username}`}
          readOnly
        />
        <button
          onClick={() => {
            navigator.clipboard.writeText(`${window.location.origin}/${user.username}`);
            alert("Copied!");
          }}
        >
          Copy
        </button>
      </div>

      <div className="share-grid">

        <button onClick={() => {
          const url = `${window.location.origin}/${user.username}`;
          window.open(`https://wa.me/?text=${encodeURIComponent(url)}`);
        }}>
          WhatsApp
        </button>

        <button onClick={() => {
          const url = `${window.location.origin}/${user.username}`;
          window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
        }}>
          Facebook
        </button>

        <button onClick={() => {
          const url = `${window.location.origin}/${user.username}`;
          window.open(`https://twitter.com/intent/tweet?url=${url}`);
        }}>
          X
        </button>

        <button onClick={() => {
          const url = `${window.location.origin}/${user.username}`;
          window.open(`https://t.me/share/url?url=${url}`);
        }}>
          Telegram
        </button>

        

      </div>
      <QRCodeBox username={user.username} />
        <button onClick={downloadQR}>
  Download QR
</button>

      <button className="close-btn" onClick={() => setShowShare(false)}>
        Close
      </button>

    </div>
  </div>
)}

     <style>{`

  .topbar {
  position: fixed;
  top: 0;
  left: 0;   /* 👈 يبدأ بعد sidebar مباشرة */
  right: 0;

  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;

   background: #2f3749; /* 👈 solid */
  border-bottom: 1px solid #1e293b;

  z-index: 999;
}

/* TITLE */
.title {
  color: white;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.3px;
}

/* ACTIONS */
.actions {
  display: flex;
  gap: 10px;
}

.actions button {
  padding: 8px 14px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.08);
  cursor: pointer;
  background: rgba(255,255,255,0.05);
  color: #cbd5e1;
  transition: 0.25s;
}

.actions button:hover {
  background: rgba(255,255,255,0.08);
  color: white;
  transform: translateY(-1px);
}

/* PRIMARY BUTTON */
.primary {
  background: linear-gradient(135deg,#60a5fa,#a78bfa);
  color: white;
  border: none;
  box-shadow: 0 6px 20px rgba(96,165,250,0.35);
}

.primary:hover {
  transform: translateY(-2px) scale(1.02);
}






.share-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  animation: fadeIn 0.2s ease;
}

.share-modal {
  width: 400px;
  background: white;
  border-radius: 20px;
  padding: 25px;
  animation: slideUp 0.25s ease;
}

.share-modal h3 {
  margin-bottom: 15px;
}

.share-url {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.share-url input {
  flex: 1;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ddd;
}

.share-url button {
  padding: 10px 14px;
  border: none;
  border-radius: 10px;
  background: #6366f1;
  color: white;
  cursor: pointer;
}

.share-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.share-grid button {
  padding: 12px;
  border-radius: 12px;
  border: none;
  background: #f3f4f6;
  cursor: pointer;
  transition: 0.2s;
}

.share-grid button:hover {
  background: #e0e7ff;
}

.close-btn {
  margin-top: 20px;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: none;
  background: #111827;
  color: white;
  cursor: pointer;
}

@keyframes slideUp {
  from {
    transform: translateY(40px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeIn {
  from { opacity: 0 }
  to { opacity: 1 }
}
`}</style>

      
    </>
  );

 
}










