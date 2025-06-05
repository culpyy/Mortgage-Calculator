import React, { useState } from 'react';
import './App.css';
function App() {
  const [balance, setBalance] = useState('');
  const [rate, setRate] = useState('');
  const [term, setTerm] = useState('15');
  const [output, setOutput] = useState('');

  const calculate = (balance, rate, term) => {
    const principal = parseFloat(balance);
    const monthlyRate = parseFloat(rate) / 100 / 12;
    const numberOfPayments = parseInt(term) * 12;

    if (principal > 0 && monthlyRate > 0 && numberOfPayments > 0) {
      const x = Math.pow(1 + monthlyRate, numberOfPayments);
      const monthlyPayment = (principal * x * monthlyRate) / (x - 1);
      const formatted = `$${monthlyPayment.toFixed(2)} is your payment`;
      setOutput(formatted);
    } else {
      setOutput('Please enter valid values');
    }
  };

  return (
    <>
      <h1>Mortgage Calculator</h1>

      <label htmlFor="balance">Loan Balance:</label>
      <input
        id="balance"
        type="number"
        data-testid="balance"
        value={balance}
        onChange={(e) => setBalance(e.target.value)}
      />

      <label htmlFor="rate">Interest Rate (APR):</label>
      <input
        id="rate"
        type="number"
        step="0.01"
        data-testid="rate"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
      />

      <label htmlFor="term">Loan Term (years):</label>
      <select
        id="term"
        data-testid="term"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      >
        <option value="15">15</option>
        <option value="30">30</option>
      </select>

      <button
        data-testid="submit"
        onClick={() => calculate(balance, rate, term)}
      >
        Calculate
      </button>

      <div id="output" data-testid="output">
        {output}
      </div>
    </>
  );
}

export default App
