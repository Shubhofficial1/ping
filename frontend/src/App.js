import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>Hello</>} />
        <Route path="/ping/login" element={<LoginScreen />} />
        <Route path="/ping/register" element={<RegisterScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
