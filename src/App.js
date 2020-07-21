import React from 'react';
import './App.css';
import PlanType from './components/PlanType';
import PlanTerm from './components/PlanTerm';
import PaymentOption from './components/PaymentOption';
import Account from './components/Account';
import CheckboxLabels from './components/CheckboxLabels';

function App() {
  return (
    <div className="App">
      <div className="plan">
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
      </div>
      <div>

      </div>
    </div>
  );
}

export default App;
