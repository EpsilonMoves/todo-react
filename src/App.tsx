import { Header } from "./components/Header";
import useTodos from "./hooks/useTodos";
import { TodoPage } from "./Pages/TodoPage";
import './App.css'

function App() {

  const { todos, addTodo, removeTodo, updateTodo, searchTodo } = useTodos();

  return (
    <div className="app-container">
      <Header searchTodo={searchTodo} />
      <TodoPage
        todos={todos} addTodo={addTodo} removeTodo={removeTodo} updateTodo={updateTodo}
      />
    </div>
  );
}

export default App;
