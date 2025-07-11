import { useMemo, useState } from "react"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/Header"
import { TodoItem } from "@/components/TodoItem"
import { Footer } from "@/components/Footer"
import { CheckCircle } from "lucide-react"
import { saveTodos, loadTodos } from "@/hooks/useLocalStorage"

interface Todo {
  id: string,
  text: string,
  completed: boolean
}

type Filter = "all" | "active" | "completed"

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>(() => loadTodos())
  const [filter, setFilter] = useState<Filter>("all")

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    }
    const updatedTodos = [...todos, newTodo]
    setTodos(updatedTodos)
    saveTodos(updatedTodos)
  }

  const toggleTodo = (id: string) => {
    const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    setTodos(updatedTodos)
    saveTodos(updatedTodos)
  }

  const editTodo = (id: string, newText: string) => {
    const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    setTodos(updatedTodos)
    saveTodos(updatedTodos)
  }

  const deleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
    saveTodos(updatedTodos)
  }

  const clearCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed)
    setTodos(updatedTodos)
    saveTodos(updatedTodos)
  }

  const handleFilterChange = (newFilter: Filter) => {
    setFilter(newFilter)
  }

  const filteredTodos = useMemo(() => {
    console.log("render");
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.completed)
      case "completed":
        return todos.filter((todo) => todo.completed)
      default:
        return todos
    }
  }, [todos, filter])

  const activeCount = todos.filter((todo) => !todo.completed).length
  const showNoTasksMessage = (todos.length === 0)

  return (
    <Card className="bg-primary border-accent border-3 w-[80vw] md:w-[60vw] lg:w-[40vw] rounded-xl relative m-0 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full px-4">
        <Header onAddTodo={addTodo} filter={filter} onFilterChange={handleFilterChange} />

        {showNoTasksMessage ? (
          <div className="flex flex-col justify-center items-center mt-5 mb-4">
            <CheckCircle className="w-25 h-auto stroke-accent fill-none" />
            <p className="text-sub-text mt-2 mb-0 text-xl">No tasks yet</p>
            <p className="text-sub-text mt-2 mb-0 text-md">Add a new task to get started</p>
          </div>
        ) : (
          <ul className="list-none p-0 m-0 mb-[2vh] w-full flex flex-col items-center">
            {filteredTodos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onEdit={editTodo} onDelete={deleteTodo} />
            ))}
          </ul>
        )}

        <Footer activeCount={activeCount} onClearCompleted={clearCompleted} />
      </div>
    </Card>
  )
}

export default TodoApp;