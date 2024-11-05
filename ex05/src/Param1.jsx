import { useParams } from "react-router-dom";

const Param1 = () => {
  const { id } = useParams();
  console.log({ id });
  return (
    <>
      <h2>Param1.jsx</h2>
      <h3>요청 id : {id}</h3>
    </>
  );
};

export default Param1;
