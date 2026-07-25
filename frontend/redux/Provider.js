"use client";

import { Provider, useDispatch } from "react-redux";
import { store } from "./store";
import { login } from "./authSlice";
import { useEffect } from "react";

function RestoreAuth({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      dispatch(login(token));
    }
  }, [dispatch]);

  return children;
}

export default function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <RestoreAuth>{children}</RestoreAuth>
    </Provider>
  );
}