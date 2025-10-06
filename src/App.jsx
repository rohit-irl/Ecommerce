import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Header from './components/header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Support from './pages/Support'
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/support" element={<Support />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>}/>
      </Routes>
      <Footer />
    </Router>
  )
}
export default App;
