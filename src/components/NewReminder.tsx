import React, { useState } from "react";

const NewRemainder = () => {
  const [title, setTitle] = useState("");

  return (
    <form>
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
