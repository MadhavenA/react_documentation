import React, { useState } from "react";

export default function UsingImmerAddingListOfFruits() {
  let i = 0;
  const [fruits, setFruits] = useState(false);
  const [listFruits, setListFruits] = useState([]);
  function handleInput(e) {
    setFruits(e.target.value);
  }
  function handleButton(e) {
    setListFruits([...listFruits, { id: i++, fruit: fruits }]);
  }

  return (
    <>
      <h1>FRUITS SHOP </h1>
      <input type="text" value={fruits} onChange={handleInput} />
      <button onClick={handleButton}>Click to save In List</button>
      <p>
        {listFruits.map((fruit) => (
          <li key={fruit.id}>{fruit.fruit}</li>
        ))}
      </p>
    </>
  );
}
