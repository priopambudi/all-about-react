import { useEffect, useRef } from "react";

function UseRefComp() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="container mx-auto my-5 p-3 border-y-2">
      <h2 className="font-semibold">useRef</h2>
      <p className="text-xs mb-3">
        useRef is a Hook in React that provides a way to access and interact
        with the DOM elements directly in functional components. It allows you
        to create a mutable object that persists across renders without causing
        the component to re-render when the object's value changes.
      </p>
      <input
        ref={inputRef}
        type="text"
        className="p-2 bg-blue-200 rounded-md"
        placeholder="Input here..."
      />
    </div>
  );
}

export default UseRefComp;
