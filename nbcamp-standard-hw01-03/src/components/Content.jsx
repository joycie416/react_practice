import React from 'react'

const Content = ({count, setCount}) => {
  const increment = () => {
    setCount(count+1);
  }

  return (
    <>
     <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>

      <div>
        <p>{count > 10 ? "High count!" : "Keep counting..."}</p>
      </div>
    </>
  )
}

export default Content