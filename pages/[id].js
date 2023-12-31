"use clients";
import React from "react";
import UserProfile from "../src/components/UserProfile";

const User = (userInfo) => {
  return (
    <div>
      <UserProfile users={userInfo} />
    </div>
  );
};

export default User;
