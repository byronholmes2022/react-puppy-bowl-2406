/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "./components/Header/Header";

function App() {
  const [puppies, setPuppies] = useState(["tucker", "pearl", "sugar"]);
  const [newPuppy, setNewPuppy] = useState(null);

  const addNewPuppy = (e) => {
    e.preventDefault();
    setPuppies([...puppies, newPuppy]);
  };
  return (
    <>
      <Header text="Rent today!" fontColor="red" fontSize="40px" />
      <Header text="Great weather!" />
      {puppies.map((puppy) => (
        <p>{puppy}</p>
      ))}
      <form onSubmit={addNewPuppy}>
        <input type="text" onChange={(e) => setNewPuppy(e.target.value)} />
        <button>Add puppy</button>
      </form>
    </>
  );
}

export default App;
