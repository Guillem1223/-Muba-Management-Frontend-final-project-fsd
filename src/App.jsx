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

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
