import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { logoutUser, updateAvatar } from "../utils/userSlice";

const Account = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.email) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  // ✅ Handle Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(updateAvatar(reader.result)); // base64 image
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h1 className="text-lg font-semibold mb-6">Account Settings</h1>

      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src={user.avatar || "https://i.pravatar.cc/100"}
            alt="User Avatar"
            className="w-20 h-20 rounded-full object-cover border"
          />

          {/* Upload Button */}
          <label className="absolute bottom-0 right-0 bg-blue-900 text-white text-xs px-2 py-1 rounded-full cursor-pointer">
            Edit
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>

        <div>
          <h2 className="font-semibold">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.email}</p>
          <p className="text-sm mt-1">
            Account Type: {user.isAgency ? "Agency" : "Individual"}
          </p>
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="mt-8 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Account;
