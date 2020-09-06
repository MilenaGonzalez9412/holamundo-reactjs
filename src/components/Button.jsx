import React from "react";

//STATEFUL
//El estado es un objeto al que se le pueden definir variables: string, num, bool, funciones. Se pueden usarlos dentro del componenten
//desde el momento en el que se inicializa y permite tener elementos que vamos a usar.

class Button extends React.Component {
  state = {
    count: 0,
  };

  //Acá se agregará un elemento que va a actualizar el estado
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Manzanas: {count}</h1>
        <button type="button" onClick={this.handleClick}>
          Agregar
        </button>
      </div>
    );
  }
}

//STATELESS
// const Button = (props) => {
//   const { text } = props;
//   return (
//     <div>
//       <button type="button">{text}</button>
//     </div>
//   );
// };

export default Button;
