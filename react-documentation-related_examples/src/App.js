import "./App.css";
import YourFirstComponentInJsx from "./Describing_UI/YourFirstComponent/YourFirstComponentInJsx";
import YourFirstComponentInJs from "./Describing_UI/YourFirstComponent/YourFirstComponentInJs";
import ImportingAndExportingComponents from "./Describing_UI/ImportAndExportTheComponents/ImportingAndExportingComponents";
import WritingMarkUpWithJsx from "./Describing_UI/WritingMarkUpWithJsx/WritingMarkUpWithJsx";
import JavaScriptinJsxWithCurlyBraces from "./Describing_UI/JavaScriptinJsxWithCurlyBraces/JavaScriptinJsxWithCurlyBraces";
import PassingPropsToAComponent from "./Describing_UI/PassingPropsToAComponent/PassingPropsToAComponent";
import ConditionalRendering from "./Describing_UI/ConditionalRendering/ConditionalRendering";
import RenderingList from "./Describing_UI/RenderingList/RenderingList";
import KeepingComponentsPure from "./Describing_UI/KeepingComponentsPure/KeepingComponentsPure";
import KeepingComponentsInPure from "./Describing_UI/KeepingComponentsPure/KeepingComponentsInPure";
import Father from "./Describing_UI/UIAsTree/Father";
import FatherFamily from "./Describing_UI/UIAsTree/JsFamily/FatherFamily";
import EventHandler from "./AddingInterActivity/RespondingToEvents/EventHandler";
import UseStateUsing from "./AddingInterActivity/StateAComponentMemory/UseStateUsing";
import RenderAndCommit from "./AddingInterActivity/RenderAndCommit/RenderAndCommit";
import StateAsASnapShort from "./AddingInterActivity/StateAsASnapShort/StateAsASnapShort";
import QueueingASeriesOfStateUpdates from "./AddingInterActivity/QueueingASeriesOfStateUpdates/QueueingASeriesOfStateUpdates";
import UpdateObjectInState from "./AddingInterActivity/UpdateObjectInState/UpdateObjectInState";

function App() {
  return (
    <>
      <div className="App">
        <UpdateObjectInState />
      </div>
    </>
  );
}

export default App;

////{ Topic Components Pure:
//    <KeepingComponentsInPure/>
//    <KeepingComponentsInPure/>
//    <KeepingComponentsInPure/>
//     <h1>Spiced Chai Recipe</h1>
//          <h2>For two</h2>
//          <KeepingComponentsInPure drinkers={2} />
//          <h2>For a gathering</h2>
//          <KeepingComponentsInPure drinkers={4} />
//    Topic ComponentsInPure:
//  let cups = [];
//        for (let i=1;i <= 12; i++){
//           cups.push(<KeepingComponentsInPure key={i} guest={i}/>);
//        }
//        return(
//        cups
//        );
//}
