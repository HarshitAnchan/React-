export default function Message() {
  function handleClick() {
    console.log("button clikced");
  }

  return (
    <div>
      <button onClick={handleClick}>Click here </button>
    </div>
  );
}
