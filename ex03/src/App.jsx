import Allons_y from "./Comp1";
import Child from "./Child";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";
import "./App.css";

function App() {
  return (
    <>
      <h1>App.jsx</h1>
      {/*<Allons_y />*/}
      <Child p1="안녕하세요" />
      <Child1 p2="반갑습니다." />
      <Child2 p1="hello" p2={142857} p3="hola" />
      <Child3
        p1="Allons-y"
        p2={2}
        p3="Geronimo"
        companion={{ name: "ROSE", age: 20 }}
      />
    </>
  );
}

export default App;
