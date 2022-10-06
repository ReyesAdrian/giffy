import React from "react";

const Context = React.createContext({
  name: "Sin provider",
  loggedIn: true,
});

export default Context;
