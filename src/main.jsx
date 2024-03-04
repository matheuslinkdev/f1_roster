import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './Pages/HomePage/index.jsx'
import DriversPage from './Pages/DriversPage/index.jsx'
import SchedulePage from './Pages/SchedulePage/index.jsx'
import ConstructorsPage from './Pages/Constructors/index.jsx'
import StandingsPage from './Pages/Standings/index.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <HomePage />,
  },
  {
    path: "/drivers",
    element: <DriversPage/>
  },
  {
    path: "/schedule",
    element: <SchedulePage/>
  },
  {
    path: "/constructors",
    element: <ConstructorsPage/>
  },
  {
    path: "/standings",
    element: <StandingsPage/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
