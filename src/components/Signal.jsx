import { signal } from "@preact/signals-react";

const count = signal(0);

export default function Signal() {
  return (
    <div>
      <h1>Signal</h1>
      <p>{count}</p>
      <button onClick={() => (count.value = count + 1)}>Increment</button>
    </div>
  );
}
