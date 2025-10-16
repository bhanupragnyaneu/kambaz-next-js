import Add from "./Add";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import BooleanVariables from "./BooleanVariables";
import Classes from "./Classes";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import Destructing from "./Destructing";
import DestructingImports from "./DestructingImports";
import FilterFunction from "./FilterFunction";
import FindIndex from "./FindIndex";
import ForLoops from "./ForLoops";
import FunctionDestructing from "./FunctionDestructing";
import House from "./House";
import IfElse from "./IfElse";
import ImpliedReturn from "./ImpliedReturn";
import JSONStringify from "./JSONStringify";
import LegacyFunctions from "./LegacyFunctions";
import MapFunction from "./MapFunction";
import SimpleArrays from "./SimpleArrays";
import Spreading from "./Spreader";
import Square from "./Square";
import Styles from "./Styles";
import TemplateLiteral from "./TemplateLiteral";
import TernaryOperator from "./TernaryOperator";
import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import Highlight from './Highlight';
import PathParameters from "./PathParameters";
import TodoList from "./todos/TodoList";
import ConditionalOutputInline from "./ConditionalOutputInline";
import ArrowFunctions from "./ArrowFunctions";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import FindFunction from "./FindFunction";

export default function Lab3() {
  console.log('Hello World!');
  return(
    <div id="wd-lab3">
      <h3>Lab 3</h3>
      <VariablesAndConstants/>
      <VariableTypes/>
      <BooleanVariables/>
      <IfElse/>
      <TernaryOperator/>
      <ConditionalOutputIfElse/>
      <ConditionalOutputInline/>
      <LegacyFunctions/>
      <ArrowFunctions/>
      <ImpliedReturn/>
      <TemplateLiteral/>
      <SimpleArrays/>
      <ArrayIndexAndLength/>
      <AddingAndRemovingToFromArrays/>
      <ForLoops/>
      <MapFunction/>
      <FindFunction/>
      <FindIndex/>
      <FilterFunction/>
      <JSONStringify/>
      <House/>
      <Spreading/>
      <Destructing/>
      <FunctionDestructing/>
      <DestructingImports/>
      <Classes/>
      <Styles/>
      <Add a={3} b={4} />
      <h4>Square of 4</h4>
      <Square>4</Square><br/>
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
     </Highlight>
      <hr />
      <PathParameters/>
      <TodoList/>

    </div>
  );
}
