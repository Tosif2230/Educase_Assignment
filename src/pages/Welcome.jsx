import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-end min-h-full pb-10">
      <div>
        <h1 className="text-xl font-bold mb-2">Welcome to PopX</h1>
        <p className="text-gray-500 text-sm">
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.
        </p>

        <button
          onClick={() => navigate("/signup")}
          className="w-full mt-6 text-white py-3 rounded-md font-semibold bg-blue-900 hover:bg-blue-800 transition"
        >
          Create Account
        </button>

        <button
          onClick={() => navigate("/login")}
          className="w-full mt-3 bg-gray-300 py-3 rounded-md font-semibold hover:bg-gray-400 transition"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Welcome;