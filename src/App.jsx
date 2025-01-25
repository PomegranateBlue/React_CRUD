import { useState } from "react";
import { COUNTRY_LIST } from "./constant.jsx";
const App = () => {
  const [medalList, setMedalList] = useState([{ country: "korea" }]);
  const [country, setCountry] = useState("");
  return (
    <div>
      <h1>CRUD Practice</h1>
      <div className="formContainer">
        <form onSubmit="submit">
          <select value={country}>
            <option>국가를 선택하세요</option>
            {COUNTRY_LIST.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>

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
