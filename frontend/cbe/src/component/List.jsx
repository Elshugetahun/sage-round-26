export default function List(props) {
  let car = ["Toyota", "BMW", "Ford", "Ford"];
  return (
    <div>
      <p>List of Cars</p>
      <ul>
        {car.map((car, index) => {
          return <li key={index}>{car}</li>;
        })}
      </ul>
      <button onClick={()=>{
         props.setCount1(props.count1 + 1)
      }}>Change Count One</button>
    </div>
  );
}
