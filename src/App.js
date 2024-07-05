import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ScrollToTop from "./util/ScrollToTop";
import Upcoming from "./pages/Upcoming";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="upcoming" element={<Upcoming />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
