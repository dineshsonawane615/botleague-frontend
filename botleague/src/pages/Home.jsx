import Hero          from "../components/Hero";
import EventsSection from "../components/EventsSection";
import Journey       from "../components/Journey";
import Categories    from "../components/Categories";
import Disciplines   from "../components/Disciplines";
import Advantages    from "../components/Advantages";
import JoinEcosystem from "../components/JoinEcosystem";
import Footer        from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <EventsSection />
      <Journey />
      <Categories />
      <Disciplines />
      <Advantages />
      <JoinEcosystem />
      <Footer />
    </main>
  );
}
