import React from "react";

const scale = {
    c: 'Celsius',
    f: 'Fahrenheit',
  };
  
class InputTemperatura extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
      this.props.onChangeTemperatura(e.target.value);
    }
  
    render() {
      const temperatura = this.props.temperatura;
      const scala = this.props.scala;
      return (
        <fieldset>
          <legend>
            Inserisci la temperatura in {scale[scala]}:
          </legend>
          <input
            value={temperatura}
            onChange={this.handleChange}
          />
        </fieldset>
      );
    }
  }

  export default InputTemperatura;