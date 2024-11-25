import React from 'react';

const ContactPersonForm = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Contact Person Form</h2>
      <div className="mb-4">
        <label className="block font-medium mb-2">Title</label>
        <select className="w-full border border-gray-300 p-2 rounded">
          <option>Mr</option>
          <option>Mrs</option>
          <option>Miss</option>
          <option>Prof</option>
          <option>Dr</option>
          <option>Rev</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2">Name</label>
        <input type="text" className="w-full border border-gray-300 p-2 rounded" />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2">Email Address</label>
        <input type="email" className="w-full border border-gray-300 p-2 rounded" />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2">Phone Number</label>
        <input type="tel" className="w-full border border-gray-300 p-2 rounded" />
      </div>
    </div>
  );
};

export default ContactPersonForm;
