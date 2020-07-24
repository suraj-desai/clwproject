import React from 'react';
import './App.css';
import PlanType from './components/PlanType';
import PlanTerm from './components/PlanTerm';
import PaymentOption from './components/PaymentOption';
import Account from './components/Account';
import CheckboxLabels from './components/CheckboxLabels';
import Graph from './components/Graph';
import Filters from './components/Filters'
import GraphInfo from './components/GraphInfo';

function App() {
  return (
    <div className="app">
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
      <section className="graph">
        <div className="graphLeft">
          <p>
            Monthly Savings Vs Hourly Commitment
          </p>
          <div className="lineGraph">
            <Graph/>
            <div className="filters">
              <p>
                Filters by recent days:
              </p>
              <div className="filterDays">
               <Filters/>
              </div>
            
            </div>
          
          </div>
        </div>
        <div className="graphInfo">
          <GraphInfo/>
        </div>
      </section>
      
    </div>
  );
}

export default App;
