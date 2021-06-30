import "./discordCard.scss";
import DiscordLogo from "../../assets/discord_logo.svg";
import defaultAvatar from "../../assets/default_avatar.svg";
import Mamaco from "../../assets/monkey.png";
import { MouseEventHandler } from "react";
import { User } from "../../types";

type DiscordCardProps = {
  user: User;
  sendMessage: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export function DiscordCard(props: DiscordCardProps) {
  return (
    <div className="discord-card">
      <div
        style={
          props.user.avatar
            ? {
                backgroundImage: `url(https://cdn.discordapp.com/avatars/${props.user.id}/${props.user.avatar})`,
              }
            : { backgroundColor: "#574ae2" }
        }
      >
        <div id="background" />
      </div>

      <img
        src={
          props.user.avatar
            ? `https://cdn.discordapp.com/avatars/${props.user.id}/${props.user.avatar}`
            : defaultAvatar
        }
        alt="Avatar do usuário"
        width={90}
      />
      <div className="content">
        <h1>{props.user.username}</h1>
        <div id="horizontal-line" />

        <button onClick={props.onClick}>
          <img
            width={props.sendMessage ? 22 : 36}
            src={props.sendMessage ? DiscordLogo : Mamaco}
            alt="Discord logo"
          />
          <div id="vertical-line" />
          <h3> {props.sendMessage ? "Enviar Mensagem" : "Ver/Editar Fotos"}</h3>
        </button>
      </div>
    </div>
  );
}
