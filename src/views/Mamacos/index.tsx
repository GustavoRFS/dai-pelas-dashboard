import { LoggedScreen } from "../LoggedScreen/index";
import { DiscordCard } from "../../components/DiscordCard/index";
import { User } from "../../types";

export function Mamacos() {
  const Mamacos: Array<User> = [
    { username: "Rausini", id: "338871082041868289", avatar: null },
    {
      username: "Gustavo Ribeiro",
      id: "315575906091401218",
      avatar: "8267d0e4428416561897c45551968e29",
    },
  ];
  return (
    <LoggedScreen title="Mamacos">
      <div className="mamacos-screen">
        {Mamacos.map((mamaco, index) => {
          return <DiscordCard sendMessage={false} user={mamaco} key={index} />;
        })}
      </div>
    </LoggedScreen>
  );
}
