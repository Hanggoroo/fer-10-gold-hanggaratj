import React from "react";


import "../styles/BlueBannerStyle.css";

const BlueBanner = () => {
    return (
        <>
            <div id="BlueBanner">
                <div className="container mt-5">
                    <div className="row justify-content-center ">
                        <div className="col-12 ">
                            <div className="card text-center"style={{border: "0"}}>
                                <div className="cardBody card-body" style={{border: "0"}}>
                                    {/* Content */}
                                    <p className="cardBodyTitle card-title mb-5">Sewa Mobil di (Lokasimu) Sekarang</p>
                                    <p className="cardBodyDesc card-text mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    {/* Akhir Content */}  
                                   
                                    {/* Button */}
                                    <button type="button" className="btn btn-success rounded-1" style={{backgroundColor: "#5CB85F"}}>
                                            Mulai Sewa Mobil
                                    </button>
                                    {/* Button */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlueBanner;
