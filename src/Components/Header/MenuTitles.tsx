import { Link } from "react-router-dom";
interface Props {
  color: string;
  text: string;
  path: string;
  handler: () => void;
}

export default function MenuTitles(props: Props) {
  return (
    <Link to={props.path}>
      {" "}
      <div className="planet-menu" onClick={props.handler}>
        <div className="round" style={{ background: `${props.color}` }}></div>
        <h2>{props.text}</h2>
      </div>
    </Link>
  );
}
