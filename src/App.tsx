import { Routes, Route } from "react-router";

import HomePage from "./pages/homepage";
import ClientSystemPage from "./pages/clientSystems";
import SupplierSystemPage from "./pages/supplierSystem";
import BackendPage from "./pages/backend";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/client-system" element={<ClientSystemPage />} />
      <Route path="/supplier-system" element={<SupplierSystemPage />} />
      <Route path="/backend" element={<BackendPage />} />
    </Routes>
  );
}