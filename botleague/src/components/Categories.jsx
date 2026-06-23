import { useState } from "react";
import "../styles/Categories.css";

const FEATURES = [
  {
    num: "1.",
    title: "STRUCTURED EVENTS",
    desc: '"From one-off events to a year-round competitive season."',
  },
  {
    num: "2.",
    title: "DIGITAL IDENTITY",
    desc: '"Your professional robotics legacy, tracked and verified."',
  },
  {
    num: "3.",
    title: "NATIONAL RANKING",
    desc: '"Benchmark your skills against the best engineers in India."',
  },
  {
    num: "4.",
    title: "CAREER PATHWAY",
    desc: '"Turning arena victories into real-world industry opportunities."',
  },
];


const MIcon = () => (
  <span style={{ fontWeight: 900, fontSize: 26, fontFamily: "monospace", color: "#111" }}>M</span>
);

const LightbulbIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.8">
    <path d="M12 2a7 7 0 0 1 4 12.8V17H8v-2.2A7 7 0 0 1 12 2z" />
    <path d="M9 21h6" />
    <path d="M10 17v4" />
    <path d="M14 17v4" />
  </svg>
);

const GearPersonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.8">
    <circle cx="12" cy="8" r="4" />
    <path d="M6 20v-2a6 6 0 0 1 12 0v2" />
    <circle cx="19" cy="8" r="2" />
    <path d="M14 9a6 6 0 0 1 5 6" />
  </svg>
);

const BitcoinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.8">
    <circle cx="12" cy="12" r="9" />
    <path d="M9 8h4a2 2 0 1 1 0 4H9v4" />
    <path d="M9 12h5a2 2 0 1 1 0 4H9" />
  </svg>
);


const GearIllustration = () => (
  <div className="categories__illustration-wrapper">
    <img
      src="/public/gear.png" 
      alt="Gear Mechanical Illustration"
      className="categories__gear-png"
    />
  </div>
);


const CATEGORIES = [
  {
    icon: <MIcon />,
    iconBg: "#f59e0b",
    name: "MINI\nMAKERS",
    desc: "Where Creativity Meets Logic.",
    active: true,
  },
  {
    icon: <LightbulbIcon />,
    iconBg: "#2a2a2a",
    name: "JUNIOR\nINNOVATORS",
    desc: "Engineering & Strategy Fundamentals.",
    active: false,
  },
  {
    icon: <GearPersonIcon />,
    iconBg: "#2a2a2a",
    name: "YOUNG\nENGINEERS",
    desc: "Advanced Wireless & Autonomous Control.",
    active: false,
  },
  {
    icon: <BitcoinIcon />,
    iconBg: "#2a2a2a",
    name: "ROBO\nMINDS",
    desc: "Elite Professional Sports & Robotics.",
    active: false,
  },
];

export default function Categories() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <>

      <section className="what">
        <div className="what__inner">
          <div className="what__left">
            <h2 className="what__heading">What is BotLeague?</h2>
            <div className="what__grid">
              {FEATURES.map((f) => (
                <div key={f.num}>
                  <p className="what__item-num">{f.num}</p>
                  <p className="what__item-title">{f.title}</p>
                  <p className="what__item-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <GearIllustration />
        </div>
      </section>


      <section className="categories">
        <div className="categories__inner">
          <h2 className="categories__heading">CATEGORIES</h2>
          <div className="categories__grid">
            {CATEGORIES.map((cat, i) => (
              <div
                key={i}
                className={`category-card ${activeIdx === i ? "category-card--active" : ""}`}
                onClick={() => setActiveIdx(i)}
              >
                <div
                  className="category-card__icon"
                  style={{ background: activeIdx === i ? "#f59e0b" : cat.iconBg }}
                >
                  {cat.icon}
                </div>
                <p className="category-card__name">{cat.name}</p>
                <p className="category-card__desc">{cat.desc}</p>
                <a href="#" className="category-card__link">LEARN MORE →</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
