import { Link } from "react-router-dom";
import "./CarCard.css";

const CarCard = ({ car }) => {
  return (
    <Link
      to={`/cars/${car.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="car-card">
        <div>
          <div className="car-card-header">
            <div>
              <h3>{car.name}</h3>
              <p className="car-type">{car.type}</p>
            </div>
            <span className="heart">❤️</span>
          </div>

          <div className="car-image">
            <img src={car.image} alt={car.name} />
          </div>

          <div className="car-info">
            <span>{car.fuel}</span>
            <span>{car.transmission}</span>
            <span>{car.people}</span>
          </div>
        </div>

        <div className="car-footer">
          <div className="price">
            ${car.price}.00 <span>/ day</span>
          </div>
          <button className="rent-btn">Rent</button>
        </div>
      </div>
    </Link>
  );
};

export default CarCard;
