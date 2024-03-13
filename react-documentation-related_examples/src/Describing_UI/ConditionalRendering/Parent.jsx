import React from 'react';
import ChildClass from './ChildClass';

export default class Parent extends React.Component{
      constructor(props){
        super(props);
        this.state ={
        isLogIn : false
        }
      }
          handleClick =(e) =>{
            e.preventDefault();
                this.setState({isLogIn : true})
               }

    render (){
        if(this.state.isLogIn){
            return(
             <ChildClass/>
            )
        }else{
        return(
        <>
        <h1>Parent Class</h1>
        <button onClick={this.handleClick}>Click</button>
        </>
        );
        }
    }

}