import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import DevPage from "./pages/DevPage";
import ProfilPage from "./pages/ProfilPage";

  function App() {
  return (
    <div className="bg-slate-100 absolute w-full h-auto min-h-100vh py-6">
     <Routes>
      <Route path="/login" element={<LoginPage/>} />
      <Route  path="/" element={<RegistrationPage/>}/>
      <Route path="/devpage" element={<DevPage/>} />
      <Route path="/profil" element={<ProfilPage/>} />
     </Routes>
    </div>
  );
}

export default App;
