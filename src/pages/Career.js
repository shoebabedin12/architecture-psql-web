import axios from "axios";
import React, { useEffect, useState } from "react";

const Career = () => {
  const base_Url = process.env.REACT_APP_BASE_URL;
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${base_Url}/career`)
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div class="colleagues">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="collegue-scroll">
                {data.length > 0 && data.map((item) => (
                  <div key={item.id} class="colleagues-details-data">
                    <h4 class="title">Position: {item.title}</h4>
                    <h6 class="vacancy">Vacancy: {item.vacancy}</h6>
                    <p class="section-title">Job Description:</p>
                    <div class="section-details" dangerouslySetInnerHTML={{
                          __html: item.description
                            ? item.description
                            : "Content comming soon"
                        }}>
                     
                    </div>
                    <p class="section-title">Education:</p>
                    <p class="section-details">
                      {item.education}
                    </p>
                   
                    <p class="section-title">Salary:</p>
                    <p class="section-details">{item.salary}</p>
                    <p class="section-title">Mail your CV:</p>
                    <p class="section-details">
                      <a
                        class="apply-btn"
                        href="mailto:inspaceatelier@gmail.com"
                        data-abc="true"
                      >
                        inspaceatelier@gmail.com
                      </a>
                    </p>
                    <p class="section-details">or</p>
                    <a
                      class="apply-btn"
                      href="https://docs.google.com/document/u/0/?pli=1"
                      target="_blank"
                      data-abc="true"
                    >
                      Apply by Google Form
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
