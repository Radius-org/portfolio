const commands = [
  "help",
  "about",
  "projects",
  "skills",
  "experience",
  "contact",
  "education",
  "sudo",
  "clear",
  "theme",
]

export function TerminalHeader() {
  return (
    <div className="bg-green-500/10 border-b border-green-500/30 p-3">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="text-green-400 text-xs md:text-sm font-mono">
            <span className="hidden md:inline">Available commands: </span>
            <span className="md:hidden">Commands: </span>
            {commands.slice(0, 6).join(" | ")}
            <span className="hidden md:inline"> | {commands.slice(6).join(" | ")}</span>
          </div>
          <div className="text-green-400 text-xs font-mono">{new Date().toLocaleTimeString()}</div>
        </div>
        <div className="md:hidden text-green-400 text-xs font-mono">{commands.slice(6).join(" | ")}</div>
      </div>
    </div>
  )
}
