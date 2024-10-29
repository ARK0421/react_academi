function Allons_y() {
  const name = "DOCTOR";

  const companion = {
    name: "ROSE",
    age: 20,
    cellPhone: "010-1111-2222",
  };

  return (
    <>
      <h2>{name}</h2>
      <h3>Companion Infomation</h3>
      <h4>NAME : {companion.name}</h4>
      <h4>AGE : {companion.age}</h4>
      <h4>MOBILE : {companion.cellPhone}</h4>
    </>
  );
}

export default Allons_y;
