import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100">
        <h2 className="text-4xl font-bold">Counter: {count}</h2>

        <div className="flex gap-4">
          <button
              onClick={() => setCount(count + 1)}
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            +
          </button>

          <button
              onClick={() => setCount(count - 1)}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            -
          </button>

          <button
              onClick={() => setCount(0)}
              className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </div>
  );
};

export default Home;
