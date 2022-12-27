import { React, StrictMode } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import HomePage from './pages/HomePage/HomePage'
import Terms from './pages/Legality/Terms';
import NotFound from './pages/NotFound/NotFound';
import Privacy from './pages/Legality/Privacy';
import { CookiesAcceptedProvider } from './Utilities';

import './Style/Style.css'
import About from './pages/about';
import Prices from './pages/prices';
import Lessons from './pages/lessons';
import Timetable from './pages/timetable';
import ContactPage from './pages/contact';
import Zanimalnq from './pages/zanimalnq';



function AppRoutes() {
  return (
    <Router forceRefresh={false}>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/график" exact element={<Timetable />} />
        <Route path="/уроци" exact element={<Lessons />} />
        <Route path="/за_нас" exact element={<About />} />
        <Route path="/цени" exact element={<Prices />} />
        <Route path="/контакти" exact element={<ContactPage />} />
        <Route path="/занималня" exact element={<Zanimalnq />} />
        {/* <Route path="/terms-and-conditions" exact element={<Terms />} /> */}
        {/* <Route path="/privacy-policy" exact element={<Privacy />} /> */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default function App() {
  return (
    <StrictMode>
      <CookiesAcceptedProvider>
        <AppRoutes />
      </CookiesAcceptedProvider>
    </StrictMode>
  )
}