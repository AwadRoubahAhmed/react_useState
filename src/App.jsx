import React, { useState } from "react";
import Formulaire from "./components/Formulaire";
import Clock from "./components/Clock";

function App() {
  const [count, setCount] = useState(0);

  const [title, setNewTitle] = useState("Comprendre les states en Ract JS!");

  const [number, setNumbers] = useState([1, 2, 3]);

  const addBtnClick = () => {
    setCount(count + 1);
  };
  const subBtnClick = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Counter cannot be negative!!");
    }
  };

  const handelTitleChange = () => {
    setNewTitle("React useState !!");

    setNumbers([...number, 4]);
  };

  return (
    <div className="App w-full h-svh bg-slate-900 text-white">
      <h1 className="text-3xl text-center font-bold underline">{title}</h1>
      <button
        className=" bg-neutral-200 hover:bg-slate-400 text-black text-semibold text-base p-1.5 font-semibold rounded-md my-2.5"
        onClick={handelTitleChange}
      >
        Change Title
      </button>
      <h4 className="text-lg mt-6 pl-3 ">Counter: {count}</h4>
      <button
        className=" bg-neutral-200 hover:bg-slate-400 text-black text-semibold text-base p-1.5 font-semibold rounded-md  ml-3 my-2.5"
        onClick={addBtnClick}
      >
        Increments
      </button>
      <button
        className=" bg-neutral-200 hover:bg-slate-400 text-black text-semibold text-base p-1.5 font-semibold rounded-md ml-3 my-2.5"
        onClick={subBtnClick}
      >
        Decrements
      </button>
      <div className="box w-4/5 h-fit bg-neutral-300 text-black my-7 mx-auto rounded-md">
        <h3 className="text-xl text-center underline font-semibold">
          Les States en React
        </h3>
        <Formulaire />
      </div>
      <Clock/>
    </div>
  );
}

export default App;
