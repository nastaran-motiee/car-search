import React from "react";
import { Provider } from "react-redux";
import {store} from "./store";
import CarSearch from "./components/CarSearch.jsx";
import CarForm from "./components/CarForm.jsx";
import CarList from "./components/CarList.jsx";
import CarValue from "./components/CarValue.jsx";


const App = () => {
  return (
    <Provider store={store}>
   
    <div>
      <CarSearch />
      <CarForm />
      <CarList />
      <CarValue />
    </div>
    </Provider>
  );
};

export default App;
