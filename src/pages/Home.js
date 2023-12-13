import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Home = () => {
  const base_Url = process.env.REACT_APP_BASE_URL;
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${base_Url}/home`)
      .then((res) => {
        setData(res.data.users);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  console.log(data);
  return (
    <>
      {loading ? (
        <div className="preloader">
          <h1>INSPACE ATELIER</h1>
        </div>
      ) : (
        <div className="home-slider">
          <Slider {...settings}>
            {data[0]?.home_slider.map((item, index) => (
              <div className="sliderItem">
                <img
                  key={index}
                  className="img-fluid"
                  src={`${base_Url}/uploads/${item}`}
                  alt=""
                />
                 <div className="container">
                <div className="row">
                  <div className="col-12">
                    <Link to={"#"} className="content">
                      <h4>{data.brand}</h4>
                      <p>{data.address}</p>
                    </Link>
                  </div>
                </div>
              </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </>
  );
};

export default Home;
