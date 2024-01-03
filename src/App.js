import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CentralBlock from "./CentralBlock";
import RNDBlock from "./RNDBlock";
import Block1 from "./Block1";
import Block2 from "./Block2";
import Block4 from "./Block4";
import Cjc from "./Cjc";
import AudiBlock from "./AudiBlock";
import BBCourt from "./BBCourt";
import UGLibrary from "./UGLibrary";
import Block2E2 from "./Block2E2";
import Block3 from "./Block3";
import KEHall from "./KEHall";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Block1 />} />
          <Route path="/block1" element={<Block1 />} />
          <Route path="/block2" element={<Block2 />} />
          <Route path="/block4" element={<Block4 />} />
          <Route path="/centralblock" element={<CentralBlock />} />
          <Route path="/rnd" element={<RNDBlock />} />
          <Route path="/cjc" element={<Cjc />} />
          <Route path="/audiblock" element={<AudiBlock />} />
          <Route path="/bbcourt" element={<BBCourt />} />
          <Route path="/uglibrary" element={<UGLibrary />} />
          <Route path="/block2e2" element={<Block2E2 />} />
          <Route path="/block3" element={<Block3 />} />
          <Route path="/kehall" element={<KEHall />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
