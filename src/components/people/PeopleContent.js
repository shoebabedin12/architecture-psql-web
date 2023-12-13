import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PeopleContent = ({ categoryData, base_Url }) => {
  const [selectedPerson, setSelectedPerson] = useState({});

  const openModal = (person) => {
    setSelectedPerson(person);
  };

  const closeModal = () => {
    setSelectedPerson({});
  };

  if (!Array.isArray(categoryData)) {
    // Handle the case when categoryData is not an array
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="alert alert-primary" role="alert">
              No data available.
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="people-scroll">
        <div className="row">
          {categoryData.length > 0 ? (
            categoryData.map((item) => (
              <div className="col-lg-3" key={item.name}>
                <div className="tabs-content">
                  <figure>
                    <img
                      src={`${base_Url}/uploads/${item.profileImage}`}
                      alt=""
                      className="img-thumbnail"
                    />
                  </figure>
                  <div className="content">
                    <h2
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      onClick={() => openModal(item)}
                    >
                      {item.name}
                    </h2>
                    {/* <p>{item.description}</p> */}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-lg-12 text-center">
              <div className="alert alert-primary" role="alert">
                No data available.
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        className="modal fade modal-lg"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div
            className="modal-content rounded-0"
            style={{ background: "rgba(255, 255, 255, .9)" }}
          >
            <div className="modal-body position-relative">
              <button
                type="button"
                className="btn-close position-absolute top-0 end-0 rounded mt-2 me-2"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              ></button>
              <div class="card border-0" style={{ background: "transparent" }}>
                <div class="row g-0">
                  <div class="col-md-5">
                    <LazyLoadImage
                      src={`${base_Url}/uploads/${selectedPerson.profileImage}`}
                      alt={selectedPerson.image}
                      style={{ objectFit: "cover" }}
                      effect="blur"
                      loading="lazy"
                      className="img-fluid"
                    />
                  </div>
                  <div class="col-md-7">
                    <div class="card-body">
                      <h4 class="card-title">{selectedPerson.name}</h4>
                      <br />
                      <p
                        class="card-text"
                        dangerouslySetInnerHTML={{
                          __html: selectedPerson.description
                            ? selectedPerson.description
                            : "Content comming soon"
                        }}
                      ></p>
                      <div className="row">
                          {selectedPerson.projectImage?.map((item) => (
                            <div className="col-lg-3">
                                <div className="tabs-content">
                                  <img
                                    className="img-fluid w-100 h-100"
                                    src={`${base_Url}/uploads/${item}`}
                                    alt={item.projectImage}
                                  />
                                </div>
                                <div className="content">
                                  <p>{item.title}</p>
                                </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PeopleContent;
