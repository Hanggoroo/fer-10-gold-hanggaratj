import React from "react";
import Home from "./pages/Home"
import Search from "./pages/Searchs";
import SearchResult from "./pages/SearchResult";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import DetailProduct from "./pages/DetailProduct";


const App =() => {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Search" element={<Search />}/>
      <Route path="/result" element={<SearchResult />}/>
      <Route path="/detailproduct/:id" element={<DetailProduct />}/>
    </Routes>
  </Router>
  )
}


export default App;
