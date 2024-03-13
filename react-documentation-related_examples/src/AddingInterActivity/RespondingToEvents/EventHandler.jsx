import React from 'react';

export default class EventHandler extends React.Component{
        constructor(props){
            super(props);
                this.state={
                    isLogIn: false,
                    isLogInPage: false
                }
        }
        handelClick =() =>{
        this.setState({isLogIn : true});
         alert('Arrow Function Clicked');
        }
         submission =()=>{
        this.setState({isLogInPage : true});
        alert('Propagation...Loading...!')
        }
    render(){
        return(
        <>
                <h1>Event Handler Types</h1>
                <button onClick={this.handelClick}>Arrow Function</button><br/><br/>
                <button onClick={()=> {alert('FrequentFunction')}}>Frequent Function</button><br/><br/>
                <div onClick={()=>{alert('Clicked the Propagation Function')}}>
                <button onClick={this.submission}>Propagation Function</button>
                </div>
         </>
        );
    }
}