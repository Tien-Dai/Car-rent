import { useParams, useNavigate } from "react-router-dom";
import { allCars } from "../data/carsData";
import "./CarDetail.css";

const CarDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const car = allCars.find((item) => item.id === parseInt(id));

  if (!car) return <h2 className="not-found">Car not found</h2>;

  const handleRentNow = () => {
    navigate(`/rent/${car.id}`);
  };

  return (
    <div className="detail-page">
      
      {/* TOP SECTION */}
      <div className="detail-top">

        {/* LEFT BLUE BANNER */}
        <div className="detail-banner">
          <h2>Sports car with the best design and acceleration</h2>
          <p>
            Safety and comfort while driving a futuristic and elegant sports car
          </p>
          <img src={car.image} alt={car.name} />
        </div>

        {/* RIGHT INFO */}
        <div className="detail-info">
          <div className="info-header">
            <h2>{car.name}</h2>
            <span className="heart">❤️</span>
          </div>

          <div className="rating">
            ⭐⭐⭐⭐☆ <span>440+ Reviewer</span>
          </div>

          <p className="description">{car.description}</p>

          <div className="spec-grid">
            <div>
              <span>Type Car : </span>
              <strong>{car.type}</strong>
            </div>

            <div>
              <span>Capacity : </span>
              <strong>{car.people}</strong>
            </div>

            <div>
              <span>Steering : </span>
              <strong>{car.transmission}</strong>
            </div>

            <div>
              <span>Gasoline : </span>
              <strong>{car.fuel}</strong>
            </div>
          </div>

          <div className="price-section">
            <div>
              <h3>
                ${car.price}.00 <span>/ day</span>
              </h3>
              <p className="old-price">$100.00</p>
            </div>
          </div>

          <button className="rent-btn" onClick={handleRentNow}>
            Rent Now
          </button>
        </div>
      </div>

      {/* REVIEWS */}
      <div className="reviews-section">
        <h3>Reviews ❤️</h3>

        {/* REVIEW 1 */}
        <div className="review-card">
          <div className="review-top">
            <div className="review-left">
              <img
                src={`https://i.pravatar.cc/60?img=12`}
                alt="avatar"
              />
              <div>
                <h4>Alex Stanton</h4>
                <p className="review-role">CEO at Bukalapak</p>
              </div>
            </div>

            <div className="review-right">
              <p className="review-date">21 July 2022</p>
              <div className="stars">★★★★★</div>
            </div>
          </div>

          <p className="review-text">
            We are very happy with the service from the MORENT App. Morent has a
            low price and also a large variety of cars with good and comfortable
            facilities.
          </p>
        </div>

        {/* REVIEW 2 */}
        <div className="review-card">
          <div className="review-top">
            <div className="review-left">
              <img
                src={`https://i.pravatar.cc/60?img=25`}
                alt="avatar"
              />
              <div>
                <h4>Skylar Dias</h4>
                <p className="review-role">CEO at Amazon</p>
              </div>
            </div>

            <div className="review-right">
              <p className="review-date">20 July 2022</p>
              <div className="stars">★★★★☆</div>
            </div>
          </div>

          <p className="review-text">
            Morent has low prices and also a wide variety of cars with good and
            comfortable facilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
