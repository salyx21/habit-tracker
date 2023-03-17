import Modal from '../UI/Modal';
import styles from './ToDoList.module.css';
import { useDispatch} from 'react-redux';
import { modalActions } from '../../store/modal';

export default function ToDoList(){
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(modalActions.openModal);
    }

    return <Modal>
        <form onSubmit={closeModal}>
        <h1>ToDo List</h1>
        <button className={styles.button}>Done</button>
        </form>
    </Modal>
}