import { Link } from "react-router-dom";
import { useState } from "react";
const Save = () => {
  const [member, setMember] = useState({
    member_email : "",
    member_password:"",
    member_name:"",
    member_mobile:""
  });

  const inputInfo = (e) => {
    const {name, value} = e.target;
    setMember({
      ...member,
      [name]:value,
    });

    console.log(member);
  }

  return (
    <>
      <h2>Save.jsx</h2>
      E-mail : <input type="text" name="member_email" onChange={inputInfo}/><br/>
      password : <input type="text" name="member_password"onChange={inputInfo} /><br/>
      name : <input type="text" name="member_name"onChange={inputInfo}/><br/>
      mobile : <input type="text" name="member_mobile"onChange={inputInfo}/><br/>
    </>
  );
};

export default Save;
