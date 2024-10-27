import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog/:category" element={<Catalog />} />
          <Route path="/catalog/:category/:id" element={<ProductDetail />} />
        </Routes>
        <footer className="bg-black text-white py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-black italic bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
              Joker Brand CR
            </h2>
            <p className="text-gray-400">© 2024 Joker Brand CR. All rights reserved.</p> <br />
            <a href="#">Powered by ElectroGlassco - Software</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;