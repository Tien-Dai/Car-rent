import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-box left">
        <h2>The Best Platform for Car Rental</h2>
        <p>Ease of doing a car rental safely and reliably.</p>
        <button>Rental Car</button>
        <img src="/public/img/car1.png" alt="car" />
      </div>

      <div className="banner-box right">
        <h2>Easy way to rent a car at a low price</h2>
        <p>Providing cheap car rental services.</p>
        <button>Rental Car</button>
        <img src="/public/img/car2.png" alt="car"  />
      </div>
    </div>
  );
};

export default Banner;
