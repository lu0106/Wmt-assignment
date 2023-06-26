import styles from "../styles/Home.module.css";

interface IProps {
  dataName?: string;
  dataImage?: string;
}

const Cards = (props: IProps) => {
  return (
    <div className={styles.card}>
      <img src={props.dataImage} alt="photo" />
      <div className={styles.text}>
        <p>{props.dataName}</p>
      </div>
    </div>
  );
};

export default Cards;
