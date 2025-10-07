import React, { useState } from "react";

interface NewReminderProps {
  onAddReminder: (title: string) => void;
}

const NewRemainder = ({ onAddReminder }: NewReminderProps) => {
  const [title, setTitle] = useState("");

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddReminder(title);
    setTitle(``);
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor='title'></label>
      <input
        id='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type='text'
        className='form-control'
      />
      <button type='submit' className='btn btn-primary rounded-pill my-3'>
        Add Remainder
      </button>
    </form>
  );
};

export default NewRemainder;
