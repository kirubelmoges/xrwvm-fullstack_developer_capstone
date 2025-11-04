import LoginPanel from "./components/Login/Login.jsx"
import { Routes, Route } from "react-router-dom";
import RegisterPanel from "./components/Register/Register.jsx";

  
 

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<RegisterPanel />} />
    </Routes>
  );
}
export default App;
