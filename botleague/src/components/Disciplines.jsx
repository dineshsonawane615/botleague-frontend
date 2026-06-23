import "../styles/Disciplines.css";

const TOP_DISCIPLINES = [
  { name: "Robo Race", img: "/robo_race.jpg" },
  { name: "Line Follower", img: "/Line.jpg" },
  { name: "RC Racing", img: "/rc_racing.jpg" },
  { name: "FPV Drone Racing &\nAeromodelling", img: "/fpv_drone.jpg" },
];

const BOTTOM_DISCIPLINES = [
  { name: "Robo Hockey", img: "/robo_war.jpg" },
  { name: "Robo War", img: "/robots.jpg" },
];

export default function Disciplines() {
  return (
    <section className="disciplines">
      <div className="disciplines__inner">

        <p className="disciplines__eyebrow">SPORTS</p>
        <h2 className="disciplines__heading">COMPETITION DISCIPLINES</h2>

        {/* ── Top row: 4 Card Layout ── */}
        <div className="disciplines__top">
          {TOP_DISCIPLINES.map((d, i) => (
            <div
              key={i}
              className="discipline-card"
              style={{ backgroundImage: `url(${d.img})` }}
            >
              <div className="discipline-card__overlay" />
              <div className="discipline-card__label">
                <p className="discipline-card__name">{d.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="disciplines__bottom">
          {BOTTOM_DISCIPLINES.map((d, i) => (
            <div
              key={i}
              className="discipline-card"
              style={{ backgroundImage: `url(${d.img})` }}
            >
              <div className="discipline-card__overlay" />
              <div className="discipline-card__label">
                <p className="discipline-card__name">{d.name}</p>
              </div>
            </div>
          ))}


        </div>
      </div>
    </section>
  );
}