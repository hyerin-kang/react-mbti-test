import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/signUp"} element={<SignUp />}></Route>
        <Route path={"/signIn"} element={<SignIn />}></Route>
      </Routes>
    </>
  );
}

export default App;
