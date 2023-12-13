import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHref } from "react-router-dom";

const Colleagues = () => {
  const base_Url = process.env.REACT_APP_BASE_URL;
  const [data, setData] = useState({});
  const route = useHref();
  const filterRoute = route.split("/");
  const [sectionBg, setSectionBg] = useState({});
  const [careerData, setCareerData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const api = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      withCredentials: true
    });

    // async function getUser() {
    //   await api
    //     .get(`api/basic-fe`)
    //     .then((response) => {
    //       setSectionBg(response.data[0]);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }

    axios
    .get(`${base_Url}/career`)
    .then((res) => {
      setData(res.data.data);
      setLoading(false)
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

    // getUser();
  }, []);

  const filteredData =
  sectionBg.length > 0 &&
  sectionBg.filter((item) => item.title === filterRoute[1]);

console.log(data);
  return (
    <>

    {loading ?
      <div className="preloader">
        <h1>INSPACE ATELIER</h1>
      </div>
      :
      <div
      className="colleagues"
      // style={{
      //   {backgroundImage: `url(${base_Url}/uploads/${filteredData[0]?.image})`}
      // }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="collegue-scroll">
              {data.length > 0 &&
                data.map((item) => (
                  <div key={item.id} className="colleagues-details-data">
                    <h4 className="title">{item.title}</h4>
                    <p className="organization-name">{sectionBg.brand}</p>
                    <h6 className="vacancy">Vacancy: {item.vacancy}</h6>
                    <p className="section-title">Job Context:</p>
                    <p className="section-details">{item.context}</p>
                    <p className="section-title">Job Responsibilities:</p>
                    <p className="section-details">{item.responsibilities}</p>
                    <p className="section-title">Education:</p>
                    <p className="section-details">{item.education}</p>
                    <p className="section-title">Requirements:</p>
                    <p className="section-details">{item.requirements}</p>
                    <p className="section-title">Salary:</p>
                    <p className="section-details">{item.salary}</p>
                    <p className="section-title">Mail your CV:</p>
                    <p className="section-details">
                      <Link to="mailto:inspaceatelier@gmail.com" className="apply-btn">
                        {item.others}
                      </Link>
                    </p>
                    <p className="section-details">or</p>
                    <Link
                      to={item.g_form}
                      target="_blank"
                      className="apply-btn"
                    >
                      Apply by Google Form
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>}
    </>
  );
};

export default Colleagues;
