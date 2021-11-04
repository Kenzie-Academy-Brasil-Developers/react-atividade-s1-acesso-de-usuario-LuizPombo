import "./App.css";
import { useState } from "react";
import RestrictedPage from "./components/RestrictedPage/index";

function App() {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);

  const user = "Luiz";
  function Login() {
    setIsLoggedIn(true);
  }
  function Loggout() {
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      <div className="App-header">
        <RestrictedPage
          isLoggedIn={IsLoggedIn}
          user={user}
          Login={Login}
          Loggout={Loggout}
        />
      </div>
    </div>
  );
}

export default App;
