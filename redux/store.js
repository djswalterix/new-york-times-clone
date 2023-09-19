import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import loggerMiddleware from "./middleware/logger";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware), // Usa la funzione concat per aggiungere il tuo middleware personalizzato
});
export default store;
