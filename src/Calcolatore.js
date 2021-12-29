
import React from 'react';
import InputTemperatura from './InputTemperatura.js'


/**
 * @param {int} props 
 * @returns {string}
 */
function VerdettoEbollizione(props) {
    if (props.celsius >= 100) {
      return <p>L'acqua bollirebbe.</p>;
    }
    return <p>L'acqua non bollirebbe.</p>;
  }

  /**
   * @param {float} fahrenheit valore
   * @returns {float} valore convertito
   */
function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }
  
  /**
   * @param {float} celsius valore
   * @returns {float} valore convertito
   */
  function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }
  /**
   * @param {float} temperatura valore da convertire
   * @param {string} converti tipo di conversione
   * @returns {string} ritorna il valore convertito arrotondato e casting in stringa
   */
  function conversione(temperatura, converti) {
    const input = parseFloat(temperatura);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = converti(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
// classe Calcolatore estende il componente di react passa la props alla classe genitore
class Calcolatore extends React.Component {
    constructor(props) {
      super(props);

    // assegna il risultato della funzione 
      this.handleChangeCelsius = this.handleChangeCelsius.bind(this);
      this.handleChangeFahrenheit = this.handleChangeFahrenheit.bind(
        this
      );
      // inizializza gli state
      this.state = {temperatura: '', scala: 'c'};
    }
  // imposta state
    handleChangeCelsius(temperatura) {
      this.setState({scala: 'c', temperatura});
    }
  
    handleChangeFahrenheit(temperatura) {
      this.setState({scala: 'f', temperatura});
    }
  //
    render() {
      const scala = this.state.scala;
      const temperatura = this.state.temperatura;
      const celsius =
        scala === 'f'
          ? conversione(temperatura, toCelsius)
          : temperatura;
      const fahrenheit =
        scala === 'c'
          ? conversione(temperatura, toFahrenheit)
          : temperatura;
  
      return (
        <div>
          <InputTemperatura
            scala="c"
            temperatura={celsius}
            onChangeTemperatura={this.handleChangeCelsius}
          />
          <InputTemperatura
            scala="f"
            temperatura={fahrenheit}
            onChangeTemperatura={this.handleChangeFahrenheit}
          />
          <VerdettoEbollizione
            celsius={parseFloat(celsius)}
          />
        </div>
      );
    }
  }

  export default Calcolatore;