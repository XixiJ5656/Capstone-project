import React from "react";
import Authentication from "../AuthServices/Authentication";

const UserInfo = () => {
  const currentUser = Authentication.getCurrentUser();

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>User Name:</strong>
          {currentUser.username}
        </h3>
      </header>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
    </div>
  );
};

export default UserInfo;