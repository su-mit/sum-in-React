import React, { useEffect, useForm, useState } from "react";

const Form = () => {
  // const [value, setValues] = useForm({
  //   name: "",
  //   email: "",
  //   password: "",
  // });

  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [sum, setSum] = useState();

  useEffect(() => {
    setSum(parseInt(value1) + parseInt(value2));
  }, [value1, value2]);

  const set1 = (e) => {
    setValue1(e.target.value);
  };

  const set2 = (e) => {
    setValue2(e.target.value);
  };

  return (
    <div>
      <input type="number" placeholder="Vlaue 1" onChange={set1}></input>
      <br />
      <input type="number" placeholder="vakue 2" onChange={set2}></input>
      <br />

      <p>Sum = {sum}</p>
    </div>
  );
};

export default Form;
