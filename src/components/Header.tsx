import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { FaPlus } from "react-icons/fa6"

interface HeaderProps {
  onAddTodo: (text: string) => void
  filter: "all" | "active" | "completed"
  onFilterChange: (filter: "all" | "active" | "completed") => void
}

interface FilterOption {
  key: "all" | "active" | "completed"
  label: string
}

const filterOptions: FilterOption[] = [
  { key: "all", label: "All" },
  { key: "active", label: "Active" },
  { key: "completed", label: "Completed" },
]

export function Header({ onAddTodo, filter, onFilterChange }: HeaderProps) {
  const [inputValue, setInputValue] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      onAddTodo(inputValue.trim())
      setInputValue("")
    }
  }

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center pb-4">
        <h1 className="text-white text-2xl md:text-3xl font-bold pb-4">Todo List</h1>
        <label className="mt-[-10px] text-sub-text">Keep track of your tasks</label>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center relative w-full">
        <div className="flex flex-row justify-between items-center w-full mx-8 mb-4">
          <Input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task..."
            required
            autoComplete="off"
            className="bg-secondary text-white flex-grow h-9 md:h-10 rounded-md border-none mr-2 transition-all duration-300 ease-in-out focus:outline-none focus:brightness-120 placeholder:text-sub-text"
          />
            <button
            type="submit"
            className="bg-white text-xl flex items-center justify-center min-w-9 h-9 rounded-sm border-none cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
            >
              <FaPlus className="text-black" />
            </button>
        </div>

        <div className="bg-secondary rounded-md py-[6px] px-0 flex flex-row w-full justify-evenly items-center shadow-[inset_0_0_6px_1px_rgba(0,0,0,0.5)]">
          {filterOptions.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              onClick={() => onFilterChange(key)}
              className={`bg-transparent text-xs md:text-lg w-[31%] h-7 md:h-8 rounded-sm border-none cursor-pointer transition-all duration-300 ease-in-out hover:scale-102 hover:brightness-110 ${
                filter === key
                  ? "text-black bg-white shadow-[0_0_6px_2px_rgba(0,0,0,0.3)]"
                  : "text-[#a6a6a6] hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </form>
    </div>
  )
}
