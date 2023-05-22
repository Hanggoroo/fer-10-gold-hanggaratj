
import '../App.css';
import FilterCariMobilSubmit from '../components/FilterCariMobilSubmit';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/Hero';
import { Container } from 'react-bootstrap';


const Search =()=> {
  return (
    <section>
      <Navbar />
      <HeroSection withSearchButton={false} />
      <FilterCariMobilSubmit />
      <br></br>
      <Container>
        <br></br>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
      </section>
  );
}

export default Search