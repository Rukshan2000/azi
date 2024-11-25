import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import usersData from '../data/users.json';  // Imported users data

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = (e) => {
    e.preventDefault();

    // Accessing users array inside the imported JSON data
    const user = usersData.users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      console.log("Login successful:", { email, password });
      setError("");  // Clear any previous error

      // Redirect to the dashboard
      navigate("/dashboard");
    } else {
      setError("Invalid email or password. Please try again."); // Show validation error
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-8 bg-white rounded-lg shadow-lg w-96">
        <h2 className="mb-6 text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");  // Reset error on input change
              }}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");  // Reset error on input change
              }}
              required
            />
          </div>
          {error && <p className="mb-4 text-sm text-red-500">{error}</p>}  {/* Display error message */}
          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>Don't have an account? <a href="/register" className="text-blue-500">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
