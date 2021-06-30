import { useState } from "react";
import { useEffect } from "react";
import { DiscordCard } from "../../components/DiscordCard";
import { UserDataById } from "../../services/DiscordApi";
import { User } from "../../types";
import Logo from "../../assets/logo.png";

import "./loginUnauthorized.scss";

export function LoginUnauthorized() {
  const [user, setUser] = useState({} as User);

  useEffect(() => {
    UserDataById("315575906091401218")
      .then(({ data }) => {
        setUser({ username: data.username, avatar: data.avatar, id: data.id });
      })
      .catch(console.error);
  }, []);
  return (
    <div className="login-unauthorized">
      <div>
        <img width={140} src={Logo} alt="Logo do dai pelas" />
        <div>
          <p>
            Você não está autorizado a participar do DaiPelas 🤬 <br />
            Se você acha que isso é um engano, mande uma mensagem para o admin
          </p>

          <DiscordCard
            onClick={() => {
              window.open(
                `https://discord.com/users/${"315575906091401218"}`,
                "_blank"
              );
            }}
            user={{
              avatar: "8267d0e4428416561897c45551968e29",
              id: "315575906091401218",
              username: "Gustavo Ribeiro",
            }}
            sendMessage={true}
          />
        </div>
      </div>
    </div>
  );
}
