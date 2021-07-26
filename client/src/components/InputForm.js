import React, { useState } from 'react';
import axios from 'axios';

function InputForm(props) {
  const [input, setInput] = useState({
    title: '',
    content: '',
  });

  function validateInput(input) {
    if (input.title.length > 0 && input.content.length > 0) {
      return true;
    } else if (input.title.length === 0 && input.content.length > 0) {
      alert('Please give your note a title.');
      return false;
    } else if (input.title.length > 0 && input.content.length === 0) {
      alert('Please include some contents.');
      return false;
    } else {
      alert('Please give your note a title and some contents.');
      return false;
    }
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setInput((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form>
        <input
          autoComplete='off'
          value={input.title}
          onChange={handleChange}
          name='title'
          placeholder='Title'
        />
        <textarea
          value={input.content}
          onChange={handleChange}
          name='content'
          placeholder='Take a note...'
          rows='3'
        />
        <button
          onClick={() => {
            setInput({ title: '', content: '' });
            validateInput(input) &&
              axios
                .post('https://calm-tor-86699.herokuapp.com/notes/add', input)
                .then((res) => console.log(res));
          }}
        >
          ADD
        </button>
      </form>
    </div>
  );
}

export default InputForm;
