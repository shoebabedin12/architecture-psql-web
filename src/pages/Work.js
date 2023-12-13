import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHref } from "react-router-dom";
import WorkContent from "../components/work/WorkContent";
import WorkTabs from "../components/work/WorkTabs";

const Work = () => {
  const base_Url = process.env.REACT_APP_BASE_URL;
  const route = useHref();
  const filterRoute = route.split("/");
  const [sectionBg, setSectionBg] = useState({});
  const [category, setCategory] = useState({});
  const [allCategoryData, setAllCategoryData] = useState([]);
  // const [dataCat, setDataCat] = useState({});
  const [filter, setFilter] = useState(allCategoryData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`${base_Url}/work`)
      .then((res) => {
        setCategory(res.data.works);
        setAllCategoryData(res.data.works);
        // setLoading(false);
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
        (item) => item.title === data
      );
      setFilter(filteredData);
    }
  };

  // Assuming your data is named categories
  const uniqueCategories = Array.from(
    new Set(allCategoryData.map((item) => item.title))
  );

  return (
    <>
      {loading ? (
        <div className="preloader">
          <h1>INSPACE ATELIER</h1>
        </div>
      ) : (
        <div
          className="work"
          style={{
            backgroundImage: `url(${base_Url}/uploads/${filteredData[0]?.image})`
          }}
        >
          <div className="container">
            <div className="practise-scroll">
              <div className="row">
                <div className="col-lg-3">
                  <WorkTabs tabs={uniqueCategories} TabCat={TabCat} />
                </div>
                <div className="col-lg-9">
                  <WorkContent categoryData={filter} base_Url={base_Url} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Work;
