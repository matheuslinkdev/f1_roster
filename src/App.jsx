import { Outlet, Router, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";


function App() {
  return (
    <>
    <NavBar/>
      <main className="App">
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
