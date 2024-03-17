import { useCallback, useState } from "react";
import Search from "./Search";

// Function to shuffle an array
function shuffle(array: any) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

const allUsers = ["Alex", "Beckham", "Martin", "Jojo", "Ginting"];

function UseCallbackComp() {
  const [users, setUsers] = useState(allUsers);

  // useCallback is to memoized a function
  const handleSearch = useCallback(
    (text: string) => {
      console.log(users);

      const filteredUsers = allUsers.filter((user) =>
        user.toLowerCase().includes(text)
      );
      setUsers(filteredUsers);
    },
    [users]
  );

  return (
    <div className="container mx-auto mt-5 px-3">
      <h2 className="font-bold mb-2">useCallbak</h2>
      <div className="flex items-center">
        <button
          className="bg-blue-400 rounded-md p-2 font-semibold text-white hover:bg-blue-600"
          onClick={() => setUsers(shuffle([...allUsers]))}
        >
          Shuffle
        </button>

        <Search onChange={handleSearch} />
      </div>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseCallbackComp;
