import React from 'react'

const ChildComponent1 = ({handleoption}) => {
  return (
    <div>
      Child Component 1
      <button onClick={()=>handleoption("Option 1")}>Option 1</button>
    </div>
  )
}

export default ChildComponent1