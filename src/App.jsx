import { useState } from "react";
import "./App.css";
import companiesData from "./companies.json";
import technologiesData from "./technologies.json";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {
  const [companies, setCompanies] = useState(companiesData);
  const [technologies, setTechnologies] = useState(technologiesData);
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage companies={companies} />} />
          <Route
            path="/company/:companySlug"
            element={<CompanyPage companies={companies} />}
          />
          <Route path="/tech/:slug" element={<TechnologyPage />} />
        </Routes>
        {/* <h1>LAB | React Stack Tracker</h1> */}
      </div>
    </>
  );
}

export default App;
