import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../utils/userSlice.js";

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

  const handleLogin = () => {
    if (!formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    dispatch(
      setUser({
        name: formData.name,
        email: formData.email,
      })
    );

    navigate("/account");
  };

  return (
    <div className="flex flex-col h-full">
      <div>
        <h1 className="text-xl font-bold mb-2">
          Signin to your PopX account
        </h1>

        <p className="text-gray-500 text-sm mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="text-xs font-semibold text-primary">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="text-xs font-semibold text-primary">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-1 border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-primary text-white py-3 rounded-md font-semibold hover:opacity-90 transition bg-gray-300"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;