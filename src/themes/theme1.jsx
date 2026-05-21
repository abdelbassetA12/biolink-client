import { socialPlatforms } from '../components/socialPlatforms';
import axios from 'axios';
export default function Theme1({ user, links }) {

  const inputStyle = {
  width: "90%",
  padding: "12px 14px",
  borderRadius: 10,
  border: "1px solid rgba(255,255,255,0.1)",
  background: "rgba(255,255,255,0.05)",
  color: "white",
  outline: "none",
  fontSize: 14,
};

const buttonStyle = {
  padding: "14px",
  borderRadius: 10,
  border: "none",
  background: "#38bdf8",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "0.3s"
};
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
     
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      
        fontFamily: "Arial"
      }}
    >

      <div
        style={{
          width: "100%",
          maxWidth: 400,
          textAlign: "center"
        }}
      >
       
        <img
          src={user.avatar || "data:image/jpeg;base64,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"}
          alt=""
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid #38bdf8",
            boxShadow: "0 0 20px rgba(56,189,248,0.5)",
            marginBottom: 15
          }}
        />

      
        <h2 style={{ margin: 0 }}>{user.username}</h2>

       
        <p style={{ color: "#cbd5f5", marginBottom: 25 }}>
          {user.bio}
        </p>


        
        <div style={{ marginBottom: 15,marginTop: 15, display: "flex", justifyContent: "center", gap: 15 }}>
  {user.socialIcons?.filter(s => s.active).map((s, idx) => {
    // البحث عن الأيقونة حسب اسم المنصة
    const IconComp = socialPlatforms.find(p => p.name === s.platform)?.icon;
    return (
      <a key={idx} href={s.url} target="_blank" rel="noreferrer">
        {IconComp ? <IconComp size={30} color="#38bdf8" /> 
                  : <span>{s.platform}</span>} 
      </a>
    );
  })}
</div>
      

       
        <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
          {links.filter(l => l.active).map((l) => {

  // 🎥 VIDEO
  if (l.type === "video" && l.videoUrl) {
    return (
      <div key={l._id} style={{ borderRadius: 10, overflow: "hidden" }}>
        <iframe
          width="100%"
          height="220"
          src={l.videoUrl.replace("watch?v=", "embed/")}
          frameBorder="0"
          allowFullScreen
        />
      </div>
    );
  }

  // 💬 WHATSAPP
  if (l.type === "whatsapp" && l.phone) {
    return (
      <a
        key={l._id}
        href={`https://wa.me/${l.phone}?text=${encodeURIComponent(l.message || "")}`}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <div
          style={{
            padding: "14px 18px",
            borderRadius: 10,
            background: "#22c55e",
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
          }}
        >
          💬 Chat on WhatsApp
        </div>
      </a>
    );
  }

  if (l.type === "youtube") {
  const url = l.content?.youtubeUrl;
  const mode = l.content?.youtubeMode;

  const videoMatch = url?.match(/v=([^&]+)/);
  const videoId = videoMatch ? videoMatch[1] : null;

  // 🎥 EMBED
  if (mode === "embed" && videoId) {
    return (
      <iframe
        width="100%"
        height="200"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen
      />
    );
  }

  // 📺 PLAYLIST
  if (mode === "playlist") {
    const channelId = extractChannelId(url); // دالة تكتبها
    return (
      <iframe
        width="100%"
        height="300"
        src={`https://www.youtube.com/embed?listType=user_uploads&list=${channelId}`}
      />
    );
  }

  // 🔗 DEFAULT → redirect
}

if (l.type === "form") {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        const formData = {};
        l.content.formFields.forEach(field => {
          formData[field.label] = e.target[field.label].value;
        });

        try {
          await axios.post(
            `http://localhost:5001/api/profile/submit-form/${l._id}`,
            formData
          );

          alert(l.content.formSettings?.successMessage || "Sent!");
        } catch (err) {
          alert("Error sending form");
        }
      }}
      style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(10px)",
        padding: 20,
        borderRadius: 15,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        border: "1px solid rgba(255,255,255,0.1)"
      }}
    >
      {l.content.formFields.map((field, i) => (
        <div key={i}>
          {field.type === "textarea" ? (
            <textarea
              name={field.label}
              placeholder={field.placeholder}
              required={field.required}
              style={inputStyle}
            />
          ) : (
            <input
              type={field.type}
              name={field.label}
              placeholder={field.placeholder}
              required={field.required}
              style={inputStyle}
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        style={buttonStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow =
            "0 0 15px rgba(56,189,248,0.7)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {l.content.formSettings?.submitText || "Send"}
      </button>
    </form>
  );
}

if (l.type === "form") {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        const formData = {};
        l.content.formFields.forEach(field => {
          formData[field.label] = e.target[field.label].value;
        });

        try {
          await axios.post(
            `http://localhost:5001/api/profile/submit-form/${l._id}`,
            formData
          );

          alert(l.content.formSettings?.successMessage || "Sent!");
        } catch (err) {
          alert("Error sending form");
        }
      }}
    >
      {l.content.formFields.map((field, i) => (
        <div key={i}>
          {field.type === "textarea" ? (
            <textarea
              name={field.label}
              placeholder={field.placeholder}
              required={field.required}
            />
          ) : (
            <input
              type={field.type}
              name={field.label}
              placeholder={field.placeholder}
              required={field.required}
            />
          )}
        </div>
      ))}

      <button type="submit">
        {l.content.formSettings?.submitText || "Send"}
      </button>
    </form>
  );
}

if (l.type === "product") {

  const mode = l.content?.productDisplay || "card";

  // 🔥 LINK MODE أولاً
  if (mode === "link") {
    return (
      <a
        href={l.content.productUrl}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: 12,
          background: "#fff",
          borderRadius: 12,
          textDecoration: "none",
          color: "#111"
        }}
      >
        <img
          src={l.content.productData?.image}
          style={{ width: 60, height: 60, borderRadius: 10 }}
        />

        <div>
          <div style={{ fontWeight: 600 }}>
            {l.content.productData?.title}
          </div>

          <div style={{ color: "#10b981", fontWeight: 700 }}>
            {l.content.productData?.price}
          </div>
        </div>
      </a>
    );
  }

  // 🟢 DEFAULT CARD MODE
  return (
    <a
      href={l.content.productUrl}
      target="_blank"
      rel="noreferrer"
      style={{
        display: "block",
        background: "#fff",
        borderRadius: 18,
        overflow: "hidden",
        textDecoration: "none",
        color: "#111",
        marginBottom: 16
      }}
    >
      <img
        src={l.content.productData?.image}
        style={{
          width: "100%",
          height: 220,
          objectFit: "cover"
        }}
      />

      <div style={{ padding: 14 }}>
        <h3 style={{ fontSize: 16, fontWeight: 700 }}>
          {l.content.productData?.title}
        </h3>

        <p style={{
          marginTop: 10,
          fontWeight: 700,
          color: "#10b981"
        }}>
          {l.content.productData?.price}
        </p>
      </div>
    </a>
  );
}


  // 🔗 DEFAULT (LINK القديم - لا تلمسه)
  return (
    <a
      href={`http://localhost:5001/api/profile/redirect/${l._id}`}
      key={l._id}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none" }}
    >
      <div
        style={{
          padding: "14px 18px",
          borderRadius: 10,
          background: "#38bdf8",
          color: "white",
          fontWeight: "bold",
          transition: "0.3s",
          cursor: "pointer"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow =
            "0 0 15px rgba(56,189,248,0.7)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {l.title}
      </div>
    </a>
  );

})}

{/*
{links.filter(l => l.active).map((l) => (
          //{links.map((l) => (
            // 🎥 VIDEO
 

 
           
           <a
    href={`http://localhost:5001/api/profile/redirect/${l._id}`}
    key={l._id}
    target="_blank"
    rel="noreferrer"
    style={{ textDecoration: "none" }}
  >
              <div
                style={{
                  padding: "14px 18px",
                  borderRadius: 10,
                  background: "#38bdf8",
                  color: "white",
                  fontWeight: "bold",
                  transition: "0.3s",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 0 15px rgba(56,189,248,0.7)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {l.title}
              </div>
            </a>
          ))}
*/}
          
        </div>
      </div>
    </div>
  );
}


