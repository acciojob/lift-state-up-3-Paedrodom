
import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
  const [selectedOption, setselectedOption] = useState("");

  const handleoption=(val)=>{
     setselectedOption(val)
  }
  return (
    <div className="parent">
        {/* Do not remove the main div */}
        <ChildComponent1 handleoption={handleoption} />
        <ChildComponent2 handleoption={handleoption} />

        Selected Option: {selectedOption}

    </div>
  )
}

export default App
