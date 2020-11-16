import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducers/index_reducer";
import thunk from "redux-thunk";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer,
  middleware: [thunk],
});

export const appDispatch = useDispatch;
export const appSelector = useSelector;
