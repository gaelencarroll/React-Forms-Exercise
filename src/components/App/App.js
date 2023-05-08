import './App.css';
import BoxList from '../ColorBoxMaker/components/BoxList/BoxList';
import ToDoListComponent from '../ToDoList/components/ToDoListComponent/ToDoListComponent';

function App() {
  return (
    <div className="App">
      <BoxList/>
      <ToDoListComponent></ToDoListComponent>
    </div>
  );
}

export default App;
