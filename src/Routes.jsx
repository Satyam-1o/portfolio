import { Routes, Route } from "react-router";
import Home from "./components/Home";
import Projects from "./components/Projects";
import EduQuest from "./pages/EduQuest";
import MovieApp from "./pages/MovieApp";
import Haikei from "./pages/Haikei";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />    
      <Route path="/eduquest" element={<EduQuest />} />
      <Route path="/movieapp" element={<MovieApp />} />
      <Route path="/haikei" element={<Haikei />} />
    </Routes>
  );
}
