import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Security from "./pages/Security";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="careers" element={<Careers />} />
          <Route path="security" element={<Security />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;