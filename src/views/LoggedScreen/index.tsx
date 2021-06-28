import { ReactNode } from "react";
import { Header } from "../../components/Header/index";
import { Sidebar } from "../../components/Sidebar";
import "./logged.scss";

type LoggedScreenProps = {
  children: ReactNode;
};

export function LoggedScreen(props: LoggedScreenProps) {
  return (
    <div className="home">
      <Sidebar />
      <Header />
      <div style={{ marginLeft: 80 }}>{props.children}</div>
    </div>
  );
}
