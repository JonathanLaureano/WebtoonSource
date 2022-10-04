import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Homepage from "../Homepage/Homepage";


function App() {


  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path='/' element={<Homepage/>}>
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
