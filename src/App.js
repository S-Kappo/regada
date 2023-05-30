import Configurator from "./pages/configurator";
import SearchEngine from "./pages/searchEngine";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Configurator />} />
        <Route path="/search" element={<SearchEngine />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
