import React from "react";
import CarSearch from "./components/CarSearch.jsx";
import CarForm from "./components/CarForm.jsx";
import CarList from "./components/CarList.jsx";
import CarValue from "./components/CarValue.jsx";


const App = () => {
  return (
   
   
    <div className="container is-fluid">
    
      <CarForm />
      <CarSearch />
      <CarList />
      
      <CarValue />
    </div>
  
  );
};

export default App;
