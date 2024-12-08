import React from 'react';
import Avatar from 'react-avatar';

const Client = ({ username }) => {
  return (
    <div className="client flex flex-col items-center">
      <Avatar name={username} size={50} round="14px" />
      <span className="username mt-2 text-gray-700">{username}</span>
    </div>
  );
};

export default Client;
