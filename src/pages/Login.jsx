import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    dispatch(
      setUser({
        name: "User",
        email: formData.email,
      })
    );

    navigate("/account");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col min-h-full">
      <h1 className="text-xl font-bold mb-2">
        Sign in to your PopX account
      </h1>

      <p className="text-gray-500 text-sm mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="mb-4">
        <label className="text-xs font-semibold">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mt-1 border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          required
        />
      </div>

      <div className="mb-6">
        <label className="text-xs font-semibold">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mt-1 border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full text-white py-3 rounded-md font-semibold bg-blue-900 hover:bg-blue-800 transition"
      >
        Login
      </button>
    </form>
  );
};

export default Login;