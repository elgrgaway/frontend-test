function GroupCard({ group, allGroups, setAllGroups, index }) {
  // Handler to delete the current group

  const deleteHandler = () => {
    // Filter out the group at the current index

    const updatedGroups = allGroups.filter((_, i) => i !== index);
    // Update the state with the new list of groups

    setAllGroups(updatedGroups);
  };
  // Handler to edit the current group's name and description

  const editHandler = () => {
    // Prompt the user to enter a new name, pre-filled with the current name
    const newName = prompt("Enter new group name:", group.name);
    // Prompt the user to enter a new description, pre-filled with the current description
    const newDescription = prompt(
      "Enter new group description:",
      group.description
    );

    // Check if both new name and description are provided
    if (newName !== null && newDescription !== null) {
      // Map through all groups and update the group at the current index

      const updatedGroups = allGroups.map((g, i) => {
        if (i === index) {
          return { ...g, name: newName, description: newDescription };
        }
        return g;
      });

      // Update the state with the new list of groups
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
