import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import DevPage from "./pages/DevPage";

  function App() {
  return (
    <div >
     <Routes>
      <Route path="/login" element={<LoginPage/>} />
      <Route  path="/" element={<RegistrationPage/>}/>
      <Route path="/devpage" element={<DevPage/>} />
     </Routes>
    </div>
  );
}

export default App;
