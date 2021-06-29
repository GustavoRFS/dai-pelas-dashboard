import { MouseEventHandler } from "react";
import "./homecard.scss";

type HomeCardProps = {
  img: string;
  title: string;
  onClick: MouseEventHandler<HTMLDivElement>;
};

export function HomeCard(props: HomeCardProps) {
  return (
    <div onClick={props.onClick} className="card">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
    </div>
  );
}
