import Hello from "./components/Hello";
function App() {
  const person = {
    name: "tom",
    message: "hi there",
    emoji: "👋",
    seatNumbers: [1, 2, 3, 4],
  };
  const seatNumbers = [1, 4, 5, 6];
  return (
    <div className="App">
      <Hello person={person} />
    </div>
  );
}

export default App;
