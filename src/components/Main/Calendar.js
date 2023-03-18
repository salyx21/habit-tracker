import Day from "./Day";
import { Fragment } from "react";
import ToDoList from "./ToDoList";
import {useSelector} from 'react-redux';
import Button from "../UI/Button";

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
        <div className="text-white font-serif text-center text-5xl mb-8">
          {`${getMonthName}    ${year}`}
        </div>
        <div className="grid grid-cols-6 gap-4 max-w-2xl mx-auto">
          {calendar.map((number) => {
            return <Day key={number} num={number}/>;
          })}
        </div>
      </div>
    </Fragment>
  );
}
