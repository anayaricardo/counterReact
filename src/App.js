import { useEffect, useState } from "react";
import "./App.css";
import { Contador } from "./Components/Contador/Contador";
import { Nav } from "./Components/Nav/Nav";
import doodleWebp from "./img/doodle2.webp";

function App() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    // Preload improves first paint of the tiled body background.
    const preloadLink = document.createElement("link");
    preloadLink.rel = "preload";
    preloadLink.as = "image";
    preloadLink.href = doodleWebp;
    document.head.appendChild(preloadLink);

    return () => {
      preloadLink.remove();
    };
  }, []);

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
      <Nav />
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
