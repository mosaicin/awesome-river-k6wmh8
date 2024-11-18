import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-4xl font-bold mb-4">{count}</div>
      <div className="flex space-x-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;