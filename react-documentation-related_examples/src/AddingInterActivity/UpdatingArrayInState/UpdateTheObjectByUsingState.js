import React, { useState } from "react";

export default function UpdateTheObjectByUsingState() {
  const [adminName, setAdminName] = useState(false);
  const [personDetails, setPersonDetails] = useState({
    adminDetails: {
      fatherName: "father",
      address: "Chennai",
      mobileNumber: 6381162830,
      empty: "",
    },
  });
  function handleAdmin(e) {
    setAdminName({ AdminName: e.target.value });
  }
  function handlePersonalDetailsFatherName(e) {
    setPersonDetails({
      ...personDetails,
      adminDetails: {
        FatherName: e.target.value,
      },
    });
  }
  function handlePersonalDetailsAddress(e) {
    setPersonDetails({
      ...personDetails,
      adminDetails: {
        Address: e.target.value,
      },
    });
  }
  function handlePersonalDetailsMobileNumber(e) {
    setPersonDetails({
      ...personDetails,
      adminDetails: {
        MobileNumber: e.target.value,
      },
    });
  }
  function handlePersonalDetailsEmpty(e) {
    setPersonDetails({
      ...personDetails,
      adminDetails: {
        Empty: "Hii This is Empty Content",
      },
    });
  }
  return (
    <>
      <h1>UPDATE THE OBJECT BY USING STATE </h1>
      <input
        type="text"
        value={adminName.AdminName}
        onChange={handleAdmin}
      ></input>
      <br />
      <input
        type="text"
        value={personDetails.adminDetails.Empty}
        onChange={handlePersonalDetailsEmpty}
      ></input>
      <br />({adminName.AdminName})<br />({personDetails.adminDetails.Empty})
    </>
  );
}
