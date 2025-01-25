import { useState } from "react";
import { COUNTRY_LIST } from "./constant.jsx";
const App = () => {
  const [medalList, setMedalList] = useState([{ country: "korea" }]);
  const [country, setCountry] = useState("");
  const [goldMedal, setGoldMedal] = useState(0);
  const [silverMedal, setSilverMedal] = useState(0);
  const [copperMedal, setCopperMedal] = useState(0);

  return (
    <div>
      <h1>CRUD Practice</h1>
      <div className="formContainer">
        <form>
          <select value={country} onChange={setCountry}>
            <option>국가를 선택하세요</option>
            {COUNTRY_LIST.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={goldMedal}
            onChange={(e) => setGoldMedal(e.target.value)}
            required
            min="0"
            max="99"
          />
          <input
            type="number"
            value={silverMedal}
            onChange={(e) => setSilverMedal(e.target.value)}
            required
            min="0"
            max="99"
          />
          <input
            type="number"
            value={copperMedal}
            onChange={(e) => setCopperMedal(e.target.value)}
            required
            min="0"
            max="99"
          />
          <button type="submit">ADD</button>
          <button type="submit">UPDATE</button>
        </form>
      </div>
      <div className="MedalTableContainer">
        {" "}
        <ul>
          <li>item</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
