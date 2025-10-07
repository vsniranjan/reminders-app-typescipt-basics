import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/Reminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([
    { id: 1, title: "Reminder 1" },
    { id: 2, title: "Reminder 2" },
    { id: 3, title: "Reminder 3" },
    { id: 4, title: "Reminder 4" },
    { id: 5, title: "Reminder 5" },
  ]);
  return (
    <div className='App'>
      <ReminderList reminders={reminders} />
    </div>
  );
}

export default App;
