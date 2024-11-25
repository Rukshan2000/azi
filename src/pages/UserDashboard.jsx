// Dashboard.js
import React from "react";

const Dashboard = () => {
  // Sample user approval status
  const user = {
    name: "John Doe",
    status: "Approved",
    color: "bg-green-500",
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Your Approval Status</h1>
      <div className={`flex flex-col justify-between p-6 rounded-lg shadow-lg text-white ${user.color} w-80`}>
        <div>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="mt-2">Status: {user.status}</p>
        </div>
        <div className="mt-4">
          <button className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
