import BrotherFamily from './BrotherFamily';
import SisterFamily from './SisterFamily';

export default function MotherFamily(){

const brotherThought = "She Always Love Me !";
const sisterThought = "He Always Protect Me !";

    return(
    <>
          <h1>Mother Family</h1>
          <BrotherFamily brother={sisterThought}/>
          <SisterFamily sister={brotherThought}/>
          </>
    );
}