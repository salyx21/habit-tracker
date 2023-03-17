import styles from './Card.module.css';

export default function Card(props) {
    const onClickHandler= (events) => {
        props.onClick(events.target.value);       
    }

    return (<div className={`${styles.card} ${props.className}`} onClick={onClickHandler}>{props.children}</div>)
}