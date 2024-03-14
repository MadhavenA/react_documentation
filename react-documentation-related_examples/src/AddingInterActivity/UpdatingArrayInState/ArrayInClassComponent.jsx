import React from "react";

export default class ArrayInClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruit: "",
      listOfFruits: [],
    };
  }

  handleFruitChange = (e) => {
    this.setState({ fruit: e.target.value });
  };

  handleAddFruit = () => {
    const { fruit, listOfFruits } = this.state;
    const newFruit = {
      name: fruit,
    };
    this.setState({
      fruit: "",
      listOfFruits: [...listOfFruits, newFruit],
    });
  };
  render() {
    return (
      <>
        <h1>Fruit Shop</h1>
        <input
          type="text"
          value={this.state.fruit}
          onChange={this.handleFruitChange}
        />
        <br />
        <br />
        <button onClick={this.handleAddFruit}>Save</button>
        {this.state.listOfFruits.map((id, fruit) => (
          <div>
            <p>{fruit + 1}</p>
            <p>{id.name}</p>
          </div>
        ))}
      </>
    );
  }
}
