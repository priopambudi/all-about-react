import { useEffect, useState } from "react";

function UseEffectComp() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // The code that we want to run
    console.log("The count is:", count);

    // Optional return function
    return () => {
      console.log("I am being cleaned up!");
    };
  }, [count]); // The dependency array

  return (
    <div className="tutorial container mx-auto px-3">
      <h1>Count: {count}</h1>
      <button
        className="bg-red-500 p-2 rounded-md text-white mr-2"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <button
        className="bg-blue-500 p-2 rounded-md text-white"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default UseEffectComp;
