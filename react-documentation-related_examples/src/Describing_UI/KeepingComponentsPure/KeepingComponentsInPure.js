
//    function KeepingComponentsInPure({ drinkers }) {
//      return (
//        <div>
//          <p>Boil {drinkers} cups of water.</p>
//          <p>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</p>
//          <p>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</p>
//        </div>
//      );
//    }
    let persons = 0;
        function KeepingComponentsInPure(){
            persons = persons +1 ;
            return (
             <h1>Iam Ate For a Day #{persons}</h1>
            );
        }

//    function KeepingComponentsInPure({guest}){
//      return(
//      <h2>Tea cup for guest #{guest}</h2>
//      );
//    }
export default KeepingComponentsInPure;