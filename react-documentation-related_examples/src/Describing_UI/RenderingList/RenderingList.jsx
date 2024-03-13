import React from 'react';

const Item = ({ name, id }) => {
  return (
    <div key={id}>
      <p>{name}</p>
    </div>
  );
};

const RenderingList = () => {
  const items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'orange' },
    { id: 3, name: 'pineApple' },
  ];

  return (
    <div>
      <h1>List of Items</h1>
            {items.map(item => (
        <Item key={item.id} id={item.id} name={item.name} />
      ))}
    </div>
  );
};

export default RenderingList;



    // export default class RenderingList extends React.Component{
    //      constructor(props){
    //         super(props);
    //         this.state ={
    //             listOfFruits :["Apple","mango","pineApple"]
    //         }
    //      }
    //
    //     render(){
    //         return(
    //             <>
    //                 {this.state.listOfFruits.map(value =>
    //                     value === 'Apple' ? <h1>{value}  </h1> : <h1>{null}</h1>
    //                 )}
    //             </>
    //         );
    //     }
    // }