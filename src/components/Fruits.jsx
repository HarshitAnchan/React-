export default function Fruits() {
  // const fruits = ["pair", "Banana", "Orange", "Apple"];

  const fruits = [
    {
      name: "Apple",
      price: 10,
      emoji: "🍎",
    },
    {
      name: "Mango",
      price: 14,
      emoji: "🥭",
    },
    {
      name: "banana",
      price: 19,
      emoji: "🍌",
    },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.name}>
            {" "}
            {fruit.emoji} {fruit.name} ${fruit.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
