import Fruit from "./Fruit";

export default function Fruits() {
  // const fruits = ["pair", "Banana", "Orange", "Apple"];

  const fruits = [
    {
      name: "Apple",
      price: 10,
      emoji: "🍎",
      soldout: false,
    },
    {
      name: "Mango",
      price: 14,
      emoji: "🥭",
      soldout: true,
    },
    {
      name: "banana",
      price: 19,
      emoji: "🍌",
      soldout: false,
    },
    {
      name: "Pear",
      price: 23,
      emoji: "🍐",
      soldout: true,
    },
    {
      name: "cherry",
      price: 19,
      emoji: "🍒",
      soldout: false,
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
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
