import "./App.css";
import { useId } from "react";

function App() {
  const id = useId();

  return (
    <>
      <label>
        Password :
        <input aria-describedby={id} />
      </label>
      <p id={id}> This is hint</p>
    </>
  );
}

export default App;
