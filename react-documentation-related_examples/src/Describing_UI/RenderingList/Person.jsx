import React from 'react';

export default class Person extends React.Component{

    render(){

    const arrayDetails =[{
        id: 1,
        name: 'lenin'
    },{
          id: 2,
          name: 'lenin1'
    },{
                id: 3,
                name: 'lenin2'
    },{
          id: 4,
          name: 'lenin3'
    },{
          id: 5,
          name: 'lenin3'
    },{
          id: 6,
          name: 'lenin3'
    },{
          id: 7,
          name: 'lenin3'
    }]

    const filteredValues = arrayDetails.filter(fit => fit.name === 'lenin');
    console.log(filteredValues)
        return(
            <>
                <h1>number of person</h1>
                <h1>{filteredValues}</h1>
            </>
        );
    }
}