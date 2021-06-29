import {
  useEffect,
  useState,
  ReactNode,
  useContext,
  createContext,
} from "react";
import { useHistory } from "react-router-dom";
import { UserData } from "../services/DiscordApi";

type User = {
  avatar: string;
  id: string;
  username: string;
};

type UserContextProviderProps = {
  children: ReactNode;
};

const UserContext = createContext<User>({} as User);

export function useUserContext(): User {
  return useContext(UserContext);
}

export function UserContextProvider(props: UserContextProviderProps) {
  const history = useHistory();

  const [avatar, setAvatar] = useState("");
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    UserData()
      .then(({ data }) => {
        setAvatar(data.avatar);
        setId(data.id);
        setUsername(data.username);
      })
      .catch(() => {
        history.push("/login");
      });
  }, []);
  return (
    <UserContext.Provider value={{ avatar, id, username }}>
      {props.children}
    </UserContext.Provider>
  );
}
