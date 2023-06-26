import styles from "../styles/Home.module.css";

interface IProps {
  page: number;
  setCurrentPage?: any;
  btnEnd?: boolean;
}

const PageBtn = (props: IProps) => {
  return (
    <div>
      {props.btnEnd ? (
        <>
          <button
            className={styles.buttonItem}
            onClick={() => props.setCurrentPage(props.page - 1)}
          >
            {props.page - 1}
          </button>
          <button className={styles.buttonItem}>{props.page}</button>
        </>
      ) : props.page == 1 ? (
        <>
          <button className={styles.buttonItem}>{props.page}</button>
          <button
            className={styles.buttonItem}
            onClick={() => props.setCurrentPage(props.page + 1)}
          >
            {props.page + 1}
          </button>
        </>
      ) : (
        <>
          <button
            className={styles.buttonItem}
            onClick={() => props.setCurrentPage(props.page - 1)}
          >
            {props.page - 1}
          </button>
          <button className={styles.buttonItem}>{props.page}</button>
          <button
            className={styles.buttonItem}
            onClick={() => props.setCurrentPage(props.page + 1)}
          >
            {props.page + 1}
          </button>
        </>
      )}
    </div>
  );
};

export default PageBtn;
