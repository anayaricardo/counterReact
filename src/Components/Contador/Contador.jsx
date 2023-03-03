import "./Contador.css";

export const Contador = ({ nombre, contador, suma, resta, reset }) => {
  return (
    <div className="contador">
      <p className="titulo">{nombre}</p>
      <p className="subtitulo">Contador</p>
      <p className="numero">{contador}</p>
      <div className="botones">
        <button className={"boton"} onClick={suma}>
          Suma
        </button>
        <button className={"boton"} onClick={resta}>
          Resta
        </button>
        <button className={"boton"} onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};
