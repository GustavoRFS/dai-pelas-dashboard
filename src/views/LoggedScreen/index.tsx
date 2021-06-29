import { ReactNode } from "react";
import { Header } from "../../components/Header/index";
import { Sidebar } from "../../components/Sidebar";
import "./logged.scss";

type LoggedScreenProps = {
  children: ReactNode;
  title: string;
};

export function LoggedScreen(props: LoggedScreenProps) {
  return (
    <div className="home">
      <Sidebar />
      <Header />
      <div className="content">
        <h1 style={{ marginBottom: 30 }}>{props.title}</h1>
        <div>{props.children}</div>
      </div>
    </div>
  );
}
