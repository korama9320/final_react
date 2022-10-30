import Navbar from "./components/e-com/Navbar";
import ECom from "./components/e-com/e-com";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/e-com/footer";
import LandingPage from "./components/landingpage/landing-main";
import { useEffect, useState } from "react";
import ScrollToTheTop from "./components/e-com/scrollup";
import Profile from "./components/profile/profile";
function App() {
  let [scroll, setScroll] = useState(window.scrollY);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <LandingPage />
            </>
          }
        />
        <Route path="/ecom/*" element={<ECom />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {scroll > 500 && <ScrollToTheTop />}
      <Footer />
    </>
  );
}

export default App;
