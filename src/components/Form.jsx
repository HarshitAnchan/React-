import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstname: "", lastname: "" });

  return (
    <div>
      <form>
        <input
          onChange={(e) => setName({ ...name, firstname: e.target.value })}
          type="text"
          value={name.firstname}
        />

        <input
          onChange={(e) => setName({ ...name, lastname: e.target.value })}
          type="text"
          value={name.lastname}
        />
      </form>
    </div>
  );
}
