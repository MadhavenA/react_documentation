import React,{useState} from 'react';

//export default function QueueingASeriesOfStateUpdates (){
//const [number,setNumber ]=useState(false);
//        return(
//        <>
//            <h1>Welcome To The Page Of Queueing A Series Of State Updates</h1>
//            <h1>{number}</h1>
//            <button onClick ={() => {
//            setNumber(number+1);
//            setNumber(number+1);
//            setNumber(number+1);
//            }}>OnClick</button>
//            </>
//        );
//}

//{Updater function}
    export default function QueueingASeriesOfStateUpdates(){
        const [numbers, setNumbers]=useState(false);
        return(
          <>
                    <h1>Welcome To The Page Of Queueing A Series Of State Updates</h1>
                    <h1>{numbers}</h1>
                    <button onClick ={() => {
                    setNumbers(numbers => numbers+1);
                    setNumbers(numbers => numbers+1);
                    setNumbers(numbers => numbers+1);
                    }}>OnClick</button>
                    </>
        );
    }