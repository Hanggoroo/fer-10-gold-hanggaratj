import React from "react";

import icon_facebook from "../assets/icon_facebook.png";
import icon_instagram from "../assets/icon_instagram.png";
import icon_twitter from "../assets/icon_twitter.png";
import icon_mail from "../assets/icon_mail.png";
import icon_twitch from "../assets/icon_twitch.png";
import LogoNav from "../assets/logonavbar.jpg";

import "../styles/FooterStyle.css";

const Footer = () => {
  return (
    <>
      <div id="footer" >
        <br />
        <div className="container mt-5">
          <div className="row">
            {/* Address */}
            <div className="footerAddress col-lg-3 col-md-6 col-sm-12 mb-5">
              <div className="row">
                <div className="col">
                  <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>binarcarrental@gmail.com</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>081-233-334-808</p>
                </div>
              </div>
            </div>
            {/* Akhir Address */}

            {/* Navigation */}
            <div className="footerNavigation col-lg-3 col-md-6 col-sm-12 mb-5">
              <div className="row">
                <div className="col">
                  <a className="m-2" href="#ourServices">Our Services</a>
                  <br></br>
                  <a className="m-2" href="#whyUs">Why Us</a>
                  <br></br>
                  <a className="m-2" href="#testimony">Testimonial</a>
                  <br></br>
                  <a className="m-2" href="#fAQ">FAQ</a>
                  <br></br>
                </div>
              </div>
            </div>
            {/* Akhir Navigation */}

            {/* Sosmed */}
            <div className="footerSosmed col-lg-3 col-md-6 col-sm-12 mb-5">
              <div className="row">
                <div className="col">
                  <p className="footerSosmedTitle">Connect with us</p>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <img alt="icon facebook" src={icon_facebook} />
                </div>
                <div className="col-2">
                  <img alt="icon instagram" src={icon_instagram} />
                </div>
                <div className="col-2">
                  <img alt="icon twitter" src={icon_twitter} />
                </div>
                <div className="col-2">
                  <img alt="icon email" src={icon_mail} />
                </div>
                <div className="col-2">
                  <img alt="icon twitch" src={icon_twitch} />
                </div>
              </div>
            </div>
            {/* Akhir Sosmed */}

            {/* Copyright */}
            <div className="footerCopyright col-lg-3 col-md-6 col-sm-12 mb-5">
              <div className="row">
                <div className="col">
                  <p className="footerCopyrightTitle">Copyright Binar 2023</p>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <img
                    alt="logo"
                    src={LogoNav}
                    style={{ width: "100%", height: "36px" }}
                  />
                </div>
              </div>
            </div>
            {/* Akhir Copyright */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
