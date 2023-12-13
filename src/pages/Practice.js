import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import { useHref } from "react-router-dom";
import Slider from "react-slick";

const Practice = () => {
  const base_Url = process.env.REACT_APP_BASE_URL;
  const route = useHref();
  const filterRoute = route.split("/");
  const [sectionBg, setSectionBg] = useState({});
  const [peopleData, setPeopleData] = useState({});
  const [aboutData, setAboutData] = useState({});
  const [officeData, setOfficeData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
    .get(`${base_Url}/work`)
    .then((res) => {
      setPeopleData(res.data);
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

  const filteredData =
  sectionBg.length > 0 &&
  sectionBg.filter((item) => item.title === filterRoute[1]);

  const peopleSlider = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    className: "center",
    centerMode: false,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <>
      {loading ?
      <div className="preloader">
        <h1>INSPACE ATELIER</h1>
      </div>
      :<div
        className="practise"
        style={{
          backgroundImage: `url(${base_Url}/uploads/${filteredData[0]?.image})`
        }}
      >
        <div className="container">
          <div className="practise-scroll">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={12} xl={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">About Us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Office</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">History</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={12} xl={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <div className="about">
                        <h4 className="short-description">
                          {aboutData.short_des}
                        </h4>
                        <img
                          src={`${base_Url}/images/${aboutData.image}`}
                          alt=""
                          className="img-fluid"
                        />
                        <p className="full-description">{aboutData.full_des}</p>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="about">
                        <h4 className="short-description">
                          {officeData.short_des}
                        </h4>
                        <img
                          src={`${base_Url}/images/${officeData.image}`}
                          alt=""
                          className="img-fluid"
                        />
                        <p className="full-description">
                          {officeData.full_des}
                        </p>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div className="office">
                        <Slider {...peopleSlider}>
                          {peopleData.length > 0 &&
                            peopleData.map((data) => (
                              <div
                                key={data.id}
                                id={data.id}
                                className="sliderItem"
                              >
                                <h4 className="year">{data.year}</h4>
                                <img
                                  src={`${base_Url}/images/${data.image}`}
                                  alt=""
                                  className="img-fluid"
                                />
                                <h4 className="title">{data.title}</h4>
                                <p className="desc">{data.full_des}</p>
                              </div>
                            ))}
                        </Slider>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </div>
      </div>}
    </>
  );
};

export default Practice;
