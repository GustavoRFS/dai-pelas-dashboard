import "./login.scss";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/logo.png";
import DiscordLogo from "../../assets/discord_logo.svg";

export function Login() {
  const history = useHistory();
  return (
    <div className="login">
      <div>
        <img src={Logo} alt="Logo do Dai Pelas Bot" />
        <h1>Dai Pelas Dashboard</h1>
        <button
          onClick={() => {
            history.push("/");
          }}
        >
          <img src={DiscordLogo} width={34} alt="Logo do Discord" />
          <div></div>
          Entrar com Discord
        </button>
      </div>
    </div>
  );
}
