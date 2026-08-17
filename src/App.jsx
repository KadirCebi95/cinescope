import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Favorites from "./pages/Favorites";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-950 text-white" >
        <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
