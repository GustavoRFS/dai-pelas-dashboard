import { useState } from "react";

import PlaysIcon from "../../assets/Sidebar/Plays.svg";
import MamacoIcon from "../../assets/Sidebar/Mamaco.svg";
import FrasesIcon from "../../assets/Sidebar/Frases.svg";
import ShitpostIcon from "../../assets/Sidebar/Shitpost.svg";

import "./Sidebar.scss";

export function Sidebar() {
  const [selected, setSelected] = useState("Shitposts");
  return (
    <div className="sidebar">
      <div>
        <div>
          {selected === "Mamaco" ? <div className="selected" /> : null}
          <img width={50} src={MamacoIcon} alt="Ícone do Mamaco" />{" "}
        </div>
        <div>
          {selected === "Plays" ? <div className="selected" /> : null}
          <img width={50} src={PlaysIcon} alt="Ícone de plays" />
        </div>
        <div>
          {selected === "Frases" ? <div className="selected" /> : null}
          <img width={50} src={FrasesIcon} alt="Ícone de frases de status" />
        </div>
        <div>
          {selected === "Shitposts" ? <div className="selected" /> : null}
          <img width={50} src={ShitpostIcon} alt="Ícone de Shitposts" />
        </div>
      </div>
    </div>
  );
}
