import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="footer_navbar">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <table className="table table-bordered">
                <tr>
                  <td colSpan="1" className="border-0">
                    <span className="opacity-0 disabled"></span>
                  </td>
                  <td colSpan="1">
                    <NavLink to={"work"}>Work</NavLink>
                  </td>
                  <td colSpan="1" className="border-0">
                    <span className="opacity-0"></span>
                  </td>
                  <td colSpan="1">
                    <NavLink to={"practise"}>Practice</NavLink>
                  </td>
                  <td colSpan="1" className="border-0">
                    <span className="opacity-0"></span>
                  </td>
                  <td colSpan="1">
                    <NavLink to={"contact"}>Contact</NavLink>
                  </td>
                  <td colSpan="1" className="border-0">
                    <span className="opacity-0">Home</span>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1">
                    <span className="opacity-0 disabled">Home</span>
                  </td>
                  <td colSpan="1" className="border-0">
                    <Link to={""} className="opacity-0"></Link>
                  </td>
                  <td colSpan="1">
                    <NavLink to={"people"}>People</NavLink>
                  </td>
                  <td colSpan="1" className="border-0">
                    <Link to={""} className="opacity-0"></Link>
                  </td>
                  <td colSpan="1">
                    <NavLink to={"Colleagues"}>Future Colleague</NavLink>
                  </td>
                  <td colSpan="1" className="border-0">
                    <Link to={"contact"} className="opacity-0">
                      Contact
                    </Link>
                  </td>
                  <td colSpan="1">
                    <Link to={""} className="opacity-0">
                      Home
                    </Link>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
