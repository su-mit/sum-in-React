import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [value1, setValue1] = useState(0); // State 1
  const [value2, setValue2] = useState(0); // State 2
  const [sum, setSum] = useState(); // State 3

  useEffect(
    () => {
      // Sums teh value
      setSum(parseInt(value1) + parseInt(value2));
    },
    // Sum upon changing the state of value1 and value 2
    [value1, value2]
  );

  const set1 = (e) => {
    setValue1(e.target.value);
  };

  const set2 = (e) => {
    setValue2(e.target.value);
  };
  return (
    <div className="field">
      <input type="number" placeholder="Vlaue 1" onChange={set1} />
      <input type="number" placeholder="vakue 2" onChange={set2} />
      <p>Sum = {sum}</p>
    </div>
  );
};

export default App;
