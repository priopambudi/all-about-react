import React, { useState } from "react";
import Dashboard from "./Dashboard";
import { DashboardContext } from "../../context/context";

export interface User {
  isSubscribed: boolean;
  name: string;
}

function ContextComp() {
  const [user] = useState<User>({
    isSubscribed: true,
    name: "Alex",
  });

  return (
    <div className="container mx-auto my-5 p-3 border-y-2">
      <h2 className="font-semibold">useContext</h2>
      <p className="text-xs mb-3">
        useContext is used for pass some data without having to explicitly pass
        props through component <br />
        useContext is a hook in React that allows functional components to
        consume values from a context without needing to use a higher-order
        component or render prop pattern. Context provides a way to share values
        like themes, preferred language, or authentication status between
        components without having to explicitly pass props through every level
        of the component tree
      </p>
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </div>
  );
}

export default ContextComp;
