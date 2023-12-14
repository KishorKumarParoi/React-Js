const Demo = () => {
  const fruits = ["Apple", "Banana", "Orange", "Mango"];
  return (
    <div>
      <h1>Kung Fu Panda is learning React Js</h1>
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
