import "../styles/Journey.css";

const WrenchIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="white" strokeWidth="1.8">
    <path d="M20 4l-4 4 8 8 4-4-8-8z" />
    <path d="M4 28l10-10" />
    <path d="M14 14l4-4" />
    <circle cx="8" cy="24" r="3" />
  </svg>
);

const MonumentIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="white" strokeWidth="1.8">
    <rect x="8" y="12" width="16" height="14" />
    <path d="M4 26h24" />
    <path d="M16 5l8 7H8l8-7z" />
    <rect x="13" y="17" width="6" height="9" />
  </svg>
);

const TrophyIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="white" strokeWidth="1.8">
    <path d="M10 6h12v10a6 6 0 0 1-12 0V6z" />
    <path d="M10 9H6v4a4 4 0 0 0 4 4" />
    <path d="M22 9h4v4a4 4 0 0 1-4 4" />
    <path d="M16 22v4" />
    <path d="M10 26h12" />
    <circle cx="16" cy="8" r="1" fill="white" />
  </svg>
);

const GroupIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="white" strokeWidth="1.8">
    <circle cx="16" cy="10" r="4" />
    <path d="M8 26c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    <circle cx="6" cy="12" r="3" />
    <path d="M2 26c0-3.3 1.8-6 4-7" />
    <circle cx="26" cy="12" r="3" />
    <path d="M30 26c0-3.3-1.8-6-4-7" />
  </svg>
);

const STEPS = [
  { icon: <WrenchIcon />,  label: "BUILD YOUR\nTEAM" },
  { icon: <MonumentIcon />, label: "COMPETE ACROSS\nINDIA" },
  { icon: <TrophyIcon />,   label: "EARN NATIONAL\nRANKING & VALUE" },
  { icon: <GroupIcon />,    label: "JOIN THE\nLEAGUE" },
];

export default function Journey() {
  return (
    <section className="journey">
      <div className="journey__inner">

        <p className="journey__eyebrow">USER JOURNEY</p>
        <h2 className="journey__title">YOUR PATH TO THE LEAGUE</h2>
        <p className="journey__subtitle">Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>

        <div className="journey__steps">
          {STEPS.map((step, i) => (
            <div key={i} className="journey__step">
              <div className="journey__icon-wrap">
                {step.icon}
              </div>
              <p className="journey__step-num">STEP {i + 1}</p>
              <p className="journey__step-label">{step.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
