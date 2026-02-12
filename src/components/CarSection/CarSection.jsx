import CarCard from "../CarCard/CarCard";
import "./CarSection.css";
import { Link } from "react-router-dom";

const CarSection = ({ title, cars, showMore }) => {
  return (
    <section className="car-section">
      <div className="section-header">
        <h2>{title}</h2>
      </div>

      <div className="car-grid">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>


      <div className="show-more-wrapper">
        <Link to="/cars">
          <button className="show-more-btn">
            ~ Show more car ~
          </button>
        </Link>
      </div>

    </section>
  );
};

export default CarSection;
