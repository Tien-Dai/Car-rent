import { useParams, useNavigate } from "react-router-dom";
import { allCars } from "../data/carsData";
import "./RentalPage.css";

const RentalPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const car = allCars.find((item) => item.id === parseInt(id));

  if (!car) return <h2>Car not found</h2>;

  const handleRent = () => {
    alert("Thuê xe thành công !!!");
    navigate("/"); 
  };

  return (
    <div className="rental-page">
      <div className="rental-container">

        
        <div className="rental-form">
          <h2>Billing Info</h2>

          <div className="form-grid">
            <input type="text" placeholder="Your name" />
            <input type="text" placeholder="Phone number" />
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="Town or city" />
          </div>

          <h2>Rental Info</h2>

          <div className="form-grid">
            <input type="text" placeholder="Pick up location" />
            <input type="date" />
            <input type="text" placeholder="Drop off location" />
            <input type="date" />
          </div>
        </div>

        {/* RIGHT SUMMARY */}
        <div className="rental-summary">
          <h3>Rental Summary</h3>

          <img
            src={car.image}
            alt={car.name}
            className="summary-image"
          />

          <h4>{car.name}</h4>

          <p>Subtotal: ${car.price}.00</p>
          <p>Tax: $0</p>

          <h2 className="total-price">
            Total: ${car.price}.00
          </h2>

          <button className="rent-car-btn" onClick={handleRent}>
            Rent Car
          </button>
        </div>

      </div>
    </div>
  );
};

export default RentalPage;
