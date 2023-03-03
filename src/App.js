import { useState } from "react";
import "./App.css";
import { Contador } from "./Components/Contador/Contador";

function App() {
  const [contador, setContador] = useState(0);

  const suma = () => {
    setContador(contador + 1);
  };

  const resta = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const reset = () => {
    setContador(0);
  };

  return (
    <div className="App">
      <Contador
        nombre="Proyecto de estados con React"
        contador={contador}
        suma={suma}
        resta={resta}
        reset={reset}
      />
    </div>
  );
}

export default App;
