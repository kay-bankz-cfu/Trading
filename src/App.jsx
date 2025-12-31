
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Landingpage from "./Components/Landingpage";


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  } , []);
  return (
    <>
        <Routes>
          <Route path="/" element={<Landingpage />} />
        </Routes>
    </>
  );
}

export default App;
