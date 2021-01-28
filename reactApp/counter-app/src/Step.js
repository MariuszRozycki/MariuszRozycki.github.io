import React, {Component} from 'react';
import './Step.css';

class Step extends Component {

  constructor(props) {
    super(props);

    this.state = {value: '1'};

  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
    console.log('showState', event.target.value);
  }

  render() {
    return(
      <React.Fragment>
        <label className="step-label" htmlFor="step">Krok:</label>
        <input className="step-input" type="number" value={this.state.value} onChange={this.handleChange}  id="step" name="step" min="1" max="5"/>
      </React.Fragment>
    )
  }
}

export default Step;