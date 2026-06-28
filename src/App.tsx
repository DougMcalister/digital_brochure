import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";

import HomePage from "./pages/homepage";
import ScopeThreePage from "./pages/scopeThree";
import SolutionPage from "./pages/solution";
import ImplementationPage from "./pages/implementation";
import ApplicationsPage from "./pages/applications";
//import icon from "/assets/icons/logo.png"

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/scope-three" element={<ScopeThreePage />} />
        <Route path="/solution" element={<SolutionPage />} />
        <Route path="/implementation" element={<ImplementationPage />} />
        <Route path="/application" element={<ApplicationsPage />} />
      </Routes>
    </>
  );
}
