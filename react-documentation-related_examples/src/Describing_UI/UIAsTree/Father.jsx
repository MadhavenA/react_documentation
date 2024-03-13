import React from 'react';
import Mother from './Mother';

export default class Father extends React.Component{

    constructor(props){
        super(props);
        this.state={
            isLogIn : true
        }
    }

    handleOnClick = () => {
        console.log('working')
        this.setState({
            isLogIn : false
        })
   }

    render(){
        return (
        <>
        {this.state.isLogIn ?  (
        <div>
            <h1>Father Component</h1>
            <button onClick={this.handleOnClick}>Click</button>
            </div>
            ):(
            <Mother/>
            )}
            </>
        );
    }

}