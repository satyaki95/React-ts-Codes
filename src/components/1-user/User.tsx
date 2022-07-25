import React from 'react'


// String, Number, Boolean, Void, Null

// user define types -> object, array, enum, union, any , custom type

type UserProps = {user: {
  name: string;
    age: number;
    isRegister: boolean;
    lang: string[];
}
    };

const User = ({user}: UserProps ) => {
  return (
    <div  style={{ border: "1px solid", margin: "1rem" }}>
        <h2>{user.name}</h2>
        <h2>{user.age}Years</h2>
        <h2>{user.lang.map((language,index)=>{
          return <span key={index}>{index+1}:{language} </span>
        })}</h2>
        {user.isRegister? <p>Register</p> : <p>Not Register</p>}
        
    </div>
  )
}

export default User;