export default function UserInput({ handleInput, data }) {
  function handleOnChange(inputIndentifier, newValue) {
    handleInput(inputIndentifier, newValue);
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>initial invesment</label>
          <input
            type="number"
            required
            value={data.initialInvestment}
            onChange={(event) =>
              handleOnChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>annual investemnt</label>
          <input
            type="number"
            required
            value={data.annualInvestment}
            onChange={(event) =>
              handleOnChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>expected return</label>
          <input
            type="number"
            required
            value={data.expectedReturn}
            onChange={(event) =>
              handleOnChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>duration</label>
          <input
            type="number"
            required
            value={data.duration}
            onChange={(event) => handleOnChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
