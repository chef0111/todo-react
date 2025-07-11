import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { FaTrash } from "react-icons/fa6"
import { FaEdit } from "react-icons/fa"

interface Todo {
  id: string
  text: string
  completed: boolean
}

interface TodoItemProps {
  todo: Todo
  onToggle: (id: string) => void
  onEdit: (id: string, newText: string) => void
  onDelete: (id: string) => void
}

export function TodoItem({ todo, onToggle, onEdit, onDelete }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)

  const handleEdit = () => {
    if (isEditing && editText.trim() !== todo.text) {
      onEdit(todo.id, editText.trim())
    }
    setIsEditing(!isEditing)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleEdit()
    }
    if (e.key === "Escape") {
      setEditText(todo.text)
      setIsEditing(false)
    }
  }

  return (
    <li className="px-2 mx-4 flex justify-center items-center w-full border-b border-accent border-solid transition-all duration-300 ease-in-out text-wrap">
      <Checkbox
        id={`todo-${todo.id}`}
        checked={todo.completed}
        onCheckedChange={() => onToggle(todo.id)}
        className={`w-5 h-5 rounded-full mr-2 transition-all duration-150 ease-in-out ${
          todo.completed
            ? "border-white bg-white text-secondary data-[state=checked]:bg-white data-[state=checked]:text-secondary"
            : "border-secondary bg-secondary data-[state=unchecked]:bg-secondary"
        }`}
      />

      {isEditing ? (
        <Input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={handleKeyPress}
          onBlur={handleEdit}
          className="bg-transparent border-none py-8 px-2 m-0 flex-grow text-inherit outline-none focus:outline-none text-wrap"
          autoFocus
        />
      ) : (
        <label
          htmlFor={`todo-${todo.id}`}
          className={`py-5 px-2 flex-grow cursor-pointer break-words min-w-0 ${
            todo.completed ? "line-through text-sub-text" : "text-white"
          } transition-all duration-150 ease-in-out`}
        >
          {todo.text}
        </label>
      )}

      <Button
        onClick={handleEdit}
        className="bg-transparent border-none flex justify-center items-center cursor-pointer text-accent hover:text-blue-accent hover:scale-110 transition-all duration-300 ease-in-out"
      >
        <FaEdit
          className={`bg-transparent w-5 h-5 transition-all duration-300 ease-in-out ${
        isEditing ? "text-blue-accent" : ""
          }`}
        />
      </Button>

      <Button
        onClick={() => onDelete(todo.id)}
        className="bg-transparent border-none flex justify-center items-center cursor-pointer text-accent hover:text-red-accent hover:scale-110 transition-all duration-300 ease-in-out"
      >
        <FaTrash className="bg-transparent w-5 h-5" />
      </Button>
    </li>
  )
}
