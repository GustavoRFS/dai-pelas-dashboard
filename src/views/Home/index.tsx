import { LoggedScreen } from "../LoggedScreen";
import { HomeCard } from "../../components/HomeCard/index";

import Mamaco from "../../assets/Home/Mamaco.svg";
import Plays from "../../assets/Home/Plays.svg";
import Frases from "../../assets/Home/Frases.svg";
import Shitpost from "../../assets/Home/Shitpost.svg";

import "./home.scss";

export function Home() {
  return (
    <LoggedScreen title="Início">
      <div className="home">
        <HomeCard img={Mamaco} title="Mamacos" />
        <HomeCard img={Plays} title="Plays" />
        <HomeCard img={Frases} title="Frases de Status" />
        <HomeCard img={Shitpost} title="Shitpost" />
      </div>
    </LoggedScreen>
  );
}
