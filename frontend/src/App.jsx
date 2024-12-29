import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import CollectionPage from "./pages/Collections/CollectionPage";
import ContactPage from "./pages/Contact/ContactPage";
import ProductPage from "./pages/Product/ProductPage";
import CartPage from "./pages/Cart/CartPage";
import RegisterPage from "./pages/Register/RegisterPage";
import LoginPage from "./pages/Login/LoginPage";
import PlaceOrderPage from "./pages/PlaceOrder/PlaceOrderPage";
import OrdersPage from "./pages/Orders/OrdersPage";
import Navbar from "./components/common/Navbar/Navbar";
import Footer from "./components/common/Footer/Footer";
import SearchBar from "./components/common/SearchBar/SearchBar";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen  px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] ">
        <Navbar />
        <SearchBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/collections" element={<CollectionPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/place-order" element={<PlaceOrderPage />} />
            <Route path="/orders" element={<OrdersPage />} />
          </Routes>
          <hr className="w-1/2 border-none h-[1.5px] bg-slate-700 hidden" />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
