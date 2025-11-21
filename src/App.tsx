
import './App.css'
import TodosList from './components/TodosList'
import { TodosProvider } from './context/TodosContext'
import { FilterProvider } from './context/FilterContext'
import { FilterButtons } from './components/FilterButtons'

function App() {

  return (
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "16px" }}>
      <h1>Todo App with Filters</h1>
      <FilterButtons />
      <TodosList />
    </div>
  )
}

export default App
