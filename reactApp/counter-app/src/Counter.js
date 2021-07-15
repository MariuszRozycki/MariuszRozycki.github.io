import React, {Component} from 'react';
import './Counter.css';
import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
// import Clock from './Clock';
import ClockFunctional from './ClockFunctional';
import Step from './Step';


class Counter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counterValue: this.props.initValue,
      showClock: false,
      stepValue: this.props.inputStepValue,
    };

    this.changeValue = this.changeValue.bind(this); // w przypadku NIE uzycia funkcji strzalkowej
  }

  changeValue = (action) => {
    // console.log('changeValue clicked!');
    

    
    // pierwszy sposob uzycia metody setState
    // this.setState({
    //   counterValue: this.state.counterValue + 1
    // });

    // drugi sposob uzycia metody setState - poprzez przekazanie funkcji, ktora zwroci obiekt z aktualnym stanem
    this.setState((prevState, prevProps) => {
      console.log(action);
      let currentCounterValue = prevState.counterValue;

      if (action === 'add') {
        currentCounterValue += 1;
      } else if (action === 'reinit') {
        currentCounterValue = prevProps.initValue;
      } else if (action === 'add_5') {
        currentCounterValue += 5;
      } else {
        currentCounterValue = 0;
      }

      return({
        counterValue: currentCounterValue
      })
    });
  }

  toggleClock = () => {
    this.setState((prevState) => {
      return({
        showClock: !prevState.showClock
      });
    })
  }

  inputStepValue = () => {
    this.setState((prevState) => {
      return({
        
      })
    });
  }

  render () {
    let clockElement = '';
    if(this.state.showClock) {
      // clockElement = <Clock
      // toggleClockMethod={this.toggleClock} />;
      clockElement = <ClockFunctional toggleClockMethod={this.toggleClock} />;
    } else {
      clockElement = <span onClick={this.toggleClock} className="showClock">show clock</span>
    }


    return (
      <div className="counter">
        ClassCounter:
        <Display displayValue={this.state.counterValue} />
        <ButtonsPanel buttonMethod={this.changeValue} />
        {clockElement}
        <Step stepValue={this.inputStepValue} />
      </div>
    )
  }
 
}

export default Counter;