"use client";

import React, { useEffect, useState } from "react";

const UserProfile = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // Извлеките данные из локального хранилища
    const storedListProps = JSON.parse(localStorage.getItem("listProps")) || {};
    setUserData(storedListProps);
  }, []);

  const { name, email } = userData;

  return (
    <>
      <div>Name: {name || "No Name"}</div>
      <div>Email: {email || "No Email"}</div>
    </>
  );
};

export default UserProfile;
