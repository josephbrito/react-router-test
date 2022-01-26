import React from "react";
import { loginActions, logoutActions } from "../actions/loginActions";
import { useSelector, useDispatch } from "react-redux";

const Auth = () => {
  const login = useSelector((state) => state);
  const dispatch = useDispatch();
  return login ? (
    <button
      onClick={() => {
        dispatch(logoutActions());
      }}
    >
      Logout
    </button>
  ) : (
    <button
      onClick={() => {
        dispatch(loginActions());
      }}
    >
      Login
    </button>
  );
};

export default Auth;
