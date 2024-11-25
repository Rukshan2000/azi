import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useReactToPrint } from 'react-to-print';
import usersData from '../data/users.json'; // Assuming this contains an array of user objects

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(5); // Number of users per page
  const [userDetail, setUserDetail] = useState(null); // Store user detail for viewing

  useEffect(() => {
    // Load users from JSON data
    setUsers(usersData.users);
  }, []);

  // Handle pagination
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  // View user details
  const handleViewDetails = (user) => {
    setUserDetail(user);
  };

  // Print component for PDF
  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  // Paginated users
  const paginatedUsers = users.slice(currentPage * itemsPerPage, currentPage * itemsPerPage + itemsPerPage);

  // Inside your Dashboard component
return (
<div className="flex flex-col items-start justify-start h-screen bg-gray-50 p-6 pl-96"> {/* Added padding-left and padding-right */}
<h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Admin Dashboard</h1>
      <div className="overflow-x-auto w-full">
          <table className="w-5/6 bg-white shadow-lg rounded-lg border border-gray-300"> {/* Adjusted width */}
              <thead>
                  <tr className="bg-blue-600 text-white uppercase text-sm">
                      <th className="py-3 px-4 text-left">Name</th>
                      <th className="py-3 px-4 text-left">Email</th>
                      <th className="py-3 px-4 text-left">Status</th>
                      <th className="py-3 px-4 text-left">Actions</th>
                  </tr>
              </thead>
              <tbody>
                  {paginatedUsers.map((user, index) => (
                      <tr key={index} className="hover:bg-gray-100 transition-colors duration-200">
                          <td className="py-3 px-4 border-b border-gray-200">{user.name}</td>
                          <td className="py-3 px-4 border-b border-gray-200">{user.email}</td>
                          <td className="py-3 px-4 border-b border-gray-200">{user.status}</td>
                          <td className="py-3 px-4 border-b border-gray-200">
                              <button 
                                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition duration-200" 
                                  onClick={() => handleViewDetails(user)}
                              >
                                  View
                              </button>
                              <button 
                                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition duration-200 ml-2"
                                  onClick={() => handleDeleteUser(user.email)}
                              >
                                  Delete
                              </button>
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>

      {/* Pagination and user details code remains unchanged */}



      <ReactPaginate
        previousLabel={"< Previous"}
        nextLabel={"Next >"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={Math.ceil(users.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"flex justify-center mt-4"}
        pageClassName={"mx-1"}
        activeClassName={"bg-blue-500 text-white"}
        previousClassName={"mr-2 bg-blue-500 text-white px-3 py-1 rounded"}
        nextClassName={"ml-2 bg-blue-500 text-white px-3 py-1 rounded"}
      />

      {userDetail && (
        <div ref={componentRef} className="mt-6 bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-blue-600">User Details</h2>
          <p className="mt-2 text-gray-700"><strong>Name:</strong> {userDetail.name}</p>
          <p className="mt-2 text-gray-700"><strong>Email:</strong> {userDetail.email}</p>
          <p className="mt-2 text-gray-700"><strong>Status:</strong> {userDetail.status}</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg transition duration-200 hover:bg-blue-600" onClick={handlePrint}>
            Download as PDF
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
