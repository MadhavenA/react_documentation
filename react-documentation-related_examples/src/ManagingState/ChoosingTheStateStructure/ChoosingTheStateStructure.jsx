import React from "react";

const changeTheSentance = [
  { title: 'grow', id: 0 },
  { title: 'upStar', id: 1 },
  { title: 'develop', id: 2 },
];

export default class ChoosingTheStateStructure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: changeTheSentance,
      selectedItem: null, 
    };
  }

  handleSelect = (item) => {
    this.setState({ selectedItem: item });
  }

  render() {
    const { items, selectedItem } = this.state;
    return (
      <>
        <h1>Choosing the State Structure</h1>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.title}{' '} 
              <button onClick={() => this.handleSelect(item)}>Choose</button>
            </li>
          ))}
        </ul>
        <p>You picked {selectedItem ? selectedItem.title : 'nothing yet'}.</p>

      </>
    );
  }
}
