import "../styles/JoinEcosystem.css";

const FORM_TYPES = ["BECOME IN JUDGE", "VOLUNTEER", "COMMUNITY MEMBER"];

const SPONSORS = [
  { name: "NIT DELHI",       icon: "⚙" },
  { name: "INDIAN BIT",      icon: "🔩" },
  { name: "NIT SILCHAR",     icon: "◎" },
  { name: "ROBO COMPANY",    icon: "✈" },
  { name: "IIT BOMBAY",      icon: "⚙" },
  { name: "ROBO COMPANY",    icon: "●" },
];

/* ── Sign-up form card ── */
function SignUpCard({ title }) {
  return (
    <div className="join__form-card">
      <p className="join__form-title">{title}</p>
      {["Name", "Location", "Enroll"].map((field) => (
        <input
          key={field}
          type="text"
          placeholder={field}
          className="join__input"
        />
      ))}
      <button className="join__signup-btn">SIGN UP</button>
    </div>
  );
}

export default function JoinEcosystem() {
  return (
    <section className="join">
      <div className="join__inner">

        <h2 className="join__heading">JOIN THE ECOSYSTEM</h2>

        <div className="join__forms">
          {FORM_TYPES.map((title) => (
            <SignUpCard key={title} title={title} />
          ))}
        </div>

        
        <div className="join__sponsors">
          <p className="join__sponsors-heading">SPONSORS</p>
          <div className="join__sponsors-grid">
            {SPONSORS.map((s, i) => (
              <div key={i} className="sponsor-item">
                <div className="sponsor-item__logo">{s.icon}</div>
                <p className="sponsor-item__name">{s.name}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
