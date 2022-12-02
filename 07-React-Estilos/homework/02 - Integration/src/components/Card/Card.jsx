import style from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={style.divCard}>
      <button onClick={props.onClose}>X</button>
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} />
      <h2>
        {props.gender} {props.species}
      </h2>
    </div>
  );
}
