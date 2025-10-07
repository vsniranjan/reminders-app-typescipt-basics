import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/Reminder";
import remainderService from "./services/ReminderApi";

function App() {
  const [reminders, setRemainders] = useState<Reminder[]>([]);

  const loadReminders = async () => {
    const reminders = await remainderService.getReminders();
    return setRemainders(reminders);
  };

  useEffect(() => {
    loadReminders();
  }, []);
  return (
    <div className='App'>
      <ReminderList reminders={reminders} />
    </div>
  );
}

export default App;
