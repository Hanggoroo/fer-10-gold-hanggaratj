import "../styles/FilterDisabled.css"

const FileterDisabled = () => {
  return (
    <section id="searchBar"
    className="mb-5"
    style={{ marginTop: "-50px" }}>
        <div className="container d-flex justify-content-center">
      <div
        className="card p-3"
        style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", width: "100%" }}
      >
        <div style={{ fontWeight: "Bold", marginBottom: "15px" }}>
          Pencarianmu
        </div>
        <div>
          <div className="row">
             {/* Input Mobil */}
            <div className="col-lg-3 d-flex flex-column justify-content-between">
              <label className="label-disabled">Nama Mobil</label>
              <input
                className="custom-select"
                type="text"
                placeholder=""
                disabled
              />
            </div>
              {/* Akhir input*/}
              {/* Filter Kategori */}
            <div className="col-lg-3 d-flex flex-column justify-content-between">
              <label className="label-disabled" >Kategori</label>
               <div className="custom-select">
                  <select className="custom-select" disabled>
                    <option value="" ></option>
                    <option value="small"> 2 - 4 orang</option>
                    <option value="medium"> 4 - 6 orang</option>
                    <option value="large"> 6 - 8 orang</option>
                  </select>
                  <span class="custom-arrow-kategori"></span>
                </div>
            </div>
              {/* Akhir Kategori */}
              {/* Filter Price */}
            <div className="col-lg-3 d-flex flex-column justify-content-between">
              <label className="label-disabled">Harga</label>
              <div className="custom-select">
              <select
                className="custom-select" disabled>
                <option value=""> </option>
                <option value="0-400000">Rp. 400.000</option>
                <option value="400000-600000">Rp. 400.000 - Rp.600.000</option>
                <option value="600000-Infinity"> Rp. 600.000 </option>
              </select>
              <span class="custom-arrow-price"></span>
              </div>
            </div>
              {/* Akhir Price */}
              {/* Filter Status */}
            <div className="col-lg-3 d-flex flex-column justify-content-between">
              <label className="label-disabled">Status</label>
              <div className="custom-select">
              <select
                className="custom-select" disabled
              >
                <option value="true"></option>
                <option value="false"></option>
              </select>
              <span className="custom-arrow-status"></span>
              </div>
            </div>
              {/* Akhir Status */}
          </div>
        </div>
      </div>
        </div>
    </section>
    
  );
};

export default FileterDisabled;
