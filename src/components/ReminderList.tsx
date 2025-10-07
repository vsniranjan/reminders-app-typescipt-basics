import React from "react";
import Reminder from "../models/Reminder";

interface ReminderListProps {
  reminders: Reminder[];
  onRemoveRemainder: (id: number) => void;
}

const ReminderList = ({ reminders, onRemoveRemainder }: ReminderListProps) => {
  return (
    <ul className='list-group'>
      {reminders.map((reminder) => (
        <li className='list-group-item' key={reminder.id}>
          {reminder.title}{" "}
          <button
            onClick={() => onRemoveRemainder(reminder.id)}
            className='btn btn-outline-danger mx-3 rounded-pill'
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ReminderList;
