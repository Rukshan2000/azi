// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './components/PaginatedForm'; 
import Login from './pages/LoginPage';  
import Register from './pages/Register';
import Dashboard from './pages/UserDashboard';
import SideNav from './components/SideNav';  // Import the SideNav component
import AdminDashboard from './pages/AdminDashboard';


const App = () => {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <SideNav />  {/* Render the SideNav component */}

        <div className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/form" element={<Form />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />

            {/* You can add more routes here */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
