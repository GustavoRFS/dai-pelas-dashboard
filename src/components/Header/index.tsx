import Logo from "../../assets/logo.png";
import ArrowDown from "../../assets/chevron-down.svg";
import DefaultAvatar from "../../assets/default_avatar.svg";
import { useUserContext } from "../../contexts/UserContext";
import { useHistory } from "react-router-dom";

import "./Header.scss";

export function Header() {
  const history = useHistory();
  const isHome = history.location.pathname === "/";

  const { avatar, id } = useUserContext();

  return (
    <div className="header">
      <div
        onClick={() => {
          history.push("/");
        }}
      >
        {isHome ? <div className="selected" /> : null}
        <img className="logo" width={50} src={Logo} alt="Logo do dai pelas" />
      </div>
      <div>
        <img
          className="avatar"
          width={44}
          src={
            avatar
              ? `https://cdn.discordapp.com/avatars/${id}/${avatar}`
              : DefaultAvatar
          }
          alt="Imagem do usuário"
        />

        <img src={ArrowDown} alt="" width={24} />
      </div>
    </div>
  );
}
