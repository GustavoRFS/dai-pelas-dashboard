import "./discordCard.scss";
import DiscordLogo from "../../assets/discord_logo.svg";

type User = {
  username: string;
  avatar: string;
  id: string;
};

export function DiscordCard(props: User) {
  return (
    <div className="discord-card">
      <div
        style={{
          backgroundImage: `url(https://cdn.discordapp.com/avatars/${props.id}/${props.avatar})`,
        }}
      >
        <div id="background" />
      </div>

      <img
        src={`https://cdn.discordapp.com/avatars/${props.id}/${props.avatar}`}
        alt="Avatar do usuário"
        width={90}
      />
      <div className="content">
        <h1>{props.username}</h1>
        <div id="horizontal-line" />
        <button>
          <img width={22} src={DiscordLogo} alt="Discord logo" />
          <div id="vertical-line" />
          <h3> Enviar Mensagem</h3>
        </button>
      </div>
    </div>
  );
}
