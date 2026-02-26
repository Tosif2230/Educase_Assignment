import { useSelector } from "react-redux";

const Account = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h1 className="text-lg font-semibold mb-6">Account Settings</h1>

      <div className="flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/100"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h2 className="font-semibold">{user.name || "Name"}</h2>
          <p className="text-sm text-gray-500">
            {user.email || "example@gmail.com"}
          </p>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
};

export default Account;