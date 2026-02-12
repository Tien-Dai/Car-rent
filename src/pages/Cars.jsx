import { useState } from "react";
import { allCars } from "../data/carsData";
import CarCard from "../components/CarCard/CarCard";
import "./Cars.css";

const Cars = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedCapacity, setSelectedCapacity] = useState([]);
  const [maxPrice, setMaxPrice] = useState(200);

  // Toggle type checkbox
  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  // Toggle capacity checkbox
  const handleCapacityChange = (cap) => {
    setSelectedCapacity((prev) =>
      prev.includes(cap)
        ? prev.filter((c) => c !== cap)
        : [...prev, cap]
    );
  };

  // FILTER LOGIC
  const filteredCars = allCars.filter((car) => {
    const matchType =
      selectedTypes.length === 0 || selectedTypes.includes(car.type);

    // car.people = "2 People"
    const carCapacityNumber = car.people?.split(" ")[0];

    const matchCapacity =
      selectedCapacity.length === 0 ||
      selectedCapacity.includes(carCapacityNumber);

    const matchPrice = car.price <= maxPrice;

    return matchType && matchCapacity && matchPrice;
  });

  return (
    <div className="cars-page">
      
      {/* ================= SIDEBAR ================= */}
      <div className="sidebar">
        <h4>TYPE</h4>

        {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map(
          (type) => (
            <label key={type} className="checkbox-item">
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => handleTypeChange(type)}
              />
              <span>{type}</span>
            </label>
          )
        )}

        <h4>CAPACITY</h4>

        {["2", "4", "6", "8"].map((cap) => (
          <label key={cap} className="checkbox-item">
            <input
              type="checkbox"
              checked={selectedCapacity.includes(cap)}
              onChange={() => handleCapacityChange(cap)}
            />
            <span>{cap} Person</span>
          </label>
        ))}

        <h4>PRICE</h4>

        <input
          type="range"
          min="0"
          max="200"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />

        <p>Max. ${maxPrice}.00</p>
      </div>

      {/* ================= CAR GRID ================= */}
      <div className="cars-grid">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))
        ) : (
          <p>No cars found</p>
        )}
      </div>

    </div>
  );
};

export default Cars;
