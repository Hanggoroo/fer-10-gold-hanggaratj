import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FilterCariMobilStyleSubmit.css";
import { useState } from "react";
import { Button } from "react-bootstrap";

const FilterCariMobilMain = (props) => {
  const navigate = useNavigate();
  const [namaMobil, setNamaMobil] = useState();
  const [kategori, setKategori] = useState();
  const [harga, setHarga] = useState();
  const [status, setStatus] = useState();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("result submit");
    console.log("namaMobil: ", namaMobil);
    console.log("kategori: ", kategori);
    console.log("harga: ", harga);
    console.log("status: ", status);

    const params = {};

    if (namaMobil) {
      params.name = namaMobil;
    }

    if (kategori) {
      params.kategori = kategori;
    }

    if (harga) {
      params.harga = harga;
    }

    if (status) {
      params.status = status;
    }

    const queryParams = new URLSearchParams(params).toString();

    navigate(`/result?${queryParams}`);
  };

  const handleKeyDown = (evt) => {
    if (evt.key === "Enter") {
      handleSubmit(evt);
    }
  };

  return (
    <section id="searchBar" className="mb-5" style={{ marginTop: "-50px" }}>
      <div className="container d-flex justify-content-center">
        <div
          className="card p-3 "
          style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", width: "100%" }}
        >
          <form onSubmit={handleSubmit}>
            <div className="row p-4">
              {/* Input Nama Mobil */}
              <div className="col-lg-3 d-flex flex-column justify-content-between">
                <label htmlFor="namaMobil" className="label-filter">
                  Nama Mobil
                </label>
                <input
                  className="p-1 customize-select"
                  type="text"
                  id="namaMobil"
                  name="namaMobil"
                  placeholder="Ketik nama/type mobil"
                  onChange={(evt) => setNamaMobil(evt.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
              {/* Akhir Input */}
              {/* Filter Kategori */}
              <div className="col-lg-3 d-flex flex-column justify-content-between">
                <label htmlFor="category" className="label-filter">
                  Kategori
                </label>
                <select
                  className="p-1 customize-select"
                  name="category"
                  id="category"
                  onChange={(evt) => setKategori(evt.target.value)}
                  onKeyDown={handleKeyDown}
                >
                  <option value=""> Masukkan Kapasitas Mobil</option>
                  <option value="small"> 2 - 4 orang</option>
                  <option value="medium"> 4 - 6 orang</option>
                  <option value="large"> 6 - 8 orang</option>
                </select>
              </div>
              {/* Filter Price */}
              <div className="col-lg-3 d-flex flex-column justify-content-between">
                <label htmlFor="price" className="label-filter">
                  Harga
                </label>
                <select
                  className="p-1 customize-select"
                  name="price"
                  id="price"
                  onChange={(evt) => setHarga(evt.target.value)}
                  onKeyDown={handleKeyDown}
                >
                  <option value=""> Masukkan Harga Sewa /Hari</option>
                  <option value="0-400000"> Rp. 400.000</option>
                  <option value="400000-600000">
                    {" "}
                    Rp. 400.000 - Rp.600.000
                  </option>
                  <option value="600000-Infinity"> Rp. 600.000 </option>
                </select>
              </div>
              {/* Akhir Price */}
              {/* Filter Status */}
              <div className="col-lg-2 d-flex flex-column justify-content-between">
                <label htmlFor="status" className="label-filter">
                  Status
                </label>

                <select
                  className="p-1 customize-select"
                  name="status"
                  id="status"
                  onChange={(evt) => setStatus(evt.target.value)}
                  onKeyDown={handleKeyDown}
                >
                  <option value="true">Disewa</option>
                  <option value="false">Belum Disewa</option>
                </select>
              </div>
              {/* Akhir Status */}
              {/* Button Submit */}
              <div className="col-lg-1 d-flex align-items-end">
                <Button
                  className="btn btn-success p-1 rounded-1 customize-select"
                  style={{
                    width: "115%",
                    backgroundColor: "#5CB85F",
                    marginTop: "10px",
                  }}
                  onClick={handleSubmit}
                >
                  Cari Mobil
                </Button>
              </div>
               {/* Akhir Submit */}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FilterCariMobilMain;
