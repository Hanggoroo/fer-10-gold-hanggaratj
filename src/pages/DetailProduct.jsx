import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Container, Col, Row } from "react-bootstrap";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FileterDisabled from "../components/FilterDisabled";


const DetailMobil = () => {
  const { id } = useParams();
  const [car, setCar] = useState([]);

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await axios.get(
          `https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`
        );
        setCar(response.data);
      } catch (error) {
        console.log("error > ", error);
      }
    };

    fetchCarData();
  }, [id]);

  return (
    <div>
      <Navbar />
      <div
        style={{ backgroundColor: "#F1F3FF", height: "100px", border: "5px" }}
      ></div>
      <Container>
        <FileterDisabled />
        <Row>
          <Col className="col-xl-8 col-lg-8 col-md-12 col-sm-12  col-es-12 col-12">
            <Card
              className="p-3"
              style={{
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                width: "100%",
              }}
            >
              <div>
                <h3>Tentang Paket</h3>
              </div>
              <div>
                <h4>Include</h4>
                <ul>
                  <li>
                    Apa saja yang termasuk dalam paket misal durasi max 12 jam
                  </li>
                  <li>Sudah termasuk bensin selama 12 jam</li>
                  <li>Sudah termasuk Tiket Wisata</li>
                  <li>Sudah termasuk pajak</li>
                </ul>
              </div>
              <div>
                <h4>Exclude</h4>
                <ul>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
              </div>
              <div>
                <h4>Refund, Reschedule, Overtime</h4>
                <ul>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
              </div>
            </Card>
          </Col>
          <Col className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-es-12 col-12 ">
            {car ? (
              <Card
                className="rounded-2"
                style={{
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                  width: "100%",
                }}
              >
                {car && car.image ? (
                  <Card.Img
                    className="mx-auto d-block"
                    src={car.image}
                    style={{ width: "90%", height: "auto" }}
                  />
                ) : (
                  <div
                    className="rounded-2"
                    style={{
                      minHeight: "5rem",
                      background: "gray",
                      borderRadius: "10px",
                    }}
                  >
                    Default Background
                  </div>
                )}
                <Card.Body>
                  <Card.Title>
                    {car.id} {car.name}
                  </Card.Title>
                  <Card.Text>
                    {car.category && car.category.toLowerCase() === "small"
                      ? "2-4 orang"
                      : car.category && car.category.toLowerCase() === "medium" 
                      ? "4-6 orang"
                      : car.category && car.category.toLowerCase() === "large"
                      ? "6-8 orang"
                      : car.category === ""
                      ? "Undifined"
                      : car.category}
                  </Card.Text>
                  <br></br>
                  <Card.Text className="d-flex justify-content-between fw-bold" style={{}}>
                    <a>Total</a> <a>{car.price}</a></Card.Text>
                </Card.Body>
              </Card>
            ) : (
              <p>Loading...</p>
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default DetailMobil;
