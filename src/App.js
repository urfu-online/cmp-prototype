import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

import Nav from './components/Nav'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import DevReqPage from './pages/DevReqPage'
import SupportReqPage from "./pages/SupportReqPage";

export const DataContext = React.createContext({})

function App () {
  const [userRole, changeUserRole] = useState('guest')

  return (

      <DataContext.Provider value={{ userRole, changeUserRole }}>
          <Nav/>
          <div className="container">
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
                <Route path="/">
                  <HomePage />
                </Route>
              </Switch>
          </div>
      </DataContext.Provider>
  )
}

export default App
