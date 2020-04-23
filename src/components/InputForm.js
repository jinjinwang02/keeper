import React, { useState} from "react";

function InputForm(props) {

  const [input, setInput] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setInput(pre => {
      return {
        ...pre,
        [name]: value
      };
    })
  }

  return (
    <div>
      <form>
        <input autoComplete="off"
          value={input.title}
          onChange={handleChange}
          name="title"
          placeholder="Title"
        />
          <textarea
          value={input.content}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
          <button
          onClick={(e) => {
            props.onAdd(input);
            setInput({title: "", content: ""});
            e.preventDefault();
            }
          }>ADD</button>
      </form>
    </div>
  );
}

export default InputForm;