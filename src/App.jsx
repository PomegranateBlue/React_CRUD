import { useState } from "react";
const App = () => {
  const [medal, setMedal] = useState([
    {
      id: 1,
      country: "한국",
      goldMedal: 3,
      silverMedal: 3,
      copperMedal: 3,
    },
  ]);
  console.log(medal);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setMedal((prev) => ({
      ...prev,
      [name]: name === "country" ? value : parseInt(value, 10),
    }));
  };

  const addMedal = (e) => {
    e.preventDefault();
  };
  const editMedal = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>CRUD Practice</h1>
      <div className="form-container">
        <form onSubmit={addMedal}>
          <label>국가명</label>
          <input type="text" value={medal.country} />
          <label>금메달</label>
          <input
            type="number"
            value={medal.goldMedal}
            onChange={handleInput}
            min="0"
            max="99"
          />
          <label>은메달</label>
          <input
            type="number"
            value={medal.silverMedal}
            onChange={handleInput}
            min="0"
            max="99"
          />
          <label>동메달</label>
          <input
            type="number"
            value={medal.copperMedal}
            onChange={handleInput}
            min="0"
            max="99"
          />
          <button
            type="submit"
            onClick={() => {
              addMedal;
            }}
          >
            추가
          </button>
          <button
            type="button"
            onClick={() => {
              editMedal;
            }}
          >
            수정
          </button>
        </form>
      </div>
      <div className="medalList-container">
        <table></table>
      </div>
    </div>
  );
};

export default App;
