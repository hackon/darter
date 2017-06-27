import React, {Component} from 'react';
import './App.css';
import MyButton from "./components/MyButton";
import ButtonGroup from "react-bootstrap/es/ButtonGroup";

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: ''
    };
  }

  handleClick = () => {
    import('./components/MyButton')
      .then((Button) => {
        console.log(Button)
      })
      .catch(error => {
        return error;
      });
  };

  click(value) {
    console.log(value.target)
    // this.setState({value:this.state.value + value})
  }

  render() {
    const self = this;//removes the need to bind "this" in constructor or as props
    return (
      <div className="App">
        {/*<ButtonGroup>*/}
          <ButtonGroup>
            <ButtonGroup vertical>
              <MyButton name="D" click={self.click} disabled={false}/>
              <MyButton name="T" click={self.click} disabled={false}/>
            </ButtonGroup>
            <ButtonGroup vertical>
              <MyButton name="1" click={self.click} disabled={false}/>
              <MyButton name="4" click={self.click} disabled={false}/>
              <MyButton name="7" click={self.click} disabled={false}/>
            </ButtonGroup>
            <ButtonGroup vertical>
              <MyButton name="2" click={self.click} disabled={false}/>
              <MyButton name="5" click={self.click} disabled={false}/>
              <MyButton name="8" click={self.click} disabled={false}/>
            </ButtonGroup>
            <ButtonGroup vertical>
              <MyButton name="3" click={self.click} disabled={false}/>
              <MyButton name="6" click={self.click} disabled={false}/>
              <MyButton name="9" click={self.click} disabled={false}/>
            </ButtonGroup>
          </ButtonGroup>
          <MyButton name="Submit" click={self.click} disabled={false}/>
        {/*</ButtonGroup>*/}

      </div>
    );
  }
}

export default App;
