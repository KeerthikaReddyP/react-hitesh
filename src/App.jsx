import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("pink");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ background: bgColor }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-4 rounded-full shadow-lg bg-white px-4 py-2">
          <button
            className="rounded-full px-2 py-1 shadow-lg bg-red-600 text-red-200"
            onClick={()=>setBgColor("red")}
          >
            Red
          </button>
          <button
            className="rounded-full px-2 py-1 shadow-lg bg-green-600 text-green-200"
            onClick={()=>setBgColor("green")}
          >
            Green
          </button>
          <button
            className="rounded-full px-2 py-1 shadow-lg bg-blue-600 text-blue-200"
            onClick={()=>setBgColor("blue")}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
