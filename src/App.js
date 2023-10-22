import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./pages/Layout";
import Subrasa from "./pages/SubRace";
import Rasa from "./pages/Rasa";
import Povolani from "./pages/Povolani";
import Zazemi from "./pages/Zazemi";
import Jmeno from "./pages/Jmeno";
import Suma from "./pages/Suma";
import Schopnosti from "./pages/Schopnosti";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Rasa />}></Route>
            <Route path="2" element={<Subrasa />} />
            <Route path="3" element={<Povolani />} />
            <Route path="4" element={<Zazemi />} />
            <Route path="5" element={<Jmeno />} />
            <Route path="6" element={<Suma />} />
            <Route path="7" element={<Schopnosti />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
