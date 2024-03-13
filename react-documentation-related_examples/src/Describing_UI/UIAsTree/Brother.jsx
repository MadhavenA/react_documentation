import React from 'react';

export default class Brother extends React.Component{

    render(){
        return(
        <>
            <h1>Brother Component</h1>
            <h2>Sister thought : {this.props.sisterThought}</h2>
        </>
        );
    }
}