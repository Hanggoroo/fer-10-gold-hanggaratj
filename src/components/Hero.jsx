import React from "react";
import "../styles/HeroStyle.css";
import carImage from "../assets/carImage.png";
import { useNavigate } from "react-router-dom";

const Hero = (props) => {
  const navigate = useNavigate();
  const {
    withSearchButton = true,
    withHeroContent = true,
 } = props;
  return (
    <>
      <div className="hero">
        <div className="container mt">
        {withHeroContent && (
          <div className="row justify-content-center">
            {/* Content */}
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="row mb-4 mt-5">
                <div className="col-12">
                  <p className="jumbotroonTitle">
                    Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                  </p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-12">
                  <p className="jumbotroonDesc">
                    Selamat datang di Binar Car Rental. Kami menyediakan mobil
                    kualitas terbaik dengan harga terjangkau. Selalu siap
                    melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                  </p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-12">
                  <div className="Button">
                    {withSearchButton && (
                      <button
                      type="button"
                      className="btn btn-success btn-sm rounded-1 p-2"
                      onClick={() => navigate("/Search")}
                      style={{backgroundColor: "#5CB85F", border: "0px"}}
                    >
                      Mulai Sewa Mobil
                    </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* Akhir Content */}

            {/* Image */}
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img className="jumbotroonImage" src={carImage} alt="Car Image" />
            </div>
            {/* Akhir Image */}
          </div>
        )}
        </div>
      </div>
    </>
  );
};

export default Hero;
