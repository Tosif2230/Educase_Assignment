import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../utils/userSlice.js";
import { useState } from "react";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    isAgency: true,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "radio" ? value === "yes" : value,
    });
  };

  const handleSubmit = () => {
    dispatch(setUser(formData));
    navigate("/account");
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Create your PopX account</h1>

      {["name", "phone", "email", "password", "company"].map((field) => (
        <div key={field} className="mb-4">
          <label className="text-xs font-semibold text-primary capitalize">
            {field}<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name={field}
            onChange={handleChange}
            className="w-full mt-1 border rounded-md p-2"
          />
        </div>
      ))}

      <p className="text-sm mb-2">Are you an Agency?</p>

      <div className="flex gap-6 mb-6">
        <label>
          <input
            type="radio"
            name="isAgency"
            value="yes"
            onChange={handleChange}
            defaultChecked
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="isAgency"
            value="no"
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-primary text-white py-3 rounded-md font-semibold bg-blue-900"
      >
        Create Account
      </button>
    </div>
  );
};

export default Signup;