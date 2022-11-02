import React from "react";
import SignIn from "./signin";
import Image from "next/image";

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-4 fixed-top">
        <div className="container">
          <a
            className="navbar-brand d-flex justify-content-between align-items-center order-lg-0"
            href="#"
          >
            <Image src="/logoicon.png" alt="me" width="64" height="64" />
            <span className="text-uppercase fw-lighter ms-2">BlockMarket</span>
          </a>

          
            
          

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse order-lg-1" id="navMenu">
            <ul className="navbar-nav mx-auto text-center">
              <li className="nav-item px-2 py-2 " id="">
                <a className="nav-link text-uppercase text-dark" href="#header">
                  Home
                </a>
              </li>
              <li className="nav-item px-2 py-2">
                <a className="nav-link text-uppercase text-dark" href="#collection">
                  Products
                </a>
              </li>
              <li className="nav-item px-2 py-2">
                <a className="nav-link text-uppercase text-dark" href="#about">
                  About Us
                </a>
              </li>
              <li className="nav-item px-2 py-2">
                <a className="nav-link text-uppercase text-dark" href="/user">
                  User
                </a>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-primary m-3 position-relative"
            >
              <i className="fa fa-shopping-cart">Swap Coin to AO </i>
            </button>

            <SignIn />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
