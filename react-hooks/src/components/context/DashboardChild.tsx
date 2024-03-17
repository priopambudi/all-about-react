import { useUserContext } from "../../context/context";

export function Sidebar() {
  const user = useUserContext();

  return (
    <div>
      <p className="text-sm">{user.name}</p>
      <p className="text-sm">
        Subscription status:{" "}
        {user?.isSubscribed ? "Subscribed" : "Not Subscribed"}
      </p>
    </div>
  );
}

export function Profile() {
  const user = useUserContext();

  return (
    <div>
      <p className="font-semibold">{user.name}</p>
    </div>
  );
}
