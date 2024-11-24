import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Test from "./pages/Test";
import TestResult from "./pages/TestResult";
import Layout from "./components/Layout";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Layout user={user} setUser={setUser}>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/profile"
            element={<Profile user={user} setUser={setUser} />}
          />
          <Route path="/test" element={<Test user={user} />} />
          <Route path="/results" element={<TestResult user={user} />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
