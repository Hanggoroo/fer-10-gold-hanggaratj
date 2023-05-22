
import "../App.css";
import Hero from "../components/Hero";
import OurServices from "../components/Ourservice";
import WhyUs from "../components/WhyUS";
import Testimoni from "../components/Testimonial";
import FAQ from "../components/FAQ";
import BlueBanner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Home =()=> {
  return (
    <section>
      <Navbar/>
      <Hero/>
      <br></br>
      <br></br>
      <OurServices />
      <br></br>
      <WhyUs />
      <br></br>
      <Testimoni />
      <BlueBanner />
      <FAQ />
      <Footer />
      </section>
  );
}

export default Home