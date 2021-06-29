import { LoggedScreen } from "../LoggedScreen";
import { HomeCard } from "../../components/HomeCard/index";
import { useHistory } from "react-router-dom";
import Mamaco from "../../assets/Home/Mamaco.svg";
import Plays from "../../assets/Home/Plays.svg";
import Frases from "../../assets/Home/Frases.svg";
import Shitpost from "../../assets/Home/Shitpost.svg";

import "./home.scss";

export function Home() {
  const history = useHistory();
  return (
    <LoggedScreen title="Início">
      <div className="home">
        <HomeCard
          onClick={() => {
            history.push("/mamacos");
          }}
          img={Mamaco}
          title="Mamacos"
        />
        <HomeCard
          onClick={() => {
            history.push("/plays");
          }}
          img={Plays}
          title="Plays"
        />
        <HomeCard
          onClick={() => {
            history.push("/frases");
          }}
          img={Frases}
          title="Frases de Status"
        />
        <HomeCard
          onClick={() => {
            history.push("/shitposts");
          }}
          img={Shitpost}
          title="Shitpost"
        />
      </div>
    </LoggedScreen>
  );
}
