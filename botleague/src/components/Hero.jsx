import "../styles/Hero.css";
// import heroBg from "../assets/hero.png";

const SPARKS = [
  { bottom: "55%", left: "38%", color: "#fbbf24" },
  { bottom: "48%", left: "42%", color: "#ef4444" },
  { bottom: "60%", left: "45%", color: "#fbbf24" },
  { bottom: "52%", left: "35%", color: "#ef4444" },
  { bottom: "44%", left: "50%", color: "#fbbf24" },
  { bottom: "65%", left: "40%", color: "#ef4444" },
];

export default function Hero() {
  return (
    <section className="hero">

      {/* ── Background ── */}
      <div className="hero__bg" 
      style={{ 
    backgroundImage: `linear-gradient(to right, rgba(10,10,10,0.6) 35%, rgba(0,0,0,0.1)), url(${'/hero.png'})` 
  }}/>
      <div className="hero__spotlight-left" />
      <div className="hero__spotlight-right" />
      <div className="hero__floor" />

      {/* ── Live Badge ── */}
      <div className="hero__live-badge">
        <span className="hero__live-dot" />
        <span className="hero__live-label">LIVE</span>
        <span className="hero__live-text">: Episode 14 · Bengaluru Regionals</span>
        <a href="#" className="hero__live-link">WATCH LIVE</a>
      </div>

      {/* ── Content ── */}
      <div className="hero__content">
        <h1 className="hero__title">
          {"INDIA'S ULTIMATE"}<br />
          ROBOTICS ARENA
        </h1>
        <p className="hero__subtitle">
          Build.Compete.Rank.The National<br />
          Ecosystem for Robotics Arena
        </p>
        <div className="hero__cta-group">
          <button className="hero__btn-primary">CREATE ACCOUNT</button>
          <button className="hero__btn-secondary">EXPLORE EVENTS</button>
        </div>
      </div>

      {/* ── Star decoration ── */}
      <span className="hero__star">✦</span>
    </section>
  );
}
