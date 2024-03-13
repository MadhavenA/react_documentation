import React from 'react';
import Child from './Child';

class PassingPropsToAComponent extends React.Component{


    render(){
         const person = {name : 'madhaven',address : 'bangalore'};
         return(
                <>
                <h1>Passing Props To A  Component</h1>
                <Child name={person.name} address={person.address}/>
                </>
         )
    }
}

    export default PassingPropsToAComponent;