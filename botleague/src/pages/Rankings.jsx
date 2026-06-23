import Advantages from "../components/Advantages";
import Footer     from "../components/Footer";

export default function Rankings() {
  return (
    <main style={{ paddingTop: 52 }}>
      <div style={{ background: "#111", padding: "40px 0 20px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 16px" }}>
          <p style={{ color: "#ef4444", fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", marginBottom: 6 }}>
            NATIONAL RANKINGS
          </p>
          <h1 style={{ color: "#fff", fontFamily: "'Barlow Condensed',sans-serif", fontSize: 40, fontWeight: 900, textTransform: "uppercase", letterSpacing: 1 }}>
            THE LEAGUE STANDINGS
          </h1>
        </div>
      </div>
      <Advantages />
      <Footer />
    </main>
  );
}
