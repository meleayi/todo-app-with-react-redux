import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layouts from "./pages/Layouts";
import About from "./components/About";
import Contact from "./components/Contact";
import Mains from "./components/Mains";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Mains />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
