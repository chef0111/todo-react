interface Todo {
  id: string
  text: string
  completed: boolean
}

export const saveTodos = (todos: Todo[]) => {
  try {
    localStorage.setItem('todos', JSON.stringify(todos))
  } catch (error) {
    console.error('Error saving todos to localStorage:', error)
  }
}

export const loadTodos = (): Todo[] => {
  try {
    const todos = localStorage.getItem('todos') || "[]"
    return JSON.parse(todos)
  } catch (error) {
    console.error('Error loading todos from localStorage:', error)
    return []
  }
}