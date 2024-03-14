import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './Pages/HomePage/index.jsx'
import DriversPage from './Pages/DriversPage/index.jsx'
import SchedulePage from './Pages/SchedulePage/index.jsx'
import ConstructorsPage from './Pages/Constructors/index.jsx'
import StandingsPage from './Pages/Standings/index.jsx'
import RaceResultsPage from './Pages/RaceResultsPage/index.jsx'

const router = createBrowserRouter([
  {
    path: "/f1_roster/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <HomePage />,
  },
  {
    path: "/f1_roster/drivers",
    element: <DriversPage />,
  },
  {
    path: "/f1_roster/schedule",
    element: <SchedulePage />,
  },
  {
    path: "/f1_roster/constructors",
    element: <ConstructorsPage />,
  },
  {
    path: "/f1_roster/standings",
    element: <StandingsPage />,
  },
  {
    path: "/f1_roster/results",
    element: <RaceResultsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
