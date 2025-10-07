import React from "react";
import Reminder from "../models/Reminder";

interface ReminderListProps {
  items: Reminder[];
}

const ReminderList = ({ items }: ReminderListProps) => {
  return (
    <ul>
      {items.map((reminder) => (
        <li key={reminder.id}>{reminder.title}</li>
      ))}
    </ul>
  );
};

export default ReminderList;
