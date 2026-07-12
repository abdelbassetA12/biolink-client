import axios from "axios";
import API_BASE from "../config/api";

export default function LinkRenderer({
  links,
  inputStyle,
  buttonStyle,
  theme
}) {
  return (
    <div className={`${theme}-link`}
    
      
    >
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
                  `${API_BASE}/api/profile/submit-form/${l._id}`,
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
                  `${API_BASE}/api/profile/submit-form/${l._id}`,
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
            href={`${API_BASE}/api/profile/redirect/${l._id}`}
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
    </div>
  );
}