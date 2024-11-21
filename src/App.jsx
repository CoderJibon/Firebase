import { useEffect, useState } from "react";
import Login from "./Auth/Login.jsx";
import Register from "./Auth/Register.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/auth.js";

function App() {
  const [getUser, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log(user);
    });
  }, []);
  return (
    <>
      <Register user={getUser} />
    </>
  );
}

export default App;
