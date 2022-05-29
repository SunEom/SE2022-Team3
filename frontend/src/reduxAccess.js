import store from "./store";

export const loginDispatch = (user) => store.dispatch({ type: "LOGIN", user });

export const logoutDispatch = () => store.dispatch({ type: "LOGOUT" });

export const getUserState = () => store.getState().user;

export const userStateSubscribe = (setUser) => {
  store.subscribe(() => {
    let userData = store.getState().user;
    setUser(userData);
  });
};
