import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../src/assets/css/App.css'
import * as ACCESS from './config/config_routes/RoutesClient';
import ProtectedRoutes from './config/protected_routes/ProtectedRoutes';
import Account from './views/Account';
import FormInfoAddUpdateCollaborator from './views/FormInfoAddUpdateCollaborator';
import Home from './views/Home';
import ListCollaborater from './views/ListCollaborater';

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
            path={ACCESS.ROUTE_ACCOUNT}
            element={
              <ProtectedRoutes>
                <Account />
              </ProtectedRoutes>
            }
          />
          <Route
            path={ACCESS.ROUTE_LIST_COLLABORATER}
            element={
              <ProtectedRoutes>
                <ListCollaborater />
              </ProtectedRoutes>
            }
          />
          <Route
            path={ACCESS.ROUTE_CREATE_COLLABORATOR}
            element={
              <ProtectedRoutes>
                <FormInfoAddUpdateCollaborator />
              </ProtectedRoutes>
            }
          />
          <Route
            path={ACCESS.ROUTE_UPDATE_COLLABORATOR + ":userId"}
            element={
              <ProtectedRoutes>
                <FormInfoAddUpdateCollaborator />
              </ProtectedRoutes>
            }
          />
          <Route path={ACCESS.ROUTE_ERROR_ALL_PATH} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
