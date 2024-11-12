import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Save = () => {
  const [member, setMember] = useState({
    member_email: "",
    member_password: "",
    member_name: "",
    member_mobile: "",
  });

  const inputInfo = (e) => {
    const { name, value } = e.target;
    setMember({
      ...member,
      [name]: value,
    });

    console.log(member);
  };

  const memberSave = async (e) => {
    e.preventDefault();
    console.log(member);

    let res = await axios.post("http://localhost:8027/member/save", {
      member: member,
    });
    console.log(res);
  };

  return (
    <>
      <h2>Save.jsx</h2>
      <form onSubmit={memberSave}>
        E-mail :{" "}
        <input
          type="text"
          name="member_email"
          value={member.member_email}
          onChange={inputInfo}
        />
        <br />
        password :{" "}
        <input
          type="text"
          name="member_password"
          value={member.member_password}
          onChange={inputInfo}
        />
        <br />
        name :{" "}
        <input
          type="text"
          name="member_name"
          value={member.member_name}
          onChange={inputInfo}
        />
        <br />
        mobile :{" "}
        <input
          type="text"
          name="member_mobile"
          value={member.member_mobile}
          onChange={inputInfo}
        />
        <br />
        <input type="submit" value={"회원 가입"} />
      </form>
    </>
  );
};

export default Save;
