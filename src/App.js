import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Loading from "./screens/loading";
import Welcome from "./screens/welcome";
import Intro from "./screens/intro";

function App() {
  return (
    <div className="parent-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loading />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/home" element={<Intro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
