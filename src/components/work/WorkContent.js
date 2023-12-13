import React from "react";
import { Link } from "react-router-dom";

const WorkContent = ({ categoryData, base_Url }) => {
  if (!Array.isArray(categoryData)) {
    // Handle the case when categoryData is not an array
    return <p>No data available.</p>;
  }

  return (
    <>
      <div className="work-scroll">
        <div className="row">
          {categoryData?.map((item) => (
            <div className="col-lg-3">
              <Link key={item.id} to={`/work-details/${item.id}`} >
                <div className="tabs-content">
                  <img
                    className="img-fluid"
                    src={`${base_Url}/uploads/${item.image[0]}`}
                    alt={item.image[0]}
                  />
                </div>
                <div className="content">
                  <p>{item.title}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WorkContent;
