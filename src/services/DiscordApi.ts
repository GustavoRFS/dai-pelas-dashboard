import axios, { AxiosResponse } from "axios";
import cookies from "react-cookies";

type DiscordUser = {
  avatar: string;
  discriminator: string;
  flags: number;
  id: string;
  locale: string;
  mfa_enabled: boolean;
  public_flags: number;
  username: string;
};

function DiscordApi() {
  const tokenType = cookies.load("token_type");
  const token = cookies.load("token");

  return axios.create({
    baseURL: "https://discord.com/api/",
    headers: {
      authorization: `${tokenType} ${token}`,
    },
  });
}

export function UserData(): Promise<AxiosResponse<DiscordUser>> {
  return DiscordApi().get("/users/@me");
}

export function UserDataById(id: string): Promise<AxiosResponse<DiscordUser>> {
  return DiscordApi().get(`/users/${id}`);
}
