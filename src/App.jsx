import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"
import ContactPage from "./Pages/ContactPage"
import NavBar from "./Components/NavBar/NavBar"
import GalleryPage from "./Pages/GalleryPage"
import OdiasPage from "./Pages/OdiasPage"
import EPatrikaPage from "./Pages/EPatrikaPage"
import IrelandPage from "./Pages/IrelandPage"
import BecomeAMemberPage from "./Pages/BecomeAMemberPage"


import React, { useState } from 'react';
import UpcomingeventPage from "./Pages/UpcomingEventPage"
import CulturePage from "./Pages/CulturePage"
import { FestivalPage } from "./Pages/FestivalPage"
import FoodPage from "./Pages/FoodPage"
import CraftPage from "./Pages/CraftPage"
import ArtPage from "./Pages/ArtPage"
import HistoryPage from "./Pages/HistoryPage"
import HeritagePage from "./Pages/HeritagePage"
import LeadersPage from "./Pages/LeadersPage"
import OdiasNowPage from "./Pages/OdiasNowPage"
import PlaceToVisitPage from "./Pages/PlaceToVisitPage"



function App() {

  return (
    <>

    <NavBar/>

    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/about" element={<AboutPage />}/>
      <Route path="/gallery" element={<GalleryPage />}/>
      <Route path="/odias" element={<OdiasPage />}/>
      <Route path="/contact" element={<ContactPage />}/>
      <Route path="/upcomingevent" element={<UpcomingeventPage />}/>
      <Route path="/ireland" element={<IrelandPage />}/>
      <Route path="/epatrika" element={<EPatrikaPage />}/>
      <Route path="/culture" element={<CulturePage />}/>
      <Route path="/festival" element={<FestivalPage />}/>
      <Route path="/food" element={<FoodPage />}/>
      <Route path="/craft" element={<CraftPage />}/>
      <Route path="/art" element={<ArtPage />}/>
      <Route path="/history" element={<HistoryPage />}/>
      <Route path="/heritage" element={<HeritagePage />}/>
      <Route path="/leaders" element={<LeadersPage />}/>
      <Route path="/odiasnow" element={<OdiasNowPage />}/>
      <Route path="/placetovisit" element={<PlaceToVisitPage />}/>
      <Route path="/becomeamember" element={<BecomeAMemberPage />}/>
    </Routes>
    </>
  )
}

export default App
