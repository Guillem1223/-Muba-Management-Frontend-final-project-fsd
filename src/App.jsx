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
import { Performer } from "./containers/Performer/Perfomer";
import { PerformersList } from "./containers/PerformersList/PerformersList";
import { UserProfile } from "./containers/UserProfile/UserProfile";
import { Admin } from "./containers/Admin/Admin";
import { PerformerDetail } from "./containers/PerformerDetail/PerformerDetail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/signUp" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/contractor_profile" element={<Contractor />} />
          <Route path="/performer_profile" element={<Performer />} />
          <Route path="/performers_list" element={<PerformersList />} />
          <Route path="/users/:id" element={<PerformerDetail />} />
          <Route path="/user_profile" element={<UserProfile />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
