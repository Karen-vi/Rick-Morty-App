import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import {  CharacterDetailSection } from "./components/layout/CharacterDetailsSection/CharacterDetailsSection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterDetailSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
