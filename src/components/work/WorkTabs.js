import React from "react";

const WorkTabs = ({ tabs, TabCat }) => {

  return (
    <div className="work_tabs">
      <button onClick={() => TabCat("all")}>All</button>
      {tabs.length > 0 &&
        tabs.map((item,index) => (
          <button key={index} id={item} onClick={() => TabCat(item)}>
            {item}
          </button>
        ))}
    </div>
  );
};

export default WorkTabs;
