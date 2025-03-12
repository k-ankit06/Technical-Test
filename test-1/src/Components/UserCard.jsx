import React from 'react';
function UserCard({ name, email, age }) {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg border border-gray-200">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">Email: {email}</p>
      <p className="text-gray-600">Age: {age}</p>
    </div>
  );
}
export default UserCard;