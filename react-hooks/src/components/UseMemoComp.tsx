import { useMemo, useState } from "react";
import { initialItems } from "../utils/memo";

function UseMemoComp() {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  // everytime we click the button, it will rerender the component. and the selectedItem will rerender too
  // It make a performance issue
  // with useMemo, it will keep the value and will not rerendered the selectedItem
  // until the value in dependencies changed, the memo will triggered
  // it will reduce the preformance.
  const selectedItem = useMemo(
    () => items.find((item) => item.isSelected),
    [items]
  );

  return (
    <div className="tutorial container mx-auto">
      <h1>Count: {count}</h1>
      <h1>Selected Item:{selectedItem?.id}</h1>
      <button
        className="bg-blue-500 p-2 rounded-md text-white font-semibold"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default UseMemoComp;
