import TodoApp from "./components/TodoApp"

const App = () => {
  return (
    <div className="bg-background text-white min-h-screen flex flex-col justify-start items-center">
      <h1 className="font-sans text-[2.5rem] md:text-[4rem] font-bold text-white mt-10 mb-4">KampfPortal</h1>
      <TodoApp />
    </div>
  )
}

export default App;