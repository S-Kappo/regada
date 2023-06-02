import ConfiguratorM from "./pages/configurator-mikro";
import SearchEngine from "./pages/searchEngine";
import ConfiguratorS from "./pages/configurator-s02";
import Selectorrr from "./pages/selectorConfi";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Selectorrr />} />
        <Route path="/mikro" element={<ConfiguratorM />} />
        <Route path="/so2" element={<ConfiguratorS />} />
        <Route path="/search" element={<SearchEngine />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
