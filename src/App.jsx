import { useState } from "react";

import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Router,
  BrowserRouter,
  Link,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./containers/Home/Home";
import { Register } from "./containers/Register/Register";
import { Contractor } from "./containers/Contractor/Contractor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/signUp" element={<Register />} />
          <Route path="/" element={<Home />} />ç
          <Route path="/contractor_profile" element={<Contractor />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
