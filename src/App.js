import React from 'react';
import './App.css';
import PlanType from './components/PlanType';
import PlanTerm from './components/PlanTerm';
import PaymentOption from './components/PaymentOption';
import Account from './components/Account';

function App() {
  return (
    <div className="App">
      <div className="planType">
        <h2>
          Savings Plan Parameters.
        </h2>
            <PlanType/>
            <PlanTerm/>
            <PaymentOption/>
            <Account/>
      </div>
    </div>
  );
}

export default App;
