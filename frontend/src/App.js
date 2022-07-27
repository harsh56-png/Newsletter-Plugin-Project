import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Newslettercontent from "./components/Newslettercontent";
import Login from "./components/Login";
import Notfound from "./components/Notfound";
import Authorisor from "./components/Auth";

function App() {

  return (
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route element={<Home></Home>} path="home" />
          <Route element={<Signup></Signup>} path="signup" />
          <Route element={<Login></Login>} path="login" />
          <Route element={
        <Authorisor>
          <Dashboard />
        </Authorisor>
       }path="/dashboard"/>

      
          <Route element={<Navigate to="/home" />} path="/" />
          <Route element={<Newslettercontent></Newslettercontent>} path="newslettercontent" />
          <Route element={<Notfound></Notfound>} path="*" />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
