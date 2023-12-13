import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ColleaguesDetails = () => {
  const params = useParams();
  const base_Url = process.env.REACT_APP_BASE_URL;
  const [sectionBg, setSectionBg] = useState({});
  const [collegue, setCollegue] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const api = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      withCredentials: true
    });

    // async function getBg() {
    //   await api
    //     .get(`api/basic-fe`)
    //     .then((response) => {
    //       setSectionBg(response.data[0]);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }

    // async function category() {
    //   await api
    //     .get(`api/colleagues-fe`)
    //     .then((response) => {
    //       setCollegue(response.data);
    //       setLoading(false)
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }

    // category();
    // getBg();
  }, []);

  let singleCollegue =
    collegue.length > 0 &&
    collegue.find((item) => {
      return item.id == params.id;
    });

  return (
    <>
    {loading ?
      <div className="preloader">
        <h1>INSPACE ATELIER</h1>
      </div>
      :<div
      className="colleagues"
      style={{
        backgroundImage: `url(${base_Url}/images/${sectionBg.colleagues_bg_image})`
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="colleagues-details-data">
              <h4 className="title">{singleCollegue.title}</h4>
              <p className="organization-name">{sectionBg.brand}</p>
              <h6 className="vacancy">Vacancy: {singleCollegue.vacancy}</h6>
              <p className="section-title">Job Context:</p>
              <p className="section-details">
                {singleCollegue.context}
              </p>
              <p className="section-title">Job Responsibilities:</p>
              <p className="section-details">
                {singleCollegue.responsibilities}
              </p>
              <p className="section-title">Education:</p>
              <p className="section-details">
                {singleCollegue.education}
              </p>
              <p className="section-title">Requirements:</p>
              <p className="section-details">
                {singleCollegue.requirements}
              </p>
              <p className="section-title">Salary:</p>
              <p className="section-details">
                {singleCollegue.salary}
              </p>
              <p className="section-title">Email:</p>
              <p className="section-details">
                {singleCollegue.others}
              </p>
              <Link to={singleCollegue.g_form} target="_blank" className='btn apply-btn'>Apply</Link>
            </div>
          </div>
        </div>
      </div>
    </div>}
    </>
  );
};

export default ColleaguesDetails;
