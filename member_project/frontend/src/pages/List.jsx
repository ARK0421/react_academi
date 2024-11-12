import axios from "axios";
import { useEffect, useState } from "react";

const List = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const list_db = axios
      .get("http://localhost:8027/member/list")
      .then((res) => {
        console.log("res", res.data);

        setList(res.data);
      });
  }, []);

  return (
    <>
      <h2>List.jsx</h2>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>email</th>
            <th>name</th>
            <th>mobile</th>
          </tr>
        </thead>
        <tbody>
          {list.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.member_email}</td>
              <td>{member.member_name}</td>
              <td>{member.member_mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default List;
