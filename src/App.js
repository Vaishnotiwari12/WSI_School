import { useEffect } from "react";
import "./App.css";
// Make sure Outlet is imported from react-router-dom!
import { BrowserRouter, Routes, Route, useLocation, Outlet } from "react-router-dom"; 

import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import Faculty from "./pages/Faculty";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import StudentLogin from "./pages/StudentLogin";
import TeacherLogin from "./pages/TeacherLogin";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

// 1. THIS IS THE LAYOUT COMPONENT
// It acts as a wrapper for the main website pages.
function Layout() {
  return (
    <div className="App min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Outlet /> {/* The specific page (Home, About, etc.) loads inside this Outlet */}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

// 2. THIS IS THE MAIN APP
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        
        {/* Main website pages (Wrapped in Header/Footer via Layout) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Clean, standalone portal pages (No Header/Footer) */}
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;