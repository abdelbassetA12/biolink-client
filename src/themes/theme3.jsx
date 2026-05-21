export default function Theme1({ user, links }) {
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
          src={user.avatar || 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAHBhUPBxAVEhMWDxMYEBIWFRsPEhccFhcWFx0ZGBUYHSgsGx0lHRUXIjIhMSkvOi4uFx8zODMtNygtLisBCgoKDg0ODg0NDysZFRkrKysrNy0tNy03LSsrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAABQMEBgIBB//EADgQAQABAgIGBwYFBAMAAAAAAAABAgMEEQUhMVGi4RIVQWNxgZEiMmGhwdETM0Kx8BQ0coIjUmL/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A/WwFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHi5dptRncqiPGcmtVpOzT+rPwifsDcGlGlbMz70x/rLYtYmi9+VXE/DPX6AygAAAAAAAAAAAAAAAAAAAAAA811RRTM1zlERrkCuuLdGdc5RG2UfF6WmucsNqj/t2z4bmtj8bOLubqY92PrPxai4mvtVU11Z1znO+dcvgAAA3cLpK5YnKqelTunb5St4bE04mjO1PjHbHi5dksXqrFzpWpyn+apB1QwYPExirPSp/2jdLOigAAAAAAAAAAAAAAAAACNpvFZ1fhUdmur6R9fRXuVxbtzVVsiJmfJytyublyaq9szMz5kK8gKgAAAAADa0fif6XERM+7Oqrw3+TpHIui0Ve/GwUZ7afZny2fLIpG4AigAAAAAAAAAAAAAAANPS1fQwFWXblHrP2zc6u6c/s4/wA4/aUJYlAAAAAAAAFbQNft10/CJ9NX1hJUdB/3c/4T+9ILoCKAAAAAAAAAAAAAAAA0dM09LAzO6qmfnl9XPuqxFv8AGsVU76Zj7OWyy2rEr4AAAAAAAAqaBpzvVTupiPWeSWvaFtdDCdKf1VZ+UavuCgAigAAAAAAAAAAAAAAACBpjDfg4npU7Ktfn2/dfYsTYjE2Zpr8p3TvBywyX7NWHuzTcjXHpPxhjVAAAAAH2IznUDJh7M4i9FFHbPp8XT0UxRREU7IjKPJp6MwX9Nbzue9O34RubyVYAAAAAAAAAAAAAAAAAAAAwYvC04q3lc29k9sIGLwdeFq/5IzjsqjZydM+ZZxrByQv4jRtmuc59jwnKPSWlXo2iJ9m/R55R9VRNFCnR1Mzrv0esT9W3Y0Xa/VV0/OIj5fcEizaqvV9G1EzP827lvAaOjDe1c11fKPD7t23bi1TlbiIjdEZPSKAAAAAAAAAAAAAAAAAADzcuRao6VyYiN8pOK0vM6sLGX/qdvlAKty7TapzuzER8dTQvaYoo/KiauGP55Ity5NyrO5MzO+dbyuJrfu6Wu1+7lT4RnPzatzEV3PfrqnznL0YgAAAAGSi9Vb/LqmPCZhs2tKXbe2qKvGPrDSAWbOmYn86mY+Ma49FCxiKL8f8ADVE/Dt9HLPsT0Zzp1T2Tskw11ohYXS1dvVf9uN/6vXtWMPiKcRRnanPfvjxhFZQAAAAAAAAAAAGtjcZThKPa1zOyntn7QY7FxhLWc65n3Y/nY527cm7cmq5OcztkHvE4mrE153Z8I7I8IYQVAAAAAAAAAAAAB7tXKrNfStTlO94AdBo/SEYn2bmqvd2T4fZvOSicp1LujMd/U09G778cUb/FFUAAAAAAAAHm5XFuiaq9URGcvSVpy/0aIt09uurwjZ8/2BMxWInE3pqr8o3RuYQVAAAAAAAAAAAAAAAAB6orm3XFVE5TE6peQHT4PERicPFUecbpZ0LQt/8ADxPQnZVHzj+T8l1FAAAAAAHN6TufiY6qd05R5av3zdIk3ND9O5Mzc2zM+7v8yCOK/UnecPM6k7zh5qiQK/UnecPM6k7zh5gkCv1J3nDzOpO84eYJAr9Sd5w8zqTvOHmCQK/UnecPM6k7zh5gkCv1J3nDzOpO84eYJAr9Sd5w8zqTvOHmCQK/UnecPM6k7zh5gkCv1J3nDzOpO84eYJAr9Sd5w8zqTvOHmCVbrm3ciqnbExMeWt1cTnGcJPUnecPNUtUfh2opmc8qYjPwjJFewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//Z'}
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
        <p style={{ color: "#94a3b8", marginBottom: 25 }}>
          {user.bio}
        </p>

        {/* Links */}
        <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
          {links.map((l) => (
            <a
              href={l.url}
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
          ))}
        </div>
      </div>
    </div>
  );
}