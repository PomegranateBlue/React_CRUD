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
  const [inputData, setInputData] = useState({
    country: "",
    goldMedal: 0,
    silverMedal: 0,
    copperMedal: 0,
  });
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
    if (!inputData.country) {
      alert("국가명을 입력하세요");
      return;
    }
    const newMedal = {
      id: Date.now(),
      ...inputData,
    };
    setMedal((prev) => [...prev, newMedal]);
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
          <input type="text" value={inputData.country} onChange={handleInput} />
          <label>금메달</label>
          <input
            type="number"
            value={inputData.goldMedal}
            onChange={handleInput}
            min="0"
            max="99"
          />
          <label>은메달</label>
          <input
            type="number"
            value={inputData.silverMedal}
            onChange={handleInput}
            min="0"
            max="99"
          />
          <label>동메달</label>
          <input
            type="number"
            value={inputData.copperMedal}
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
        <table>
          <thead>
            <tr>
              <th>국가명</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
            </tr>
          </thead>
          <tbody>
            {medal.map((item) => (
              <tr key={item.id}>
                <td>{item.country}</td>
                <td>{item.goldMedal}</td>
                <td>{item.silverMedal}</td>
                <td>{item.copperMedal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
