import "./login.scss";
import { useEffect } from "react";
import Logo from "../../assets/logo.png";
import DiscordLogo from "../../assets/discord_logo.svg";

export function Login() {
  useEffect(() => {
    window.addEventListener("message", () => {
      window.location.replace("/");
    });

    return () => {
      window.removeEventListener("message", () => {});
    };
  }, []);

  return (
    <div className="login">
      <div>
        <img src={Logo} alt="Logo do Dai Pelas Bot" />
        <h1>Dai Pelas Dashboard</h1>
        <button
          onClick={() => {
            window.open(
              process.env.REACT_APP_REDIRECT_URL,
              "Discord OAuth2",
              "height=600,width=500"
            );
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
