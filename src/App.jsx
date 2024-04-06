import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import FullblogPage from "./Components/FullblogPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/blog/web-devlopment" element={<FullblogPage />} />
    </Routes>
  );
}

export default App;
