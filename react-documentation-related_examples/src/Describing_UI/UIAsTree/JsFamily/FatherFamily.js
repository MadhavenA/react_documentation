import {useState} from 'react';
import MotherFamily from './MotherFamily';
 export default function FatherFamily(){
   const [click, setClick] = useState(false);
    function handleSubmit(){
        setClick(true);
    }
    if(!click) {
        return(
            <>
                <h1>Father Family</h1>
                <button onClick={handleSubmit}>click</button>
            </>
        )
    }
    return(
        <>
            <MotherFamily/>
        </>
    );
}