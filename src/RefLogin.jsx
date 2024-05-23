import React from "react";
import './App.css';

export const LoginRef = () =>{
    const userNameRef = React.useRef();
    const passwordRef = React.useRef();
    const [msg,setMsg]=React.useState('');


    const onClick = () =>{
 const userName=userNameRef.current.value;
 const pswd = passwordRef.current.value;

 if(userName==='root' && pswd==='12345678'){
setMsg ({ text: 'Logged In Successfully', color: 'green' });
 }
 else{
 setMsg ({text: 'Invalid Username and Password', color: 'red'})
    }
    userNameRef.current.value = '';
    passwordRef.current.value = '';
}

return (
    <div>
        <h1>LOGIN USING REACT REF</h1>
        <label>USER NAME</label>
        <input  type="text"  ref={userNameRef}/><br /><br />
        <label>PASSWORD</label>
        <input  type="password"  ref={passwordRef}/><br /><br />
        <button onClick={onClick}>LOGIN</button>
        {msg && <p style={{ color: msg.color }}>{msg.text}</p>}
    </div>
)
}