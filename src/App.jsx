import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../src/assets/css/App.css'
import { ROUTE_ACCOUNT, ROUTE_ERROR_ALL_PATH } from './config/config_routes/RoutesClient';
import ProtectedRoutes from './config/protected_routes/ProtectedRoutes';
import Account from './views/Account';
import Home from './views/Home';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<Home />}

          />
          <Route
            path={ROUTE_ACCOUNT}
            element={
              <ProtectedRoutes>
                <Account />
              </ProtectedRoutes>
            }
          />
          <Route path={ROUTE_ERROR_ALL_PATH} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
