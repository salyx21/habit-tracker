import Card from "../UI/Card";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store/modal";

export default function Day(props) {
    const dispatch = useDispatch();
        
    const openModal = () => {
        dispatch(modalActions.openModal());        
    }

    return <Card onClick={openModal}>
        <h2>Day {props.num}</h2>
    </Card>
}