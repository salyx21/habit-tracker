import Card from "./Card";
import styles from "./Modal.module.css";


export default function Modal(props) {
 
  return (
    <div>
      <div className={styles.backdrop}>
        <Card className={styles.modal}>{props.children}</Card>
      </div>
    </div>
  );
}
