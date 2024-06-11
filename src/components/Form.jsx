import styles from "./Form.module.css";
import { useState } from "react";
function Form({ setGroup }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // Handles form submission, updates the group state, and resets the form fields

  const submitHandler = (e) => {
    e.preventDefault();
    setGroup({
      name,
      description,
    });
    setName("");
    setDescription("");
  };

  // Updates the 'name' state based on the input field's current value
  const inputChange = (e) => {
    setName(e.target.value);
  };

  // Updates the 'description' state based on the textarea's current value
  const textareaChange = (e) => {
    setDescription(e.target.value);
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label>Name</label>
      <input type="text" value={name} onChange={inputChange} required />
      <label>Description</label>
      <textarea value={description} onChange={textareaChange} required />
      <button>Add Group</button>
    </form>
  );
}
export default Form;
