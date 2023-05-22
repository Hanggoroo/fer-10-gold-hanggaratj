import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import FilterCariMobil from "../components/FilterCariMobil";
import HeroSection from "../components/Hero";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchCarsData = async () => {
    try {
      const name = searchParams.get("name");
      const category = searchParams.get("kategori");
      const isRented = searchParams.get("status");
      const harga = searchParams.get("harga");

      const params = {};

      if (name) {
        params.name = name;
      }

      if (category) {
        params.category = category;
      }

      if (isRented) {
        params.isRented = isRented;
      }

      if (harga) {
        const [minPrice, maxPrice] = harga.split("-");
        params.minPrice = minPrice ? parseInt(minPrice) : 0;
        params.maxPrice = maxPrice ? parseInt(maxPrice) : Infinity;
      }

      const response = await axios.get(
        "https://bootcamp-rent-cars.herokuapp.com/customer/v2/car",
        {
          params: params,
        }
      );
      setData(response.data.cars);
    } catch (error) {
      console.log("error > ", error);
    }
  };
  
  useEffect(() => {
    fetchCarsData();
  }, [searchParams]);

  const handleSelectCar = (carId) => {
    navigate(`/detailproduct/${carId}`);
  };

  return (
    <section>
      <Navbar />
      <div style={{backgroundColor:"#F1F3FF", height: "100px", border: "5px"}}></div>
      <Container>
      <FilterCariMobil/>
        <Row>
          {data.length > 0 ? (
            data.map((car) => (
              <Col lg={4} key={car.id}>
                <Card className="rounded-2" style={{margin: "10px"}}>
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
                      {car.name} {car.id}
                    </Card.Title>
                    <Card.Text>{car.price} / hari</Card.Text>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </Card.Text>
                    <Button
                      onClick={() => handleSelectCar(car.id)}
                      type="button"
                      variant="success"
                      className="d-block rounded-1"
                      style={{ width: "100%", backgroundColor: "#5CB85F"}}
                    >
                      Pilih Mobil
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <>Kata kunci {searchParams.get("name")} tidak ada</>
          )}
        </Row>
      </Container>
      <Footer />
    </section>
  );
};

export default SearchResult;
