import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

import Nav from './components/Nav'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import DevReqPage from './pages/DevReqPage'
import SupportReqPage from "./pages/SupportReqPage";
import PricePage from "./pages/PricePage";
import AgreementPage from "./pages/AgreementPage";
import FuncDescPage from "./pages/FuncDescPage";
import СontractPage from "./pages/СontractPage";
import CoursesPage from "./pages/CoursesPage";

export const DataContext = React.createContext({})

function App () {
  const [userRole, changeUserRole] = useState('guest')

  return (

      <DataContext.Provider value={{ userRole, changeUserRole }}>
          <Nav/>
          <div className="container mt-5 mb-5">
              <Switch>
                  <Route path="/about">
                      <AboutPage />
                  </Route>
                  <Route path="/login">
                      <LoginPage />
                  </Route>
                  <Route path="/signup">
                      <SignupPage />
                  </Route>
                  <Route path="/dev-req">
                      <DevReqPage />
                  </Route>
                  <Route path="/support-req">
                      <SupportReqPage />
                  </Route>
                  <Route path="/price">
                      <PricePage />
                  </Route>
                  <Route path="/agreement">
                      <AgreementPage />
                  </Route>
                  <Route path="/function-desc">
                      <FuncDescPage />
                  </Route>
                  <Route path="/contract">
                      <СontractPage />
                  </Route>
                  <Route path="/courses">
                      <CoursesPage />
                  </Route>
                  <Route path="/">
                      <HomePage />
                  </Route>
              </Switch>
          </div>
      </DataContext.Provider>
  )
}

export default App
