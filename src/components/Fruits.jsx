export default function Fruits() {
  const fruits = ["pair", "Banana", "Orange", "Apple"];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}> {fruit}</li>
        ))}
      </ul>
    </div>
  );
}
