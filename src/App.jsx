import { BrowserRouter, Routes, Route } from "react-router";
import { About } from "./pages/about/About";
import { Home } from "./pages/home/Home";
import { Projects } from "./pages/projects/Projects";
 import {Footer} from "./components/footer/Footer"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
