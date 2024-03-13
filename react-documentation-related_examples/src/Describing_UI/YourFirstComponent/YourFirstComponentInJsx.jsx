import React, {Component}from 'react';  // In this class Method i just want to import the React components in the jsx file to using react Components

    class YourFirstComponentInJsx extends Component{  // create a class and extend to the Components in the current class .
         // render is a procedure or method to redirect the page of ui => UserInterface
        render(){
            return(  // i want to return the what ever function iam Created .
            <div>
               <h1>Welcome To Your First Component </h1>
                <p>In this topic you just learn about, How to make the first components and how to describe the components as jsx file. </p>
            </div>
            ); // close The Function in the class .
        } // close the render method .
   } // close the class .
export default YourFirstComponentInJsx; // and this statement is am exporting  the component to the other files with the help of export default content .