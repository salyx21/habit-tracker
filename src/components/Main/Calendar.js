import Day from "./Day";
import styles from "./Calendar.module.css";
import { Fragment } from "react";
import ToDoList from "./ToDoList";
import {useSelector} from 'react-redux';

export default function Calendar() {
  let calendar = [];
  const monthNames =["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  const date = new Date();
  const month = date.getMonth();
  const getMonthName = monthNames[month];
 
  const year = date.getFullYear();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 1; i <= daysInMonth; i++) {
    calendar.push(i);
  }
  const showModal = useSelector(state => state.modal.modalOpen);

  return (
    <Fragment>
      {showModal && <ToDoList />}
      <div>
        <div className={styles.date}>
          {`${getMonthName}    ${year}`}
        </div>
        <div className={styles.calendar}>
          {calendar.map((number) => {
            return <Day key={number} num={number} />;
          })}
        </div>
      </div>
    </Fragment>
  );
}
