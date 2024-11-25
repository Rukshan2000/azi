import React from 'react';

const CompanyInformation = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Company Information</h2>
      <div className="mb-4">
        <label className="block font-medium mb-2">Company Name</label>
        <input type="text" className="w-full border border-gray-300 p-2 rounded" />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2">Company Logo Upload</label>
        <input type="file" className="w-full p-2" />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2">Company Type</label>
        <select className="w-full border border-gray-300 p-2 rounded">
          <option>(Pvt) Ltd</option>
          <option>(Private) Limited</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2">Company Address</label>
        <input type="text" className="w-full border border-gray-300 p-2 rounded" />
      </div>
      {/* Additional fields can be added here */}
    </div>
  );
};

export default CompanyInformation;
