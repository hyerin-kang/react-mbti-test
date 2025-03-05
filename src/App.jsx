import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";
import Test from "./pages/TestPage";
import Results from "./pages/Results";
import { useState } from "react";
import ProtectedRouter from "./components/ProtectedRouter";
import TestPage from "./pages/TestPage";

function App() {
  const [user, setUser] = useState(null);
  console.log(user);
  const isAuthenticated = !!user;
  return (
    <>
      <Layout isAuthenticated={isAuthenticated} setUser={setUser}>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route
            path={"/signIn"}
            element={<SignIn setUser={setUser} />}
          ></Route>
          <Route path={"/signUp"} element={<SignUp />}></Route>

          <Route
            element={<ProtectedRouter isAuthenticated={isAuthenticated} />}
          >
            <Route path={"/profile"} element={<Profile />}></Route>
            <Route path={"/test"} element={<TestPage user={user} />}></Route>
            <Route path={"/results"} element={<Results />}></Route>
          </Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
