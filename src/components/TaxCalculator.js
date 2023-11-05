import React, { useState, useEffect } from "react";
import "./TaxCalculator.css";

function TaxCalculator() {
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [salePrice, setSalePrice] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [investmentType, setInvestmentType] = useState("Long Term");
  const [annualIncome, setAnnualIncome] = useState(45001);
  const [taxRate, setTaxRate] = useState("");
  const [capitalGainsAmount, setCapitalGainsAmount] = useState(0);
  const [longTermGainsDiscount, setLongTermGainsDiscount] = useState(0);
  const [netCapitalGains, setNetCapitalGains] = useState(0);
  const [taxToPay, setTaxToPay] = useState(0);

  useEffect(() => {
    const gains = salePrice - purchasePrice - expenses;
    setCapitalGainsAmount(gains);

    const calculateTaxRate = () => {
        debugger;
        console.log("annualIncome =>", annualIncome)
        if (annualIncome >= 180001) {
          return "$51,667 + 45.5% of excess over $180,000";
        } else if (annualIncome >= 120001) {
          return "$29,467 + 37% of excess over $120,000";
        } else if (annualIncome >= 45001) {
          return "$5,092 + 32.5% of excess over $45,000";
        } else if (annualIncome >= 18201) {
          return "Nil + 19% of excess over $18,200";
        } else {
          return "0%";
        }
      };
      
      
    setTaxRate(calculateTaxRate);

    if (investmentType === "Long Term" && gains > 0) {
      setLongTermGainsDiscount(gains * 0.5);
    } else {
      setLongTermGainsDiscount(0);
    }

    if (investmentType === "Long Term") {
      setNetCapitalGains(gains - parseFloat(longTermGainsDiscount));
    } else {
      setNetCapitalGains(gains);
    }

    const calculateTaxToPay = () => {
        debugger;
        const taxRateParts = taxRate.match(/([\d.]+)%/);
        if (taxRateParts) {
        let percentPart = taxRateParts ? parseFloat(taxRateParts[1]) : "0";
         percentPart = percentPart / 100;
         console.log("percentPart => ", percentPart)
        if (annualIncome >= 180001) {
          let newRes =  (netCapitalGains * percentPart).toFixed(2);
          return newRes;
        } else if (annualIncome >= 120001) {
            let newRes =  (netCapitalGains * percentPart).toFixed(2);
            return newRes;
        } else if (annualIncome >= 45001) {
            let newRes =  (netCapitalGains * percentPart).toFixed(2);
            return newRes;
        } else if (annualIncome >= 18201) {
            let newRes =  (netCapitalGains * percentPart).toFixed(2);
            return newRes;
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    };

    setTaxToPay(calculateTaxToPay());
  }, [annualIncome, purchasePrice, salePrice, expenses, investmentType, longTermGainsDiscount, taxRate, netCapitalGains, capitalGainsAmount,taxToPay]);

  return (
    <section className="tax-calculator">
      <h2>Free Crypto Tax Calculator for Australia</h2>
      <div className="row">
        <div className="field">
          <label>Enter purchase price of Crypto ($)</label>
          <input type="number" value={purchasePrice} onChange={(e) => setPurchasePrice(e.target.value)} />
        </div>
        <div className="field">
          <label>Enter sale price of Crypto ($)</label>
          <input type="number" value={salePrice} onChange={(e) => setSalePrice(e.target.value)} />
        </div>
      </div>
      <div className="row">
        <div className="field">
          <label>Enter your Expenses ($)</label>
          <input type="number" value={expenses} onChange={(e) => setExpenses(e.target.value)} />
        </div>
        <div className="field">
          <label>Investment Type</label> 
          <div className="investment-buttons">
            <button
              className={investmentType === "Short Term" ? "active" : ""}
              onClick={() => setInvestmentType("Short Term")}
            >
              Short Term
            </button>
            <button
              className={investmentType === "Long Term" ? "active" : ""}
              onClick={() => setInvestmentType("Long Term")}
            >
              Long Term
            </button>
          </div>
          <div className="investment-details-tags">
            <p>≤ 12 months</p>
            <p>{">"} 12 months</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="field">
          <label>Select Your Annual Income</label>
          <select
            value={annualIncome}
            onChange={(e) => {
                debugger;
                setAnnualIncome(e.target.value)}
            }
          >
            <option value={0}>$0 - $18,200</option>
            <option value={18201}>$18,201 - $45,000</option>
            <option value={45001}>$45,001 - $120,000</option>
            <option value={120001}>$120,001 - $180,000</option>
            <option value={180001}>$180,001+</option>
          </select>
        </div>
        <div className="field">
          <label>Tax Rate</label>
          <p className="simple-text">{taxRate}</p>
        </div>
      </div>
      {investmentType === "Long Term" && (
        <div className="row">
          <div className="field">
            <label>Capital gains amount</label>
            <p>{capitalGainsAmount}</p>
          </div>
          <div className="field">
            <label>Discount for long term gains</label>
            <p>{longTermGainsDiscount}</p>
          </div>
        </div>
      )}
      <div className="row">
        <div className="field result" style={{ backgroundColor: "#0eba83" }}>
          <label>Net Capital gains tax amount</label>
          <p>{netCapitalGains}</p>
        </div>
        <div className="field result">
          <label>The tax you need to pay</label>
          <p>{taxToPay}</p>
        </div>
      </div>
    </section>
  );
}

export default TaxCalculator;
