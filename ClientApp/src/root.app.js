import React, { useContext } from "react";
import App from "./App";
import { UserInformation } from "./index"; // Assuming UserInformation context is exported from index.js

export default function RootApp() {
  const { userInformation } = useContext(UserInformation);

  // Render App component only if userInformation is available
  return userInformation ? <App /> : null;
}
