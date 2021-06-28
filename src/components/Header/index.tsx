import Logo from "../../assets/logo.png";
import ArrowDown from "../../assets/chevron-down.svg";

import "./Header.scss";

export function Header() {
  const isHome = true;
  return (
    <div className="header">
      <div>
        {isHome ? <div className="selected" /> : null}

        <img width={50} src={Logo} alt="Logo do dai pelas" />
      </div>
      <div>
        <img className="logo" width={44} src={Logo} alt="Imagem do usuário" />{" "}
        <img src={ArrowDown} alt="" width={24} />
      </div>
    </div>
  );
}
