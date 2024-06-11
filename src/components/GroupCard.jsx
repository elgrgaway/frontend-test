function GroupCard({ group, allGroups, setAllGroups, index }) {
  const deleteHandler = () => {
    const updatedGroups = allGroups.filter((_, i) => i !== index);
    setAllGroups(updatedGroups);
  };
  const editHandler = () => {
    const newName = prompt("Enter new group name:", group.name);
    const newDescription = prompt(
      "Enter new group description:",
      group.description
    );
    if (newName !== null && newDescription !== null) {
      const updatedGroups = allGroups.map((g, i) => {
        if (i === index) {
          return { ...g, name: newName, description: newDescription };
        }
        return g;
      });
      setAllGroups(updatedGroups);
    }
  };
  return (
    <div>
      <span>{group.name}</span>
      <p>{group.description}</p>
      <button onClick={deleteHandler}>
        <img loading="lazy" src="cancel.png" alt="delete" />
      </button>
      <button className="edit" onClick={editHandler}>
        <img loading="lazy" src="pencil.png" alt="delete" />
      </button>
    </div>
  );
}
export default GroupCard;
