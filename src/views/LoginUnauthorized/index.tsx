import { useState } from "react";
import { useEffect } from "react";
import { DiscordCard } from "../../components/DiscordCard";
import { UserDataById } from "../../services/DiscordApi";

type User = {
  username: string;
  avatar: string;
  id: string;
};

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
      <DiscordCard
        avatar="8267d0e4428416561897c45551968e29"
        id="315575906091401218"
        username="Gustavo Ribeiro"
      />
    </div>
  );
}
