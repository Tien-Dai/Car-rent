import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { allCars } from "../../data/carsData";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  // SMART SEARCH
  useEffect(() => {
    if (search.trim() === "") {
      setResults([]);
      return;
    }

    const keywords = search.toLowerCase().split(" ");

    const filtered = allCars.filter((car) => {
      const nameMatch = keywords.some((word) =>
        car.name.toLowerCase().includes(word)
      );

      const typeMatch = keywords.some((word) =>
        car.type.toLowerCase().includes(word)
      );

      const priceMatch = keywords.some((word) => {
        const number = parseInt(word);
        return !isNaN(number) && car.price <= number;
      });

      return nameMatch || typeMatch || priceMatch;
    });

    setResults(filtered);
  }, [search]);

  // CLICK OUTSIDE → CLOSE DROPDOWN
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (id) => {
    setSearch("");
    setResults([]);
    navigate(`/cars/${id}`);
  };

  return (
    <header className="header">
    <Link
      to={`/`}
      style={{ textDecoration: "none" }}
    >
      <div className="logo">MORENT</div>
      </Link>

      
      <div className="search-wrapper" ref={wrapperRef}>
        <svg
          className="search-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>

        <input
          type="text"
          placeholder="Search something here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {results.length > 0 && (
          <div className="search-dropdown">
            {results.map((car) => (
              <div
                key={car.id}
                className="search-item"
                onClick={() => handleSelect(car.id)}
              >
                <img src={car.image} alt={car.name} />
                <div className="search-info">
                  <h4>{car.name}</h4>
                  <p>
                    {car.type} • ${car.price}/day
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RIGHT */}
      <div className="header-icons">
        <span className="icon">❤️</span>
        <span className="icon">🔔</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="avatar"
        />
      </div>
    </header>
  );
};

export default Header;
