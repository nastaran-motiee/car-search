import React from "react";

import {store} from "./store";
import CarSearch from "./components/CarSearch.jsx";
import CarForm from "./components/CarForm.jsx";
import CarList from "./components/CarList.jsx";
import CarValue from "./components/CarValue.jsx";


const App = () => {
  return (
   
   
    <div>
      <CarSearch />
      <CarForm />
      <CarList />
      <CarValue />
    </div>
  
  );
};

export default App;
