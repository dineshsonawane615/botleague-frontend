import "../styles/EventsSection.css";

const UPCOMING_EVENTS = [
  { city: "Mumbai", date: "11/11/25", location: "BKC", category: "Lorem" },
  { city: "Delhi",  date: "11/11/25", location: "BKC", category: "Lorem" },
];

const PAST_RESULTS = [
  { title: "Bengaluru Regionals", sub: "Lorem Ipsum" },
  { title: "Bengaluru Regionals", sub: "Lorem Ipsum" },
  { title: "Bengaluru Regionals", sub: "Lorem Ipsum" },
];


function Bracket() {
  return (
    <div className="events__bracket">
      <div className="events__bracket-row">

        {/* 4 blocks  */}
        <div className="events__bracket-col">
          <div className="events__bracket-group">
            <div className="events__bracket-slot" />
            <div className="events__bracket-slot" />
          </div>
          <div className="events__bracket-group">
            <div className="events__bracket-slot" />
            <div className="events__bracket-slot" />
          </div>
        </div>

       {/* blocks connect wire 2*/}
        <div className="events__bracket-connector">
          <div className="events__bracket-arm" />
          <div className="events__bracket-arm" />
        </div>

        {/*sigle wire connect final block*/}
        <div className="events__bracket-join">
          <div className="events__bracket-join-top" />
          <div className="events__bracket-join-bot" />
          <div className="events__bracket-join-vert" />
        </div>

        {/* Final block - winner */}
        <div className="events__bracket-final">
          <div className="events__bracket-final-slot">
            <span className="events__bracket-final-label">Winner</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Upcoming card ── */
function UpcomingCard({ city, date, location, category }) {
  return (
    <div className="events__upcoming-card">
      <p className="events__upcoming-title">Event in {city}</p>
      <div className="events__upcoming-meta">
        {[["Date", date], ["Location", location], ["Category", category]].map(([k, v]) => (
          <div key={k}>
            <p className="events__meta-key">{k}</p>
            <p className="events__meta-val">{v}</p>
          </div>
        ))}
      </div>
      <button className="events__register-btn">REGISTER</button>
    </div>
  );
}

/* ── Main component ── */
export default function EventsSection() {
  return (
    <section className="events">
      <div className="events__inner">

        <h2 className="events__heading">COMPETITIONS &amp; EVENTS</h2>

        <div className="events__grid">

          {/* ── LIVE NOW ── */}
          <div>
            <p className="events__col-label events__col-label--live">
              <span className="events__live-dot" />
              LIVE NOW
            </p>
            <div className="events__card events__card--live">
              <div className="events__card-header">
                <div>
                  <p className="events__card-title">Bengaluru Regionals</p>
                  <p className="events__card-sub">Lorem Ipsum</p>
                </div>
                <span className="events__ongoing-badge">Ongoing</span>
              </div>
              <hr className="events__divider" />
              <Bracket />
            </div>
          </div>

          {/* ── UPCOMING ── */}
          <div>
            <p className="events__col-label events__col-label--upcoming">UPCOMING</p>
            <div className="events__upcoming-list">
              {UPCOMING_EVENTS.map((ev) => (
                <UpcomingCard key={ev.city} {...ev} />
              ))}
            </div>
          </div>

          {/* ── PAST RESULTS ── */}
          <div>
            <p className="events__col-label events__col-label--past">PAST RESULTS</p>
            <div className="events__past-card">
              {PAST_RESULTS.map((r, i) => (
                <div key={i} className="events__past-item">
                  <p className="events__past-title">{r.title}</p>
                  <p className="events__past-sub">{r.sub}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
