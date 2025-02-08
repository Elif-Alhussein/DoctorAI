import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Update form data on input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle login validation
  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = users.find(
      (user) =>
        user.username === formData.username && user.password === formData.password
    );

    if (validUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(validUser));
      navigate("/symptoms");
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-cyan-600 to-cyan-800">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleLogin}>
          <InputField
            label="Email"
            type="email"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="bg-cyan-600 text-white hover:scale-110 hover:shadow-2xl transition-all duration-150 ease-linear p-2 mt-8 rounded-lg w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

// Input field component
function InputField({ label, type, name, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2 mt-6">
        {label}:
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-cyan-600"
      />
    </div>
  );
}



