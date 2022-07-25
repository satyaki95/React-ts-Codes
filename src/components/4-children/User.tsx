import React from "react";
import Card from "./Card";

type UserProps = {
  user: {
    name: string;
    email: string;
    age: number;
    isRegistered: boolean;
    languages: string[];
  };
};
const User = ({ user }: UserProps) => {
  return (
    <Card>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.age} years old</p>
      {user.isRegistered ? (
        <p>Registered Student</p>
      ) : (
        <p>Unregistered Student</p>
      )}
      <p>
        Speaks:{" "}
        {user.languages.map((language, index) => {
          return <span key={index}>{language} </span>;
        })}
      </p>
    </Card>
  );
};
export default User;