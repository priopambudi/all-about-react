import { memo } from "react";

interface onChangeProps {
  onChange: (text: string) => void;
}

function Search({ onChange }: onChangeProps) {
  console.log("Searched");
  return (
    <input
      type="text"
      placeholder="Search Name"
      className="p-2 bg-gray-200 outline-none ml-2 rounded-md"
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default memo(Search);
