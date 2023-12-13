import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialIcon = () => {
  const base_Url = process.env.REACT_APP_BASE_URL;
  const [data, setData] = useState({});
  // useEffect(() => {
  //   const api = axios.create({
  //     baseURL: process.env.REACT_APP_BASE_URL,
  //     withCredentials: true
  //   });

  //   async function getUser() {
  //     await api
  //       .get(`api/basic-fe`)
  //       .then((response) => {
  //         //   console.log(response);
  //         setData(response.data[0]);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }

  //   getUser();
  // }, []);

  return (
    <>
      <ul className="social-icon">
        <li>
          <Link to={data.facebook} target="_blank">
            <FaFacebookF />
          </Link>
        </li>
        <li>
          <Link to={data.instagram} target="_blank">
            <AiOutlineInstagram />
          </Link>
        </li>
        <li>
          <Link to={data.linkedin} target="_blank">
            <FaLinkedinIn />
          </Link>
        </li>
        <li>
          <Link to={data.youtube} target="_blank">
            <AiFillYoutube />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default SocialIcon;
