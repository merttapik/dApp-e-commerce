import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faPinterest
} from "@fortawesome/free-brands-svg-icons";

  import {
    faAddressCard,
    faPhone,
    faMailBulk,
    faArrowRight,
    
  } from "@fortawesome/free-solid-svg-icons";



function Footer() {
  return (
    <div>
      {" "}
      <footer className="bg-dark py-5">
        <div className="container">
          <div className="row text-white g-4">
            <div className="col-md-6 col-lg-3">
              <a
                className="text-uppercase text-decoration-none brand text-white"
                href="index.html"
              >
                BlockMarket
              </a>
              <p className="text-white text-muted mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                mollitia quisquam veniam odit cupiditate, ullam aut voluptas
                velit dolor ipsam?
              </p>
            </div>

            <div className="col-md-6 col-lg-3">
              <h5 className="fw-light">Navigations</h5>
              <ul className="list-unstyled">
                <li className="my-3">
                  <a
                    href="#"
                    className="text-white text-decoration-none text-muted"
                  >
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ fontSize: 20, color: "white" }}
                      /> Home
                  </a>
                </li>
                <li className="my-3">
                  <a
                    href="#collection"
                    className="text-white text-decoration-none text-muted"
                  >
                     <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ fontSize: 20, color: "white" }}
                      /> Products
                  </a>
                </li>
                <li className="my-3">
                  <a
                    href="#aboutus"
                    className="text-white text-decoration-none text-muted"
                  >
                     <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ fontSize: 20, color: "white" }}
                      /> AboutUs
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-6 col-lg-3">
              <h5 className="fw-light mb-3">Contact With Us</h5>
              <div className="d-flex justify-content-start align-items-start my-2 text-muted">
                <span className="me-3">
                <FontAwesomeIcon
                        icon={faAddressCard}
                        style={{ fontSize: 20, color: "white" }}
                      />
                 
                </span>
                <span className="fw-light">Kutahya Dumlupınar University</span>
              </div>
              <div className="d-flex justify-content-start align-items-start my-2 text-muted">
                <span className="me-3">
                <FontAwesomeIcon
                        icon={faMailBulk}
                        style={{ fontSize: 20, color: "white" }}
                      />
                </span>
                <span className="fw-light">blockmarket@blockmarket.com</span>
              </div>
              <div className="d-flex justify-content-start align-items-start my-2 text-muted">
                <span className="me-3">
                <FontAwesomeIcon
                        icon={faPhone}
                        style={{ fontSize: 20, color: "white" }}
                      />
                </span>
                <span className="fw-light">+900000000000</span>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <h5 className="fw-light mb-3">Follow Us</h5>
              <div>
                <ul className="list-unstyled d-flex">
                  <li>
                    <a
                      href="#"
                      className="text-white text-decoration-none text-muted fs-4 me-4"
                    >
                     <FontAwesomeIcon
                        icon={faTwitter}
                        style={{ fontSize: 20, color: "white" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white text-decoration-none text-muted fs-4 me-4"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        style={{ fontSize: 20, color: "white" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white text-decoration-none text-muted fs-4 me-4"
                    >
                      <FontAwesomeIcon
                        icon={faFacebook}
                        style={{ fontSize: 20, color: "white" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white text-decoration-none text-muted fs-4 me-4"
                    >
                      <FontAwesomeIcon
                        icon={faPinterest}
                        style={{ fontSize: 20, color: "white" }}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
