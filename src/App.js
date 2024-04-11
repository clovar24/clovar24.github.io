import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";

function App() {
  return (
    <div class="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
