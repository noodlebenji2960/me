import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { UnderMaintenance } from "./components/UnderMaintenance";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<UnderMaintenance />} />
      </Routes>
    </Router>
  );
};

export default App;
