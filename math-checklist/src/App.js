import React, {useState} from "react";
import "./App.css";
import Checklist from "./components/Checklist";
import {checkedContext} from "./contexts/checkedContext"
import {totalContext} from "./contexts/totalContext"

function App() {
  const [progressValue, setProgressValue] = useState(0)
  const [total, setTotal] = useState(0)
  return (
    <div className="App">
      <totalContext.Provider value={{total, setTotal}}>
        <checkedContext.Provider value={{progressValue, setProgressValue}}>
          <Checklist />
        </checkedContext.Provider>
      </totalContext.Provider>
    </div>
  );
}

export default App;
