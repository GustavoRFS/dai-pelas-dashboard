import { useHistory } from "react-router-dom";

import PlaysIcon from "../../assets/Sidebar/Plays.svg";
import MamacoIcon from "../../assets/Sidebar/Mamaco.svg";
import FrasesIcon from "../../assets/Sidebar/Frases.svg";
import ShitpostIcon from "../../assets/Sidebar/Shitpost.svg";

import "./Sidebar.scss";

export function Sidebar() {
  const history = useHistory();
  const selected = history.location.pathname;
  return (
    <div className="sidebar">
      <div>
        <div
          onClick={() => {
            history.push("/mamacos");
          }}
        >
          {selected === "/mamacos" ? <div className="selected" /> : null}
          <img width={50} src={MamacoIcon} alt="Ícone do Mamaco" />{" "}
        </div>
        <div
          onClick={() => {
            history.push("/plays");
          }}
        >
          {selected === "/plays" ? <div className="selected" /> : null}
          <img width={50} src={PlaysIcon} alt="Ícone de plays" />
        </div>
        <div
          onClick={() => {
            history.push("/frases");
          }}
        >
          {selected === "/frases" ? <div className="selected" /> : null}
          <img width={50} src={FrasesIcon} alt="Ícone de frases de status" />
        </div>
        <div
          onClick={() => {
            history.push("/shitposts");
          }}
        >
          {selected === "/shitposts" ? <div className="selected" /> : null}
          <img width={50} src={ShitpostIcon} alt="Ícone de Shitposts" />
        </div>
      </div>
    </div>
  );
}
