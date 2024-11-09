import React, { useState } from "react";

function Clock() {
  const [countClock, setCountClock] = useState(0);

  const handleLaunchClock = () => {
    setInterval(() => {
      setCountClock((prevTime) => {
        return prevTime + 1;
      });
    }, 1000);
  };
  return (
    <div>
      <h4 className="text-lg mt-6 pl-3">Clock: {countClock}</h4>
      <button
        onClick={handleLaunchClock}
        className=" bg-neutral-200 hover:bg-slate-400 text-black text-semibold text-base p-1.5 font-semibold rounded-md  ml-3 my-2.5"
      >
        Launch Clock
      </button>
    </div>
  );
}

export default Clock;
