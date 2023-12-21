import { useParams } from "react-router-dom";
import Menu from "../Menu";

const Demo = () => {
  const fruits = ["Apple", "Banana", "Orange", "Mango"];
  let {name, Age, JobRole} = useParams();
  return (
    <div>
      <Menu/>
      <h1>{name} is learning React Js</h1>
      <h1>Age is {Age}</h1>
      <h1>I am a {JobRole}</h1>
      <ul
      style={
        {
          listStyleType : 'square'
        }
      }>
        {fruits.map((fruit, index) => {
          return <li key={index.toString()}>{fruit}</li>;
        })}
      </ul>

      <ol>
        {
          fruits.map((fruit, index) => {
            return <li key={index.toString()}>{fruit}</li>;
          })
        }
      </ol>
    </div>
  );
};

export default Demo;
