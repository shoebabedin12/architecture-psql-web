import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHref } from "react-router-dom";
import PeopleContent from "../components/people/PeopleContent";
import PeopleTabs from "../components/people/PeopleTabs";

const People = () => {
  const base_Url = process.env.REACT_APP_BASE_URL;
  const route = useHref();
  const filterRoute = route.split("/");
  const [data, setData] = useState({});
  const [allCategoryData, setAllCategoryData] = useState([]);
  const [sectionBg, setSectionBg] = useState({});
  const [category, setCategory] = useState({});
  const [dataCat, setDataCat] = useState({});
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
    .get(`${base_Url}/people`)
    .then((res) => {
      setData(res.data.data);
      setAllCategoryData(res.data.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
    });


    axios
      .get(`${base_Url}/allPagebg`)
      .then((res) => {
        setSectionBg(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    
  }, []);

  useEffect(() => {
    // Set initial filter state to show all data
    setFilter(allCategoryData);
  }, [allCategoryData]);

  const filteredData =
  sectionBg.length > 0 &&
  sectionBg.filter((item) => item.title === filterRoute[1]);

  const TabCat = (data) => {
    if (data === "all") {
      // Show all data by resetting filter
      setFilter(allCategoryData);
    } else {
      // Apply specific filters
      const filteredData = allCategoryData.filter(
        (item) => item.designation === data
      );
      setFilter(filteredData);
    }
  };

  // Assuming your data is named categories
  const uniqueCategories = Array.from(
    new Set(allCategoryData.map((item) => item.designation))
  );


  return (
    <>
      {loading ?
      <div className="preloader">
        <h1>INSPACE ATELIER</h1>
      </div>
      :
      <div
        className="people"
        style={{
          backgroundImage: `url(${base_Url}/uploads/${filteredData[0]?.image})`
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <PeopleTabs tabs={uniqueCategories} TabCat={TabCat} />
            </div>
            <div className="col-lg-8">
              <PeopleContent categoryData={filter} base_Url={base_Url}/>
            </div>
          </div>
        </div>
      </div>}
    </>
  );
};

export default People;
