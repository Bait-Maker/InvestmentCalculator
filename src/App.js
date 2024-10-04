/**
 * * Add components for displayin a header, fetching user input & outputing the results table
 * * Fetch & store user intput (the entered investment parameters)
 * * Derive invesment results with help of the provided utility function
 * * Display investment results in a HTML table (use <table>, <thead>, <tbody> <tr>, <th> <td>)
 * * Conditionallyu display an info message if an invalid duration (<1) was entered
 */
import { useState } from "react";

import UserInput from "./components/UserInput";
import Table from "./components/Table";

function App() {
  const [userData, setUserData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleUserInput(inputIndentifier, newValue) {
    setUserData((prevUserData) => {
      return {
        ...prevUserData,
        [inputIndentifier]: +newValue,
      };
    });
  }

  const inputIsValid = userData.duration >= 1;

  return (
    <main>
      <UserInput handleInput={handleUserInput} data={userData} />
      {!inputIsValid && (
        <p className="center">duration must be greater than zero.</p>
      )}
      {inputIsValid && <Table data={userData} />}
    </main>
  );
}

export default App;
