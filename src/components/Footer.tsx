import { Button } from "@/components/ui/button"

interface FooterProps {
  activeCount: number,
  onClearCompleted: () => void
}

export function Footer({ activeCount, onClearCompleted }: FooterProps) {
  return (
    <div className="flex flex-row w-full justify-between items-center text-sub-text">
      <label className="flex-grow">
        {activeCount} item{activeCount !== 1 ? "s" : ""} left
      </label>
      <Button
        onClick={onClearCompleted}
        className="bg-transparent border-none m-0 cursor-pointer transition-all duration-300 ease-in-out hover:text-white"
      >
        {"Clear Completed"}
      </Button>
    </div>
  )
}
