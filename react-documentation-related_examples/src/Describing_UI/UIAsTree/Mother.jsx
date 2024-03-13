import React from 'react';
import Brother from './Brother';
import Sister from './Sister';

export default class Mother extends React.Component{
       constructor(props){
        super(props);
            this.state={
               brotherThought: 'He is Always love Me !',
               sisterThought:'He is Always Protect Me !'
            }
       }

    render(){
        return(
        <>
            <h1>Mother Component</h1>
            <Brother sisterThought={this.state.sisterThought}/>
            <Sister brotherThought={this.state.brotherThought}/>
         </>
        );
    }
}