import AddTODO from "./components/AddTODO";
import AppName from "./components/AppName";
import Todoitem1 from "./components/Todoitem1";
import Todoitem2 from "./components/todoitem2";
import "./App.css";
function App() {
  return <center class="todo-container">
      <AppName></AppName>
      <AddTODO></AddTODO>
      <div className="items-container">
      <Todoitem1></Todoitem1>
      <Todoitem2></Todoitem2>
      </div>
      
    </center>
}
export default App;
