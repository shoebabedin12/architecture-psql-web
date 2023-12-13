import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const base_Url = process.env.REACT_APP_BASE_URL;
  const [sectionBg, setSectionBg] = useState({});
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${base_Url}/home`)
      .then((res) => {
        setData(res.data[0]);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
console.log(data);
  return (
    <>
      {loading ? (
        <div className="preloader">
          <h1>INSPACE ATELIER</h1>
        </div>
      ) : (
        <div
          className="contact"
          style={{
            background: `#343a40`
          }}
        >
          <div className="contact-scroll">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="map">
                    <iframe
                      src={`${data.map}`}
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                      style={{ border: "0px;" }}
                    />
                    <div className="contactInfo">
                      <p className="brand">{data.company_name}</p>
                      <p className="address">{data.address}</p>
                      <div className="contact_link">
                        <p className="phone">
                          Phone:
                          <Link to={`callto:${data.phone}`}>
                            {data.phone}
                          </Link>
                        </p>
                        <p className="email">
                          Email:
                          <Link to={`mailto:${data.email}`}>
                            {data.email}
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
