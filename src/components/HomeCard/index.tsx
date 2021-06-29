import "./homecard.scss";

type HomeCardProps = {
  img: string;
  title: string;
};

export function HomeCard(props: HomeCardProps) {
  return (
    <div className="card">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
    </div>
  );
}
