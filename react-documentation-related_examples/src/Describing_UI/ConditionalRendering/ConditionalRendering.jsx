import React from "react";
import ChildClass from "./ChildClass";

export default class ConditionalRendering extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogIn: false,
    };
  }


  render() {
    return (
      <>
        {!this.state.isLogIn && (
          <div>
            <p>This Condition is Render in false</p>
            <button onClick={this.handleClick}>Click</button>
          </div>
        )}
        {this.state.isLogIn && <ChildClass />}
      </>
    );
  }
}

//   <>
//          {!this.state.isLogIn ?(
//          <div>
//                  <p>This Condition is Render in  false</p>
//                  <button onClick={this.handleClick}>Click</button>
//                </div>
//
//          ):(
//             <ChildClass/>
//          )}
//       </>


//   if(!this.state.isLogIn ){
//       return(
//       <div>
//         <p>This Condition is Render in  false</p>
//         <button onClick={this.handleClick}>Click</button>
//       </div>
//       )
//      }else{
//         return(
//             <ChildClass/>
//         );
//      }
