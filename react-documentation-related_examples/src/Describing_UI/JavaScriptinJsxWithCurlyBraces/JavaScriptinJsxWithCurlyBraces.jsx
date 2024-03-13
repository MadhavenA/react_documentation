import React from 'react';

    class JavaScriptinJsxWithCurlyBraces extends React.Component{
        render(){
        let topic = "The JavaScript In Jsx With CurlyBraces";
        const person ={name:"madhaven", theme :{backgroundColor :'yellow', color : 'blue'}}
          return(
          <>
          <h1> Welcome To {topic} Topic</h1>
          <h2> Welcome To The JavaScript In Jsx With CurlyBraces Topic</h2>
        {/*           <div clasName="avathar" > */}
            <div style={person.theme}>
          <h3>{person.name}</h3>
          </div>
          </>
          )
        }
    }

    export default JavaScriptinJsxWithCurlyBraces;