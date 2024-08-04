import Fruit from "./Fruit";

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
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
          />
        ))}
      </ul>
    </div>
  );
}
