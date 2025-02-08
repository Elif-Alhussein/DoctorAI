import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (!formData.username || !formData.password || !formData.confirmPassword) {
      setError("All fields are required.");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return false;
    }
    return true;
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const newUser = { username: formData.username, password: formData.password };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    setError(""); // Clear any previous errors
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-cyan-600 to-cyan-800">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Sign in
        </h2>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSignIn}>
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
          <InputField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="bg-cyan-600 text-white hover:scale-110 hover:shadow-2xl transition-all duration-150 ease-linear p-2 mt-8 rounded-lg w-full"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

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
