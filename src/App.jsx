import { Outlet, Router, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";


function App() {
  return (
    <>
    <NavBar/>
      <main>
        <Router>
          <Routes>
            <Outlet />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
