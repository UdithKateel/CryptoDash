import React from 'react'
import Dashboard from './pages/Dashboard/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Support from "./pages/Support/Support"
import Transaction from "./pages/Transaction/Transaction"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/support" element={<Support />} />
        <Route path="/transactions" element={<Transaction />} />
      </Routes>
    </Router>
  );
};


export default App