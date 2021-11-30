import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import LessonScreen1 from "./LessonScreen1";
import LessonScreen2 from "./LessonScreen2";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/lesson/1" element={<LessonScreen1 />} />
        <Route path="/lesson/2" element={<LessonScreen2 />} />
      </Routes>
    </Router>
  );
}

export default App;
