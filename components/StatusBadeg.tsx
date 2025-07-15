import { statusConfig } from "../config/portfolio-config"

interface StatusBadgeProps {
  status: keyof typeof statusConfig
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status]

  return (
    <div className="flex items-center gap-2">
      <div className={`w-3 h-3 rounded-full ${config.color} ${config.pulse ? "animate-pulse" : ""}`} />
      <span className="text-xs text-green-400 font-mono">{config.label}</span>
    </div>
  )
}
