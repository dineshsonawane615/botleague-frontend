import "../styles/JoinEcosystem.css";

/* ── Social icons ── */
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.8 15.5V8.5l6.2 3.5-6.2 3.5z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8 0 3.2 0 3.6-.1 4.8-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1-3.2 0-3.6 0-4.8-.1-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12c0-3.2 0-3.6.1-4.8C2.4 3.9 4 2.3 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12c0 3.3 0 3.7.1 4.9.2 4.4 2.6 6.8 7 7C8.3 24 8.7 24 12 24c3.3 0 3.7 0 4.9-.1 4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9 0-3.3 0-3.7-.1-4.9-.2-4.4-2.6-6.8-7-7C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1C0 18.1 4.4 23 10.1 24v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3H15.8c-1.5 0-2 .9-2 1.9v2.3h3.3l-.5 3.5h-2.8V24C19.6 23 24 18.1 24 12.1z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.9 1h3.7l-8 9.2L24 23h-7.4l-5.8-7.6L4.5 23H.8l8.6-9.8L0 1h7.6l5.2 6.9zm-1.3 19.8h2L6.6 3.1H4.4z" />
  </svg>
);

const QUICK_LINKS_COL1 = ["The Arena", "Episodes", "National Rankings", "Programs", "Rulebooks"];
const QUICK_LINKS_COL2 = ["Join the Team", "Sponsorships", "Help Center", "Contact Us", "Legal"];

const SOCIAL_ICONS = [
  { icon: <YoutubeIcon />,   label: "YouTube"   },
  { icon: <InstagramIcon />, label: "Instagram" },
  { icon: <FacebookIcon />,  label: "Facebook"  },
  { icon: <TwitterIcon />,   label: "Twitter"   },
];

export default function Footer() {
  return (
    <footer className="footer" style={{ background: "#1a1a1a", padding: "0 0 0" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "24px 20px 0" }}>
        <div className="footer__grid">

          {/* ── Quick Links ── */}
          <div>
            <p className="footer__links-heading">QUICK LINKS</p>
            <div className="footer__links-cols">
              <div>
                {QUICK_LINKS_COL1.map((l) => (
                  <a key={l} href="#" className="footer__link" style={{ display: "block", marginBottom: 8 }}>{l}</a>
                ))}
              </div>
              <div>
                {QUICK_LINKS_COL2.map((l) => (
                  <a key={l} href="#" className="footer__link" style={{ display: "block", marginBottom: 8 }}>{l}</a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Social Media ── */}
          <div className="footer__social">
            <p className="footer__social-heading">SOCIAL MEDIA</p>
            <div className="footer__social-icons">
              {SOCIAL_ICONS.map((s) => (
                <a key={s.label} href="#" className="footer__social-icon" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        <p className="footer__copy">
          © 2025 BotLeague · India's National Robotics Arena Ecosystem
        </p>
      </div>
    </footer>
  );
}
