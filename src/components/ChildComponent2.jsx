import React from 'react'

const ChildComponent2 = ({handleoption}) => {
  return (
    <div>
        Child Component 2
        <button onClick={()=>handleoption("Option 2")}>Option 2</button>
    </div>
  )
}

export default ChildComponent2