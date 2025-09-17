import { Routes, Route } from "react-router";
import Home from "./components/Home";
import Projects from "./components/Projects";
import EduQuest from "./pages/EduQuest";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />    
      <Route path="/eduquest" element={<EduQuest />} />
    </Routes>
  );
}
