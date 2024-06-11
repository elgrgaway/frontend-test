import { useState } from "react";
import "./App.css";
import Form from "./components/Form.jsx";
import Header from "./components/Header.jsx";
import GroupList from "./components/GroupList.jsx";

function App() {
  const [group, setgroup] = useState({});
  return (
    <>
      <Header />
      <Form setGroup={setgroup} group={group} />
      <GroupList group={group} />
    </>
  );
}

export default App;
