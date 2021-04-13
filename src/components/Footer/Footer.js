import React from "react";
import "./Footer.css";
import FooterCol from "../FooterCol/FooterCol";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const noNamed = [
    { name: "Lorem Ipsum", link: "/Lorem" },
    { name: "Lorem Ipsum", link: "/Lorem" },
    { name: "Lorem Ipsum", link: "/personal Lorem Ipsumt" },
    { name: "Lorem Ipsum", link: "/Lorem Ipsum extract" },
    { name: "Lorem Ipsum", link: "/Lorem Ipsum" },
  ];
  const ourAddress = [
    { name: "New York - 101010 Hudson", link: "//google.com/map" },
    { name: "Yards", link: "//google.com/map" },
  ];
  const ourWork = [
    { name: "Lorem Ipsum Care", link: "/Lorem Ipsum" },
    { name: "Lorem Ipsum", link: "/Lorem Ipsum" },
    { name: "Lorem Ipsum Personal Lorem Ipsum", link: "/personal-Lorem Ipsum" },
    { name: "Lorem Extraction", link: "/Lorem Ipsum" },
    { name: "Check Lorem Ipsum", link: "/checkup" },
    { name: "Lorem Ipsum", link: "/checkup" },
    { name: "Lorem Ipsum", link: "/checkup" },
  ];
  const services = [
    { name: "Emergency Lorem Ipsum", link: "/Lorem Ipsum" },
    { name: "Check Up", link: "/Lorem Ipsum" },
    {
      name: "Lorem Ipsum of Personal Lorem Ipsum",
      link: "/personal-treatment",
    },
    { name: "Lorem Ipsum Extraction", link: "/Lorem Ipsum-extract" },
    { name: "Lorem Ipsum", link: "/Lorem Ipsum" },
    { name: "Lorem Ipsum", link: "/Lorem Ipsum" },
    { name: "Lorem Ipsum", link: "/Lorem Ipsum" },
  ];
  return (
    <footer className="footer-area clear-both">
      <div className="container pt-5">
        <div className="row py-5">
          <FooterCol key={1} menuTitle={"."} menuItems={noNamed} />
          <FooterCol key={2} menuTitle="Services" menuItems={services} />
          <FooterCol key={3} menuTitle="Oral Work" menuItems={ourWork} />
          <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
            <ul className="social-media list-inline">
              <li className="list-inline-item">
                <a href="//facebook.com">
                  <FontAwesomeIcon
                    className="icon active-icon"
                    icon={faFacebookF}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//google.com">
                  <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//instagram.com">
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <h6>Lorem Ipsum</h6>
              <button className="btn btn-primary">+2025550295</button>
            </div>
          </FooterCol>
        </div>
        <div className="copyRight text-center">
          <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
