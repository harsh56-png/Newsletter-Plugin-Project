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
import Sendmail from "./components/Sendmail";
import Newlogin from "./components/Newlogin";
import Newregister from "./components/Newregister";

function App() {

  return (
      <BrowserRouter>
        {/* <Navbar></Navbar> */}
        <Routes>
          <Route element={<Home></Home>} path="home" />
          <Route element={<Newlogin></Newlogin>} path="newlogin" />
          <Route element={<Newregister></Newregister>} path="newregister" />
          <Route element={<Signup></Signup>} path="signup" />
          <Route element={<Login></Login>} path="login" />
          <Route element={
        <Authorisor>
          <Dashboard />
        </Authorisor>
       }path="/dashboard"/>


          <Route element={
        <Authorisor>
          <Sendmail />
        </Authorisor>
       }path="/sendmail"/>

      
          <Route element={<Navigate to="/home" />} path="/" />
          <Route element={<Newslettercontent></Newslettercontent>} path="newslettercontent" />
          <Route element={<Notfound></Notfound>} path="*" />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
