import React from 'react';
import './Step.css';

const Step = (props) => {
  
  let step = document.querySelector('.step-input');
  
  console.log(step.value);

  return(
      <React.Fragment>
        <label className="step-label" htmlFor="step">Krok:</label>
        <input className="step-input" type="number" id="step" name="step" min="1" max="5"/>
      </React.Fragment>
    )
  }    

export default Step;