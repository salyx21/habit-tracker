import styles from './Header.module.css';

export default function Header(props) {
    return (<div className={styles.header}>
        <h2 className={styles.title}>Habit Tracker</h2>
    </div>);
}