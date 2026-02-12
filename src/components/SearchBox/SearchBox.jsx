import "./SearchBox.css";

const SearchBox = () => {
  return (
    <div className="search-box">
      <div>
        <label>Pick - Up</label>
        <input placeholder="Location" />
      </div>

      <div>
        <label>Date</label>
        <input type="date" />
      </div>

      <div>
        <label>Time</label>
        <input type="time" />
      </div>

      <button>🔄</button>

      <div>
        <label>Drop - Off</label>
        <input placeholder="Location" />
      </div>

      <div>
        <label>Date</label>
        <input type="date" />
      </div>

      <div>
        <label>Time</label>
        <input type="time" />
      </div>
    </div>
  );
};

export default SearchBox;
