import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import Academics from './pages/Academics';
import Research from './pages/Research';
import Feedbacks from './pages/Feedbacks';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-sky-50 text-slate-800 selection:bg-sky-200 selection:text-[#0f4c81]">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/research" element={<Research />} />
            <Route path="/feedbacks" element={<Feedbacks />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
