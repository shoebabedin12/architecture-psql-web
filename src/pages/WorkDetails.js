import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination } from "swiper";

const WorkDetails = ({ props }) => {
  const params = useParams();
  const base_Url = process.env.REACT_APP_BASE_URL;
  const [category, setCategory] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${base_Url}/work`)
      .then((res) => {
        setCategory(res.data.works);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let singleCategory =
    category.length > 0 &&
    category.find((item) => {
      return item.id == params.id;
    });

  return (
    <>
      {loading ? (
        <div className="preloader">
          <h1>INSPACE ATELIER</h1>
        </div>
      ) : (
        <div
          className="work_details"
          style={{
            backgroundImage: `url(${base_Url}/uploads/${
              singleCategory.image[0]
            })`
          }}
        >
          <div className="container">
            <div className="work-scroll">
              <div className="row">
                <div className="col-lg-3 col-12 order-2 order-lg-1">
                  <div className="work_details_left">
                    <div className="work_details_content">
                      <h4>{singleCategory.title}</h4>
                    </div>
                    <div className="work_details_content text-wrap">
                      
                        <p 
                          dangerouslySetInnerHTML={{
                            __html: singleCategory.description
                              ? singleCategory.description
                              : "Content comming soon"
                          }}
                        ></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 col-12 order-1 order-lg-2">
                  <div className="col-12">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={8}
                      navigation={true}
                      pagination={{
                        clickable: true,
                        dynamicBullets: true
                      }}
                      modules={[Pagination, Navigation]}
                      className="mySwiper"
                      breakpoints={{
                        640: {
                          slidesPerView: 1
                        },
                        768: {
                          slidesPerView: 1
                        },
                        1024: {
                          slidesPerView: 1.1
                        }
                      }}
                    >
                      {singleCategory.image.map((item, index) => (
                        <SwiperSlide key={index}>
                          <div className="work_gellary">
                            <img
                              src={`${base_Url}/uploads/${item}`}
                              alt=""
                              className="img-fluid work_gellary_item"
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
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

export default WorkDetails;
