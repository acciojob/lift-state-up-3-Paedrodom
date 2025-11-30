
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
      <h1>Parent Component</h1>
        {/* Do not remove the main div */}
        <ChildComponent1 handleoption={handleoption} />
        <ChildComponent2 handleoption={handleoption} />

        <p>Selected Option: {selectedOption}</p>

    </div>
  )
}

export default App
