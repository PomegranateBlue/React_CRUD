import { useState } from "react";
import { COUNTRY_LIST } from "./constant.jsx";
const App = () => {
  const [medalList, setMedalList] = useState([
    { country: "korea", goldMedal: 10, silverMedal: 10, copperMedal: 10 },
  ]);
  const [country, setCountry] = useState("");
  const [goldMedal, setGoldMedal] = useState(0);
  const [silverMedal, setSilverMedal] = useState(0);
  const [copperMedal, setCopperMedal] = useState(0);

  const addMedal = (e) => {
    e.preventDefault();
    const newMedal = {
      country: country,
      goldMedal: goldMedal,
      silverMedal: silverMedal,
      copperMedal: copperMedal,
    };
    setMedalList([...medalList, newMedal]);
  };

  return (
    <div>
      <h1>CRUD Practice</h1>
      <div className="formContainer">
        <form>
          <select>
            <option value={country} onChange={setCountry}>
              국가를 선택하세요
            </option>
            {COUNTRY_LIST.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
          <label>금메달</label>
          <input
            type="number"
            value={goldMedal}
            onChange={(e) => setGoldMedal(e.target.value)}
            required
            min="0"
            max="99"
          />
          <label>은메달</label>
          <input
            type="number"
            value={silverMedal}
            onChange={(e) => setSilverMedal(e.target.value)}
            required
            min="0"
            max="99"
          />
          <label>동메달</label>
          <input
            type="number"
            value={copperMedal}
            onChange={(e) => setCopperMedal(e.target.value)}
            required
            min="0"
            max="99"
          />
          <button type="submit" onClick={addMedal}>
            ADD
          </button>
          <button type="submit">UPDATE</button>
        </form>
      </div>
      <div className="MedalTable-Container">
        <table>
          <thead>
            <tr className="MedalTable-Header">
              <th>국가명</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {medalList.map((medal) => (
                <tr key={medal.country}>
                  <td>{medal.country}</td>
                  <td>{medal.goldMedal}</td>
                  <td>{medal.silverMedal}</td>
                  <td>{medal.copperMedal}</td>
                </tr>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
