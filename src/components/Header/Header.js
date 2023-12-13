import axios from "axios";
import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const base_Url = process.env.REACT_APP_BASE_URL;
  const [data, setData] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  useEffect(() => {
    axios
      .get(`${base_Url}/home`)
      .then((res) => {
        setData(res.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleclick = (item) => {
    if (item.hasDropdown === undefined) {
      document.querySelector(".btn-close").click();
    }
  };
  return (
    <>
      <section className="header">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="ms-auto navbar-brand" to="/">
              <img
                src={`${base_Url}/uploads/${data[0]?.image}`}
                alt=""
                className="img-fluid"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleShow}
            >
              <RxHamburgerMenu />
            </button>
          </div>
        </nav>
      </section>

      <Offcanvas show={show} onHide={handleClose} className="bg-dark">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img
              src={`${base_Url}/uploads/${data[0]?.image}`}
              alt=""
              className="img-fluid"
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li>
              <NavLink to={"/"} onClick={() => handleclick("/")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"work"} onClick={() => handleclick("work")}>
                Work
              </NavLink>
            </li>
            <li>
              <NavLink to={"practise"} onClick={() => handleclick("practise")}>
                Practice
              </NavLink>
            </li>
            <li>
              <NavLink to={"people"} onClick={() => handleclick("people")}>
                People
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"Colleagues"}
                onClick={() => handleclick("Colleagues")}
              >
                Future Colleague
              </NavLink>
            </li>
            <li>
              <NavLink to={"contact"} onClick={() => handleclick("contact")}>
                Contact
              </NavLink>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
