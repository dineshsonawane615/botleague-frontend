import { useState } from "react";
import Navbar    from "./components/Navbar";
import Home      from "./pages/Home";
import Events    from "./pages/Events";
import Programs  from "./pages/Programs";
import Community from "./pages/Community";
import Rankings  from "./pages/Rankings";
import "./styles/global.css";

/**
 * Simple client-side "routing" without react-router.
 * Swap out for <BrowserRouter> / <Routes> if you add react-router-dom.
 */
const PAGES = {
  home:      <Home />,
  events:    <Events />,
  programs:  <Programs />,
  community: <Community />,
  rankings:  <Rankings />,
};

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div style={{ minHeight: "100vh", background: "#111111" }}>
      <Navbar onNavigate={setPage} activePage={page} />
      {PAGES[page]}
    </div>
  );
}
