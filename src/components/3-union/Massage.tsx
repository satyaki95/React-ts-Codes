import React from 'react'


type MessageProps = {
    text: "ADD" | "UPDATE" | "DELETE";
  };
const Massage = (props: MessageProps) => {
    if (props.text === "ADD") {
        return <p>User is added</p>;
      } else if (props.text === "UPDATE") {
        return <p>User is updated</p>;
      }
      return <p>User is deleted</p>;
}

export default Massage;