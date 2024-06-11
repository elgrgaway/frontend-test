// import { useEffect, useState } from "react";
// import "./GroupList.css";
// function GroupList({ group }) {
//   const [allGroups, setAllGroups] = useState([]);

//   setAllGroups((g) => [...g, group]);
//   // useEffect(() => {}, [group]);
//   console.log(allGroups);
//   return <div className="group-list"></div>;
// }
// export default GroupList;
import { useEffect, useState } from "react";
import "./GroupList.css";
import GroupCard from "./GroupCard";

function GroupList({ group }) {
  const [allGroups, setAllGroups] = useState([]);

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
            key={index}
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
