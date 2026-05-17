import { useState } from "react";
import "./index.css";

function App() {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container">

      <div className="box">

        <h1>Show/Hide Password</h1>

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
        />

        <button
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide Password" : "Show Password"}
        </button>

      </div>

    </div>
  );
}

export default App;