import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import SearchBox from "../components/SearchBox/SearchBox";
import CarSection from "../components/CarSection/CarSection";
import Footer from "../components/Footer/Footer";
import cars, { Recomendcars } from "../data/carsData";


const Home = () => {
  console.log("Popular:", cars.length);       
  console.log("Recommend:", Recomendcars.length); 

  return (
    <>
      <Header />
      <Banner />
      <SearchBox />

      <CarSection title="Popular Car" cars={cars} showMore={false}/>
      <CarSection title="Recommendation Car" cars={Recomendcars} showMore={true} />
      <Footer />
    </>
  );
};

export default Home;
