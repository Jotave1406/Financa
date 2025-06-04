import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavType from "../components/NavType.jsx/NavType";
import { AutToken } from "../AutToken/AutToken";
import LoginPage from "../ViewPages/loginPage";
import LancamentoPage from "../ViewPages/LancamentoPage";
import InicioPage from "../ViewPages/InicioPage";

const FinanceMain = () => {
  return (
    <div style={{ height: "100vh", width: "100vw", background: "#f0f0f0" }}>
      <AutToken>
        <BrowserRouter>
          <NavType />
          <Routes>
            <Route path="/" element={<InicioPage/>}/>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/lancamento" element={<LancamentoPage />} />
          </Routes>
        </BrowserRouter>
      </AutToken>
    </div>
  );
};

export default FinanceMain;
