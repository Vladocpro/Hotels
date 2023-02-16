import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import {fetchAuth,fetchAuthMe,fetchRegister} from "./auth";
import axios from "../../axios";

const initialState = {
   bool: true,
   current: {
      name: "Name",
      location: "Location",
      owner: "Owner",
      services: "Services",
      actions: "Actions",
      price: "Price",
      view: "View",
      pay: "Pay",
      date: "Date",
      createHotel: "Create Hotel",
      createService: "Create Service",
      currency: "$",
      currencyMultiplier: 1
   },
   ua: {
      name: "Назва",
      location: "Місцезнаходження",
      owner: "Власник",
      services: "Послуги",
      actions: "Дії",
      price: "Ціни",
      view: "Подивитися",
      pay: "Оплатити",
      date: "Дата",
      createHotel: "Створити Готель",
      createService: "Створити Послугу",
      currency: "₴",
      currencyMultiplier: 37
   },
   en: {
      name: "Name",
      location: "Location",
      owner: "Owner",
      services: "Services",
      actions: "Actions",
      price: "Price",
      view: "View",
      pay: "Pay",
      date: "Date",
      createHotel: "Create Hotel",
      createService: "Create Service",
      currency: "$",
      currencyMultiplier: 1
   }
};

const languageSlice = createSlice({
   name: 'isEnglish',
   initialState,
   reducers: {
      setLanguage: (state, action) => {
         const english = {...state.en};
         const ukrainian = {...state.ua};
        return {...state, bool: action.payload, current: action.payload ? english : ukrainian}
      }
   }

})

export const {setLanguage} =  languageSlice.actions;

export const languageReducer = languageSlice.reducer
