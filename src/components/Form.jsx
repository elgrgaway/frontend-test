import styles from "./Form.module.css";
import { useState } from "react";
function Form({ setGroup }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setGroup({
      name,
      description,
    });
    setName("");
    setDescription("");
  };
  const inputChange = (e) => {
    setName(e.target.value);
  };
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
