import { useEffect, useState } from "react";
import "./GroupList.css";
import GroupCard from "./GroupCard";
// Component to display a list of groups
function GroupList({ group }) {
  const [allGroups, setAllGroups] = useState([]);
  // Effect to update the list of groups when a new group is added
  useEffect(() => {
    if (group && Object.keys(group).length > 0) {
      setAllGroups((g) => [...g, group]);
    }
  }, [group]);

  return (
    <div className="group-list">
      {allGroups &&
        allGroups.map((group, index) => (
          <GroupCard
            key={index} // Key for React list rendering
            group={group}
            allGroups={allGroups}
            setAllGroups={setAllGroups}
            index={index}
          />
        ))}
    </div>
  );
}

export default GroupList;
