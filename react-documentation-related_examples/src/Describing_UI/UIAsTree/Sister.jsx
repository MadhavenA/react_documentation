import React from 'react';

export default class Sister extends React.Component{

    render(){
        return(
            <>
                <h1>Sister Component</h1>
                <h2>Brother Thought : {this.props.brotherThought}</h2>
            </>
        );
    }
}