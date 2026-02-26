import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-end h-full">
      <div>
        <h1 className="text-xl font-bold mb-2">Welcome to PopX</h1>
        <p className="text-gray-500 text-sm sm:text-wrap">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <button
          onClick={() => navigate("/signup")}
          className="w-full mt-6 bg-primary text-white py-3 rounded-md font-semibold bg-blue-900"
        >
          Create Account
        </button>

        <button
          onClick={() => navigate("/login")}
          className="w-full mt-3 bg-secondary text-primary py-3 rounded-md font-semibold bg-gray-300"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Welcome;