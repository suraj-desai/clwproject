import React from 'react';
import './App.css';
import PlanType from './components/PlanType';
import PlanTerm from './components/PlanTerm';
import PaymentOption from './components/PaymentOption';
import Account from './components/Account';
import CheckboxLabels from './components/CheckboxLabels';
import Graph from './components/Graph';

function App() {
  return (
    <div className="App">
      <section className="plan">
        <p>
          Savings Plan Parameters
        </p>
        <div className="plan__parameters">
            <PlanType/>
            <PlanTerm/>
            <PaymentOption/>
            <div>
              <Account/>
              <CheckboxLabels/>
            </div>
        </div>
      </section>
      <section className="Graph">
        <p>
          Monthly Savings Vs Hourly Commitment
        </p>
        <div className="lineGraph">
          <Graph/>
        </div>
      </section>
      
    </div>
  );
}

export default App;
