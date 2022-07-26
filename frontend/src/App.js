import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Newslettercontent from "./components/Newslettercontent";
import Login from "./components/Login";

function App() {

  return (
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route element={<Home></Home>} path="home" />
          <Route element={<Signup></Signup>} path="signup" />
          <Route element={<Login></Login>} path="login" />
          <Route element={<Dashboard></Dashboard>} path="dashboard" />
          <Route element={<Newslettercontent></Newslettercontent>} path="newslettercontent" />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
