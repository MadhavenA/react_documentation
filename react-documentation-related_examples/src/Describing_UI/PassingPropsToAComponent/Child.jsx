import React from 'react';


export default class Child extends React.Component{
    render(){
        return(
            <h1>{this.props.name} && {this.props.address}</h1>
         );
    }
}