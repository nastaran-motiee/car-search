import { configureStore } from "@reduxjs/toolkit";
import { formReduder, changeName, changeCost } from "./slices/formSlice";
import { carsReducer, changeSearchTerm, addCar, removeCar } from "./slices/carsSlice";

const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReduder,

    }
});

export { store, formReduder, changeName, changeCost, carsReducer, changeSearchTerm, addCar, removeCar };