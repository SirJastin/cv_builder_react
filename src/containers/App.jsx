import React, { Suspense } from 'react'
import { Route, Router, Routes} from "react-router-dom";
import {HomeScreen, Authentification} from "../pages";
//HOME, Auth

const App = () => {
  return (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/*" element={<HomeScreen />} />
      <Route path="/auth" element={<Authentification />} />
    </Routes>
  </Suspense>
  );     
}

export default App