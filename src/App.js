import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout"; 
import Hero from "./Components/Hero";
import About from "./Components/About";
import Login from "./Components/Login";
import SignIn from "./Components/SignIn";
import Symptoms from "./Components/Symptoms";
import Chat from "./Components/Chat";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
              <About />
            </Layout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/symptoms" element={<Symptoms />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;

