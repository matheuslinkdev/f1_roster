import { Outlet, Router, Routes } from "react-router-dom";

function App() {
  return (
    <>

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
