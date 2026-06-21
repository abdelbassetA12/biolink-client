import { socialPlatforms } from "../components/socialPlatforms";
import axios from "axios";
import API_BASE from "../config/api";

export default function Theme3({ user, links }) {
  const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 10,
    border: "1px solid rgba(56,189,248,0.25)",
    background: "rgba(255,255,255,0.05)",
    color: "white",
    outline: "none",
    fontSize: 14,
    boxSizing: "border-box"
  };

  const buttonStyle = {
    padding: "14px",
    borderRadius: 12,
    border: "1px solid rgba(56,189,248,0.35)",
    background: "rgba(56,189,248,0.12)",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s"
  };

  const extractYouTubeVideoId = (url = "") => {
    const regExp =
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #020617, #0f172a, #020617)",
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
        {/* Avatar */}
        <img
          src={
            user.avatar ||
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAHBhUPBxAVEhMWDxMYEBIWFRsPEhccFhcWFx0ZGBUYHSgsGx0lHRUXIjIhMSkvOi4uFx8zODMtNygtLisBCgoKDg0ODg0NDysZFRkrKysrNy0tNy03LSsrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAABQMEBgIBB//EADgQAQABAgIGBwYFBAMAAAAAAAABAgMEEQUhMVGi4RIVQWNxgZEiMmGhwdETM0Kx8BQ0coIjUmL/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A/WwFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//Z'
          }
          alt=""
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #38bdf8",
            boxShadow: "0 0 25px rgba(56,189,248,0.6)",
            marginBottom: 15
          }}
        />

        {/* Username */}
        <h2 style={{ margin: 0 }}>{user.username}</h2>

        {/* Bio */}
        <p style={{ color: "#94a3b8", marginBottom: 20 }}>{user.bio}</p>

        {/* Social Icons */}
        <div
          style={{
            marginBottom: 20,
            marginTop: 15,
            display: "flex",
            justifyContent: "center",
            gap: 15,
            flexWrap: "wrap"
          }}
        >
          {user.socialIcons
            ?.filter((s) => s.active)
            .map((s, idx) => {
              const IconComp = socialPlatforms.find(
                (p) => p.name === s.platform
              )?.icon;

              return (
                <a key={idx} href={s.url} target="_blank" rel="noreferrer">
                  {IconComp ? (
                    <IconComp size={28} color="#38bdf8" />
                  ) : (
                    <span style={{ color: "#38bdf8" }}>{s.platform}</span>
                  )}
                </a>
              );
            })}
        </div>

        {/* Links */}
        <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
          {links
            ?.filter((l) => l.active)
            .map((l) => {
              // =========================
              // VIDEO
              // =========================
              if (l.type === "video" && l.videoUrl) {
                return (
                  <div
                    key={l._id}
                    style={{
                      borderRadius: 12,
                      overflow: "hidden",
                      border: "1px solid rgba(56,189,248,0.25)",
                      boxShadow: "0 0 15px rgba(56,189,248,0.12)"
                    }}
                  >
                    <iframe
                      width="100%"
                      height="220"
                      src={l.videoUrl.replace("watch?v=", "embed/")}
                      frameBorder="0"
                      allowFullScreen
                      title={l.title || "video"}
                    />
                  </div>
                );
              }

              // =========================
              // WHATSAPP
              // =========================
              if (l.type === "whatsapp" && l.phone) {
                return (
                  <a
                    key={l._id}
                    href={`https://wa.me/${l.phone}?text=${encodeURIComponent(
                      l.message || ""
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      style={{
                        padding: "14px 18px",
                        borderRadius: 12,
                        background: "rgba(34,197,94,0.15)",
                        border: "1px solid rgba(34,197,94,0.35)",
                        color: "white",
                        fontWeight: "bold",
                        textAlign: "center",
                        backdropFilter: "blur(10px)"
                      }}
                    >
                      💬 Chat on WhatsApp
                    </div>
                  </a>
                );
              }

              // =========================
              // YOUTUBE
              // =========================
              if (l.type === "youtube") {
                const url = l.content?.youtubeUrl || l.url;
                const mode = l.content?.youtubeMode || "link";
                const videoId = extractYouTubeVideoId(url);

                if (mode === "embed" && videoId) {
                  return (
                    <div
                      key={l._id}
                      style={{
                        borderRadius: 12,
                        overflow: "hidden",
                        border: "1px solid rgba(56,189,248,0.25)",
                        boxShadow: "0 0 15px rgba(56,189,248,0.12)"
                      }}
                    >
                      <iframe
                        width="100%"
                        height="220"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        frameBorder="0"
                        allowFullScreen
                        title={l.title || "youtube"}
                      />
                    </div>
                  );
                }
              }

              // =========================
              // FORM
              // =========================
              if (l.type === "form") {
                return (
                  <form
                    key={l._id}
                    onSubmit={async (e) => {
                      e.preventDefault();

                      const formData = {};
                      l.content?.formFields?.forEach((field) => {
                        formData[field.label] = e.target[field.label]?.value;
                      });

                      try {
                        await axios.post(
                          `${API_BASE}/api/profile/submit-form/${l._id}`,
                          formData
                        );

                        alert(
                          l.content?.formSettings?.successMessage || "Sent!"
                        );
                        e.target.reset();
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
                      border: "1px solid rgba(56,189,248,0.15)",
                      textAlign: "left"
                    }}
                  >
                    {l.content?.formFields?.map((field, i) => (
                      <div key={i}>
                        {field.type === "textarea" ? (
                          <textarea
                            name={field.label}
                            placeholder={field.placeholder}
                            required={field.required}
                            style={{
                              ...inputStyle,
                              minHeight: 100,
                              resize: "vertical"
                            }}
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
                        e.currentTarget.style.transform = "scale(1.03)";
                        e.currentTarget.style.boxShadow =
                          "0 0 15px rgba(56,189,248,0.45)";
                        e.currentTarget.style.background =
                          "rgba(56,189,248,0.22)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.background =
                          "rgba(56,189,248,0.12)";
                      }}
                    >
                      {l.content?.formSettings?.submitText || "Send"}
                    </button>
                  </form>
                );
              }

              // =========================
              // PRODUCT
              // =========================
              if (l.type === "product") {
                const mode = l.content?.productDisplay || "card";

                if (mode === "link") {
                  return (
                    <a
                      key={l._id}
                      href={l.content?.productUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: 12,
                        background: "rgba(255,255,255,0.06)",
                        borderRadius: 12,
                        textDecoration: "none",
                        color: "white",
                        border: "1px solid rgba(56,189,248,0.2)"
                      }}
                    >
                      <img
                        src={l.content?.productData?.image}
                        alt=""
                        style={{
                          width: 60,
                          height: 60,
                          borderRadius: 10,
                          objectFit: "cover"
                        }}
                      />

                      <div style={{ textAlign: "left" }}>
                        <div style={{ fontWeight: 700 }}>
                          {l.content?.productData?.title}
                        </div>
                        <div style={{ color: "#38bdf8", fontWeight: 700 }}>
                          {l.content?.productData?.price}
                        </div>
                      </div>
                    </a>
                  );
                }

                return (
                  <a
                    key={l._id}
                    href={l.content?.productUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "block",
                      background: "rgba(255,255,255,0.06)",
                      borderRadius: 18,
                      overflow: "hidden",
                      textDecoration: "none",
                      color: "white",
                      border: "1px solid rgba(56,189,248,0.2)"
                    }}
                  >
                    <img
                      src={l.content?.productData?.image}
                      alt=""
                      style={{
                        width: "100%",
                        height: 220,
                        objectFit: "cover"
                      }}
                    />

                    <div style={{ padding: 14, textAlign: "left" }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>
                        {l.content?.productData?.title}
                      </h3>

                      <p
                        style={{
                          marginTop: 10,
                          marginBottom: 0,
                          fontWeight: 700,
                          color: "#38bdf8"
                        }}
                      >
                        {l.content?.productData?.price}
                      </p>
                    </div>
                  </a>
                );
              }

              // =========================
              // DEFAULT LINK
              // =========================
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
                      borderRadius: 12,
                      background: "rgba(56,189,248,0.1)",
                      border: "1px solid rgba(56,189,248,0.3)",
                      backdropFilter: "blur(10px)",
                      color: "white",
                      fontWeight: "bold",
                      transition: "0.3s",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.background =
                        "rgba(56,189,248,0.25)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.background =
                        "rgba(56,189,248,0.1)";
                    }}
                  >
                    {l.title}
                  </div>
                </a>
              );
            })}
        </div>
      </div>
    </div>
  );
}
