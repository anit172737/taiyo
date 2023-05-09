import "../src/components/sass/App.scss";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/pages/contact";
import ChartsAndMaps from "./components/pages/charts-and-maps";
// import { lazy } from "react";
import Sidebar from "./components/shared/sidebar";
// const Contact = lazy(() => import("./components/pages/contact"));
// const ChartsAndMaps = lazy(() => import("./components/pages/charts-and-maps"));

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/charts-and-maps" element={<ChartsAndMaps />} />
      </Routes>
    </div>
  );
}

export default App;
