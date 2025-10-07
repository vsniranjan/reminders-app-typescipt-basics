import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/Reminder";
import remainderService from "./services/ReminderApi";
import NewRemainder from "./components/NewReminder";

function App() {
  const [reminders, setRemainders] = useState<Reminder[]>([]);

  const loadReminders = async () => {
    const reminders = await remainderService.getReminders();
    return setRemainders(reminders);
  };

  const removeRemainder = (id: number) => {
    setRemainders(reminders.filter((reminder) => reminder.id !== id));
  };

  const addRemainder = async (title: string) => {
    const newReminder = await remainderService.addReminders(title);
    setRemainders([newReminder, ...reminders]);
  };

  useEffect(() => {
    loadReminders();
  }, []);
  return (
    <div className='App'>
      <NewRemainder onAddReminder={addRemainder} />
      <ReminderList reminders={reminders} onRemoveRemainder={removeRemainder} />
    </div>
  );
}

export default App;
