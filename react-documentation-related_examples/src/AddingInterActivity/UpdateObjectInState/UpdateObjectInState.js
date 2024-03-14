import React, { useState } from "react";

export default function UpdateObjectInState() {
  const [personName, setName] = useState(false);
  const [personDetails, setPersonDetails] = useState({
    homeDetails: {
      motherName: "mother",
      phoneNumber: 6381162830,
    },
  });

  function handleName(e) {
    setName({ name: e.target.value });
  }
  function handleDetails(e) {
    setPersonDetails({
      ...personDetails,
      homeDetails: {
        mother: e.target.value,
      },
    });
  }
  return (
    <>
      <h1>Welcome To The Page Of Update Object In State</h1>
      <br />
      <lable>Name:</lable>
      <input type="text" value={personName.name} onChange={handleName}></input>
      <br />
      <br />
      <br />
      <lable>MotherName:</lable>{" "}
      <input
        type="text"
        value={personDetails.homeDetails.motherName}
        onChange={handleDetails}
      ></input>
      <br />
      <br />
      <br />({personName.name}) <br />
      <br />
      <br />
      <br />({personDetails.homeDetails.motherName})
    </>
  );
}
