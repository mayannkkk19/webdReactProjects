import { HomePage } from "./pages/homepage/HomePage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { OrdersPage } from "./pages/OrdersPage";
import { TrackingPage } from "./pages/TrackingPage";
import { useState, useEffect} from "react";
import  axios  from 'axios';
import { Routes, Route } from "react-router";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() =>{
    const getCartData = async () => {
      const response =  await axios.get('/api/cart-items?expand=product');
      setCart(response.data);
    };
    getCartData();
  }, []);
  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="/orders" element={<OrdersPage cart={cart}/>} />
      <Route path="/tracking" element={<TrackingPage />} />
    </Routes>
  );
}

export default App;
