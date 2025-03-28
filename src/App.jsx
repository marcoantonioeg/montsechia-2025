import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import CheckoutPage from './pages/CheckoutPage';
import SuccessPage from './pages/SuccessPage';
import CancelPage from './pages/CancelPage';
import Header from './components/Header';
import Footer from './components/home/Footer';
import './App.css';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import PurchaseProcess from './pages/Compras';
import PaymentInfo from './pages/PaymentInfo';
import ReturnsAndRefunds from './pages/Returns';
import Nosotros from './pages/Nosotros';
import Contact from './pages/Contact';
import Cuestionario from './pages/Cuestionario';
import Agradecimiento from './pages/Agradecimiento';
import Postal from './pages/Postal';
import PostalNota from './pages/PostalNota';
import PostalNombre from './pages/PostalNombre';
import PostalFoto from './pages/PostalFoto';
import ExcelentesDecisiones from './pages/ExcelentesDecisiones';
import PostalEnmarcar from './pages/PostalEnmarcar';
import PostalFlores from './pages/PostalFlores';
const stripePromise = loadStripe('pk_test_51QLrGR00HjbbLtoKeFrgy8SbOwk7jDO0rhzdM1ipalrsmmKrQXuTmWDSWZR6v8TZiVZ5oy9bs2GhDkHIC8LJOWgI00FiWgmspc');
function App() {
  return (
    <Elements stripe={stripePromise}>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tienda" element={<ProductList />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/postal" element={<Postal />} />
        <Route path="/postal-nota" element={<PostalNota />} />
        <Route path="/postal-nombre" element={<PostalNombre />} />
        <Route path="/postal-enmarcar" element={<PostalEnmarcar />} />
        <Route path="/postal-foto" element={<PostalFoto />} />
        <Route path="/postal-flores" element={<PostalFlores />} />
        <Route path="/excelentes-decisiones" element={<ExcelentesDecisiones />} />
        <Route path="/cuestionario" element={<Cuestionario />} />
        <Route path="/agradecimiento" element={<Agradecimiento />} />
        <Route path="/p-process" element={<PurchaseProcess />} />
        <Route path="/payment-info" element={<PaymentInfo />} />
        <Route path="/returns" element={<ReturnsAndRefunds />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/cancel" element={<CancelPage />} />
      </Routes>
      <Footer />
    </div>
    </Elements>
  );
}

export default App;