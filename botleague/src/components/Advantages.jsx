import "../styles/Advantages.css";


const MedalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="15" r="6" />
    <path d="M8.5 8.5L6 4h12l-2.5 4.5" />
    <path d="M12 9v6" />
  </svg>
);

const GavelIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M14 4l6 6-9 9-6-6 9-9z" />
    <path d="M5 19l-2 2" />
    <path d="M19 5l2-2" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <line x1="12" y1="12" x2="12" y2="12.01" />
  </svg>
);

const LightningIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);


const ADVANTAGES = [
  {
    icon: <MedalIcon />,
    title: "NATIONAL RECOGNITION",
    desc: '"Benchmark your skills on India\'s official robotics leaderboard."',
  },
  {
    icon: <GavelIcon />,
    title: "FAIR JUDGING",
    desc: '"Compete with confidence under standardized, expert-led evaluation."',
  },
  {
    icon: <BriefcaseIcon />,
    title: "CAREER OPS",
    desc: '"Bridge the gap between arena victories and top-tier tech placements."',
  },
  {
    icon: <LightningIcon />,
    title: "HIGH - ENERGY ECO",
    desc: '"Join a nationwide community of elite innovators and robotics athletes."',
  },
];

const LEADERBOARD = [
  { rank: 1,  name: "Player Name", score: "508754", top: true },
  { rank: 2,  name: "Player Name", score: "22000" },
  { rank: 3,  name: "Player Name", score: "20030" },
  { rank: 4,  name: "Player Name", score: "19500" },
  { rank: 5,  name: "Player Name", score: "15060" },
  { rank: 6,  name: "Player Name", score: "13865" },
  { rank: 7,  name: "Player Name", score: "10954" },
  { rank: 8,  name: "Player Name", score: "9057"  },
];

export default function Advantages() {
  return (
    <section className="advantages">
      <div className="advantages__inner">

        <p className="advantages__eyebrow">WHY REGISTER ?</p>
        <h2 className="advantages__heading">THE LEAGUE ADVANTAGE</h2>

        <div className="advantages__grid">

   
          <div className="advantages__list">
            {ADVANTAGES.map((a, i) => (
              <div key={i} className="advantage-item">
                <div className="advantage-item__icon">{a.icon}</div>
                <div>
                  <p className="advantage-item__title">{a.title}</p>
                  <p className="advantage-item__desc">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>

    
          <div className="leaderboard">
            <div className="leaderboard__header">
              <p className="leaderboard__title">LEADERBOARD</p>
            </div>

            
            <div className="leaderboard__first">
              <p className="leaderboard__first-label">#01 · Player Name</p>
              <p className="leaderboard__first-score">508754</p>
              <div className="leaderboard__first-avatar"></div>
            </div>

           
            {LEADERBOARD.slice(1).map((p) => (
              <div key={p.rank} className="leaderboard__row">
                <span className="leaderboard__rank">
                  {String(p.rank).padStart(2, "0")}
                </span>
                <div className="leaderboard__avatar">👤</div>
                <span className="leaderboard__name">{p.name}</span>
                <span className="leaderboard__score">{p.score}</span>
                <span className="leaderboard__arrow">▲</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
