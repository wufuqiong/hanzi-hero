import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-8">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-sky-200 rounded-full animate-ping"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-t-sky-500 border-r-transparent border-b-sky-500 border-l-transparent rounded-full animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">
          🐼
        </div>
      </div>
    </div>
  );
};