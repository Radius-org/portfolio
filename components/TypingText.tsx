"use client"

import { useTypingEffect } from "@/hooks/useTypingEffect"
import { useEffect } from "react"

interface TypingTextProps {
  text: string
  speed?: number
  className?: string
  onComplete?: () => void
}

export function TypingText({ text, speed = 30, className = "", onComplete }: TypingTextProps) {
  const { displayText, isComplete } = useTypingEffect(text, speed)

  useEffect(() => {
    if (isComplete && onComplete) {
      onComplete()
    }
  }, [isComplete, onComplete])

  return (
    <span className={className}>
      {displayText}
      {!isComplete && <span className="animate-pulse text-green-400">|</span>}
    </span>
  )
}
