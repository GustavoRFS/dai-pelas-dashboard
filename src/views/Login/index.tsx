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
              "https://discord.com/api/oauth2/authorize?client_id=704278231083122748&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fredirect%2F&response_type=token&scope=identify",
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
