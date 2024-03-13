import React from 'react';

export default class KeepingComponentsPure extends React.Component{

    render(){
    const drinkers = 2;
        return(
        <>
         <p>Boil {drinkers} cups of water.</p>
               <p>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</p>
               <p>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</p>
          </>
        );
    }
}