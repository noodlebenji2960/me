import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
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
