import React, { useState } from "react";

function Formulaire() {
  //Code JavaScript;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const [numbers, setNumbers] = useState([1, 2, 3, 4]);

  const handelSubmit = (e) => {
    e.preventDefault();

    if (!isNaN(name) || isNaN(age)) {
      alert("The champs Inputs is invalid!");
    }

    console.log(`Name: ${name}, Age: ${age}`);

    //Méthode 1:
    const newCopyNumbers = [...numbers];
    newCopyNumbers.push(5);
    setNumbers(newCopyNumbers);

    //Méthode 2:
    setNumbers([...numbers, 5]);
  };

  //Code JSX;
  return (
    <div>
      <form onSubmit={handelSubmit} className="w-1/2 h-fit my-5 mx-auto">
        <div className="flex p-2">
          <label className="pr-2">Name: </label>
          <input
            className="p-0.5 text-base capitalize"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>

        <div className="flex p-2">
          <label className="pr-2">Age: </label>
          <input
            className="p-0.5 text-sm"
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
          />
        </div>
        <p id="text" className="hidden text-red-500">
          The champs is invalid!
        </p>
        <button
          className=" bg-slate-800 hover:bg-slate-700 text-white text-base p-1.5 font-semibold rounded-md mx-auto my-2.5"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Formulaire;
