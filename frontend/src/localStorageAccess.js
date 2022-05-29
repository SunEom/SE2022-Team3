export const getIdToken = () => window.localStorage.getItem("idToken");
export const setIdToken = (idToken) => window.localStorage.setItem("idToken", idToken);
export const removeIdToken = () => window.localStorage.removeItem("idToken");
