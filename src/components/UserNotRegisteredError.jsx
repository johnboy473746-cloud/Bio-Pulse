import React from 'react';
const UserNotRegisteredError = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
    <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg border border-slate-100 text-center">
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Access Restricted</h1>
      <p className="text-slate-600">You are not registered to use this application.</p>
    </div>
  </div>
);
export default UserNotRegisteredError;
