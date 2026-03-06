import "./Nav.css";

export const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-contenido">
        <a
          className="nav-boton"
          href="https://github.com/anayaricardo"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="nav-boton"
          href="https://www.linkedin.com/in/ricardoanaya/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="nav-boton"
          href="https://anayaricardo.github.io/mypage/"
          target="_blank"
          rel="noreferrer"
        >
          Portafolio
        </a>
      </div>
    </nav>
  );
};
