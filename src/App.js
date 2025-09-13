import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import { useState } from "react";
import {ToastContainer} from 'react-toastify';
import Cart from "./pages/Cart";

function App() {
  const [cardItems,setCardItems]=useState([]);
  return (
    <div className="App">
      <Router>
        <div>
          <ToastContainer autoClose={3000} position="bottom-right" theme="dark" />
          <Header cardItems={cardItems}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail cardItems={cardItems} setCardItems={setCardItems} />} />
            <Route path="/cart" element={<Cart cardItems={cardItems} setCardItems={setCardItems} />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
