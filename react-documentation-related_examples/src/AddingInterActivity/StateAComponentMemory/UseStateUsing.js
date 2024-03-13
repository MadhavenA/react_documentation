import {useState} from 'react';

  export default function UseState(){
    const [count , setCount] = useState(0);
    function countNumber(){
        setCount(count + 1);
    }
        function subCount(){
            setCount(count -1);
        }
    function totalCount(){
       if(count >= 10){
          alert("The Count Will be Filled by 10");
       }else{
         setCount(null);
      }
    }
    return(
      <>
         <h1>USING USE STATE AND HOW ITs WORK </h1>
          <p>Count :{count}</p>
         <button onClick={countNumber}>Click</button><br/><br/>
         <button onClick={subCount}>Subract</button><br/><br/>
         <button onClick={totalCount}>Total Count</button>
     </>
    );
  }