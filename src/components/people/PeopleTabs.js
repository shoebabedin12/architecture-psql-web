import React from "react";

const PeopleTabs = ({ tabs, TabCat }) => {
  return (
    <div className="people_tabs">
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

export default PeopleTabs;
